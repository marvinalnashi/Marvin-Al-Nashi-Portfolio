import BrandingIcon from "@/src/components/icons/home/BrandingIcon";
import EmailIcon from "@/src/components/icons/home/EmailIcon";
import LocationIcon from "@/src/components/icons/home/LocationIcon";
import PhoneIcon from "@/src/components/icons/home/PhoneIcon";
import SeoIcon from "@/src/components/icons/home/SeoIcon";
import UiUxIcon from "@/src/components/icons/home/UiUxIcon";
import WebDevIcon from "@/src/components/icons/home/WebDevIcon";
import {
    FaBlog,
    FaBriefcase,
    FaFolderOpen,
    FaGraduationCap,
    FaRegEnvelopeOpen,
} from "react-icons/fa";
import {GrTasks} from "react-icons/gr";
import {BiCheckDouble, BiCommentCheck} from "react-icons/bi";

import figmaImage from "@/public/assets/img/skill/figma.svg";
import webflowImage from "@/public/assets/img/skill/webflow.svg";
import tailwindImage from "@/public/assets/img/skill/tailwind.svg";
import htmlImage from "@/public/assets/img/skill/html.svg";
import cssImage from "@/public/assets/img/skill/css.svg";
import jsImage from "@/public/assets/img/skill/js.svg";
import jqueryImage from "@/public/assets/img/skill/jquery.svg";

import partner1Image from "@/public/assets/img/partners/logo1.svg";
import partner2Image from "@/public/assets/img/partners/logo2.svg";
import partner3Image from "@/public/assets/img/partners/logo3.svg";
import partner4Image from "@/public/assets/img/partners/logo4.svg";

import languageLogo1 from "@/public/assets/img/stack/java.png"
import languageLogo2 from "@/public/assets/img/stack/htmlcssjs.png"
import languageLogo3 from "@/public/assets/img/stack/ts.png"
import languageLogo4 from "@/public/assets/img/stack/python.png"
import languageLogo5 from "@/public/assets/img/stack/php.png"
import languageLogo6 from "@/public/assets/img/stack/dart.png"
import languageLogo7 from "@/public/assets/img/stack/go.png"
import languageLogo8 from "@/public/assets/img/stack/sql.png"

import frameworkLogo1 from "@/public/assets/img/stack/vue.png"
import frameworkLogo2 from "@/public/assets/img/stack/angular.png"
import frameworkLogo3 from "@/public/assets/img/stack/react.png"
import frameworkLogo4 from "@/public/assets/img/stack/fastapi.png"
import frameworkLogo5 from "@/public/assets/img/stack/laravel.png"
import frameworkLogo6 from "@/public/assets/img/stack/spring.png"
import frameworkLogo7 from "@/public/assets/img/stack/svelte.png"
import frameworkLogo8 from "@/public/assets/img/stack/nest.png"
import frameworkLogo9 from "@/public/assets/img/stack/express.png"
import frameworkLogo10 from "@/public/assets/img/stack/next.png"
import frameworkLogo11 from "@/public/assets/img/stack/reactnative.png"
import frameworkLogo12 from "@/public/assets/img/stack/flutter.png"

import userImage from "@/public/assets/img/user-sidebar-thumb.png";
import userImageLight from "@/public/assets/img/user-sidebar-thumb-light.png";

import portfolioImage1Thumb from "@/public/assets/img/portfolio/portfolio-img1.png";
import portfolioImage1 from "@/public/assets/img/portfolio/portfolio-img1.png";

import portfolioImage2Thumb from "@/public/assets/img/portfolio/portfolio-img2.png";
import portfolioImage2 from "@/public/assets/img/portfolio/portfolio-img2.png";

import portfolioImage3Thumb from "@/public/assets/img/portfolio/portfolio-img3.png";
import portfolioImage3 from "@/public/assets/img/portfolio/portfolio-img3.png";

import portfolioImage4Thumb from "@/public/assets/img/portfolio/portfolio-img4.png";
import portfolioImage4 from "@/public/assets/img/portfolio/portfolio-img4.png";

