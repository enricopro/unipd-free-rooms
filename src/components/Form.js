// Form.js
import React from 'react';

const Form = () => {
  return (
    <form className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="listPicker" className="block text-gray-700 text-sm font-bold mb-2">
          Select from the list:
        </label>
        <select
          id="listPicker"
          name="listPicker"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          {/* Add your list options here */}
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <div className="flex space-x-4">
        <div className="mb-4 flex-grow">
          <label htmlFor="dateTimePicker" className="block text-gray-700 text-sm font-bold mb-2">
            Date and Time:
          </label>
          <input
            type="datetime-local"
            id="dateTimePicker"
            name="dateTimePicker"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
