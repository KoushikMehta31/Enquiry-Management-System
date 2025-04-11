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

1. **Homepage Preview**:
   - Screenshot showing the homepage of the Enquiry Management System.
   ![Homepage](/frontend/public/home.png)

2. **Add Enquiry Form**:
   - Screenshot showing the homepage of the Enquiry Management System.
   ![Add Enquiry Form](/frontend/public/form.png)

3. **Enquiry List**:
   - Screenshot showing all enquiries listed in the application.
   ![Enquiry List](/frontend/public/store.png)

4. **Edit Enquiry**:
    - Screenshot showing the "Edit Enquiry".
   ![Edit Enquiry](/frontend/public/edit.png)

5. **Delete Confirmation**:
   - Screenshot showing the confirmation dialog when you delete an enquiry.
   ![Delete Confirmation](/frontend/public/delete.png)

6. **MongoDB Data**:
   - Screenshot of the data stored in MongoDB.
   ![MongoDB Data](/frontend/public/mongodb.png)


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