import projectInner1Image from "@/public/assets/img/blog/article-inner1.png";
import projectInner2Image from "@/public/assets/img/blog/article-inner2.png";

import blog1Thumbnail from "@/public/assets/img/blog/proj-chaos.png";
import blog1Image from "@/public/assets/img/blog/proj-chaos.png";
import blog2Thumbnail from "@/public/assets/img/blog/cass.png";
import blog2Image from "@/public/assets/img/blog/cass.png";
import blog3Thumbnail from "@/public/assets/img/blog/cahub.png";
import blog3Image from "@/public/assets/img/blog/cahub.png";
import blog4Thumbnail from "@/public/assets/img/blog/projectprincipium.png";
import blog4Image from "@/public/assets/img/blog/projectprincipium.png";
import blog5Thumbnail from "@/public/assets/img/blog/uml2openapi.png";
import blog5Image from "@/public/assets/img/blog/uml2openapi.png";

import author1 from "@/public/assets/img/testimonial/author1.png";
import author2 from "@/public/assets/img/testimonial/author2.png";
import {IoHomeOutline} from "react-icons/io5";
import TestIcon from "@/src/components/icons/home/TestIcon";
import DesignIcon from "@/src/components/icons/home/DesignIcon";

export const introduce = {
    iconBox: {
        Icon: <IoHomeOutline className="text-theme" size={14}/>,
        title: "WHO I AM",
    },
    heading: {
        heading1: "I aim to make",
        heading2: "a meaningful impact",
    },
    desc: (
        <p>
            As a software engineer and Human Computer Interaction master’s student, I am passionate about designing and
            developing human-centred technologies. Through my academic research and personal projects, I strive to
            deliver innovative, functional, and accessible solutions that address real-world needs and raise the
            standards of systems and software.
        </p>
    ),
    jobs: [
        // {
        //   id: 1,
        //   title: "Available for work",
        //   icon: <BiCheckDouble size={25} className="text-theme mr-1" />,
        // },
        // {
        //   id: 2,
        //   title: "Full Time Job",
        //   icon: <BiCheckDouble size={25} className="text-theme mr-1" />,
        // },
    ],
};

export const languages = [
    {
        imgUrl: languageLogo1,
        altText: "Partner Name 1",
        link: "#",
    },
    {
        imgUrl: languageLogo2,
        altText: "Partner Name 2",
        link: "#",
    },
    {
        imgUrl: languageLogo3,
        altText: "Partner Name 3",
        link: "#",
    },
    {
        imgUrl: languageLogo4,
        altText: "Partner Name 4",
        link: "#",
    },
    {
        imgUrl: languageLogo5,
        altText: "Partner Name 5",
        link: "#",
    },
    {
        imgUrl: languageLogo6,
        altText: "Partner Name 6",
        link: "#",
    },
    {
        imgUrl: languageLogo7,
        altText: "Partner Name 7",
        link: "#",
    },
    {
        imgUrl: languageLogo8,
        altText: "Partner Name 8",
        link: "#",
    },
];

export const frameworks = [
    {
        imgUrl: frameworkLogo1,
        altText: "Partner Name 1",
        link: "#",
    },
    {
        imgUrl: frameworkLogo2,
        altText: "Partner Name 2",
        link: "#",
    },
    {
        imgUrl: frameworkLogo3,
        altText: "Partner Name 3",
        link: "#",
    },
    {
        imgUrl: frameworkLogo4,
        altText: "Partner Name 4",
        link: "#",
    },
    {
        imgUrl: frameworkLogo5,
        altText: "Partner Name 5",
        link: "#",
    },
    {
        imgUrl: frameworkLogo6,
        altText: "Partner Name 6",
        link: "#",
    },
    {
        imgUrl: frameworkLogo7,
        altText: "Partner Name 7",
        link: "#",
    },
    {
        imgUrl: frameworkLogo8,
        altText: "Partner Name 8",
        link: "#",
    },
    {
        imgUrl: frameworkLogo9,
        altText: "Partner Name 9",
        link: "#",
    },
    {
        imgUrl: frameworkLogo10,
        altText: "Partner Name 10",
        link: "#",
    },
    {
        imgUrl: frameworkLogo11,
        altText: "Partner Name 11",
        link: "#",
    },
    {
        imgUrl: frameworkLogo12,
        altText: "Partner Name 12",
        link: "#",
    },
];

