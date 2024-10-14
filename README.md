# Bookipedia

Bookipedia is an online bookstore web application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The app allows users to browse a wide range of books, view detailed information, and make purchases. With a user-friendly interface, Bookipedia offers features like user authentication, a personalized wishlist, and search functionality to enhance the shopping experience. The backend manages book data, user profiles, and transactions, while the frontend ensures a seamless user experience. This project highlights the integration of RESTful APIs, responsive design, and secure data management. Bookipedia aims to provide a comprehensive online book-buying platform for readers.

# Key  Features
User Authentication:
Secure user registration and login functionality using JWT (JSON Web Tokens).

Book Catalog:
Browse a wide range of books with categories, descriptions, and detailed information for each title.

Search and Filter:
Search for books by title, author, or genre, and filter the results based on categories or price.
Wishlist:
Users can add their favorite books to a personalized wishlist for future purchases.

Shopping Cart:
Seamless cart management where users can add, update, or remove books from their cart before checkout.

Responsive Design:
Fully responsive layout to provide a smooth experience across various devices, from desktop to mobile.

Backend APIs:
RESTful API integration for managing users, books, orders, and transactions.

MongoDB Database:
Robust and scalable database management using MongoDB for handling book and user data.

# Technology Stack

Frontend: Built with React and Material-UI, ensuring a sleek and responsive interface that delivers a user-friendly experience on all devices.

Backend: Powered by Node.js and Express.js, the backend handles property data, user accounts, and secure messaging efficiently.

Database: MongoDB stores property listings, user profiles, agent information, and saved searches, providing scalable and flexible data management.

Authentication: JWT (JSON Web Tokens) is used for secure user authentication, ensuring privacy and security for all user interactions and data.

# Use Cases

User Registration and Login

Actor: New user
Description: A new user registers by providing a valid email, username, and password. After registration, they can log in using their credentials.
Pre-condition: The user is not logged in.
Post-condition: The user is authenticated and can access their account, wishlist, and shopping cart.
Browse and Search for Books

Actor: User
Description: A user browses the catalog of available books or uses the search functionality to find a specific title or author.
Pre-condition: The user is logged in or a guest user.
Post-condition: The user sees a list of books matching their query or category selection.
View Book Details

Actor: User
Description: A user clicks on a book to view more detailed information, such as the author, price, description, and availability.
Pre-condition: The user is browsing the book catalog.
Post-condition: The user is shown detailed information about the selected book.
Add Book to Wishlist

Actor: Logged-in user
Description: A logged-in user adds a book to their wishlist for future reference or purchase.
Pre-condition: The user is logged in and viewing a book's details.
Post-condition: The book is added to the user's wishlist, which they can access later.
Add Book to Cart and Checkout

Actor: Logged-in user
Description: A user adds books to their shopping cart and proceeds to checkout, where they can complete the transaction.
Pre-condition: The user is logged in and has added one or more books to their cart.
Post-condition: The user completes the payment, and the system records the transaction.
Manage User Profile

Actor: Logged-in user
Description: A user can update their personal information, such as their name, email address, and password.
Pre-condition: The user is logged in and navigates to their profile settings.
Post-condition: The user updates and saves changes to their profile.
Admin Management of Books

Actor: Admin
Description: An admin user can add, edit, or remove books from the system’s database, managing the catalog of available books.
Pre-condition: The user has admin privileges and is logged in.
Post-condition: The admin successfully updates the book catalog.
Order History and Tracking

Actor: Logged-in user
Description: A user can view their previous orders and check the status of ongoing orders.
Pre-condition: The user has placed an order and is logged in.
Post-condition: The user sees a list of their past orders, including details such as date, amount, and status.

![Screenshot 2024-10-14 224935](https://github.com/user-attachments/assets/94a30b77-1fe7-4187-8089-88a58e464835)
