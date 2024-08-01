'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const AddItems = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [addedBy, setAddedBy] = useState('');
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    addedBy: '',
  });

  const validateForm = () => {
    const newErrors = {
      title: '',
      description: '',
      addedBy: '',
    };

    if (!title) newErrors.title = 'Title is required.';
    if (!description) newErrors.description = 'Description is required.';
    if (!addedBy) newErrors.addedBy = 'Added by is required.';

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ title, description, addedBy }),
      });

      if (res.ok) {
        router.push('/');
      } else {
        throw new Error('Failed to create a topic');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <button className="self-start mb-4 text-gray-700">
        <Link href="/">
          <svg
            className="w-6 h-6 inline-block mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          Back
        </Link>
      </button>

      <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg w-[95%] z-20">
        <Image
          src="/noImage.png"
          alt="Dish"
          className="w-[457px] h-[401px] rounded-lg object-cover mr-4 cursor-pointer"
          width={150}
          height={150}
        />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full mx-[2.5rem]"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Your Name
            </label>
            <input
              onChange={(e) => setAddedBy(e.target.value)}
              value={addedBy}
              type="text"
              id="name"
              placeholder={
                errors.addedBy ? 'Input Your Name' : 'Text field data'
              }
              className={`border p-2 w-full ${
                errors.addedBy ? 'border-red-500' : 'border-gray-300'
              }`}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Text field data"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              id="title"
              placeholder={errors.title ? 'Inpute Title' : 'Title'}
              className={`border p-2 w-full ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              id="description"
              placeholder={
                errors.description ? 'Input Description' : 'Description here'
              }
              className={`border p-2 w-full ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="ingredients"
              className="block text-gray-700 font-bold mb-2"
            >
              Ingredients
            </label>
            <textarea
              id="ingredients"
              placeholder="Description here"
              className="w-full p-2 border border-gray-300 rounded h-24"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="instructions"
              className="block text-gray-700 font-bold mb-2"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              placeholder="Description here"
              className="w-full p-2 border border-gray-300 rounded h-24"
            ></textarea>
          </div>
          <div className="flex justify-end space-x-4">
            {/* <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button> */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
