import React, { createContext, useContext, useCallback, useState } from 'react';

import api from '../services/api';

interface CredentialsProps {
  username: string;
  password: string;
}

interface UserData {
  name: string;
}

interface AuthData {
  token: string;
  user: UserData;
}

interface AuthContextData {
  token: string;
  user: UserData;
  signIn: (credentials: CredentialsProps) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<AuthData>({} as AuthData);

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post('/sessions', {
      login: username,
      password,
    });
    console.log(response);
    if (username === 'guilherme' && password === '123') {
      setData({
        token: '123321',
        user: { name: 'Guilherme Menecucci' },
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ token: data.token, user: data.user, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
