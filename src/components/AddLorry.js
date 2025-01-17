import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddLorry = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Get existing lorries from local storage
    const lorries = JSON.parse(localStorage.getItem('lorries')) || [];

    // Add new lorry to the list
    const newLorry = {
      id: lorries.length + 1, // Auto-increment ID
      type: data.type,
      capacity: data.capacity,
      available: data.available === 'true' // Convert to boolean
    };

    // Update lorry list in local storage
    lorries.push(newLorry);
    localStorage.setItem('lorries', JSON.stringify(lorries));

    // Redirect to the available lorries page
    navigate('/available-lorries');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Add New Lorry</h2>
      <input type="text" {...register('type', { required: true })} placeholder="Lorry Type" />
      <input type="text" {...register('capacity', { required: true })} placeholder="Capacity (e.g., 5 Tons)" />
      <select {...register('available', { required: true })}>
        <option value="true">Available</option>
        <option value="false">Unavailable</option>
      </select>
      <button type="submit">Add Lorry</button>
    </form>
  );
};

export default AddLorry;