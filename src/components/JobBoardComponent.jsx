import React from "react";

const JobBoardComponent = ({ job }) => {

  const tags = [job.role, job.level];
  if (job.tools) {
    tags.push(...job.tools);
  }
  if (job.languages) {
    tags.push(...job.languages);
  }

  return (
    <div
      className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded ${
        job.featured && "border-l-4 border-teal-500 border-solid"
      } md:flex-row`}
    >
      <div>
        <img
          className="-mt-16 mb-4 w-20 h-20 sm:h-24 sm:w-24 sm:my-0"
          src={job.logo}
          alt={job.company}
        />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-teal-500">
          {job.company}
          {job.new && (
            <span className="bg-teal-500 text-teal-100 text-xs font-bold m-2 py-1 px-2 rounded-full uppercase">
              New!
            </span>
          )}
          {job.featured && (
            <span className="bg-gray-800 text-white text-xs font-bold py-1 px-2 rounded-full uppercase">
              Featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-lg my-2">{job.position}</h2>
        <p className="text-gray-600 text-sm">
          {job.postedAt} · {job.contract} · {job.location}
        </p>
      </div>
      <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-200 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0">
        {tags
          ? tags.map((tag) => (
              <span className="text-sm text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-1 rounded sm:mb-0">
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobBoardComponent;
