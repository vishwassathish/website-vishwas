// module imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

//Components imports
import HomeScreen from "./HomeScreen/HomeScreen";

import "./App.css";

function App() {
  //Routing paths
  // For GET requests

  //call http fetch interceptor
  //BotLiteHTTPInterceptor();


  return (
    <div className="main-div">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
