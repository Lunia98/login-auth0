import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Welcome() {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Welcome {user.name}</h1>
        <h2>Let's eat!</h2>
      </div>
    )
  );
}
