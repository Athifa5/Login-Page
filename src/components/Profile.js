import React, { useState } from 'react';

function Profile() {
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle update profile logic, e.g., send data to backend API
  };

  return (
    
      <div className="main">
            <h2 className="main-header">Details Updation:</h2>
      <form onSubmit={handleSubmit} className="create-form">
            <label>Age</label><br></br>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" /><br></br>
        
            <label>Date Of Birth</label><br></br>
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} placeholder="Date of Birth" /><br></br>
        <label>Contact Number:</label><br></br>
        <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contact" /><br></br>
        <br></br>
        <button type='submit'>Update</button>
       </form>
    </div>
    
  );
}

export default Profile;
