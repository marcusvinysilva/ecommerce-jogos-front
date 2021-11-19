import React, { createContext, useState, useEffect } from "react";
import api from "../api";
import history from "../history";
const Authcontext = createContext({});

function Authprovider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tokenultimate = localStorage.getItem("tokenultimate");

    if (tokenultimate) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(
        tokenultimate
      )}`;
      setAuthenticated(true);
    }

    setLoading(true);
  }, []);

  async function handleLogin(email, password) {
    const {
      data: { tokenultimate },
    } = await api.post("/auth/signin", { email: email, password: password });

    localStorage.setItem("tokenultimate", JSON.stringify(tokenultimate));
    api.defaults.headers.Authorization = `Bearer ${tokenultimate}`;
    setAuthenticated(true);
    history.push("/userpage");
  }

  async function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("tokenultimate");
    api.defaults.headers.Authorization = undefined;
    history.push("/");
  }
  return (
    <Authcontext.Provider value={{ authenticated, handleLogin, handleLogout }}>
      {children}
    </Authcontext.Provider>
  );
}

export { Authcontext, Authprovider };
