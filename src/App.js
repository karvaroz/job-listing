import React, { useState, useEffect } from "react";
import JobBoardComponent from "./components/JobBoardComponent";
import data from "./assets/data.json";

console.log(data);

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobs(data), []);

  const filterFunc = ({ role, level, tools, languages }) => {
    
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }
     
    if (languages) {
      tags.push(...languages);
    }

    return tags.some(tag => filters.includes(tag));
  };

  const filteredJobs = jobs.filter(filterFunc);

  return (
    <div className="App bg-teal-50">
      <header className="bg-teal-500">
        <img src="/images/bg-header-desktop.svg" alt="background" />
      </header>

      {/* Traer trabajos dinamicamente */}
      {jobs.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        filteredJobs.map((job) => <JobBoardComponent key={job.id} job={job} />)
      )}
    </div>
  );
}

export default App;