export const technologies = [
    {
        id: 1,
        title: "HTML5 & CSS3",
        skill: "94",
        url: "#",
    },
    {
        id: 2,
        title: "Bootstrap",
        skill: "98",
        url: "#",
    },
    {
        id: 3,
        title: "TailwindCSS",
        skill: "90",
        url: "#",
    },
];

export const userDetails = [
    {
        field: "Phone",
        value: "+31 6 20 26 18 89",
    },
    {
        field: "E-mail",
        value: "contact@codearise.com",
    },
    {
        field: "Languages",
        value: "English, Dutch, Arabic",
    },
    {
        field: "GitHub",
        value: "github.com/marvinalnashi",
    },
];

export const userDetailsSidebar = {
    userImage: userImage,
    userImageLight: userImageLight,
    userName: "Marvin Al Nashi",
    designations: ["I develop applications", "I build systems", "I write articles", "I create websites", "I design interfaces", "I explore technologies"],
    basicInfo: [
        {
            id: 1,
            field: "Location",
            value: "Alblasserdam, NL",
        },
        {
            id: 2,
            field: "Organisation",
            value: "CodeArise",
        },
        {
            id: 3,
            field: "Occupational status",
            value: "Student/Founder",
        },
        {
            id: 4,
            field: "Work location preference",
            value: "Hybrid",
        },
        {
            id: 5,
            field: "Main website",
            value: "codearise.com",
        },
    ],
    skillsInfo: [
        {
            id: 1,
            name: "HTML",
            value: 90,
        },
        {
            id: 2,
            name: "CSS",
            value: 80,
        },
        {
            id: 3,
            name: "JS",
            value: 90,
        },
        {
            id: 4,
            name: "PHP",
            value: 90,
        },
    ],
};

export const projectExperiences = [
    {
        title: "Total projects",
        count: 6,
        postFix: true,
    },
    {
        title: "Active projects",
        count: 5,
        postFix: true,
    },
    {
        title: "Ongoing case studies",
        count: 2,
        postFix: true,
    },
    {
        title: "Articles written",
        count: 20,
        postFix: true,
    },
];

export const services = {
    servicesHeading: {
        icon: <FaBriefcase className="text-theme"/>,
        title: "SKILLS",
        heading: "My areas of",
        coloredHeading: "expertise",
        description:
            "I combine technical knowledge, human-centred thinking, and research skills to create meaningful and innovative digital solutions.",
    },
    servicesData: [
        {
            id: 1,
            number: "01",
            title: "Software Engineering",
            desc: "I design and develop systems and applications for a variety of devices and platforms with a focus on functionality, scalability, and long-term maintainability.",
            icon: <SeoIcon/>,
        },
        {
            id: 2,
            number: "02",
            title: "Web Development",
            desc: "I create accessible and user-friendly websites and web applications that work seamlessly across different devices and platforms.",
            icon: <WebDevIcon/>,
        },
        {
            id: 3,
            number: "03",
            title: "Human-centred design",
            desc: "I apply design principles and methods that put users first, translating human behaviour and needs into practical and effective technological solutions.",
            icon: <UiUxIcon/>,
        },
        {
            id: 4,
            number: "04",
            title: "Research and innovation",
            desc: "I explore new ideas through research in HCI and related fields, applying these insights to improve the design, development, and evaluation of systems and software.",
            icon: <BrandingIcon/>,
        },
        {
            id: 5,
            number: "05",
            title: "Software testing and quality assurance",
            desc: "I critically test and review my work to strengthen its reliability, usability, and compliance with standards, integrating feedback to refine and enhance product quality.",
            icon: <TestIcon/>,
        },
        {
            id: 6,
            number: "06",
            title: "Systems architecture and design",
            desc: "I design scalable and modular software architectures that translate complex functional and non-functional requirements into coherent development strategies.",
            icon: <DesignIcon/>,
        },
    ],
};

