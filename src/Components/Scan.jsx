import React, { useState, useRef } from "react";
import "../Styles/Scan.css";

const Scan = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [result, setResult] = useState("");
  const [cameraStream, setCameraStream] = useState(null);

  // Start camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      alert("Camera access denied or unavailable.");
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => track.stop());
      setCameraStream(null);
    }
  };

  // Capture photo
  const capturePhoto = () => {
    if (!cameraStream) {
      alert("Please start the camera first.");
      return;
    }
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL("image/png");
    setCapturedImage(imageData);
    setUploadedImage(null);
    stopCamera(); // stop camera after clicking photo
  };

  // Upload image
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        setUploadedImage(evt.target.result);
        setCapturedImage(evt.target.result);
        stopCamera(); // stop camera if user uploads
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit
  const handleSubmit = () => {
    if (!capturedImage) {
      alert("Please take a photo or upload an image first.");
      return;
    }
    const breeds = ["Gir Cow", "Sahiwal Cow", "Kankrej Cow", "Murrah Buffalo"];
    const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
    setResult("Identified Breed: " + randomBreed);
  };

  return (
    <>
      <header className="header">
        <h1>AI Cattle Scan</h1>
      </header>

      <div className="container">
        <h2>Scan Your Cattle Breed</h2>

        {/* Camera Preview */}
        {!capturedImage && !uploadedImage && (
          <video ref={videoRef} autoPlay playsInline muted id="cameraPreview" />
        )}

        {/* Image Preview */}
        {(capturedImage || uploadedImage) && (
          <img
            src={capturedImage || uploadedImage}
            alt="Preview"
            className="previewImage"
          />
        )}

        <br />
        <button onClick={startCamera}>Start Camera</button>
        <button onClick={capturePhoto}>Capture Photo</button>

        {/* Upload Image */}
        <input
          type="file"
          id="uploadInput"
          accept="image/*"
          onChange={handleUpload}
        />
        <label htmlFor="uploadInput" className="upload-label">
          Upload Image
        </label>
        <br />

        {/* Submit */}
        <button onClick={handleSubmit}>Submit</button>

        <div id="result">{result}</div>
        <canvas ref={canvasRef} id="snapshot" style={{ display: "none" }} />
      </div>
    </>
  );
};

export default Scan;
