import React from 'react';
import { useForm } from 'react-hook-form';

const Booking = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(`Lorry booked! Details: ${JSON.stringify(data)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Book a Lorry</h2>
      <input type="text" {...register('pickup', { required: true })} placeholder="Pickup Location" />
      <input type="text" {...register('dropoff', { required: true })} placeholder="Drop-off Location" />
      <input type="date" {...register('date', { required: true })} placeholder="Date" />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default Booking;

