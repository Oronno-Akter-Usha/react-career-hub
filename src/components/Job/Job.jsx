import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description} = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="logo" className="h-12 w-36" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#9873FF]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#9873FF]">{job_type} </button>
                </div>

                <div className="mt-4 flex">
                    <h2 className="flex mr-6"><MdLocationOn className=" text-2xl mr-2"/> {location}</h2>
                    <h2 className="flex"><AiOutlineDollarCircle className=" text-2xl mr-2"/> {salary}</h2>
                </div>

                <div className="card-actions">
                    <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">View  Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;