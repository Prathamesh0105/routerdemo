import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import UserList from './UserList';

export default function Users() {
  // get current location path
  const location = useLocation();
  const pathArr = location.pathname.split('/');
  const path = pathArr[pathArr.length - 1];

  return (
    <div>
      <Link to="/" style={{ padding: 5 }}>Home</Link>
      {/* hide add link if already on add new user component */}
      {path !== "add" ? <Link to="/users/add" style={{ padding: 5 }}>Add User</Link> : <Link to="/users" style={{ padding: 5 }}>User Management</Link>}
      {path !== 'add' ? <UserList/> : <h2 style={{textAlign:"center"}}>Add New User</h2>}
    </div>
  );
}