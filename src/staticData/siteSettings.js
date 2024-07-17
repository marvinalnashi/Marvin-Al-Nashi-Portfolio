import logo from "@/public/assets/img/site-logo.svg";
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import { SlGraduation } from "react-icons/sl";
import {
  FaRegFileAlt,
  FaRegEnvelope,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram, FaGithub, FaGooglePlay, FaAppStore,
} from "react-icons/fa";
import { LiaBlogSolid } from "react-icons/lia";
import { BiCommentDetail } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa6";
import { MdFormatListBulleted } from "react-icons/md";

export const siteSettings = {
  logo: {
    image: logo?.src,
    alt: "CodeArise",
    url: "/",
    text: "CodeArise",
  },
  headersMenu: [
    {
      id: 1,
      title: "Home",
      selector: "#home",
      url: "/",
      Icon: <IoHomeOutline />,
      notVisibleRoutes: [],
    },
    {
      id: 2,
      title: "About",
      selector: "#about",
      url: "/",
      Icon: <FaRegUser />,
      notVisibleRoutes: [],
    },
    {
      id: 3,
      title: "Service",
      selector: "#service",
      url: "/",
      Icon: <IoBriefcaseOutline />,
      notVisibleRoutes: [],
    },
    // {
    //   id: 4,
    //   title: "Skills",
    //   selector: "#skill",
    //   url: "/",
    //   Icon: <SlGraduation />,
    //   notVisibleRoutes: [],
    // },
    {
      id: 4,
      title: "Resume",
      selector: "#resume",
      url: "/",
      Icon: <FaRegFileAlt />,
      notVisibleRoutes: [],
    },
    // {
    //   id: 5,
    //   title: "Portfolio",
    //   selector: "#portfolio",
    //   url: "/",
    //   Icon: <MdFormatListBulleted />,
    //   notVisibleRoutes: [],
    // },
    {
      id: 5,
      title: "Blog",
      selector: "#blog",
      url: "/",
      Icon: <LiaBlogSolid />,
      notVisibleRoutes: [],
    },
    // {
    //   id: 8,
    //   title: "Testimonial",
    //   selector: "#testimonial",
    //   url: "/",
    //   Icon: <BiCommentDetail />,
    //   notVisibleRoutes: [],
    // },
    {
      id: 6,
      title: "Contact",
      selector: "#contact",
      url: "/",
      Icon: <FaRegEnvelope />,
      notVisibleRoutes: [],
    },
  ],
  socialMedias: [
    {
      id: 1,
      name: "LinkedIn",
      tooltip: "Contact me on LinkedIn",
      Icon: <FaLinkedin />,
      url: "#",
    },
    {
      id: 2,
      name: "Facebook",
      tooltip: "Contact me on Facebook",
      Icon: <FaFacebook />,
      url: "#",
    },
    {
      id: 3,
      name: "X",
      tooltip: "Contact me on X",
      Icon: <FaTwitter />,
      url: "#",
    },
    {
      id: 4,
      name: "Apple App Store",
      tooltip: "Check me out on Apple App Store",
      Icon: <FaAppStore />,
      url: "#",
    },
    {
      id: 5,
      name: "Google Play",
      tooltip: "Check me out on Google Play",
      Icon: <FaGooglePlay />,
      url: "#",
    },
    {
      id: 6,
      name: "GitHub",
      tooltip: "Check me out on GitHub",
      Icon: <FaGithub />,
      url: "#",
    },
  ],
  socialMediaShare: [
    {
      id: 1,
      name: "Facebook",
      tooltip: "Share with Facebook",
      Icon: <FaFacebook />,
      url: "#",
    },
    {
      id: 2,
      name: "Linkedin",
      tooltip: "Share with Linkedin",
      Icon: <FaLinkedin />,
      url: "#",
    },
    {
      id: 3,
      name: "X",
      tooltip: "Share with X",
      Icon: <FaTwitter />,
      url: "#",
    },
    {
      id: 4,
      name: "Instagram",
      tooltip: "Share with Instagram",
      Icon: <FaInstagram />,
      url: "#",
    },
  ],
  preloader: {
    image: logo?.src,
  },
};
