import React from 'react';

export default function NoRecord() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mt-8 p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <p className="font-inter text-4xl font-semibold leading-[59.3px]">
            No Record Found!
          </p>
        </div>
      </div>
    </>
  );
}
