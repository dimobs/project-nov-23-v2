import React, { useState } from 'react';
import * as roomService from "../../services/roomService";

const YourComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange =  (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData(e.target);
    console.log(...formDataToSend);
    try {
      console.log('after append',formDataToSend);
      const response = await roomService.create(formDataToSend);


      if (response.ok) {
        console.log('Form data sent successfully');
        // Handle success, e.g., show a success message to the user
      } else {
        console.error('Failed to send form data');
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error while sending form data', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Attach File:
        <input 
        type="file" 
        name="file" 
        onChange={handleFileChange} 
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default YourComponent;
