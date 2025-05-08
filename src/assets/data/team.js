// src/assets/data/team.js

import ndPhoto from "../images/team/nd_shivakumar.jpg";
import krishnakantPhoto from "../images/team/krishnakant_bhole.jpg";
import sankethPhoto from "../images/team/sanketh_tonnanavar.jpg";
import rajathPhoto from "../images/team/rajath_s.jpg";
import viswashPhoto from "../images/team/vishwash.jpg";

/**
 * Principal Investigator
 */
export const pi = {
  id: 0,
  name: "Dr. N.D. Shivakumar",
  designation:
    "Principal Research Scientist",
  interests: [
    "Additive Manufacturing",
    "Composite Materials",
    "Surface Engineering",
    "Polymer based composites",
    "Bio-Composites",
    "Foam based materials",
    "Synthesis/Manufacturing of lightweight materials",
    "Testing of lightweight materials",
    "Computer Aided Design and Analysis of lightweight materials",
    "Optimization & DOE based studies",
    "Design and Application of developed/Novel lightweight materials",
  ],
  photo: ndPhoto,
  email: "shivak@iisc.ac.in",
  phone: "+91-80-2293-32358",
  address:
    "Department of Design and Manufacturing\nIndian Institute of Science\nBangalore – 560012, India",
  linkedin: "https://www.linkedin.com/in/nd-shivakumar",
};

/**
 * Doctoral Students
 */
export const students = [
  {
    id: 1,
    name: "Krishnakant Bhole",
    thesisTitle:
      "Examination of the implications of fibers’ alignment and volume fraction on the engineering constants of natural fiber epoxy lamina using analytical research.",
    duration: "2017 - 2023",
    photo: krishnakantPhoto,
  },
  {
    id: 2,
    name: "Sanketh Tonnanavar",
    thesisTitle:
      "Low speed impact mechanics and Fragmentation of wooden panels : Characterisation of Indian woods",
    duration: "2017 – 2024",
    photo: sankethPhoto,
  },
  {
    id: 3,
    name: "Rajath S",
    thesisTitle:
      "A novel approach towards the formulation and fabrication of ceramic hybrid composites using enhanced selective catalytic reduction (SCR) in de-nox applications",
    duration: "2018 – 2024",
    photo: rajathPhoto,
  },
  {
    id: 3,
    name: "Vishwash B",
    thesisTitle:
      "Comprehensive study of synthesis and Characterisation of nanocellulose Reinforced green composite",
    duration: "2023 – Present",
    photo: viswashPhoto,
  },
];
