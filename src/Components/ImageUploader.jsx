// import React, { useState } from "react";
// import axios from "axios";


// function ImageUploader() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageSelect = (event) => {
//     setSelectedImage(event.target.files[0]);
//   };

//   const imageUpload = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append("blog_img", selectedImage);

//     try {
//       const response = await axios.post(
//         "http://core.leadplaner.com:3001/api/admin/blog/addImg",
//         formData
//       );
//       console.log("Image uploaded successfully:", response.data);
//       // Perform any additional actions on successful upload
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       // Handle error condition
//     }
//   };

//   return (
//     <>
      
      
//         <input
//           type="file"
//           name="blog_img"
//           accept="image/*"
//           onChange={handleImageSelect}
//         />
//         <button type="submit" onClick={imageUpload}>Upload</button>
      
//     </>
//   );
// }

// export default ImageUploader;























import React, { useState, useRef } from "react";
import axios from "axios";

function ImageUploader() {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showUploadButton, setShowUploadButton] = useState(false);
  const [showEditButton, setShowEditButton] = useState(false);
  const [showChooseButton, setShowChooseButton] = useState(false);

  const handleImageSelect = (event) => {
    setSelectedImage(event.target.files[0]);
    setShowUploadButton(true);
  };

  const imageUpload = async (event) => {
    event.preventDefault();

    if (!selectedImage) {
      console.log("No image selected.");
      return;
    }

    const formData = new FormData();
    formData.append("blog_img", selectedImage);

    try {
      const response = await axios.post(
        "http://core.leadplaner.com:3001/api/admin/blog/addImg",
        formData
      );
      console.log("Image uploaded successfully:", response.data);
      // Perform any additional actions on successful upload
      setShowUploadButton(false);
      setShowEditButton(true);
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle error condition
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleEdit = () => {
    setSelectedImage(null);
    setShowUploadButton(false);
    setShowEditButton(false);
    setShowChooseButton(true);
  };

  return (
    <>
      {!showUploadButton && !showEditButton && !showChooseButton && (
        <button type="button" onClick={handleClick}>
          Choose Image
        </button>
      )}
      {selectedImage && !showEditButton && (
        <p>Selected Image: {selectedImage.name}</p>
      )}
      <input
        type="file"
        name="blog_img"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImageSelect}
      />
      {showUploadButton && !showEditButton && (
        <button type="submit" onClick={imageUpload}>
          Upload
        </button>
      )}
      {showEditButton && (
        <>
          <button type="button" onClick={handleEdit}>
            Edit Image
          </button>
        </>
      )}
      {showChooseButton && (
        <>
          <button type="button" onClick={handleClick}>
            Choose Image
          </button>
        </>
      )}
    </>
  );
}

export default ImageUploader;




