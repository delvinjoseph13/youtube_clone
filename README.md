🎬 YouTube Clone — MERN Stack Capstone Project

A full-stack YouTube Clone built using the MERN (MongoDB, Express, React, Node.js) stack, featuring user authentication, video player, channel management, and responsive UI. This project replicates the core functionality of YouTube, including searching, filtering, commenting, liking/disliking

Features

Frontend (React)

. Responsive UI with Header, Sidebar, and Video Grid.<br/>
. JWT Authentication Login<br/>
. Video Player Page with:<br/>
     .Title, description, channel info<br/>
     .Like, Dislike, and Comments<br/>
. Channel Page:<br/>
     .Create and manage videos<br/>
     .Channel details and stats<br/>
<br/>
. Search Bar and Category Filters<br/>
<br/>
<br/>
 Backend (Node.js + Express + MongoDB)<br/>
<br/>
. RESTful APIs for:  <br/>
   .User authentication (JWT)<br/>
   .Video CRUD operations<br/>
   .Comment management<br/>
   .Reaction Counts<br/>
   .Channel creation and management<br/>
<br/>
. MongoDB stores users, videos, reaction, comments, and channels<br/>
<br/>
Technology      |     Usage<br/>
Frontend        | React, React Router, Axios<br/>
Backend         | Node.js, Express.js<br/>
Database        | MongoDB Compass<br/>
Authentication  | JWT (JSON Web Tokens)<br/>
Version Control | Git & GitHub<br/>
<br/>
<br/>
<br/>
Folder Structure<br/>
<br/>
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

<br/>
Core Functionalities:<br/>
<br/>
 Home Page:<br/>
<br/>
 .Header with search bar and sign-in button<br/>
 .Sidebar with toggle menu<br/>
 .Grid of video thumbnails<br/>
 .Filter videos by category<br/>
<br/>
 User Authentication:<br/>
 <br/>
 .Register/Login with email and password<br/>
 .JWT token stored in localStorage<br/>
 .Authenticated users see their name in the header<br/>
<br/>
Video Player Page:<br/>
<br/>
 .Title, views, uploader info, date<br/>
 .Likes, dislikes<br/>
 .Comment system: Add, Edit, Delete<br/>
<br/>
Channel Page:<br/>
<br/>
 .Create/edit/delete videos<br/>
 .View only your own videos<br/>
 .Channel banner, name, description, and video list<br/>
<br/>
Search and Filter:<br/>
<br/>
 .Real-time search by video title<br/>
 .Category filters using buttons<br/>
<br/>
<br/>
 Sample Data:<br/>
<br/>
 Video:<br/>
<br/>
{
  "videoId": "lpDnG76TvN0",<br/>
  "title": "Panjara Punch | Alappuzha Gymkhana| Khalid Rahman| Naslen,Anagha| Vishnu Vijay | Suhail Koya",<br/>
  "thumbnailUrl": "https://i.ytimg.com/vi/lpDnG76TvN0/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDKux5hRutUpslm33sfTqpoCbLa5Q",<br/>
  "description": "Here's the Panjara Punch Song from Alappuzha Gymkhana, Sung by Anthony Daasan & Vishnu Vijay, Lyrics Written by Suhail Koya, Music Composed by Vishnu Vijay.",<br/>
  "channelId": "channel01",<br/>
  "uploader": "user01",<br/>
  "views": 15200,<br/>
  "uploadDate": "2025-04-25",<br/>
  "comments": [<br/>
    {<br/>
      "commentId": "comment01",<br/>
      "userId": "user02",<br/>
      "text": "Great video! Very helpful.",<br/>
      "timestamp": "2024-09-21T08:30:00Z"<br/>
    }<br/>
  ]<br/>
}<br/>
<br/>
User<br/>
<br/>
{<br/>
  "userId": "user01",<br/>
  "username": "JohnDoe",<br/>
  "email": "john@example.com",<br/>
  "password": "hashedPassword123",<br/>
  "avatar": "https://example.com/avatar/johndoe.png",<br/>
  "channels": ["channel01"]<br/>
}<br/>
<br/>
<br/>
channel :<br/>
<br/>
{<br/>
  "channelId": "channel01",<br/>
  "channelName": "Code with John",<br/>
  "owner": "user01",<br/>
  "description": "Coding tutorials and tech reviews by John Doe.",<br/>
  "channelBanner": "https://example.com/banners/john_banner.png",<br/>
  "subscribers": 5200,<br/>
  "videos": ["video01", "video02"]<br/>
}<br/>
<br/>
<br/>
API Endpoints:<br/>
<br/>
User Routes:<br/>
 .POST /register<br/>
 .POST /login<br/>
<br/>
Channel Routes:<br/>
  .POST   /channel/createchannel<br/>
  .GET    /channel/videos/:id<br/>
  .PATCH  /channel/:channelId/add-video<br/>
  .PATCH  /channel/editvideo/:channelId/:videoId<br/>
  .DELETE /:videoId/comments/:commentId<br/>
<br/>
Video Routes<br/>
  .POST /videos<br/>
  .GET /all/videos<br/>
<br/>
Comment Routes:<br/>
  .GET   /:videoId/comments<br/>
  .POST  /:videoId/comments<br/>
  .PUT   /:videoId/comments/:commentId<br/>
  .DELETE /:videoId/comments/:commentId<br/>
<br/>
Reaction Route:<br/>
  .POST /:videoId/like<br/>
  .GET /:videoId/like<br/>
 
  







