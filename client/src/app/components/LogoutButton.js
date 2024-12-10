'use client';

import { signOut } from 'next-auth/react'
import React from 'react'

export default function LogoutButton() {
  const handleLogout = () => {
    signOut({
      redirect: true,
      callbackUrl: process.env.NEXTAUTH_URL,
    });
  };

  return (
    <button onClick={handleLogout} className="bg-red-600 text-white p-2 rounded-md ml-auto">
      Log out
    </button>
  );
}
