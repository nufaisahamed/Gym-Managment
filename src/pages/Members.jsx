import React, { useState, useEffect } from 'react';

const Members = () => {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editMemberId, setEditMemberId] = useState(null); // Track member being edited

  // Load members from localStorage on component mount
  useEffect(() => {
    const savedMembers = JSON.parse(localStorage.getItem('members')) || [];
    setMembers(savedMembers);
  }, []);

  // Save members to localStorage whenever members change
  useEffect(() => {
    localStorage.setItem('members', JSON.stringify(members));
  }, [members]);

  const addMember = () => {
    if (name.trim() === '' || email.trim() === '') {
      alert('Please enter both name and email.');
      return;
    }

    if (editMemberId) {
      // Update existing member
      const updatedMembers = members.map((member) =>
        member.id === editMemberId ? { ...member, name, email } : member
      );
      setMembers(updatedMembers);
      setEditMemberId(null); // Reset edit mode
    } else {
      // Add new member
      const newMember = { id: Date.now(), name, email };
      setMembers([...members, newMember]);
    }

    // Clear inputs
    setName('');
    setEmail('');
  };

  const deleteMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const editMember = (id) => {
    const memberToEdit = members.find((member) => member.id === id);
    if (memberToEdit) {
      setName(memberToEdit.name);
      setEmail(memberToEdit.email);
      setEditMemberId(id); // Set edit mode
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Member Management</h1>
        <div className="mb-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter member name"
            className="p-2 border rounded-lg mr-2 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter member email"
            className="p-2 border rounded-lg mr-2 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={addMember}
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            {editMemberId ? 'Update Member' : 'Add Member'}
          </button>
        </div>
        <ul>
          {members.map((member) => (
            <li
              key={member.id}
              className="mb-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-between items-center"
            >
              <div>
                <p className="text-xl font-bold text-gray-800">{member.name}</p>
                <p className="text-sm text-gray-600">{member.email}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => editMember(member.id)}
                  className="p-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteMember(member.id)}
                  className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Members;