import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Customer from "./pages/Customer";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <div className="App">
      <Header isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} />
      <Customer isOpen={isSidebarOpen} />
    </div>
  );
}

export default App;
