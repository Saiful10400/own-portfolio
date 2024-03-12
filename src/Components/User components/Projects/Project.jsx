import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useAxiosPublic from "../../../customHoocks/useAxiosPublic";
import { FaGithub } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";
const Project = () => {
  const axiosPublic = useAxiosPublic();
  const url = useLocation();
  const id = url.pathname?.split("/")[2];
  const [data, setData] = useState(null);
  useEffect(() => {
    axiosPublic.get(`get_project?id=${id}`).then((res) => setData(res.data));
  }, [axiosPublic, id]);
 
  return (
    <div className="mb-8">
      <div className="pt-32">
        <div className="flex justify-between items-center mb-6">
          <a href={data?.repoLink}>
            <button className="btn btn-sm text-black lg:btn-secondary bg-yellow-400 border-none hover:bg-yellow-300">
              Github link{" "}
              <span>
                <FaGithub />
              </span>
            </button>
          </a>
          <a href={data?.liveLink}>
            <button className="btn btn-sm text-black lg:btn-secondary bg-yellow-400 border-none hover:bg-yellow-300">
              Live preview{" "}
              <span>
                <BsFillEyeFill></BsFillEyeFill>
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className="w-full h-[250px] lg:h-[600px]">
        <img
          className="w-full h-full object-cover"
          src={data?.coverUrl}
          alt=""
        />
      </div>
      <div className="flex lg:flex-row flex-col-reverse mt-6 lg:mt-0">
        <div className="lg:w-4/5 min-h-[50vh] mt-[100px] ">
          <h1 className="lg:text-5xl text-4xl font-bold text-yellow-500 mb-5">
            {data?.title}
          </h1>
          <p className="lg:text-lg text-base font-normal">{data?.about}</p>
          <div className="my-14">
            <h1 className="text-3xl lg:text-4xl font-bold text-yellow-500 mb-5">
              Tech that i use
            </h1>
            <p className="lg:text-lg text-base font-normal">
              {data?.technology}
            </p>
          </div>
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-yellow-500 mb-5">
              Summery
            </h1>
            <p className="lg:text-lg text-base font-normal">{data?.summery}</p>
          </div>
        </div>
        <div className="lg:w-1/5 lg:h-max py-6 rounded-xl lg:relative lg:-top-14 bg-[#1C222A] px-[40px]">
          <h1 className="text-3xl  font-semibold">Information</h1>
          <div className="mt-[60px] flex flex-col gap-[20px] hover:shadow-2xl shadow-black transition-all">
            <div className="bg-[#111122] p-[25px]">
              <h1 className="font-bold text-lg">Project name:</h1>
              <h1 className="font-thin text-base mt-4">{data?.ProjectName}</h1>
            </div>
            <div className="bg-[#111122] p-[25px]">
              <h1 className="font-bold text-lg">Duration:</h1>
              <h1 className="font-thin text-base mt-4">
                {data?.duration} days
              </h1>
            </div>
            <div className="bg-[#111122] p-[25px]">
              <h1 className="font-bold text-lg">Date:</h1>
              <h1 className="font-thin text-base mt-4">{data?.startingDate}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
