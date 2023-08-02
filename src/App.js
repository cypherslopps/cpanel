import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { AuthContext } from './providers/auth-provider/auth-provider';
import { 
  Guest, 
  Dashboard,
  Accounts  
} from './pages';
// import { ProtectedRoute } from './components';
import { APP_NAME } from './config';

function App() {
  document.title = `${APP_NAME}`;
  
  return (      
    <main className='font-sans text-gray-900'>
      <Routes>
        <Route path="/*" element={<Guest />} />
        <Route path="dashboard/*" element={<Dashboard />}/>
        <Route path="accounts/*" element={<Accounts />} />
      </Routes>
    </main>
  );
}

export default App;
