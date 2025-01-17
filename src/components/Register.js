import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
  };

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Register</h2>
      <input type="text" {...register('name', { required: true })} placeholder="Name" />
      <input type="email" {...register('email', { required: true })} placeholder="Email" />
      <input type="password" {...register('password', { required: true })} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default Register;