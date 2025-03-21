import React from 'react'
import { Table } from "flowbite-react";
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
export default function EnquiryList({data, getAllEnquiry, Swal, setFormData}) {

let deleteRow=(delid)=>{

  Swal.fire({
    title: "Do you want to delete the data?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",

  }).then((result)=> {
    if(result.isConfirmed){

    axios.delete(`http://localhost:8000/api/website/enquiry/delete/${delid}`)
    .then((res)=> {
    toast.success('Enquiry Deleted Successfully')
    getAllEnquiry()
    
  })
  

} else if(result.isDenied){
  Swal.fire("Changes are not saved", "", "info");
}
  });
}

let editRow=(editid)=>{
  axios.get(`http://localhost:8000/api/website/enquiry/single/${editid}`)
  .then((res)=>{
    let data = res.data
    setFormData(data.enquiry)
  })
}
  return(
    <div className='bg-gray-200 p-4'>
      {/* <ToastContainer/> */}
  <h2 className='text-[20px] font-bold mb-4'>Enquiry List</h2>
  <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>S.No</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Phone</Table.HeadCell>
          <Table.HeadCell>Message</Table.HeadCell>
          <Table.HeadCell>
            Delete
          </Table.HeadCell>
          <Table.HeadCell>
           Edit
          </Table.HeadCell>
        </Table.Head>

        <Table.Body className='divide-y'>
          {
            data.length>=1 ?
            data.map((item,index)=>{
              return(
                <tr key={index} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>{index+1}</Table.Cell>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.email}</Table.Cell>
                  <Table.Cell>{item.phone}</Table.Cell>
                  <Table.Cell>{item.message}</Table.Cell>
                  <Table.Cell>
                    <button onClick={()=> deleteRow(item._id)} className='bg-red-500 text-white px-4 py-2 rounded-md'>Delete</button>
                  </Table.Cell>
                  <Table.Cell>
                    <button onClick={()=> editRow(item._id)} className='bg-blue-500 text-white px-4 py-2 rounded-md'>Edit</button>
                  </Table.Cell>
                </tr>
              
              )
            })
            :
            <Table.Row className='bg-white dark:border-grey-700 dark:bg-grey-800'>
              <Table.Cell colSpan={7} className='text-center'>No Data Found</Table.Cell>
            </Table.Row>
          }
        </Table.Body>



        {/* <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              1
            </Table.Cell>
            <Table.Cell>Koushik</Table.Cell>
            <Table.Cell>koushikmehta@gmail</Table.Cell>
            <Table.Cell>12346755</Table.Cell>
            <Table.Cell>Hello</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Delete
              </a>
            </Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          
        </Table.Body> */}
      </Table>
    </div>
  </div>
  )
}

// export default EnquiryList;



