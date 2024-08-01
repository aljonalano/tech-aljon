import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from './SideBar';

const getItems = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items`);

    if (!res.ok) {
      throw new Error('Failed to fetch items');
    }
    return res.json();
  } catch (error) {
    console.log('Error loading items: ', error);
  }
};

export default async function ItemList() {
  const { items } = await getItems();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      {items.length === 0 ? (
        <>
          <div className="flex items-center justify-center  h-[500px] bg-white rounded-lg shadow-lg m-[3rem]">
            <div className="text-center">
              <p className="font-inter text-4xl font-semibold leading-[59.3px]">
                No Record Found!
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex">
            <Sidebar />
            <div className='className="flex-1 p-[6.5rem]'>
              {items.map((i) => (
                <Link key={i.id} href={`/edit/${i.id}`} legacyBehavior>
                  <div className="bg-white shadow-md rounded-lg h-60 border border-black flex mb-4 relative cursor-pointer">
                    <Image
                      src="/curry.png"
                      alt="Dish"
                      className="w-[20rem] rounded-lg object-cover mr-4"
                      width={100}
                      height={100}
                    />

                    <div className="flex-1 p-4">
                      <h3 className="text-[30px] font-semibold text-[#000000]">
                        {i.title}
                      </h3>
                      <p className="text-[#000000] font-semibold">
                        {i.description}
                      </p>
                      <a href="#" className="text-[#000000] text-[13px]">
                        See more
                      </a>
                      <div className="flex justify-between mt-[13px] font-semibold text-[#000000]">
                        <p className="text-sm ">Added by: {i.addedBy}</p>
                        <p className="text-sm">
                          Date: {formatDate(i.createdAt)}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* <hr className="bg-[#213b9b] border-2" /> */}
        </>
      )}
    </>
  );
}
