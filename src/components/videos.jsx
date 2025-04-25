import MainContent from "../pages/MainContent";

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