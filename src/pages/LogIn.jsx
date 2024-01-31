import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const LogIn = ({ handleLogin }) => {
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMsg, setErrormsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrormsg("");
  }, [user, pwd]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true);
    setPwd("");
    setUser("");
  };
  return (
    <div className="app">
      <>
        {success ? (
          <section>
            <h1>You are logged in!</h1>
            <br />
            <p>
              <Link to="/">Go to Home</Link>
            </p>
          </section>
        ) : (
          <section>
            <p
              ref={errorRef}
              className={errorMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errorMsg}
            </p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                required
                ref={userRef}
                autoComplete="off"
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                value={user}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => {
                  setPwd(e.target.value);
                }}
                value={pwd}
                required
              />
              <button onClick={handleLogin}>Sign In</button>
            </form>
            <p>
              Need an account?
              <br />
              <span className="line">
                <a href="#">Sign Up</a>
              </span>
            </p>
          </section>
        )}
      </>
    </div>
  );
};
