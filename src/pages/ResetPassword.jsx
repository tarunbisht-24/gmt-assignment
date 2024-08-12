import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Always show a generic message regardless of whether the email is registered
        setMessage('If your email is registered with us, you will receive a password reset link.');
      })
      .catch((error) => {
        console.error('Error sending password reset email:', error);
        setMessage('If your email is registered with us, you will receive a password reset link.');
      });
  };

  return (
    <div className="w-full md:w-[38%] h-[100vh] flex flex-col justify-start items-start bg-white p-7 gap-2 overflow-auto">
      <div className="flex flex-col justify-start items-start gap-2">
        <h2 className="text-[2rem] md:text-[2.5rem] text-black font-medium md:font-semibold text-wrap leading-10 md:leading-tight">
          Reset Password
        </h2>
        <p className="text-[1rem] md:text-[1.1rem] leading-5 md:leading-6 text-lightgray font-medium">
          Enter your email to receive the reset link
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full p-4 rounded-full border border-[#D6D6D6] mb-4"
        />
        <button
          type="submit"
          className="w-full bg-orange p-4 rounded-full text-white text-[1rem] hover:scale-105 ease-in-out duration-300"
        >
          Send Reset Link
        </button>
      </form>
      {message && <p className="text-black mt-4">{message}</p>}
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> cbb117b (Added Forgot Password functionality)
