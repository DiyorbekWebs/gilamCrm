// src/components/ProfileForm.js
import React, { useState, useRef } from 'react';

const ProfileForm = () => {
  const [picture, setPicture] = useState(null);
  const fileInputRef = useRef(null);

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    setPicture(file);
  };

  const handleClickEdit = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <label onClick={handleClickEdit} style={imageContainerStyle}>
        {picture && (
          <img
            src={URL.createObjectURL(picture)}
            alt="Profile"
            style={{ maxWidth: '100px', cursor: 'pointer' }}
          />
        )}
        {!picture && <span>Click to edit | Choose file</span>}
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handlePictureChange}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
    </div>
  );
};

const imageContainerStyle = {
//   border: '2px dashed #ddd',
//   borderRadius: '4px',
//   padding: '20px',
//   textAlign: 'center',
//   cursor: 'pointer',
};

export default ProfileForm;
