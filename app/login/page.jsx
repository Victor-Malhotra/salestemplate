import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import mongoose from 'mongoose';

const User = mongoose.model('User', {
  email: String,
  password: String
});

const Login = () => {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      const user = await User.findOne({ email: data.email });
      if (!user) {
        throw new Error('Invalid email or password');
      }
      const isValid = await user.comparePassword(data.password);
      if (!isValid) {
        throw new Error('Invalid email or password');
      }
      // save user to session
      router.push('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg">
        <h1 className="text-lg mb-2">Login</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            name="email"
            ref={register({ required: true })}
            className={`w-full border ${
              errors.email ? 'border-red-500' : 'border-gray-400'
            } p-2 rounded-lg`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">Email is required</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            name="password"
            ref={register({ required: true })}
            type="password"
            className={`w-full border ${
              errors.password ? 'border-red-500' : 'border-gray-400'
            } p-2 rounded-lg`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs">Password is required</p>
          )}
        </div>
        {errorMessage && (
          <p className="text-red-500 text-xs mb-4">{errorMessage}</p>
        )}
        <button
          type="submit"
          className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600"
        >
          Login
        </button>
      </form>
  );
};

export default Login