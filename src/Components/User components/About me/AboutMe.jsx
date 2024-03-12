import saiful from "../../../../public/bgRemovedSaiful.png";
import { FaBookReader } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import SkillBar from "react-skillbars";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode } from "react-icons/fa";
AOS.init();
const AboutMe = () => {
  const skills = [
    { type: "Html", level: 95 },
    { type: "Css", level: 87 },
    { type: "Javascript", level: 80 },
    { type: "React", level: 75 },
    { type: "Node js", level: 60 },
    { type: "Mongo db", level: 72 },
  ];
  return (
    <div className="mb-8">
      <div className="overflow-y-hidden">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex justify-center items-center flex-col "
        >
          <div className="bg-yellow-400 w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] mt-20 lg:mt-40 rounded-full overflow-hidden flex justify-center">
            <img className="w-full h-full object-contain" src={saiful} alt="" />
          </div>
          <h1 className="mt-3 text-3xl lg:text-[65px] lg:mt-7 font-bold">
            Saiful islam
          </h1>
          <h1 className=" text-md lg:text-lg mt-4 font-semibold text-yellow-400">
            Web Developer (MEARN stack)
          </h1>
        </div>
      </div>
      {/* about me sectin */}
      <div data-aos="fade-zoom-in" data-aos-duration="2000" className="mt-8">
        <h1 className="text-2xl lg:text-2xl font-bold text-yellow-500">
          ABOUT ME
        </h1>
        <p className="text-base font-bold">
          As an enthusiastic individual deeply passionate about web app
          development, I bring a unique perspective as a non-computer science
          student. My journey merges a passion for web development with a
          diverse academic background. Proficient in React.js, Node.js, and
          Express.js, I specialize in crafting compelling digital experiences.
          With MongoDB and Firebase expertise, my code reflects a fusion of
          innovation and precision. Explore my GitHub repository to witness
          firsthand the depth of my commitment to delivering top-notch web
          development. I am excited about the opportunity to contribute to
          transformative projects, showcasing how my unique perspective as a
          non-CSE student enriches my approach to problem-solving. Eager to
          bring my skills to your team.
        </p>
      </div>
      {/* education and skills. */}
      <div className="overflow-x-hidden">
        <div className="flex lg:flex-row flex-col lg:gap-8 gap-4 mt-9">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="lg:w-1/2 bg-[#1C2229] rounded-3xl min-h-[300px] p-7"
          >
            <h1 className="text-3xl font-bold text-yellow-500">EDUCATION</h1>
            <div className="mt-7 flex flex-col gap-6">
              <div className="flex flex-col">
                <FaBookReader className="text-4xl text-yellow-500"></FaBookReader>
                <h1 className="text-base mt-2 font-bold text-gray-200">
                  2020 - current
                </h1>
                <h1 className="text-xl font-bold text-gray-200">
                  B. Sc. In Geography And Environment
                </h1>
              </div>
              <div className="flex flex-col">
                <FaBook className="text-4xl text-yellow-500"></FaBook>
                <h1 className="text-base mt-2 font-bold text-gray-200">
                  2018 - 2020
                </h1>
                <h1 className="text-xl font-bold text-gray-200">
                  H.S.C (science)
                </h1>
              </div>
              <div className="flex flex-col">
                <FaBook className="text-4xl text-yellow-500"></FaBook>
                <h1 className="text-base mt-2 font-bold text-gray-200">
                  2016 - 2018
                </h1>
                <h1 className="text-xl font-bold text-gray-200">
                  S.S.C (science)
                </h1>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="lg:w-1/2 bg-[#1C2229] rounded-3xl min-h-[300px] p-7"
          >
            <h1 className="text-3xl font-bold text-yellow-500">SKILLS</h1>
            <div>
              <div className="mt-7">
                <SkillBar animationDelay={0} skills={skills} height={"44px"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* experience section. */}
      <div>
        <div className="my-6 text-center mt-24">
          <h1 className="text-yellow-500 text-5xl font-bold">EXPERIENCE</h1>
          <h1 className="text-2xl text-white font-semibold">
            what i have done?
          </h1>
        </div>
        <div>
          <div className="bg-[#1C2229] rounded-3xl p-7 flex gap-16 justify-start items-start">
            <FaLaptopCode className="text-9xl text-yellow-500" />
            <div>
              <h1 className="text-base font-bold">2023 - Present</h1>
              <h1 className="text-xl font-bold">Web Development Apprentice</h1>
              <p className="text-lg font-normal">
                Embarked on a dynamic learning journey in web app development,
                dedicating the past six months to mastering technologies such as
                React.js, Node.js, and Express.js. Acquired a solid foundation
                in HTML and CSS over the past year. Actively engaged in personal
                projects to apply theoretical knowledge, fostering a hands-on
                approach to problem-solving and code implementation.
                Continuously exploring and integrating emerging technologies to
                enhance web development skills. Eager to contribute this
                evolving skill set to impactful projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
