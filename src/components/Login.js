import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === data.email && u.password === data.password);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      navigate('/booking');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
      <input type="email" {...register('email', { required: true })} placeholder="Email" />
      <input type="password" {...register('password', { required: true })} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default Login;