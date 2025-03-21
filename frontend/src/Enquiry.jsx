import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { ToastContainer, toast } from 'react-toastify';
import EnquiryList  from './enquiry/EnquiryList';
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default function Enquiry() {
  const [enquiryList, setEnquiryList] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    _id: ''
  });

  // Handle user input
  // const getValue = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  // Save Enquiry
  let saveEnquiry = (e) => {
    e.preventDefault()

    if(formData._id){
      axios.put(`http://localhost:8000/api/website/enquiry/update/${formData._id}`, formData)
      .then((res)=>{
        toast.success('Enquiry Updated Successfully')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          _id: ''
        })
        getAllEnquiry()
      })
    }
    else {
      axios.post(`http://localhost:8000/api/website/enquiry/insert`, formData)
      .then((res) => {
        console.log(res.data)
        toast.success('Enquiry Saved Successfully')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        })
        getAllEnquiry()
      })
    }
    }

    

  // Fetch all enquiries
  let getAllEnquiry = () => {
    axios.get(`http://localhost:8000/api/website/enquiry/view`)
      .then((res) => {
        return res.data
      })
      .then((finalData) => {
        if(finalData.status){
          setEnquiryList(finalData.enquiryList)
        }
      })
    }

    let getValue = (e) => {
      let inputName = e.target.name
      let inputValue = e.target.value
      let oldData = {...formData}
      oldData[inputName]=inputValue;
      setFormData(oldData)
    }
  useEffect(() => {
    getAllEnquiry()
  }, [])

  return (
    <div>
      <ToastContainer />
      <h1 className='text-[40px] text-center py-6 font-bold'>User Enquiry</h1>

      <div className='grid grid-cols-[30%_auto] gap-10'>
        <div className='bg-gray-200 p-4'>
          <h2 className='text-[20px] font-bold'>Enquiry Form</h2>
          <form onSubmit={saveEnquiry}>

            <div className="py-3">
              <Label htmlFor="name" value="Your name" />
              <TextInput id="name" name="name" type="text" value={formData.name} onChange={getValue} placeholder="Enter your name" required />
            </div>

            <div className="py-3">
              <Label htmlFor="email" value="Your email" />
              <TextInput id="email" name="email" type="email" value={formData.email} onChange={getValue} placeholder="Enter your Email" required />
            </div>

            <div className="py-3">
              <Label htmlFor="phone" value="Your phone" />
              <TextInput id="phone" name="phone" type="text" value={formData.phone} onChange={getValue} placeholder="Enter your phone number" required />
            </div>

            <div className="py-3">
              <Label htmlFor="message" value="Enter Your Message" />
              <Textarea id="message" name="message" value={formData.message} onChange={getValue} placeholder="Message.." required rows={4}></Textarea>
            </div>

            <div className="py-3">
              <Button type="submit" className='w-[100%]'>{formData._id? 'Update': 'Save'}</Button>
            </div>
          </form>
        </div>

        <EnquiryList data={enquiryList} getAllEnquiry={getAllEnquiry} Swal={Swal} setFormData={setFormData}/>

      </div>
    </div>
  )
}

// export default Enquiry;