export const skills = {
    skillsHeading: {
        icon: <FaGraduationCap className="text-theme"/>,
        title: "PROGRESS",
        heading: "My current",
        coloredHeading: "projects",
        description:
            "I create operating systems, applications, desktop environments, kernels, websites, games, designs, and more! I also maintain a blog and write about the latest technologies and the products I release for the world to experience and enjoy.",
    },
    skillsData: [
        {
            image: figmaImage?.src,
            percent: 90,
            name: "Figma",
        },
        {
            image: webflowImage?.src,
            percent: 85,
            name: "Webflow",
        },
        {
            image: tailwindImage?.src,
            percent: 90,
            name: "Tailwind",
        },
        {
            image: htmlImage?.src,
            percent: 95,
            name: "HTML5",
        },
        {
            image: cssImage?.src,
            percent: 95,
            name: "CSS3",
        },
        {
            image: jsImage?.src,
            percent: 75,
            name: "JavaScript",
        },
        {
            image: jqueryImage?.src,
            percent: 70,
            name: "jQuery",
        },
    ],
};

export const resume = {
    resumeHeading: {
        icon: <FaFolderOpen className="text-theme"/>,
        title: "RESUME",
        heading: "My",
        coloredHeading: "work experience",
        description:
            "Throughout my professional journey, I have held various IT roles across different companies, where I developed a versatile and comprehensive skill set.",
    },
    resumeData: [
        {
            platform: "WeAreFrank!",
            duration: "February 2024 - September 2024",
            position: "Software Engineer/Integration Specialist",
            description: [
                "Researched and prototyped a solution for generating OpenAPI specifications from UML diagrams during my internship.",
                "Continued development of the prototype after my internship and transformed it into a Minimum Viable Product (MVP).",
                "Extended the application to support real-world API design and integration workflows."
            ]
        },
        {
            platform: "Intermix Management",
            duration: "February 2023 - June 2023",
            position: "Intern Web Developer",
            description: [
                "Researched the implementation of various testing strategies across the phases of the Software Development Life Cycle (SDLC).",
                "Rebuilt the product relations management section of the company’s Product Information Management (PIM) system, improving the user experience, functionality, and maintainability."
            ]
        },
    ],
};

export const educations = {
    educationsHeading: {
        icon: "",
        title: "",
        heading: "My",
        coloredHeading: "education",
        description:
            "My academic background combines software engineering, human-centred design, and applied research. I continue to develop my expertise through interdisciplinary studies, practical experience, and specialised coursework.",
    },
  educationsData: [
    {
      institution: "Utrecht University",
      duration: "2024 – Present",
      degree: "MSc in Information Science",
      specialisation: "Study programme: Human Computer Interaction",
      description: [
        "Engaging with research and practice in human-centred design, interactive system development, and user experience evaluation.",
        "Working on academic and applied projects that involve designing, prototyping, and evaluating interactive systems through empirical and user-centred methods.",
        "Relevant coursework includes quantitative and qualitative research methods in HCI, cognitive and social psychology, and requirements engineering."
      ]
    },
    {
      institution: "University of Applied Sciences Leiden",
      duration: "2020 – 2024",
      degree: "BSc in Information Technology",
      specialisation: "Specialisation: Software Engineering",
      description: [
        "Studied core topics in software development, architecture, algorithms, and system design.",
        "Completed two internships focused on web development, software testing, and improving systems.",
        "Completed minors in Cambridge English (C1 level) and Building Research Platforms.",
        "Relevant coursework included software architecture, algorithms and data structures, usability engineering, frameworks, and software testing."
      ]
    }
  ],
};

