'use client';

import BackgroundBlur from '@/app/ui/background-blur';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// This component contains basic logic for a React Form.
// We'll be updating it in Chapter 8 - Adding Authentication.

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="relative mx-auto mt-40 p-4">
      <BackgroundBlur />

      <div className="mx-auto flex w-full flex-col items-center space-y-2 rounded-xl border bg-white px-4 py-6 shadow-sm sm:max-w-sm sm:space-y-4 sm:px-8 sm:py-12">
        <Link href="/">
          <Image width={40} height={40} src="/logo.png" alt="Next.js Logo" />
        </Link>
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-sm font-medium leading-8 text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label
                className="block text-sm font-medium leading-8 text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-8">
              <button
                className="w-full rounded-md bg-black py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                type="submit"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
