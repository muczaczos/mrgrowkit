import React, { useState } from 'react'

const Gal = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0])

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  return (
    <div className="max-w-lg mx-auto">
      {/* Główne zdjęcie */}
      <img src={selectedImage} alt="Main" className="w-full" />

      {/* Miniatury */}
      <div className="flex justify-center mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className="w-16 h-16 object-cover cursor-pointer mx-2"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  )
}

export default Gal
