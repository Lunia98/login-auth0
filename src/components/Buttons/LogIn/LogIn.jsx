import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

export default function LogIn() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()} className="LogIn_button">
        Log In
      </button>
    )
  );
}
