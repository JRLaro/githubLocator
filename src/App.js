import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";

//functional Component

// function App() {
//   return (
//     <div className="App">
//       <h1> GitHub Finder</h1>
//     </div>
//   );
// }

// Class Component

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
        <User />
        </div>
      </div>
    );
  }
}

export default App;
