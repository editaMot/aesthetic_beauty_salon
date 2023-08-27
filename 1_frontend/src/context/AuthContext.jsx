import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../firebase';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({ email: '', isAuthenticated: false });

  const login = async (email, password) => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw new Error('Failed to log in');
    }
  };

  const logout = () => auth.signOut();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser({ email: user.email, isAuthenticated: true });
      } else {
        setCurrentUser({ email: '', isAuthenticated: false });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
