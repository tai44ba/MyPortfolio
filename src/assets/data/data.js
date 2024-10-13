// skills icon
import htmlicon from '../imageAndVideo/icons8-html.svg'
import cssicon from '../imageAndVideo/icons8-css3.svg'
import JSicon from '../imageAndVideo/icons8-javascript.svg'
import Reacticon from '../imageAndVideo/icons8-react-native.svg'
import Nodeicon from '../imageAndVideo/icons8-nodejs.svg'
import mongoicon from '../imageAndVideo/icons8-mongodb.svg'
import Expressicon from '../imageAndVideo/icons8-expressjs.svg'
import booticon from '../imageAndVideo/icons8-bootstrap.svg'
import tailicon from '../imageAndVideo/icons8-tailwinds.svg'
// project pictuure
import MakeLottoImg from '../imageAndVideo/makeLottoNumberApp.png'
import ToDoAppImg from '../imageAndVideo/icons8-tailwinds.svg'



export const projects = [
  {
    id: 1,
    title: "Make Lotto Number App",
    description: "One can generate random number for lotto 6/49 and Euro Jeckpot",
    image: MakeLottoImg ,
    path:"https://makelottonumber.onrender.com",
    technology:'CSS Javascript React'
  },
  {
    id: 2,
    title: "To-Do App With Weather API",
    description: "One can create to-do list and also edit it, delete it and to see the weather where you chose",
    image: ToDoAppImg,
    path:"https://to-do-with-weather-api.onrender.com/",
    technology:'Javascript React Tailwind'
  },
];

export const skills = [
  { id: 1, name: "HTML", icon:htmlicon, path: 'https://www.w3schools.com/html/' },
  { id: 2, name: "CSS", icon:cssicon, path: 'https://www.w3schools.com/css/default.asp' },
  { id: 3, name: "JavaScript", icon: JSicon, path: 'https://www.w3schools.com/js/default.asp' },
  { id: 4, name: "React.js", icon: Reacticon, path: 'https://react.dev/' },
  { id: 5, name: "Node.js", icon: Nodeicon, path: 'https://nodejs.org' },
  { id: 6, name: "MongoDB", icon: mongoicon, path: 'https://www.mongodb.com' },
  { id: 7, name: "Express.js", icon: Expressicon, path: 'https://expressjs.com/' },
  { id: 8, name: "Bootstrap", icon: booticon, path: 'https://getbootstrap.com/' },
  { id: 9, name: "Tailwind", icon: tailicon, path: 'https://tailwindcss.com/' },
];
