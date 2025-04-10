import MainContent from "../pages/MainContent";

export const sampleVideos = [
    {
      thumbnail: "https://i.ytimg.com/vi/sBws8MSXN7A/maxresdefault.jpg",
      title: "Learn React in 15 Minutes",
      channelAvatar: "https://yt3.ggpht.com/yti/AHXOFjXL2Wj3e0Zm=s88-c-k-c0x00ffffff-no-rj",
      channelName: "Tech Guru",
      views: "1.2M views",
      uploaded: "2 days ago",
      category:"comedy",
      id:1
    },
    {
      thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
      title: "React JS Full Course - Beginner to Advanced",
      channelAvatar: "https://yt3.googleusercontent.com/ytc/AGIKgqML3J9OyGmVmF_qA=s88-c-k-c0x00ffffff-no-rj",
      channelName: "Code With Me",
      views: "2.4M views",
      uploaded: "1 week ago",
      category:"action",
      id:2
    },
    {
        thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
        title: "React JS Full Course - Beginner to Advanced",
        channelAvatar: "https://yt3.googleusercontent.com/ytc/AGIKgqML3J9OyGmVmF_qA=s88-c-k-c0x00ffffff-no-rj",
        channelName: "Code With Me",
        views: "2.4M views",
        uploaded: "1 week ago",
        category:"fight",
        id:3
      },
      {
        thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
        title: "React JS Full Course - Beginner to Advanced",
        channelAvatar: "https://yt3.googleusercontent.com/ytc/AGIKgqML3J9OyGmVmF_qA=s88-c-k-c0x00ffffff-no-rj",
        channelName: "Code With Me",
        views: "2.4M views",
        uploaded: "1 week ago",
        category:"drama",
        id:4
      },
      {
        thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
        title: "React JS Full Course - Beginner to Advanced",
        channelAvatar: "https://yt3.googleusercontent.com/ytc/AGIKgqML3J9OyGmVmF_qA=s88-c-k-c0x00ffffff-no-rj",
        channelName: "Code With Me",
        views: "2.4M views",
        uploaded: "1 week ago",
        category:"sentity",
        id:5
      },
      {
        thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
        title: "React JS Full Course - Beginner to Advanced",
        channelAvatar: "https://yt3.googleusercontent.com/ytc/AGIKgqML3J9OyGmVmF_qA=s88-c-k-c0x00ffffff-no-rj",
        channelName: "Code With Me",
        views: "2.4M views",
        uploaded: "1 week ago",
        category:"horror",
        id:6
      },
      {
        thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
        title: "React JS Full Course - Beginner to Advanced",
        channelAvatar: "https://yt3.googleusercontent.com/ytc/AGIKgqML3J9OyGmVmF_qA=s88-c-k-c0x00ffffff-no-rj",
        channelName: "Code With Me",
        views: "2.4M views",
        uploaded: "1 week ago",
        category:"comedy",
        id:7
      },

      {
        thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
        title: "React JS Full Course - Beginner to Advanced",
        channelAvatar: "https://yt3.googleusercontent.com/ytc/AGIKgqML3J9OyGmVmF_qA=s88-c-k-c0x00ffffff-no-rj",
        channelName: "Code With Me",
        views: "2.4M views",
        uploaded: "1 week ago",
        category:"comedy",      
        id:8

      },
  
      
     

    // Add more videos as needed
  ];

  function Videos({videos,allVideos,onCategoryClick,selectedCategory}){
    return (
        <MainContent 
        Videos={videos}
        allVideos={allVideos}
        onCategoryClick={onCategoryClick}
        selectedCategory={selectedCategory}
        />
    )
  }

  export default Videos;