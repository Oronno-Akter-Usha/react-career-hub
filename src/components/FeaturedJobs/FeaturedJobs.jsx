// import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div>
              <div className="text-center mt-8 md:mt-32">
                <h2 className="text-5xl font-bold">Featured Jobs: {jobs.length}</h2>
                <p className="mt-4 mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ?  'hidden' : ''}>
                <button onClick={() => setDataLength(jobs.length)} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white mx-auto">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;