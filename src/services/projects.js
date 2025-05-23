//SHow site image
import shoe1 from "../assets/shoe1.png";
import shoe2 from "../assets/shoe2.png";
import shoe3 from "../assets/shoe3.png";
import shoe4 from "../assets/shoe4.png";
// Netflix images
import netflix1 from "../assets/netflix1.png";
import netflix2 from "../assets/netflix2.png";
import netflix3 from "../assets/netflix3.png";
import netflix4 from "../assets/netflix4.png";
// Weather app images
import url_shortner1 from "../assets/Screenshot 2025-05-11 114329.png";
import url_shortner2 from "../assets/Screenshot 2025-05-11 114424.png";
import url_shortner3 from "../assets/Screenshot 2025-05-11 114312.png";
import url_shortner4 from "../assets/Screenshot 2025-05-06 163629.png";
// E-commerce-site
import eCommerce1 from "../assets/Screenshot 2025-01-26 235325.png";
import eCommerce2 from "../assets/Screenshot 2025-01-26 235447.png";
import eCommerce3 from "../assets/Screenshot 2025-01-26 235507.png";
import eCommerce4 from "../assets/Screenshot 2025-01-26 235527.png";
// E-commerce admin page images
import admin1 from "../assets/Screenshot 2025-01-27 000508.png";
import admin2 from "../assets/Screenshot 2025-01-27 001203.png";
import admin3 from "../assets/Screenshot 2025-01-27 001223.png";
import admin4 from "../assets/Screenshot 2025-01-27 001300.png";
// E-commerce seller page
import seller1 from "../assets/Screenshot 2025-01-27 000508.png";
import seller2 from "../assets/Screenshot 2025-01-27 002020.png";
import seller3 from "../assets/Screenshot 2025-01-27 002109.png";
import seller4 from "../assets/Screenshot 2025-01-27 002139.png";
// Wollo University pc registration system
import wolloUV1 from "../assets/Screenshot 2025-05-11 115507.png";
import wolloUV2 from "../assets/Screenshot 2025-05-11 115521.png";
import wolloUV3 from "../assets/Screenshot 2025-05-11 120413.png";
import wolloUV4 from "../assets/Screenshot 2025-05-11 120631.png";
const projects_ = [
  {
    _id: 1,
    project_title: "Netflix clone",
    github_link: "https://github.com/Ezedingashaw/netflix_clone",
    demo_link: "/",
    discription:
      "A fully responsive Netflix clone built using React and Tailwind CSS, showcasing features like a modern user interface, dynamic components, and seamless design inspired by the original Netflix platform.",
    image_one: netflix1,
    image_two: netflix2,
    image_three: netflix3,
    image_four: netflix4,
    technologies: ["React", "CSS"],
  },
  {
    _id: 2,
    project_title: "Shoe online shop",
    github_link: "https://github.com/Ezedingashaw/shoe_site_front_end",
    demo_link: "/",
    discription:
      "A full-stack e-commerce platform for showcasing and purchasing shoes, featuring a responsive design, product categorization, and a seamless shopping cart experience. Built using React, Node.js, Express, MySQL, and styled with Tailwind CSS to ensure a modern and efficient user interface.",
    image_one: shoe1,
    image_two: shoe2,
    image_three: shoe3,
    image_four: shoe4,
    technologies: ["React", "CSS", "Mysql", "Express.JS", "Node.JS"],
  },
  {
    _id: 3,
    project_title: "URL Shortener Web App",
    github_link: "https://github.com/Ezedingashaw/weather_app",
    demo_link: "/",
    discription:
      "A full-featured URL shortening platform that allows users to generate both random and custom short URLs. Includes support for password-protected links, click limit enforcement, and a user dashboard to monitor and manage link analytics and details.",
    image_one: url_shortner1,
    image_two: url_shortner2,
    image_three: url_shortner3,
    image_four: url_shortner4,
    technologies: [
      "React",
      "Tailwind css",
      "Express.JS",
      "Node.JS",
      "Mysql",
      "Prisma",
    ],
  },
  {
    _id: 4,
    project_title: "E-commerce website",
    github_link: "https://github.com/Ezedingashaw/e-commerce_site_front_end",
    demo_link: "/",
    discription:
      "A full-stack e-commerce platform built using the MERN stack (MongoDB, Express, React, Node.js). It features seller registration, allowing users to sell their products on the platform, along with a responsive and user-friendly shopping experience.",
    image_one: eCommerce1,
    image_two: eCommerce2,
    image_three: eCommerce3,
    image_four: eCommerce4,
    technologies: ["React", "TailwindCSS", "Express.JS", "Node.JS", "MondoDB"],
  },
  {
    _id: 5,
    project_title: "E-commerce website",
    github_link: "https://github.com/Ezedingashaw/e-commerce_site_front_end",
    demo_link: "/",
    discription:
      "A full-stack e-commerce platform built using the MERN stack (MongoDB, Express, React, Node.js). It features seller registration, allowing users to sell their products on the platform, along with a responsive and user-friendly shopping experience.",
    image_one: wolloUV1,
    image_two: wolloUV2,
    image_three: wolloUV3,
    image_four: wolloUV4,
    technologies: [
      "React",
      "TailwindCSS",
      "Express.JS",
      "Node.JS",
      "Mysql",
      "Prisma",
    ],
  },
  {
    _id: 6,
    project_title: "E-commerce Admin page",
    github_link:
      "https://github.com/Ezedingashaw/e-commerce_site_super_admin_site",
    demo_link: "/",
    discription:
      "An admin dashboard built using the MERN stack (MongoDB, Express, React, Node.js) to manage and oversee the entire e-commerce platform. Features include monitoring user activity, managing sellers and products, and providing full control over the platform's operations in a user-friendly interface.",
    image_one: admin1,
    image_two: admin2,
    image_three: admin3,
    image_four: admin4,
    technologies: ["React", "TailwindCSS", "Express.JS", "Node.JS", "MondoDB"],
  },
  {
    _id: 7,
    project_title: "E-commerce Sellers page",
    github_link: "https://github.com/Ezedingashaw/e-commerce_site_vendor_site",
    demo_link: "/",
    discription:
      "A seller dashboard built using the MERN stack (MongoDB, Express, React, Node.js), enabling sellers to manage their product listings, track sales, and oversee their storefronts. The interface is intuitive and designed to streamline the seller's experience on the platform.",
    image_one: seller1,
    image_two: seller2,
    image_three: seller3,
    image_four: seller4,
    technologies: ["React", "TailwindCSS", "Express.JS", "Node.JS", "MondoDB"],
  },
];
export default projects_;
