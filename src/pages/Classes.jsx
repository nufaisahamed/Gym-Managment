import React, { useState } from 'react';

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [className, setClassName] = useState('');
  const [instructor, setInstructor] = useState('');

  const addClass = () => {
    if (className.trim() !== '' && instructor.trim() !== '') {
      const newClass = { id: Date.now(), className, instructor };
      setClasses([...classes, newClass]);
      setClassName('');
      setInstructor('');
    }
  };

  const deleteClass = (id) => {
    setClasses(classes.filter(cls => cls.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Class Scheduling</h1>
        <div className="mb-4">
          <input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            placeholder="Enter class name"
            className="p-2 border rounded mr-2"
          />
          <input
            type="text"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            placeholder="Enter instructor name"
            className="p-2 border rounded mr-2"
          />
          <button
            onClick={addClass}
            className="p-2 bg-blue-600 text-white rounded"
          >
            Add Class
          </button>
        </div>
        <ul>
          {classes.map((cls) => (
            <li key={cls.id} className="mb-2 p-2 bg-white rounded shadow flex justify-between items-center">
              <div>
                <p className="font-bold">{cls.className}</p>
                <p className="text-sm text-gray-600">Instructor: {cls.instructor}</p>
              </div>
              <button
                onClick={() => deleteClass(cls.id)}
                className="p-2 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Classes;