'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import DeleteItem from './DeleteItem';

const EditItems = ({
  id,
  title,
  description,
  addedBy,
  emailAddress,
  ingredients,
  instructions,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newAddedBy, setNewAddedBy] = useState(addedBy);
  const [newEmailAddress, setNewEmailAddress] = useState(emailAddress);
  const [newIngredients, setNewIngredients] = useState(ingredients);
  const [newInstructions, setNewIntructions] = useState(instructions);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/items/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            newTitle,
            newDescription,
            newAddedBy,
            newEmailAddress,
            newIngredients,
            newInstructions,
          }),
        }
      );

      if (!res.ok) {
        throw new Error('Failed to update items');
      }

      router.refresh();
      router.push('/');
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
              onChange={(e) => setNewAddedBy(e.target.value)}
              value={newAddedBy}
              type="text"
              id="name"
              placeholder="Text field data"
              className="w-full p-2 border border-gray-300 rounded"
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
              onChange={(e) => setNewEmailAddress(e.target.value)}
              value={newEmailAddress}
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
              onChange={(e) => setNewTitle(e.target.value)}
              value={newTitle}
              type="text"
              id="title"
              placeholder="Text field data"
              className="w-full p-2 border border-gray-300 rounded"
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
              onChange={(e) => setNewDescription(e.target.value)}
              value={newDescription}
              id="description"
              placeholder="Description here"
              className="w-full p-2 border border-gray-300 rounded h-24"
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
              onChange={(e) => setNewIngredients(e.target.value)}
              value={newIngredients}
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
              onChange={(e) => setNewIntructions(e.target.value)}
              value={newInstructions}
              id="instructions"
              placeholder="Description here"
              className="w-full p-2 border border-gray-300 rounded h-24"
            ></textarea>
          </div>
          <div className="flex justify-end space-x-4">
            <DeleteItem id={id} />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditItems;
