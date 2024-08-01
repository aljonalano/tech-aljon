import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-[27.5rem] p-[4.5rem]">
      <div className="mb-[3rem]">
        <h2 className="font-semibold text-[21px] mb-5">Sort by Title</h2>
        <select className="w-full p-2 border border-black rounded-md">
          <option>Select</option>
          <option>ASC</option>
          <option>DESC</option>
        </select>
      </div>
      <div>
        <h2 className="font-semibold text-[21px] mb-1">Filter</h2>
        <div className="border border-black p-[2rem] rounded-md w-[306px] h-[182px] bg-[#FFFFFF]">
          <label className="block mb-3 font-semibold text-[16px] leading-[19.36px] text-[#616161]">
            Favorites?
          </label>
          <div className="p-2">
            <label className="block ">
              <input type="checkbox" className="mr-2 mb-4" />
              Yes
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              No
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
