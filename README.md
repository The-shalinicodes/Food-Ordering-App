🍔 Food Ordering Application (React)

A full-featured food ordering web application built from scratch using React.js. This application allows users to explore restaurant menus, add items to their cart, and simulate placing orders in a smooth and interactive interface.

The project demonstrates real-time data fetching using Swiggy's public API, allowing the application to display live restaurant and menu data directly on the website.

🚀 Features

🍽 Browse restaurants and menus

🔍 Search for food items or restaurants

🛒 Add and remove items from the cart

📦 View selected items in cart

⚡ Real-time data fetching from API

📱 Responsive UI

🔄 Dynamic rendering using React components

🛠 Tech Stack

Frontend:

React.js

JavaScript (ES6+)

HTML5

CSS3

API:

Swiggy Public API (for demo purposes)

Tools:

Git & GitHub

VS Code

🧠 Key Concepts Implemented

React Functional Components

React Hooks (useState, useEffect)

API Fetching

Component-Based Architecture

State Management

Conditional Rendering

Dynamic UI Updates

Concept Note Making:
ARRAY DESTRUCTURING:

const arr=useState(resLsit);
const[listOfRestaurants,setListOfRestaurant]=arr;

const lisOfRestaurants=arr[0];
const setListOfRestaurants=arr[1];

OPTIONAL CHAINING-A good way of hadling the data
setListOfRestaurant(json?.data?.cards);

//Conditional Rendering=Rendering based on the condition
  if(){
    return ;
  }

if no dependency array-useEffect called on every render
useEffect(()=>
console.log("useEffect called"));

if there is an empty dependency array-useEffect called on only initial render(just once)
useEffect(()=>
console.log("useEffect called"),[]);

if we put something inside the dependency then it is only be called when the dependency changes.
example : btnNameReact is called everytime when btnNameReact is updated

Note: Hooks can only be called inside body or functional component.
Try to call hooks on top [it means when function starts]
Never use hooks inside the if ,else ,for loop , functions[it works but creates inconsistency]
useState used to create local state variables inside the functional components
The state variables are meant to create it inside the functional component on the higher level.


📂 Project Structure
food-ordering-app
│
├── src
│   ├── components
│   │   ├── Header.js
│   │   ├── RestaurantCard.js
│   │   ├── Menu.js
│   │   └── Cart.js
│   │
│   ├── utils
│   │   └── api.js
│   │
│   ├── App.js
│   └── index.js
│
├── public
└── README.md
🔌 API Integration

The application fetches live restaurant and menu data using the Swiggy API.

This allows:

Real restaurant listings

Actual menu items

Dynamic updates

⚠️ Note: The API is used only for learning and demonstration purposes.

💻 Installation & Setup

Clone the repository

git clone https://github.com/yourusername/food-ordering-app.git

Navigate to project folder

cd food-ordering-app

Install dependencies

npm install

Start the development server

npm start

The app will run on:

http://localhost:3000
📸 Demo

This project demonstrates how a real-world food delivery platform works, including:

Fetching live restaurant data

Displaying menus dynamically

Managing user cart interactions

🎯 Learning Outcomes

Through this project, I learned:

Building scalable React applications

Handling API calls and asynchronous data

Managing application state

Creating reusable components

Structuring real-world frontend projects

📌 Future Improvements

User authentication

Payment integration

Order history

Backend integration

Deployment

👩‍💻 Author

Shalini

Computer Science Student | Web Developer
Passionate about building scalable web applications with modern technologies.

