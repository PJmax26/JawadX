import fintexBanner from "../images/projects-pics/fintex-banner.png";
import fintex1 from "../images/projects-pics/fintex-1.png";
import fintex2 from "../images/projects-pics/fintex-2.png";
import fintex3 from "../images/projects-pics/fintex-3.png";
import fintex4 from "../images/projects-pics/fintex-4.png";
import jenighBanner from "../images/projects-pics/jenigh-banner.png";
import jenigh1 from "../images/projects-pics/jenigh-1.png";
import jenigh2 from "../images/projects-pics/jenigh-2.png";
import jenigh3 from "../images/projects-pics/jenigh-3.png";
import jenigh4 from "../images/projects-pics/jenigh-4.png";
import jenigh5 from "../images/projects-pics/jenigh-5.png";

import scss from "../images/scss.png";
import tw from "../images/tw.webp";
import react from "../images/react.png";

export const featured_projects = [
  {
    id: 1,
    name: "Fintex",
    description:
      "Fintex is a comprehensive fintech web application designed with the aim to provide users with tools for managing their financial needs. This project is focused on responsiveness and user experience. Providing a seamless design for smooth navigation and user interactionns.",
    banner: fintexBanner,
    images: [fintex1, fintex2, fintex3, fintex4],
    technologies: [react, scss, tw],
    link: "https://fintex-jade.vercel.app/",
    github: "",
    features: [
      "Dashboard: Personalized dashboard showing account summary, transactions, and financial health indicators.",
      "Budgeting Tools: Expense tracking, budget creation, and financial goal setting.",
      "Notifications and Alerts: Real-time notifications for transactions, account changes, and important updates.",
      "Data Visualization: Interactive charts and graphs for financial data analysis.",
    ],
    tools: [
      {
        name: "Recharts",
        usage: "For Data Visualization",
      },
    ],
  },
  // {
  //   id: 2,
  //   name: "JENIGH Foundation",
  //   description:
  //     "JENIGH Foundation is a web application designed to streamline the process of charity fundraising, making it easy for users to find and contribute to various donation campaigns. With a simple and user-friendly interface, JENIGH Foundation aims to connect generous donors with reputable charitable organizations, ensuring that the donation process is as seamless and effective as possible.",
  //   banner: jenighBanner,
  //   images: [jenigh1, jenigh2, jenigh3, jenigh4, jenigh5],
  //   technologies: [react, scss, tw],
  //   link: "https://jenigh-foundation.vercel.app/",
  //   github: "",
  //   features: [
  //     "User Authentication and Authorization",
  //     "Campaign Search and Participation:",
  //     "Simple Donation Process",
  //     "Organization Listings",
  //     "Campaign Management",
  //     "User Accounts",
  //     "Admin Dashboard",
  //   ],
  //   tools: [
  //     {
  //       name: "MongoDB",
  //       usage: "Database Management",
  //     },
  //     {
  //       name: "JWT",
  //       usage: "Secure user authentication",
  //     },
  //   ],
  // },
];
