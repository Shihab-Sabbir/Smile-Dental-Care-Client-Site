import React from 'react'
import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { AuthContext } from './UserContext/UserContext';

function App() {
  const { dark } = useContext(AuthContext);
  return (
    <div className={dark ? 'dark' : ''}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;