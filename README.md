#  Virtual Pet Adoption Center

A responsive, user-friendly web application that allows users to manage pets available for adoption. Users can add, update, delete, and adopt pets while filtering them by moods which change dynamically over time.

## Features
- Add new pets with species, age, and personality.
- View all pets in a card layout with mood indicators (Happy, Excited, Sad).
- Update pet profiles directly from the UI.
- Adopt pets (sets status and adoption date).
- Delete pets with a fade-out animation.
- Filter pets by name, species, mood, and adoption status.
- Responsive UI across mobile, tablet, and desktop.

## Tech Stack
### Backend (Node.js + Express + MongoDB)
-RESTful API
-Modular architecture
-Dynamic mood logic based on days since pet was added

### Frontend (React.js)
-Functional components using React Hooks
-Bootstrap 5 for styling and responsive layout
-Dynamic filtering and sorting
-Animations for actions (adopt/delete)


## Folder Structure
### Backend

/backend
├── app.js
├── server.js
├── /routes
│   └── petRoutes.js
├── /controllers
│   └── petController.js
├── /models
│   └── petModel.js
├── /services
│   └── petService.js
└── /utils
    └── moodLogic.js

### Frontend

/frontend
├── public/
├── src/
│   ├── App.js
│   ├── index.js
│   ├── /components
│   │   ├── PetList.js
│   │   ├── PetCard.js
│   │   ├── AddPetForm.js
│   │   └── FilterBar.js
│   ├── /pages
│   │   └── HomePage.js
│   ├── /services
│   │   └── api.js
│   ├── /styles
│   │   └── global.css
│   └── /utils
│       └── helpers.js


## Getting Started
### Backend Setup
-cd backend
-npm install 
-Create a .env file:  MONGODB_URI= ADD Your Mongodb Atlas URL
                      PORT=5000
-npm run dev

### Frontend Setup
-cd frontend
-npm install
-npm start

### Frontend runs on: http://localhost:3000
### Backend runs on: http://localhost:5000

## How the App Works
- Users can add new pets via a form.
- All pets are shown in a card layout with their status, mood, and personality.
- Pets can be filtered by name, species, mood, or adopted status.
- Each pet has edit, delete, and adopt options.
- Adopted pets show their adoption date, and mood is hidden after adoption.
- The available pets list only shows those that are not yet adopted.
- UI includes fade-out animation when deleting pets.

### MongoDB Setup
Make sure MongoDB is running locally or use MongoDB Atlas. You can change the connection string in .env.

## API Endpoints
### (http://localhost:5000/pets)

| Method | Route        | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/`          | Get all pets        |
| POST   | `/`          | Add new pet         |
| PATCH  | `/:id/adopt` | Mark pet as adopted |
| PUT    | `/:id`       | Update pet info     |
| DELETE | `/:id`       | Delete pet          |


### 🎥 Demo
https://github.com/user-attachments/assets/a4ce22d9-7619-4432-a93f-7406582d6667


## Author
Vilajini Yogeswaran 
https://github.com/vilajini
