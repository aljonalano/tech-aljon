'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from './SideBar';
import NoRecord from './NoRecord';
import { fetchItems } from '../redux/itemSlice';
import { RootState, AppDispatch } from '../redux/store';

export default function ItemList() {
  const dispatch: AppDispatch = useDispatch();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.items
  );

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const formatDate = (dateString: any) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading items: {error}</div>;
  }

  return (
    <>
      {items.length === 0 ? (
        <NoRecord />
      ) : (
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-[6.5rem]">
            {items?.map((i: any) =>
              i ? (
                <Link href={`/edit-items/${i._id}`} key={i._id} legacyBehavior>
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
                        <p className="text-sm">Added by: {i.addedBy}</p>
                        <p className="text-sm">
                          Date: {formatDate(i.createdAt)}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        </div>
      )}
    </>
  );
}
