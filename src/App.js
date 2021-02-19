import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div></div>;
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Welcome />
    </div>
  );
}

export default App;
