import { Suspense, useState } from "react";
import Notification from "./Notification";

// list??

// error handling???
export default function GithubList() {
  const [repos, setRepos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query");
    
    fetch(`https://api.github.com/search/repositories?q=${query}`)
      .then((res) => res.json())
      .then((data) => setRepos(data.items));
  };

  return (
    <>
      <Suspense fallback={<div></div>}>
        <Notification />
      </Suspense>
      <button className="btn btn-primary">付費訂閱</button>
      <form method="POST" onSubmit={handleSubmit} className="mb-5">
        <div className="">
          <label htmlFor="query" className="mb-3 form-label text-left">
            <strong>請輸入關鍵字搜尋 Github Repo</strong>
          </label>
          <div className="input-group">
            <input
              id="query"
              className="form-control w-50 inline-block"
              type="search"
              name="query"
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              搜尋
            </button>
          </div>
        </div>
      </form>
      <div className="list-group">
        {repos.map((repo) => (
          <div key={repo.id} className="list-group-item">
            <h3>
              <a href={repo.html_url}>{repo.name}</a>
            </h3>
            <p>{repo.description}</p>
            <img src={repo.owner.avatar_url} width="100" height="100" />
            <div>
              {repo.topics.length > 0 &&
                repo.topics.map((topic) => (
                  <span className="badge bg-secondary mx-1" key={topic}>
                    {topic}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
