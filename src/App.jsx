import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import GithubList from "./GithubList";

function App() {
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