export const portfolio = {
    portfolioHeading: {
        icon: <GrTasks className="text-theme"/>,
        title: "PORTFOLIO",
        heading: "Featured ",
        coloredHeading: "Projects",
        description:
            "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
    },
    projectsData: [
        {
            id: 1,
            image: {
                thumbnail: portfolioImage1Thumb?.src,
                image: portfolioImage1?.src,
                thumbnailText1: "Design",
                thumbnailText2: "Specialisation",
            },
            type: "Branding",
            title: "Three wine glasses filled with candies",
            slug: "three-wine-glasses-filled-with-candies",
            projectHeading: {
                icon: <GrTasks className="text-theme"/>,
                title: "Project Details",
            },
            projectValues: [
                {
                    field: "CLIENT",
                    value: "Envato Theme",
                },
                {
                    field: "SERVICES:",
                    value: "Tips & Tricks, Design",
                },
                {
                    field: "DURATION",
                    value: "108 hrs",
                },
            ],
            projectDescription: {
                descriptionTitle: "Project Description",
                description:
                    "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
                descriptionLists: [
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
                ],
                projectImage: [projectInner1Image?.src, projectInner2Image?.src],
            },
        },
        {
            id: 2,
            image: {
                thumbnail: portfolioImage2Thumb?.src,
                image: portfolioImage2?.src,
                thumbnailText1: "Design",
                thumbnailText2: "Specialization",
            },
            type: "Branding",
            title: "Three wine glasses filled with candies",
            slug: "three-wine-glasses-filled-with-candies",
            projectHeading: {
                icon: <GrTasks className="text-theme"/>,
                title: "Project Details",
            },
            projectValues: [
                {
                    field: "CLIENT",
                    value: "Envato Theme",
                },
                {
                    field: "SERVICES",
                    value: "Tips & Tricks, Design",
                },
                {
                    field: "DURATION",
                    value: "108 hrs",
                },
            ],
            projectDescription: {
                descriptionTitle: "Project Description",
                description:
                    "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
                descriptionLists: [
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
                ],
                projectImage: [projectInner1Image?.src, projectInner2Image?.src],
            },
        },
        {
            id: 3,
            image: {
                thumbnail: portfolioImage3Thumb?.src,
                image: portfolioImage3?.src,
                thumbnailText1: "Design",
                thumbnailText2: "Specialization",
            },
            type: "Branding",
            title: "Three wine glasses filled with candies",
            slug: "three-wine-glasses-filled-with-candies",
            projectHeading: {
                icon: <GrTasks className="text-theme"/>,
                title: "Project Details",
            },
            projectValues: [
                {
                    field: "CLIENT",
                    value: "Envato Theme",
                },
                {
                    field: "SERVICES",
                    value: "Tips & Tricks, Design",
                },
                {
                    field: "DURATION",
                    value: "108 hrs",
                },
            ],
            projectDescription: {
                descriptionTitle: "Project Description",
                description:
                    "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
                descriptionLists: [
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
                ],
                projectImage: [projectInner1Image?.src, projectInner2Image?.src],
            },
        },
        {
            id: 4,
            image: {
                thumbnail: portfolioImage4Thumb?.src,
                image: portfolioImage4?.src,
                thumbnailText1: "Design",
                thumbnailText2: "Specialization",
            },
            type: "Branding",
            title: "Three wine glasses filled with candies",
            slug: "three-wine-glasses-filled-with-candies",
            projectHeading: {
                icon: <GrTasks className="text-theme"/>,
                title: "Project Details",
            },
            projectValues: [
                {
                    field: "CLIENT",
                    value: "Envato Theme",
                },
                {
                    field: "SERVICES",
                    value: "Tips & Tricks, Design",
                },
                {
                    field: "DURATION",
                    value: "108 hrs",
                },
            ],
            projectDescription: {
                descriptionTitle: "Project Description",
                description:
                    "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
                descriptionLists: [
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
                ],
                projectImage: [projectInner1Image?.src, projectInner2Image?.src],
            },
        },
    ],
};

