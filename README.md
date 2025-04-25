🎬 YouTube Clone — MERN Stack Capstone Project

A full-stack YouTube Clone built using the MERN (MongoDB, Express, React, Node.js) stack, featuring user authentication, video player, channel management, and responsive UI. This project replicates the core functionality of YouTube, including searching, filtering, commenting, liking/disliking

Features

Frontend (React)

. Responsive UI with Header, Sidebar, and Video Grid.
. JWT Authentication Login
. Video Player Page with:
     .Title, description, channel info
     .Like, Dislike, and Comments
. Channel Page:
     .Create and manage videos
     .Channel details and stats

. Search Bar and Category Filters


 Backend (Node.js + Express + MongoDB)

. RESTful APIs for:  
   .User authentication (JWT)
   .Video CRUD operations
   .Comment management
   .Reaction Counts
   .Channel creation and management

. MongoDB stores users, videos, reaction, comments, and channels

Technology      |     Usage
Frontend        | React, React Router, Axios
Backend         | Node.js, Express.js
Database        | MongoDB Atlas
Authentication  | JWT (JSON Web Tokens)
Version Control | Git & GitHub



Folder Structure

youtube-clone/                       # React Frontend
│   ├── src/
├── ├   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.js
│   │   └── index.js
├── youtube_backend/                 # Node + Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── middleware/
│   └── server.js
├── README.md
└── .env


Core Functionalities:

 Home Page:

 .Header with search bar and sign-in button
 .Sidebar with toggle menu
 .Grid of video thumbnails
 .Filter videos by category

 User Authentication:
 
 .Register/Login with email and password
 .JWT token stored in localStorage
 .Authenticated users see their name in the header

Video Player Page:

 .Title, views, uploader info, date
 .Likes, dislikes
 .Comment system: Add, Edit, Delete

Channel Page:

 .Create/edit/delete videos
 .View only your own videos
 .Channel banner, name, description, and video list

Search and Filter:

 .Real-time search by video title
 .Category filters using buttons


 Sample Data:

 Video:

{
  "videoId": "lpDnG76TvN0",
  "title": "Panjara Punch | Alappuzha Gymkhana| Khalid Rahman| Naslen,Anagha| Vishnu Vijay | Suhail Koya",
  "thumbnailUrl": "https://i.ytimg.com/vi/lpDnG76TvN0/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDKux5hRutUpslm33sfTqpoCbLa5Q",
  "description": "Here's the Panjara Punch Song from Alappuzha Gymkhana, Sung by Anthony Daasan & Vishnu Vijay, Lyrics Written by Suhail Koya, Music Composed by Vishnu Vijay.",
  "channelId": "channel01",
  "uploader": "user01",
  "views": 15200,
  "uploadDate": "2025-04-25",
  "comments": [
    {
      "commentId": "comment01",
      "userId": "user02",
      "text": "Great video! Very helpful.",
      "timestamp": "2024-09-21T08:30:00Z"
    }
  ]
}

User:

{
  "userId": "user01",
  "username": "JohnDoe",
  "email": "john@example.com",
  "password": "hashedPassword123",
  "avatar": "https://example.com/avatar/johndoe.png",
  "channels": ["channel01"]
}


channel :

{
  "channelId": "channel01",
  "channelName": "Code with John",
  "owner": "user01",
  "description": "Coding tutorials and tech reviews by John Doe.",
  "channelBanner": "https://example.com/banners/john_banner.png",
  "subscribers": 5200,
  "videos": ["video01", "video02"]
}


API Endpoints:

User Routes:
 .POST /register
 .POST /login

Channel Routes:
  .POST   /channel/createchannel
  .GET    /channel/videos/:id
  .PATCH  /channel/:channelId/add-video
  .PATCH  /channel/editvideo/:channelId/:videoId
  .DELETE /:videoId/comments/:commentId

Video Routes
  .POST /videos
  .GET /all/videos

Comment Routes:
  .GET   /:videoId/comments
  .POST  /:videoId/comments
  .PUT   /:videoId/comments/:commentId
  .DELETE /:videoId/comments/:commentId

Reaction Route:
  .POST /:videoId/like
  .GET /:videoId/like
 
  







