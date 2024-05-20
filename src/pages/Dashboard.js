import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [checklists, setChecklists] = useState([]);

  useEffect(() => {
    const fetchChecklists = async () => {
      const token = "YOUR_TOKEN_HERE";
      const response = await axios.get('https://greenvelvet.alwaysdata.net/pfc/checklists', {
        headers: { 'token': token }
      });
      setChecklists(response.data.response);
    };
    fetchChecklists();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/form">
        <button>New Checklist</button>
      </Link>
      {checklists.length === 0 ? (
        <p>No checklists available</p>
      ) : (
        checklists.map((checklist) => (
          <div key={checklist.id}>
            <h2>{checklist.title}</h2>
            <p>{checklist.description}</p>
            <p>Status: {checklist.status}</p>
            <p>Tasks: {checklist.todo.length}</p>
            <Link to={`/checklist/${checklist.id}`}>View</Link>
            <Link to={`/form/${checklist.id}`}>Edit</Link>
            <button>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
