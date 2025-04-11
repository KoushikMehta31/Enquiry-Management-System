# Enquiry Management System

## Overview

The **Enquiry Management System** is a full-stack MERN application that allows users to manage customer enquiries. It provides CRUD operations for adding, viewing, updating, and deleting enquiries, with data stored in MongoDB. The system uses a responsive React UI and communicates with the backend via custom RESTful APIs built with Node.js and Express.

---

### Key Features:

- **Full-Stack MERN Application**: MongoDB, Express.js, React, Node.js.
- **MongoDB**: Data stored in a local MongoDB database.
- **RESTful API**: Custom routes built with Node.js and Express.
- **Real-Time Feedback**: Notifications using **Toastify** and **SweetAlert** for better user interaction.
- **Responsive UI**: Built with React and Flowbite for an adaptive design.

---

## Features:

- **Add Enquiries**: Users can submit new enquiries with basic information.
- **View Enquiries**: Displays a list of all submitted enquiries.
- **Update Enquiries**: Admins can edit existing enquiries.
- **Delete Enquiries**: Admins can remove enquiries from the database.
- **User Feedback**: Real-time notifications for success or failure.

---

## Tech Stack:

- **Frontend**:
  - React.js
  - Flowbite (UI components)
  - Toastify (Notifications)
  - SweetAlert (Alert Boxes)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (Local Database)
  - Mongoose (MongoDB ORM)
  - RESTful APIs

- **Libraries/Packages**:
  - Axios (for HTTP requests)
  - dotenv (environment variables)

---

## Screenshots

Here are some screenshots showing different parts of the application:

1. **Add Enquiry Form**:
   - Screenshot of the form used to add new enquiries.
   ![Add Enquiry Form](./assets/screenshots/add-enquiry-form.png)

2. **Enquiry List**:
   - Screenshot showing all enquiries listed in the application.
   ![Enquiry List](./assets/screenshots/enquiry-list.png)

3. **Edit Enquiry**:
   - Screenshot showing the "Edit Enquiry" form where you can modify existing enquiries.
   ![Edit Enquiry](./assets/screenshots/edit-enquiry.png)

4. **Delete Confirmation**:
   - Screenshot showing the confirmation dialog when you delete an enquiry.
   ![Delete Confirmation](./assets/screenshots/delete-confirmation.png)

5. **MongoDB Data**:
   - Screenshot of the data stored in MongoDB.
   ![MongoDB Data](./assets/screenshots/mongodb-data.png)

---

## Usage

### Adding an Enquiry
Click the **"Add Enquiry"** button, fill out the form, and submit the enquiry.

### Viewing Enquiries
View a list of all enquiries, with options to edit or delete each one.

### Editing an Enquiry
Click the **"Edit"** button next to any enquiry to modify its details.

### Deleting an Enquiry
Click the **"Delete"** button next to an enquiry to remove it from the database.

### Data in MongoDB
The data for the enquiries is stored in MongoDB, and can be viewed directly in the database.

---

## Future Enhancements:

- Implement **user authentication** for admin roles.
- **Email notifications** to notify users about the status of their enquiry.
- Add **advanced search and filter** options for enquiries.

---

## Contributing

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

