import AboutMe from "@/src/components/home/AboutMe";
import Blog from "@/src/components/home/Blog";
import ContactMe from "@/src/components/home/ContactMe";
import Hero from "@/src/components/home/Hero";
import Portfolio from "@/src/components/home/Portfolio";
import Resume from "@/src/components/home/Resume";
import Service from "@/src/components/home/Service";
import Skills from "@/src/components/home/Skills";
import Testimonial from "@/src/components/home/Testimonial";
import Footer from "@/src/components/shared/Footer";
import Layout from "@/layout/Layout";

export default async function Home() {
  return (
  //   <div className="content-area d-flex align-items-center justify-content-center">
  //     <div>
  //       <img src="assets/img/logo.png" alt="Logo" className="logo fade-in one" />
  //       <h3 className="fade-in two">Coming Soon</h3>
  //       <div className="social fade-in three">
  //         <ul>
  //           <li>
  //             <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
  //               {/* SVG or image tag for Facebook logo */}
  //               {/*<img src="path_to_facebook_logo.svg" alt="Facebook" />*/}
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
  //               {/* SVG or image tag for Twitter logo */}
  //               {/*<img src="path_to_twitter_logo.svg" alt="Twitter" />*/}
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   <div className="copy-right">
  //     &copy; 2024 CodeArise
  //   </div>
  // </div>


    <Layout>
      <Hero />
      <AboutMe />
      <Service />
      {/*<Skills />*/}
      <Resume />
      {/*<Portfolio />*/}
      <Blog />
      {/*<Testimonial />*/}
      <ContactMe />
      <Footer />
    </Layout>
  );
}
