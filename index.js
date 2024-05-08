/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const sp = new URLSearchParams(window.location.search);

$fx.params([
  {
    id: "num_particles",
    name: "Core Particles",
    type: "number",
    default: 748,
    options: {
      min: 121,
      max: 1221,
      step: 11,
    },
  },
  {
    id: "core_color",
    name: "Core Color",
    type: "number",
    default: 0,
    options: {
      min: 0,
      max: 18,
      step: 1,
    },
  },
  {
    id: "core_speed",
    name: "Core Speed",
    type: "number",
    default: 10,
    options: {
      min: 1,
      max: 11,
      step: 1,
    },
  },
  {
    id: "orbit1_color",
    name: "Orbit #1 Color",
    type: "number",
    default: 0,
    options: {
      min: 0,
      max: 18,
      step: 1,
    },
  },
  {
    id: "orbit1_speed",
    name: "Speed #1",
    type: "number",
    default: 8,
    options: {
      min: 1,
      max: 11,
      step: 1,
    },
  },
  {
    id: "orbit2_color",
    name: "Orbit #2 Color",
    type: "number",
    default: 0,
    options: {
      min: 0,
      max: 18,
      step: 1,
    },
  },
  {
    id: "orbit2_speed",
    name: "Speed #2",
    type: "number",
    default: 6,
    options: {
      min: 1,
      max: 11,
      step: 1,
    },
  },
  {
    id: "orbit2_inclination",
    name: "Inclination #2",
    type: "number",
    default: 0,
    options: {
      min: -90,
      max: 90,
      step: 5,
    },
  },
  {
    id: "orbit3_color",
    name: "Orbit #3 Color",
    type: "number",
    default: 0,
    options: {
      min: 0,
      max: 18,
      step: 1,
    },
  },
  {
    id: "orbit3_speed",
    name: "Speed #3",
    type: "number",
    default: 6,
    options: {
      min: 1,
      max: 11,
      step: 1,
    },
  },
  {
    id: "orbit3_inclination",
    name: "Inclination #3",
    type: "number",
    default: 0,
    options: {
      min: -90,
      max: 90,
      step: 5,
    },
  },
  {
    id: "orbit4_color",
    name: "Orbit #4 Color",
    type: "number",
    default: 0,
    options: {
      min: 0,
      max: 18,
      step: 1,
    },
  },
  {
    id: "orbit4_speed",
    name: "Speed #4",
    type: "number",
    default: 4,
    options: {
      min: 1,
      max: 11,
      step: 1,
    },
  },
  {
    id: "orbit4_inclination",
    name: "Inclination #4",
    type: "number",
    default: 0,
    options: {
      min: -90,
      max: 90,
      step: 5,
    },
  },
  {
    id: "orbit5_color",
    name: "Orbit #5 Color",
    type: "number",
    default: 0,
    options: {
      min: 0,
      max: 18,
      step: 1,
    },
  },
  {
    id: "orbit5_speed",
    name: "Speed #5",
    type: "number",
    default: 5,
    options: {
      min: 1,
      max: 11,
      step: 1,
    },
  },
  {
    id: "orbit5_inclination",
    name: "Inclination #5",
    type: "number",
    default: 0,
    options: {
      min: -90,
      max: 90,
      step: 5,
    },
  },
  {
    id: "orbit6_color",
    name: "Orbit #6 Color",
    type: "number",
    default: 0,
    options: {
      min: 0,
      max: 18,
      step: 1,
    },
  },
  {
    id: "orbit6_speed",
    name: "Speed #6",
    type: "number",
    default: 2,
    options: {
      min: 1,
      max: 11,
      step: 1,
    },
  },
  {
    id: "orbit6_inclination",
    name: "Inclination #6",
    type: "number",
    default: 0,
    options: {
      min: -90,
      max: 90,
      step: 5,
    },
  },
  {
    id: "orbit7_color",
    name: "Orbit #7 Color",
    type: "number",
    default: 0,
    options: {
      min: 0,
      max: 18,
      step: 1,
    },
  },
  {
    id: "orbit7_speed",
    name: "Speed #7",
    type: "number",
    default: 2,
    options: {
      min: 1,
      max: 11,
      step: 1,
    },
  },
  {
    id: "orbit7_inclination",
    name: "Inclination #7",
    type: "number",
    default: 0,
    options: {
      min: -90,
      max: 90,
      step: 5,
    },
  },
  {
    id: "orbit8_color",
    name: "Orbit #8 Color",
    type: "number",
    default: 0,
    options: {
      min: 0,
      max: 18,
      step: 1,
    },
  },
  {
    id: "orbit8_speed",
    name: "Speed #8",
    type: "number",
    default: 1,
    options: {
      min: 1,
      max: 11,
      step: 1,
    },
  },
  {
    id: "orbit8_inclination",
    name: "Inclination #8",
    type: "number",
    default: 0,
    options: {
      min: -90,
      max: 90,
      step: 5,
    },
  },
]);

$fx.features({
  "Core Number": $fx.getParam("core_color"),
  "Core Speed": $fx.getParam("core_speed"),
  "Core Particles": $fx.getParam("num_particles"),
  "Total Particles": $fx.getParam("num_particles") * 9,
});

/******/ })()
;
