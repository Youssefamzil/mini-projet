import React, { useState } from "react";

const ImageUploader = () => {
  const [image, setImage] = useState(null); // Stores the uploaded image
  const [preview, setPreview] = useState(null); // Image preview URL

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);

      // Create a preview URL for the image
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  const handleSubmit = () => {
    if (!image) {
      alert("Please upload an image first!");
      return;
    }

    // Example: Send the image to a server
    const formData = new FormData();
    formData.append("file", image);

    fetch("https://your-server-endpoint.com/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Upload successful:", data);
        alert("Image uploaded successfully!");
      })
      .catch((error) => {
        console.error("Upload failed:", error);
        alert("Failed to upload image!");
      });
  };

  return (
    <div>
      <h1>Image Uploader</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {preview && (
        <div>
          <h2>Image Preview</h2>
          <img src={preview} alt="Preview" style={{ width: "300px" }} />
        </div>
      )}
      <button onClick={handleSubmit} disabled={!image}>
        Upload Image
      </button>
    </div>
  );
};

export default ImageUploader;
