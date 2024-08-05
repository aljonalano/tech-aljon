import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const EditItems = ({ params }) => {
  const { id } = params;
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
        <form className="flex flex-col w-full mx-[2.5rem]">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Your Name
            </label>
            <input
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
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
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
