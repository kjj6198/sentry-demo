import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import GithubList from "./GithubList";

// 1. Github API
// 2. sentry integration
// 3. lighthouse

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Link to="/github">Go to Github List</Link>}
          />
          <Route path="/github" element={<GithubList />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
