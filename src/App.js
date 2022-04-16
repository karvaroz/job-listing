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

    return filters.every((filter) => tags.includes(filter));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };
  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const filteredJobs = jobs.filter(filterFunc);

  return (
    <>
      <header className="bg-teal-500">
        <img src="/images/bg-header-desktop.svg" alt="background" />
      </header>
      <div className="container m-auto">
        {filters.length > 0 && (
          <div className="flex bg-white shadow-md -my-20 mb-16 mx-10 p-6 rounded z-10 relative">
            {filters.map((filter) => (
              <span
                onClick={() => handleFilterClick(filter)}
                className="cursor-pointer text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-1 rounded lg:mb-0"
              >
                {filter}{" "}
                <span className="bg-teal-500 text-teal-100 mb-4 p-1">✕</span>
              </span>
            ))}
            <button
              onClick={clearFilters}
              className="font-bold text-gray-500 ml-auto"
            >
              Clear
            </button>
          </div>
        )}

        {/* Traer trabajos dinamicamente */}
        {jobs.length === 0 ? (
          <h2>Loading...</h2>
        ) : (
          filteredJobs.map((job) => (
            <JobBoardComponent
              key={job.id}
              job={job}
              handleTagClick={handleTagClick}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;
