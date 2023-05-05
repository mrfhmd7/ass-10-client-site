import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const useFirebase = () => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  const signInUsingGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signInUsingGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, gitProvider);
  };

  const signUpUsingPassword = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const setUserName = (userName) => {
    console.log(userName);
    updateProfile(auth.currentUser, {
      displayName: userName,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err.message));
  };

  const signInUsingPass = (email, password) => signInWithEmailAndPassword(auth, email, password);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userInfo) => {
      setLoading(true);
      if (userInfo) {
        setUser(userInfo);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logOut = () => {
    setError('');
    setLoading(true);
    signOut(auth)
      .then(setUser({}))
      .finally(() => setLoading(false));
  };

  return {
    isLoading,
    setLoading,
    user,
    setUser,
    error,
    setError,
    signInUsingGoogle,
    logOut,
    signUpUsingPassword,
    setUserName,
    signInUsingPass,
    signInUsingGithub,
  };
};

export default useFirebase;
