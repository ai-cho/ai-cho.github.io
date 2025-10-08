// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ai-cho', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      // manual: {
      //   // Properties for manually specifying projects
      //   projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      // },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'WACV 2025 ULTRRA WORKSHOP',
          description:
            'Unconstrained Large-scale Three-dimensional Reconstruction and Rendering across Altitudes',
          imageUrl:
            'https://lh3.googleusercontent.com/sitesv/AICyYdao2L2hFZrguXepTyFBKdUQv7b8IEk2Ihestqqf0hxTNbK1uQGdTEHS40em7vB0_omaFuN53i4O2wiHwhPdFceGM6xHfWbddjSFKJ07V-yVviwnRoCoJ4HL02Qf_Kxv0h3jjUpZyVL_Eof7Mf9h7wARnRMkCwTvfyMsKm-1SifSnIOCNci6hiHeaiYS90jsHTDgOH8rV3xpogBrUoMaY2zTpT3yHEtOQs8zWlU=w1280',
          link: 'https://sites.google.com/view/ultrra-wacv-2025',
        },
        {
          title: 'DeltaKD',
          description:
            'Selective Layer Distillation for Vision Transformers',
          imageUrl:
            'https://raw.githubusercontent.com/ai-cho/DeltaKD/refs/heads/main/image.png',
          link: 'https://github.com/ai-cho/DeltaKD',
        },
        {
          title: 'Attentin in 3D',
          description:
            'Proposal new architecture with PointNet and PointNet++',
          imageUrl:
            'https://github.com/user-attachments/assets/76dca11c-7d1a-45d8-b1be-6cbd215fc062',
          link: 'https://github.com/ai-cho/DL-TermProject',
        },
        {
          title: 'Deepfake Detection',
          description:
            'Detecting face/voice manipulation and analyzing its maliciousness',
          imageUrl:
            'https://github.com/user-attachments/assets/479f8002-b272-4a7c-a946-0fec4f38c8f3',
          link: 'https://github.com/ai-cho/deepfake-detection',
        },
        {
          title: 'Recommendation using company reviews',
          description:
            'Data analysis in terms of data science and created the program that the actual company(Wanted Insight, Job Planet) wanted',
          // imageUrl:
          //   'https://github.com/ai-cho/DeltaKD/blob/main/image.png?raw=true',
          link: 'https://github.com/ai-cho/SCAICO_turnover_rate',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Ariful Alam', description: '', imageURL: '' },
  social: {
    linkedin: 'jeonghwan-cho-76779b288',
    phone: '',
    email: 'kyjjhh1@g.skku.edu',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1MntAGMN57oWz9WdxgzqgFql71rJ4ynpf/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },

  experiences: [
    {
      company: 'Computational Intelligence & Photography Lab, Yonsei University',
      position: 'Research Intern',
      from: 'January 2025',
      to: 'Present',
      companyLink: 'https://www.ciplab.kr/',
      advisor: 'Prof. Seon Joo Kim', // 지도교수
    },
    {
      company: 'Multimodal AI Lab, Yonsei University',
      position: 'Research Intern',
      from: 'June 2024',
      to: 'August 2024',
      advisor: 'Prof. Youngjae Yu', // 지도교수
    },
  ],
  certifications: [
    {
      name: 'WACV 2025 WORKSHOP (3RD & BEST OUTSIDE SUBMISSION)',
      body: 'Nashvile, USA',
      year: '2025',
      link: 'https://sites.google.com/view/ultrra-wacv-2025',
    },
    {
      name: '1th BrAIn Research Program 1st Prize',
      body: 'Seoul, Korea',
      year: '2025',
      link: 'https://github.com/ai-cho/DeltaKD',
    },
    {
      name: 'Seoul Central Artificial Intelligence Competition Golden Prize',
      body: 'Seoul, Korea',
      year: '2023',
      link: 'https://github.com/ai-cho/SCAICO_turnover_rate',
    },
    {
      name: 'Scholarship for academic excellence',
      body: 'Suwon, Korea',
      year: '2022',
    },    
  ],
  educations: [
    {
      institution: 'Sungkyunkwan University',
      degree: 'Bachelor of Applied Artificial Intelligence',
      from: '2022',
      to: '2026',
    },
  ],
  publications: [
    {
      title: 'Updating station express status based on review data by GCN',
      conferenceName: '',
      journalName: 'JKIICE',
      authors: 'Myeongseop Kim, <b>Jeonghwan Cho</b>, Semin Cheon, Junseo Choi, Hayoung Oh',
      link: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003131873',
      // description:
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

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
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
