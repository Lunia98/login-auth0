import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

export default function LogOut() {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <button onClick={() => logout()} className="LogOut_button">
        Log Out
      </button>
    )
  );
}