export const projects = {
    projectsHeading: {
        icon: <FaBlog className="text-theme"/>,
        title: "WORK",
        heading: "My",
        coloredHeading: "projects",
        description:
            "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
    },
    projectsData: [
        {
            image: {
                thumbnail: blog1Thumbnail?.src,
                image: blog1Image?.src,
            },
            category: "UI Design",
            state: "testestest",
            title: "CHAOS",
            slug: "chaos",
            projectMetadata: {
                projectHeading: {
                    icon: <FaBlog className="text-theme"/>,
                    title: "Blog Details",
                },
                projectValues: [
                    {
                        field: "CATEGORY:",
                        value: "Operating Systems and Desktop Environments",
                    },
                    {
                        field: "RELEASE DATE:",
                        value: "TBA",
                    },
                ],
                projectDescription: {
                    descriptionTitle: "CHAOS (CodeArise Hybrid Adaptive Operating System)",
                    content: [
                        { type: "paragraph", text: "CHAOS, short for CodeArise Hybrid Adaptive Operating System, is a modular desktop environment and future operating system designed to adapt to a wide range of user needs and workflows through flexibility, scalability, and customisation." },
                        { type: "paragraph", text: "The project begins with CHAOS DE, a desktop environment that can be installed on top of any Linux distribution. It offers a highly configurable interface that adapts to various professional contexts, working styles, and user preferences. Users can adjust system behaviours, layouts, themes, sound schemes, launchers, and application bundles to suit specific tasks or personal preferences. Rather than being constrained to predefined roles, users can configure their environment for development, design, media production, research, or general use." },
                        { type: "paragraph", text: "A core feature of CHAOS is its ability to support multiple configurations within a single installation. Users can install and manage different editions of the system, each with its own combination of user interface components, software packages, services, and behaviours. These editions can be used independently or combined into a hybrid setup. Switching between configurations does not affect the underlying system, allowing users to move seamlessly between roles or tasks while maintaining a consistent experience." },
                        { type: "paragraph", text: "The system is built on a component-based architecture that separates the core functionality from the user interface and feature layers. This structure makes it possible to update or swap out parts of the system without compromising stability. It also allows users to install custom modules to extend and fine-tune the environment according to their own needs without modifying the base system." },
                        { type: "paragraph", text: "CHAOS is designed to be accessible, customisable, and efficient. It prioritises usability and performance while providing detailed control options for both casual and advanced users. The system scales well across a variety of hardware platforms and usage scenarios, from personal devices to workstations in enterprises." },
                        { type: "paragraph", text: "In the longer term, CHAOS will evolve into a complete Linux distribution. This includes the development of a dedicated window manager and an optimised kernel, along with other core components. These elements will follow the same design principles: modularity, adaptability, and consistency across the system." },
                        {
                            type: "list",
                            title: "Core Features and Principles",
                            items: [
                                "Multi-configuration support: Switch between different configurations tailored for specific tasks, workflows, or professional roles fluidly.",
                                "Modular architecture: Core components, user interface elements, and features are separated and can easily be customised, enhanced, or replaced.",
                                "Cross-distribution compatibility: CHAOS DE runs on top of most Linux distributions, allowing users to adopt it without changing their base system. CHAOS as a standalone operating system is a Linux distribution, making it compatible with a wide range of devices.",
                                "Customisation without compromise: Exercise deep control over themes, layouts, launchers, interactions, and more without sacrificing system performance or stability.",
                                "Expandable ecosystem: Add-ons, modules, themes, and configurations can be created, shared, and applied by users."
                            ]
                        },
                        { type: "paragraph", text: "CHAOS is intended for users who expect their computing environment to support the way they work." }
                    ],
                    projectImage: [projectInner2Image?.src, projectInner1Image?.src]
                }
            },
        },
        // {
        //   image: {
        //     thumbnail: blog2Thumbnail?.src,
        //     image: blog2Image?.src,
        //   },
        //   category: "UI Design",
        //   date: "03 May 2023",
        //   title: "CASS",
        //   slug: "cass",
        //   projectMetadata: {
        //     projectHeading: {
        //       icon: <FaBlog className="text-theme" />,
        //       title: "Blog Details",
        //     },
        //     projectValues: [
        //       {
        //         field: "POSTED BY",
        //         value: "Adrinao Smith",
        //       },
        //       {
        //         field: "CATEGORY:",
        //         value: "Tips & Tricks, Design",
        //       },
        //       {
        //         field: "POSTED ON:",
        //         value: "Noveber 01, 2023",
        //       },
        //     ],
        //     projectDescription: {
        //       descriptionTitle: "CodeArise System Suite",
        //       description:
        //         "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
        //       descriptionListsTitle: "Benifits of coffee",
        //       descriptionLists: [
        //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
        //         "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        //         "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        //       ],
        //       projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        //     },
        //   },
        // },
        // {
        //   image: {
        //     thumbnail: blog3Thumbnail?.src,
        //     image: blog3Image?.src,
        //   },
        //   category: "UI Design",
        //   date: "03 May 2023",
        //   title: "CA Hub",
        //   slug: "ca-hub",
        //   projectMetadata: {
        //     projectHeading: {
        //       icon: <FaBlog className="text-theme" />,
        //       title: "Blog Details",
        //     },
        //     projectValues: [
        //       {
        //         field: "POSTED BY",
        //         value: "Adrinao Smith",
        //       },
        //       {
        //         field: "CATEGORY:",
        //         value: "Tips & Tricks, Design",
        //       },
        //       {
        //         field: "POSTED ON:",
        //         value: "Noveber 01, 2023",
        //       },
        //     ],
        //     projectDescription: {
        //       descriptionTitle: "Cappuccino Bliss",
        //       description:
        //         "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
        //       descriptionListsTitle: "Benifits of coffee",
        //       descriptionLists: [
        //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
        //         "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        //         "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        //       ],
        //       projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        //     },
        //   },
        // },
        // {
        //   image: {
        //     thumbnail: blog1Thumbnail?.src,
        //     image: blog1Image?.src,
        //   },
        //   category: "UI Design",
        //   date: "03 May 2023",
        //   title: "Project Principium",
        //   slug: "ca-game-1",
        //   projectMetadata: {
        //     projectHeading: {
        //       icon: <FaBlog className="text-theme" />,
        //       title: "Blog Details",
        //     },
        //     projectValues: [
        //       {
        //         field: "POSTED BY",
        //         value: "Adrinao Smith",
        //       },
        //       {
        //         field: "CATEGORY:",
        //         value: "Tips & Tricks, Design",
        //       },
        //       {
        //         field: "POSTED ON:",
        //         value: "Noveber 01, 2023",
        //       },
        //     ],
        //     projectDescription: {
        //       descriptionTitle: "Cappuccino Bliss",
        //       description:
        //         "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
        //       descriptionListsTitle: "Benifits of coffee",
        //       descriptionLists: [
        //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
        //         "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        //         "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        //       ],
        //       projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        //     },
        //   },
        // },
        {
            image: {
                thumbnail: blog5Thumbnail?.src,
                image: blog5Image?.src,
            },
            category: "UI Design",
            state: "testest",
            title: "UML2OpenAPI",
            slug: "umltoopenapiconverter",
            projectMetadata: {
                projectHeading: {
                    icon: <FaBlog className="text-theme"/>,
                    title: "Blog Details",
                },
                projectValues: [
                    {
                        field: "CATEGORY:",
                        value: "Operating Systems and Desktop Environments",
                    },
                    {
                        field: "RELEASE DATE:",
                        value: "TBA",
                    },
                ],
                projectDescription: {
                    descriptionTitle: "CHAOS (CodeArise Hybrid Adaptive Operating System)",
                    content: [
                        { type: "paragraph", text: "CHAOS, short for CodeArise Hybrid Adaptive Operating System, is a modular desktop environment and future operating system designed to adapt to a wide range of user needs and workflows through flexibility, scalability, and customisation." },
                        { type: "paragraph", text: "The project begins with CHAOS DE, a desktop environment that can be installed on top of any Linux distribution. It offers a highly configurable interface that adapts to various professional contexts, working styles, and user preferences. Users can adjust system behaviours, layouts, themes, sound schemes, launchers, and application bundles to suit specific tasks or personal preferences. Rather than being constrained to predefined roles, users can configure their environment for development, design, media production, research, or general use." },
                        { type: "paragraph", text: "A core feature of CHAOS is its ability to support multiple configurations within a single installation. Users can install and manage different editions of the system, each with its own combination of user interface components, software packages, services, and behaviours. These editions can be used independently or combined into a hybrid setup. Switching between configurations does not affect the underlying system, allowing users to move seamlessly between roles or tasks while maintaining a consistent experience." },
                        { type: "paragraph", text: "The system is built on a component-based architecture that separates the core functionality from the user interface and feature layers. This structure makes it possible to update or swap out parts of the system without compromising stability. It also allows users to install custom modules to extend and fine-tune the environment according to their own needs without modifying the base system." },
                        { type: "paragraph", text: "CHAOS is designed to be accessible, customisable, and efficient. It prioritises usability and performance while providing detailed control options for both casual and advanced users. The system scales well across a variety of hardware platforms and usage scenarios, from personal devices to workstations in enterprises." },
                        { type: "paragraph", text: "In the longer term, CHAOS will evolve into a complete Linux distribution. This includes the development of a dedicated window manager and an optimised kernel, along with other core components. These elements will follow the same design principles: modularity, adaptability, and consistency across the system." },
                        {
                            type: "list",
                            title: "Core Features and Principles",
                            items: [
                                "Multi-configuration support: Switch between different configurations tailored for specific tasks, workflows, or professional roles fluidly.",
                                "Modular architecture: Core components, user interface elements, and features are separated and can easily be customised, enhanced, or replaced.",
                                "Cross-distribution compatibility: CHAOS DE runs on top of most Linux distributions, allowing users to adopt it without changing their base system. CHAOS as a standalone operating system is a Linux distribution, making it compatible with a wide range of devices.",
                                "Customisation without compromise: Exercise deep control over themes, layouts, launchers, interactions, and more without sacrificing system performance or stability.",
                                "Expandable ecosystem: Add-ons, modules, themes, and configurations can be created, shared, and applied by users."
                            ]
                        },
                        { type: "paragraph", text: "CHAOS is intended for users who expect their computing environment to support and adapt to their workflow. Its foundation is built on the principle that technology should be shaped by the individual, not the other way around." }
                    ],
                    projectImage: [projectInner2Image?.src, projectInner1Image?.src]
                }
            },
        },
    ],
};

