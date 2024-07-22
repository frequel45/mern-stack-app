# MERN Stack E-Commerce Application

This project is an e-commerce web application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). It features a homepage, product display page, and shopping cart functionality.

## Features

- Homepage with banner and product listings
- Product detail page
- Shopping cart functionality
- Responsive design

## Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running

## Project Structure

- `backend/`: Backend server with Express.js and MongoDB
- `frontend/`: Frontend application with React.js

## Setup Instructions

### Backend

1. Navigate to the `backend` directory:

   ```sh
   cd backend


---

# API Documentation

## Overview
This document provides detailed information on the API endpoints for the MERN stack e-commerce web application. The backend is built using Node.js and Express.js, with MongoDB as the database. The APIs are designed to manage data and handle interactions for the homepage, product display, and shopping cart functionalities.

### Base URL
```
http://localhost:5000/api
```

## Homepage API

### Fetch Homepage Content
- **Endpoint:** `/api/homepage`
- **Method:** GET
- **Description:** Fetches the content for the homepage, including a banner and a list of some products.
- **Response Example:**
  ```json
  {
    "banner": {
      "imageUrl": "http://example.com/banner.jpg",
      "link": "http://example.com/special-offer"
    },
    "products": [
      {
        "id": "product1",
        "name": "Product 1",
        "description": "Description of Product 1",
        "price": 100,
        "imageUrl": "http://example.com/product1.jpg"
      },
      {
        "id": "product2",
        "name": "Product 2",
        "description": "Description of Product 2",
        "price": 150,
        "imageUrl": "http://example.com/product2.jpg"
      }
      // Add more products as needed
    ]
  }
  ```

## Product Display API

### Get Product Details
- **Endpoint:** `/api/products/:id`
- **Method:** GET
- **Description:** Fetches details of a specific product using the product ID.
- **URL Parameters:**
  - `id`: The ID of the product to retrieve details for.
- **Response Example:**
  ```json
  {
    "id": "product1",
    "name": "Product 1",
    "description": "Detailed description of Product 1",
    "price": 100,
    "imageUrl": "http://example.com/product1.jpg",
    "additionalDetails": "Any other details about the product"
  }
  ```

## Cart API

### Add to Cart
- **Endpoint:** `/api/cart`
- **Method:** POST
- **Description:** Adds a product to the cart. Requires product ID and quantity.
- **Request Body Example:**
  ```json
  {
    "productId": "product1",
    "quantity": 2
  }
  ```
- **Response Example:**
  ```json
  {
    "message": "Product added to cart successfully",
    "cart": {
      "items": [
        {
          "productId": "product1",
          "quantity": 2,
          "price": 100
        }
      ],
      "totalItems": 2,
      "totalPrice": 200
    }
  }
  ```

### Remove from Cart
- **Endpoint:** `/api/cart/:productId`
- **Method:** DELETE
- **Description:** Removes a product from the cart using the product ID.
- **URL Parameters:**
  - `productId`: The ID of the product to remove from the cart.
- **Response Example:**
  ```json
  {
    "message": "Product removed from cart successfully",
    "cart": {
      "items": [],
      "totalItems": 0,
      "totalPrice": 0
    }
  }
  ```

### Update Cart
- **Endpoint:** `/api/cart/:productId`
- **Method:** PUT
- **Description:** Updates the quantity of a product in the cart using the product ID.
- **URL Parameters:**
  - `productId`: The ID of the product to update in the cart.
- **Request Body Example:**
  ```json
  {
    "quantity": 3
  }
  ```
- **Response Example:**
  ```json
  {
    "message": "Cart updated successfully",
    "cart": {
      "items": [
        {
          "productId": "product1",
          "quantity": 3,
          "price": 100
        }
      ],
      "totalItems": 3,
      "totalPrice": 300
    }
  }
  ```

### Get Cart
- **Endpoint:** `/api/cart`
- **Method:** GET
- **Description:** Fetches the current state of the cart, including total items and total price.
- **Response Example:**
  ```json
  {
    "items": [
      {
        "productId": "product1",
        "quantity": 3,
        "price": 100
      },
      {
        "productId": "product2",
        "quantity": 1,
        "price": 150
      }
    ],
    "totalItems": 4,
    "totalPrice": 450
  }
  ```

## Error Handling
All endpoints return appropriate HTTP status codes to indicate the success or failure of a request. Common status codes include:

- **200 OK:** The request was successful.
- **201 Created:** The resource was successfully created (for POST requests).
- **400 Bad Request:** The request was invalid or cannot be served. The exact error will be described in the response.
- **404 Not Found:** The requested resource could not be found.
- **500 Internal Server Error:** An error occurred on the server.

## Example Error Response
```json
{
  "error": "Product not found"
}
```

## Additional Notes
- Ensure proper error handling and input validation on both the backend and frontend.
- Secure sensitive data and endpoints as necessary, especially if implementing JWT authentication for the backend-focused path.

---

This detailed documentation should provide a clear understanding of the API endpoints and how to interact with them for your MERN stack e-commerce web application.
