// src/assets/data/facilities.js

/**
 * facilities
 * ----------
 * Array of lab facility metadata.
 * Each entry has:
 *  - id          : unique identifier
 *  - name        : facility name
 *  - image       : imported image asset
 *  - description : brief description
 */
import semImage from "../images/facilities/sem.jpg";
import xrdImage from "../images/facilities/xrd.jpg";
import cncImage from "../images/facilities/cnc.jpg";
import triboImage from "../images/facilities/tribo_tester.jpg";

export const facilities = [
  {
    id: 1,
    name: "Scanning Electron Microscope (SEM)",
    image: semImage,
    description:
      "High-resolution imaging for surface morphology and microstructural analysis.",
  },
  {
    id: 2,
    name: "X-Ray Diffractometer (XRD)",
    image: xrdImage,
    description:
      "Phase identification and crystallographic structure analysis of materials.",
  },
  {
    id: 3,
    name: "CNC Milling Machine",
    image: cncImage,
    description:
      "Precision machining of metal components with high dimensional accuracy.",
  },
  {
    id: 4,
    name: "Tribology Tester",
    image: triboImage,
    description:
      "Friction, wear and lubrication testing for coatings and surface treatments.",
  },
];
