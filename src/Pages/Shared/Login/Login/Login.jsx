import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import Shared from '../Shared/Shared';
import './Login.css';

function Login() {
  const {
    signInUsingGoogle,
    setError,
    error,
    setLoading,
    signInUsingPass,
    setUser,
    signInUsingGithub,
    isLoading,
  } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valimsg, setvalimsg] = useState('-');

  const redirectURI = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === '' || email === '') {
      setvalimsg('Please Give Valid Email and Password');
      setValidated(true);
    } else {
      setValidated(false);
      signInUsingPass(email, password)
        .then((res) => {
          setUser(res.user);
          navigate(redirectURI);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };

  const handleGoogleSignIn = () => {
    setError('');
    signInUsingGoogle()
      .then(() => navigate(redirectURI))
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };
  const handleGitSignIn = () => {
    setError('');
    signInUsingGithub()
      .then(() => navigate(redirectURI))
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div id="login">
      <div className="shared">
        <Shared />
      </div>
      <div id="login-form">
        <h1>Please Login 😄</h1>
        <input onBlur={(e) => setEmail(e.target.value)} placeholder="Your Email" type="email" />
        <input
          onBlur={(e) => setPassword(e.target.value)}
          placeholder="Your password"
          type="password"
        />
        <p
          className="error-show"
          style={validated || error ? { visibility: 'visible' } : { visibility: 'hidden' }}
        >
          {error || valimsg}
        </p>
        {isLoading ? (
          <Spinner animation="border" variant="success" />
        ) : (
          <>
            <Button variant="outline-primary" onClick={handleSubmit}>
              Sign In
            </Button>
            <p>
              New Here? <NavLink to="/registration">Register</NavLink>
            </p>
            <div className="google-button">
              <Button variant="outline-warning" onClick={handleGoogleSignIn}>
                <AiFillGoogleCircle size={20} /> Sign in using Google
              </Button>
            </div>
            <div className="github-button">
              <Button variant="outline-warning" onClick={handleGitSignIn}>
                <AiFillGithub size={20} /> Sign in using Github
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
