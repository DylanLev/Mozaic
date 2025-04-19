import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './Home.css';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState('ghibli');
  const [isProcessing, setIsProcessing] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1
  });

  const handleStyleChange = (style) => {
    setSelectedStyle(style);
  };

  const handleGenerate = async () => {
    if (!selectedImage) return;
    setIsProcessing(true);
    // TODO: Implement API call to your backend
    try {
      // API call will go here
      console.log('Generating image with style:', selectedStyle);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Transform Your Images with AI</h1>
        <p>Upload your image and choose a style to create unique AI-generated artwork</p>
      </div>

      <div className="upload-section">
        <div 
          {...getRootProps()} 
          className={`dropzone ${isDragActive ? 'active' : ''} ${selectedImage ? 'has-image' : ''}`}
        >
          <input {...getInputProps()} />
          {selectedImage ? (
            <div className="preview-container">
              <img src={selectedImage} alt="Preview" className="preview-image" />
              <button className="change-image-btn">Change Image</button>
            </div>
          ) : (
            <div className="upload-prompt">
              <i className="upload-icon">📁</i>
              <p>Drag & drop your image here, or click to select</p>
              <p className="upload-hint">Supports JPG, PNG, WEBP</p>
            </div>
          )}
        </div>
      </div>

      <div className="style-section">
        <h2>Choose Your Style</h2>
        <div className="style-grid">
          <button 
            className={`style-option ${selectedStyle === 'ghibli' ? 'selected' : ''}`}
            onClick={() => handleStyleChange('ghibli')}
          >
            <div className="style-preview ghibli-preview"></div>
            <span>Ghibli</span>
          </button>
          <button 
            className={`style-option ${selectedStyle === 'figurine' ? 'selected' : ''}`}
            onClick={() => handleStyleChange('figurine')}
          >
            <div className="style-preview figurine-preview"></div>
            <span>Figurine</span>
          </button>
          <button 
            className={`style-option ${selectedStyle === 'watercolor' ? 'selected' : ''}`}
            onClick={() => handleStyleChange('watercolor')}
          >
            <div className="style-preview watercolor-preview"></div>
            <span>Watercolor</span>
          </button>
          <button 
            className={`style-option ${selectedStyle === 'pixel' ? 'selected' : ''}`}
            onClick={() => handleStyleChange('pixel')}
          >
            <div className="style-preview pixel-preview"></div>
            <span>Pixel Art</span>
          </button>
        </div>
      </div>

      <div className="generate-section">
        <button 
          className="generate-btn" 
          onClick={handleGenerate}
          disabled={!selectedImage || isProcessing}
        >
          {isProcessing ? 'Generating...' : 'Generate Art'}
        </button>
      </div>
    </div>
  );
};

export default Home;