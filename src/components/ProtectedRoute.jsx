import React, { useState } from 'react';
import { useAuth } from '../providers/AuthProvider';

function ProtectedRoute({ children }) {
  const { user, error } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {children}
    </>
  )
}

export default ProtectedRoute