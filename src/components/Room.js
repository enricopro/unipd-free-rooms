// Room.js
import React from 'react';

const Room = ({ name }) => {
  return (
    <div className="flex items-center justify-between bg-gray-200 p-4 mb-4">
      <span className="text-lg font-bold">test</span>
      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
    </div>
  );
};

export default Room;
