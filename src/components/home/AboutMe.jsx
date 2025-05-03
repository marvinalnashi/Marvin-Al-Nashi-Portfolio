import {
    projectExperiences,
    technologies,
    userDetails,
    userDetailsSidebar,
} from "@/src/staticData/home/home";
import {CiUser} from "react-icons/ci";
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
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
                    <CiUser className="text-theme" size={14}/>
                    INTRODUCTION
                </div>
                <div className="mt-7 md:mt-10 section-title">
                    <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-semibold text-black dark:text-white leading-1.27">
                        About <span className="text-theme">me</span>
                    </h2>
                    <p className="max-w-2xl mt-4 md:mt-6 subtitle">
                        I am Marvin Al Nashi, a master's student in Human Computer Interaction at Utrecht University. I
                        am driven by a passion for creating meaningful, functional, and accessible digital experiences
                        at the intersection of software engineering, design, and human-centred innovation. My focus lies
                        at the interplay between psychology and technology. I approach my work with curiosity, critical
                        thinking, and a commitment to improving everyday interactions through thoughtful design and
                        engineering.
                    </p>
                    <p className="max-w-2xl mt-4 md:mt-6 subtitle">
                        Outside of academia, I have pursued an extensive range of professional and personal projects
                        under the umbrella of CodeArise: a long-term initiative comprising desktop environments,
                        operating systems, applications, games, and innovative tools. Notably, I am currently developing
                        CHAOS DE, a flexible and highly customisable desktop environment that will evolve into CHAOS, a
                        complete Linux distribution featuring a cohesive suite of applications. These efforts reflect my
                        deep engagement with systems-level design, development, and usability. My project work extends
                        into industry contexts as well, where I have developed applications for clients during
                        internships and collaborations. I also document my progress and share insights on the CodeArise
                        website and my personal blog.
                    </p>
                    <p className="max-w-2xl mt-4 md:mt-6 subtitle">
                        My academic journey in HCI is a deliberate exploration of how humans interact with systems and
                        how we, as researchers, consultants, developers, and designers, can craft experiences that are
                        aesthetically pleasing, intuitive to use, and aligned with the requirements of all involved
                        stakeholders. I take a human-centred approach to technology development, with a particular focus
                        on context-aware systems, personalisation, and adaptive interfaces. I strive to bridge the gap
                        between human behaviour, stakeholder needs, and industrial standards by translating these
                        insights into designs, software, and systems of high quality, functionality, and design
                        integrity. This academic foundation strengthens the professional work I pursue outside the
                        university environment.
                    </p>
                    <p className="max-w-2xl mt-4 md:mt-6 subtitle">
                        With a multidisciplinary point of view, I aim to integrate design, research, and engineering
                        into work that is both impactful and responsible. My goal is to contribute to the development of
                        technology that is grounded in ethical practice, shaped by human needs, and capable of making a
                        meaningful, global impact. In doing so, I also seek to critically analyse and, where necessary,
                        redefine prevailing industrial standards, raising the bar for quality, usability, and innovation
                        in digital systems.
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
