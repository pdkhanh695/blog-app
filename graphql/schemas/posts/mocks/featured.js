//Es6 syntax
const moment = require("moment");
//why the coler change for each element into array
module.exports = [
  {
    title: "Can anyone code?",
    date: moment().format("MMMM DD, YYYY"),
    categories: ["Cloud"],
    link: "#",
    image: "anyone_can_code.jpg",
  },
  {
    title: "Using AWS S3 for storing Blog Images",
    date: moment().format("MMMM DD, YYYY"),
    categories: ["Cloud"],
    link: "#",
    image: "cloud_storage.jpeg",
  },
  {
    title: "Popular Programming Languages in 2020",
    date: moment().format("MMMM DD, YYYY"),
    categories: ["Tech News", "Tech Culture"],
    link: "#",
    image: "programming_languages.jpeg",
  },
  {
    title: "Brain Hacks for learning to program",
    date: moment().format("MMMM DD, YYYY"),
    categories: ["Brain Health"],
    link: "#",
    image: "neuron.jpg",
  },
];
