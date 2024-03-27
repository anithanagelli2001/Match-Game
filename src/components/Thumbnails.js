import React from 'react'

const Thumbnails = ({imagesList, activeTab, onThumbnailClick}) => {
  const filteredImages = imagesList.filter(
    image => image.category === activeTab,
  )

  return (
    <div className="thumbnails-container">
      {filteredImages.map(image => (
        <img
          key={image.id} // Added unique key
          src={image.thumbnailUrl}
          alt="thumbnail"
          className="thumbnail"
          onClick={() => onThumbnailClick(image.imageUrl)}
        />
      ))}
    </div>
  )
}

export default Thumbnails