export const testimonials = {
    testimonialsHeading: {
        icon: <BiCommentCheck className="text-theme"/>,
        title: "TESTIMONIAL",
        heading: "What",
        coloredHeading: "People Say",
        description:
            "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
    },
    testimonialsData: [
        {
            id: 1,
            image: author1?.src,
            desc: (
                <div className="text-sm md:text-[15px] leading-loose content">
                    Working with <span className="font-semibold text-theme">Reddick</span>{" "}
                    is a game-changer. Their coding expertise and commitment to quality
                    make every project a success.
                </div>
            ),
            name: "Alex Johnson",
            position: "Developer",
        },
        {
            id: 2,
            image: author2?.src,
            desc: (
                <div className="text-sm md:text-[15px] leading-loose content">
                    <span className="font-semibold text-theme">Reddick</span> exceeds
                    expectations with top-tier coding skills. Reliable, collaborative, and
                    a true asset to any project. Highly recommended
                </div>
            ),
            name: "Mily Martin",
            position: "CEO @IT Theme",
        },
        {
            id: 3,
            image: author1?.src,
            desc: (
                <div className="text-sm md:text-[15px] leading-loose content">
                    Working with <span className="font-semibold text-theme">Reddick</span>{" "}
                    is a game-changer. Their coding expertise and commitment to quality
                    make every project a success.
                </div>
            ),
            name: "Alex Johnson",
            position: "Developer",
        },
    ],
};

export const contactInfo = {
    contactInfoHeading: {
        icon: <FaRegEnvelopeOpen className="text-theme"/>,
        title: "CONTACT",
        heading: "Contact",
        coloredHeading: "Me.",
        description:
            "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
    },
    contactInfoData: [
        {
            id: 1,
            field: "Location",
            data: "Melbourne Street. No 20",
            Icon: <LocationIcon/>,
        },
        {
            id: 2,
            field: "E-mail",
            data: "smith@gmail.com",
            Icon: <EmailIcon/>,
        },
        {
            id: 3,
            field: "Phone",
            data: "+976 34 99 99",
            Icon: <PhoneIcon/>,
        },
    ],
};
