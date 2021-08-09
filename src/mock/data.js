import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Fred Lunjevich | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Website of Kiwi developer Fred Lunjevich.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Fred Lunjevich',
  subtitle: 'Web Dev | Auckland, NZ',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  // resume: // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'periodic.jpg',
    title: 'React Periodic table App',
    info: 'Project that uses React and spedifically the Context API to produce a visualisation of the elements of the Periodic Table. Previously, this project used a  third-party API, however I created a new API with Node.js for the purposes of owning the data and persisting it as long as I liked.',
    info2: '',
    url: 'https://objective-franklin-4f675c.netlify.app/',
    repo: 'https://github.com/Floony7/periodic-table-app-react-context', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'countries.jpg',
    title: 'React Countries App (in development)',
    info: 'Using a coutries API to pull data through on countries and the regions they are situated. Uses React Context API and React Router to display country pages.',
    info2: '',
    url: 'https://vibrant-almeida-61fe32.netlify.app/',
    repo: 'https://github.com/Floony7/react-countries-reference-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fpl.jpg',
    title: 'Fantasy Premier League Captain Selector',
    info: 'Vanilla JavaScript app that is designed to take in player names and produce a random selection. Project uses local storage to store player names added by the user.',
    info2: '',
    url: 'https://elated-shaw-b31750.netlify.app/',
    repo: 'https://github.com/Floony7/fantasy-premier-league-captain-selector', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dad.jpg',
    title: 'React Dad Jokes App (in development)',
    info: 'Dad Jokes generator that will add jokes to Local Storage and have upvoting and downvoting functionality (yet to be added)',
    info2: '',
    url: 'https://gallant-haibt-5b9dc5.netlify.app/',
    repo: 'https://github.com/Floony7/react-dad-jokes', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/fred-lunjevich-bbb66b43/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Floony7',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
