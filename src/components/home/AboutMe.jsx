import {
  projectExperiences,
  technologies,
  userDetails,
  userDetailsSidebar,
} from "@/src/staticData/home/home";
import { CiUser } from "react-icons/ci";
import AboutTechnologies from "./AboutTechnologies";
import UserDetail from "./UserDetail";
import ProjectExperience from "./ProjectExperience";

const AboutMe = () => {
  return (
    <div
      data-scroll-index="1"
      id="about"
      className="py-3.5  max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl about-section lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <CiUser className="text-theme" size={14} />
          INTRODUCTION
        </div>
        <div className="mt-7 md:mt-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-semibold text-black dark:text-white leading-1.27">
            About <span className="text-theme">me</span>
          </h2>
          <p className="max-w-2xl mt-4 md:mt-6 subtitle">
            Back in 2012, I embarked on my software engineering journey by creating my very first hobby websites in
            HTML, CSS and Wordpress, and developing simple games in Java.
            Since then, I've continuously explored and mastered various programming languages, frameworks, libraries,
            algorithms, principles, and methodologies.
            These tools empower me to create useful, appealing, and impactful software for those around me. I embrace
            feedback and criticism, leveraging it as a powerful motivator to constantly refine and expand my work.
          </p>
          <p className="max-w-2xl mt-4 md:mt-6 subtitle">
            My flagship project, CodeArise, is a comprehensive suite that includes my custom desktop environments, operating systems, applications, and a range of innovative digital solutions.
            In addition to my development work, I maintain a blog where I delve into my project insights and dissect popular technological trends.
            Creativity fuels my passion for technology. Outside of programming, I immerse myself in music production and graphic design.
          </p>
        </div>
        <div className="mt-10 section-content">
          {/*<div className="inline-flex flex-wrap items-center gap-2 mb-5 text-sm md:gap-4">*/}
          {/*  {technologies?.map((tech) => (*/}
          {/*    <AboutTechnologies key={tech?.id} {...tech} />*/}
          {/*  ))}*/}
          {/*</div>*/}

          <ul className="grid mt-4 mb-10 text-sm lg:mt-6 md:grid-cols-2 gap-x-8 gap-y-3">
            {userDetails?.map((singlInfo, i) => (
                <UserDetail key={i} {...singlInfo} />
            ))}
          </ul>

          <ul className="grid grid-cols-2 gap-6 counters md:grid-cols-4 xl:gap-8">
            {projectExperiences?.map((exp, i) => (
              <ProjectExperience key={i} {...exp} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
