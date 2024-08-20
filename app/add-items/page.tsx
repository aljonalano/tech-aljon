'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

type FormValues = {
  title: string;
  description: string;
  addedBy: string;
  emailAddress: string;
  ingredients: string;
  instructions: string;
};

const AddItems = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
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
          onSubmit={handleSubmit(onSubmit)}
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
              {...register('addedBy', { required: 'Your Name is required.' })}
              type="text"
              id="name"
              placeholder="Text field data"
              className={`border p-2 w-full ${
                errors.addedBy ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.addedBy && (
              <p className="text-red-500 text-xs italic">
                {errors.addedBy.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email Address
            </label>
            <input
              {...register('emailAddress', {
                required: 'Email Address is required.',
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/,
                  message: 'Invalid email address.',
                },
              })}
              type="email"
              id="email"
              placeholder="Email address here"
              className={`border p-2 w-full ${
                errors.emailAddress ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.emailAddress && (
              <p className="text-red-500 text-xs italic">
                {errors.emailAddress.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title
            </label>
            <input
              {...register('title', { required: 'Title is required.' })}
              type="text"
              id="title"
              placeholder="Title"
              className={`border p-2 w-full ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.title && (
              <p className="text-red-500 text-xs italic">
                {errors.title.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              {...register('description', {
                required: 'Description is required.',
              })}
              id="description"
              placeholder="Description here"
              className={`border p-2 w-full ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-xs italic">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="ingredients"
              className="block text-gray-700 font-bold mb-2"
            >
              Ingredients
            </label>
            <textarea
              {...register('ingredients', {
                required: 'Ingredients are required.',
              })}
              id="ingredients"
              placeholder="Ingredients here"
              className={`border p-2 w-full ${
                errors.ingredients ? 'border-red-500' : 'border-gray-300'
              }`}
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-500 text-xs italic">
                {errors.ingredients.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="instructions"
              className="block text-gray-700 font-bold mb-2"
            >
              Instructions
            </label>
            <textarea
              {...register('instructions', {
                required: 'Instructions are required.',
              })}
              id="instructions"
              placeholder="Instructions here"
              className={`border p-2 w-full ${
                errors.instructions ? 'border-red-500' : 'border-gray-300'
              }`}
            ></textarea>
            {errors.instructions && (
              <p className="text-red-500 text-xs italic">
                {errors.instructions.message}
              </p>
            )}
          </div>
          <div className="flex justify-end space-x-4">
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
