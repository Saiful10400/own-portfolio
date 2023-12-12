
import saiful from "../../../../public/bgRemovedSaiful.png";
import { FaBookReader } from "react-icons/fa"; 
import { FaBook } from "react-icons/fa";
import SkillBar from 'react-skillbars';
const AboutMe = () => {
  const skills = [
    { type: 'Html', level: 95 },
    { type: 'Css', level: 87 },
    { type: 'Javascript', level: 80 },
    { type: 'React', level: 75 },
    { type: 'Node js', level: 60 },
    { type: 'Mongo db', level: 72 },
  ];
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <div className="bg-yellow-400 w-[300px] h-[300px] rounded-full overflow-hidden flex justify-center">
          <img className="w-full h-full object-contain" src={saiful} alt="" />
        </div>
        <h1 className="mt-3 text-5xl lg:text-[65px] font-bold">Saiful islam</h1>
        <h1 className=" textarea-md lg:text-lg font-semibold text-yellow-400">
          Web Developer (MEARN stack)
        </h1>
      </div>
      {/* about me sectin */}
      <div>
      <h1 className='text-2xl lg:text-2xl font-bold text-yellow-500'>ABOUT ME</h1>
            <p className='text-lg font-thin'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod quaerat molestias iusto delectus, blanditiis maiores cumque minima doloremque eligendi, dolorum asperiores libero rerum temporibus qui porro repellat numquam odio illo perferendis impedit modi tempore animi sequi. Eius commodi quas, esse voluptate laudantium quod sit praesentium magni cum, modi, molestias delectus consequuntur illum. Incidunt, cumque cupiditate! Magni fuga hic tempore totam eum velit accusamus nemo vel, quasi dolore porro, ea eos officia laboriosam itaque sunt dignissimos veritatis, adipisci similique beatae incidunt ratione? Possimus deleniti sapiente, quibusdam, quis corporis ipsa exercitationem vel iste sit pariatur, quos ipsam minima ad neque nisi blanditiis.</p>
      </div>
      {/* education and skills. */}
      <div className="flex lg:flex-row flex-col lg:gap-8 gap-4 mt-9" >
        <div className="lg:w-1/2 bg-[#1C2229] rounded-3xl min-h-[300px] p-7">
            <h1 className="text-3xl font-bold text-yellow-500">EDUCATION</h1>
            <div className="mt-7 flex flex-col gap-6">
                <div className="flex flex-col">
                   <FaBookReader className="text-4xl text-yellow-500"></FaBookReader>
                   <h1 className="text-base mt-2 font-bold text-gray-200">2020-current</h1>
                   <h1 className="text-xl font-bold text-gray-200">B. Sc. In Geography And Environment</h1>
                </div>
                <div className="flex flex-col">
                   <FaBook className="text-4xl text-yellow-500"></FaBook>
                   <h1 className="text-base mt-2 font-bold text-gray-200">2018-2020</h1>
                   <h1 className="text-xl font-bold text-gray-200">H.S.C (scicence)</h1>
                </div>
                <div className="flex flex-col">
                   <FaBook className="text-4xl text-yellow-500"></FaBook>
                   <h1 className="text-base mt-2 font-bold text-gray-200">2016-2018</h1>
                   <h1 className="text-xl font-bold text-gray-200">S.S.C (scicence)</h1>
                </div>
            </div>
        </div>
        <div className="lg:w-1/2 bg-[#1C2229] rounded-3xl min-h-[300px] p-7">
        <h1 className="text-3xl font-bold text-yellow-500">SKILLS</h1>
        <div>
        <div className="mt-7"><SkillBar  animationDelay={0} skills={skills} height={'44px'} /></div>
        
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
