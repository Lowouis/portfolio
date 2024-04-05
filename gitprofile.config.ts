// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Lowouis', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projets Github',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'Lowouis/albums',
          'Lowouis/tds-web-alt-2023',
          'Lowouis/mvc-nodejs-login',
          'Lowouis/netflix-clone-react',
          'Lowouis/folio',
          'Lowouis/BoatWar',
          'Lowouis/ricochet-robot',
          'Lowouis/Bataille-Naval',
          'Lowouis/MorpionIA',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio de Louis GURITA',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'louisgurita',
    twitter: 'louisgurita',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '_glouis_',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'louisguritaperso',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'louisguritapro@gmail.com',
  },
  resume: {
    fileUrl:
      'https://cdn.discordapp.com/attachments/1214271766193508362/1225629988032876615/V.pdf?ex=6621d3e0&is=660f5ee0&hm=29e5a2b810f11e44b243abe24d726819f468d47361b64c89cee2ae8d87c13eb8&', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Java',
    'SpringBoot',
    'Symfony',
    'JS',
    'React.js',
    'Node.js',
    'Next.js',
    'MySQL',
    'Git',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'SAP LABS France',
      position: 'Caen, France',
      from: 'Octobre 2021',
      to: "Aujourd'hui",
      companyLink: 'https://sap.com',
    },
    {
      company: 'Allkeyshop',
      position: 'Remote',
      from: 'Juillet 2022',
      to: 'Octobre 2022',
      companyLink: 'https://allkeyshop.com',
    },
  ],
  certifications: [
    {
      name: 'Gagnant du prix "Non au harcèlement"',
      body: 'Lycée Augustin Fresnel de Caen',
      year: 'Juillet 2018',
      link: '',
    },
  ],
  educations: [
    {
      institution:
        'Brevet de technicien supérieur Services informatiques aux organisations',
      degree: 'Saint Usrule CaenSup',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'Licence d’informatique',
      degree: 'UFR des sciences de Caen',
      from: '2018',
      to: '2022',
    },
    {
      institution: 'Baccalauréat Science Technologique Management et Gestion',
      degree: 'Lycée Augustin Fresnel de Caen',
      from: '2018',
      to: '2016',
    },
    {
      institution: 'Diplôme Club Langue & Civilisation',
      degree: 'Université de Cambridge',
      from: '2016',
      to: '',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'louisguritaperso', // to hide blog section, keep it empty
    limit: 8, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '4932887',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'black',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a> ❤️ </a>`,

  enablePWA: true,
};

export default CONFIG;
