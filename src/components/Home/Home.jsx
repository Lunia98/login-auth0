import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

export default function Home() {
  const { isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <div className="container home_image home">
        <h1 className="home_title">Get your breakfast in 5 minutes!</h1>
      </div>
    )
  );
}
