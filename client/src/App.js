import React from "react";

import "./app.css";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import RecordList from "./components/recordList";
import { Login } from "./components/login";

function Pannal(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <RecordList />;
  }
  return <Login />;
}

const App = () => {


  return (
    <div>
      <Routes>
        <Route exact path="*" element={<Pannal isLoggedIn={false} />} />
      </Routes>
    </div>
  );
};

export default App;
