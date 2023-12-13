import { useEffect, useState } from "react";
import useAxiosPublic from "../../../customHoocks/useAxiosPublic";
import { FaArrowRight } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();
const Projects = () => {
  const axiosPublic = useAxiosPublic();
  const [data, setData] = useState(null);
  useEffect(() => {
    axiosPublic.get("get_projects").then((res) => setData(res.data));
  }, [axiosPublic]);
  console.log(data);
  return (
    <div className="min-h-[100vh] pt-32 text-white">
      {/* all rojects */}
      <div>
        <div className="h-[20vh]">
          <h1 className="text-4xl text-center font-bold">PORTFOLIO</h1>
          <h1></h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {data?.map((item) => (
            <div
              data-aos="zoom-in"
              key={item._id}
              className="bg-[#1C222A] rounded-3xl overflow-hidden h-[700px] "
            >
              <div className="h-[500px] overflow-hidden ">
                <img src={item.thambnailUrl} alt="" />
              </div>
              <div className="px-5">
                <h1 className="text-4xl my-5">
                  <span className="text-yellow-500">{item.ProjectName}</span> -{" "}
                  <span className="text-3xl font-semibold">{item.title}</span>
                </h1>
                <Link to={item._id}><button className="flex items-center text-xl gap-3 font-bold hover:text-yellow-500 transition-all">
                  See project{" "}
                  <span>
                    <FaArrowRight className="text-yellow-400" />
                  </span>
                </button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
