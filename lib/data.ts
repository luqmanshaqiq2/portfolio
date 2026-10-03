import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'luqmanshaqiq2@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Luqman, I am reaching out to you because...',
};

export const MY_STACK = {
    frontend: [
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'React', icon: 'react' },
        { name: 'TailwindCSS', icon: 'tailwindcss' },
    ],
    backend: [
        { name: 'ASP.NET', icon: 'dotnet' },
        { name: 'Node.js', icon: 'nodedotjs' },
        { name: 'Express.js', icon: 'express' },
    ],
    database: [
        { name: 'MySQL', icon: 'mysql' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'SQL Server', icon: 'microsoftsqlserver' },
        { name: 'Firebase', icon: 'firebase' },
    ],
    tools: [
        { name: 'Git', icon: 'git' },
        { name: 'Docker', icon: 'docker' },
        { name: 'Figma', icon: 'figma' },
        { name: 'Postman', icon: 'postman' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Payroll System ',
        slug: 'payroll-system',
        icon: 'https://img.icons8.com/?size=100&id=50951&format=png&color=FFFFFF',
        sourceCode: 'https://github.com/luqmanshaqiq2/payroll-management-system',
        liveUrl: '',
        year: 2025,
        description: `
      A payroll management system built by team of three developers for a university project. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🛠️ Handling Employee Records </li>
        <li>✍️ Attendance Tracking </li>
        <li>💵 Payroll Generation </li>
        <li>📱 Reporting Dashboard </li>
        <li>⚡ Admin Panel </li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented Batch Payroll Processing </li>
        <li>Customized Dashboard for Admins</li>
        <li>Report generation with dynamic filters</li>
        <li>Configured efficient data validation</li>
        <li>Designed database relationships for employees, attendance, and payroll data</li>
      </ul>
      `,
        role: `
      Backend-Developer <br/>
       Contributed across the server side lifecycle:
      <ul>
        <li>⚙️ Backend: Developed RESTful APIs using Express.js</li>
        <li>🗄️ Database: Designed and managed MySQL database structures and relationships</li>
        <li>💵 Payroll: Implemented payroll calculation and batch processing functionality</li>
        <li>📊 Reporting: Developed dynamic dashboards and filtered payroll reports</li>

      </ul>
      `,
        techStack: ['React.js', 'MySQL', 'Express.js'],
        thumbnail: '/projects/payroll-system/thumbnail.png',
        longThumbnail: '/projects/payroll-system/thumbnail.png',
        images: ['/projects/payroll-system/thumbnail.png'],
    },
    {
        title: 'Travel Advisory Web App',
        slug: 'pearl-lanka',
        icon: 'https://img.icons8.com/?size=100&id=17030&format=png&color=FFFFFF',
        sourceCode: 'https://github.com/luqmanshaqiq2/pearl-lanka-travel-advisory',
        techStack: [
            'React',
            '.NET',
            'PostgreSQL',
            'Mapbox GL',
            'Tailwind CSS',
            'JSON',
        ],
        thumbnail: '/projects/pearl-lanka/thumbnail.png',
        longThumbnail: '/projects/pearl-lanka/thumbnail.png',
        images: [
            '/projects/pearl-lanka/thumbnail.png',
            '/projects/pearl-lanka/image-02.png',
        ],
        liveUrl: '',
        year: 2025,
        description: `Pearl Lanka is a Sri Lanka-focused travel advisory platform designed to help tourists explore destinations, understand local conditions, and make informed travel decisions. It combines interactive maps, weather information, safety ratings, and cultural guidance into a single platform.`,
        role: `
      Backend-Developer <br/>
      Contributed across the server side lifecycle:
      <ul>
        <li>⚙️ Backend: Developed the backend using ASP.NET Core with a structured API architecture.</li>
        <li>🗺️ Maps: Integrated Mapbox GL for interactive maps, location search, and destination exploration.</li>
        <li>🌦️ Weather: Integrated weather data to provide location-specific weather information.</li>
        <li>🛡️ Safety: Implemented a safety scoring system to help users assess the safety of different locations.</li>
        <li>📖 Culture: Developed a JSON-based etiquette and cultural guidance feature that reads and suggests recommendations for international travellers.</li>
        <li>🔐 Auth: Implemented JWT-based authentication and authorization.</li>
        <li>📊 Reporting: Built an admin reporting system for reviewing and managing submitted reports.</li>
      </ul>
      `,
    },
    {
        title: 'Cliniq API',
        slug: 'cliniq',
        icon: 'https://img.icons8.com/?size=100&id=24761&format=png&color=FFFFFF',
        sourceCode: 'https://github.com/luqmanshaqiq2/cliniq',
        techStack: [
            'ASP.NET Core',
            'C#',
            'SQL Server',
            'Entity Framework Core',
            'Redis',
        ],
        thumbnail: '/projects/cliniq/thumbnail.png',
        longThumbnail: '/projects/cliniq/thumbnail.png',
        images: ['/projects/cliniq/thumbnail.png'],
        liveUrl: '',
        year: 2026,
        description:
            'Cliniq is a healthcare clinic management REST API built to handle the core operations of a medical practice — patients, doctors, appointment scheduling, medical records, and billing. Built with ASP.NET Core, Entity Framework Core, and SQL Server, with Redis caching for performance, it follows a layered Controller → Service → Repository architecture with FluentValidation, Mapster, global exception handling, rate limiting, and query-based filtering and pagination.',
        role: `
      Backend-Developer <br/>
      Contributed across the server side lifecycle:
      <ul>
        <li>🏥 Architecture: Designed and built the full API architecture, including the Patient, Doctor, Appointment, MedicalRecord, and billing (Invoice/Payment) data model.</li>
        <li>📅 Scheduling: Implemented appointment scheduling with availability slot management, resolving UTC/local time conversion and double-booking edge cases.</li>
        <li>⚡ Performance: Added Redis caching to reduce database load on frequently accessed endpoints.</li>
        <li>✅ Validation: Enforced business rules through FluentValidation and structured the codebase with clean service/repository separation, Swagger documentation, and middleware for rate limiting and error handling.</li>
      </ul>
      `,
    },
    {
        title: 'Redactor(In Progress)',
        slug: 'api-mcp-privacy',
        icon: 'https://img.icons8.com/?size=100&id=47390&format=png&color=FFFFFF',
        techStack: ['C#', '.NET'],
        thumbnail: '/projects/api-privacy-wall/thumbnail.png',
        longThumbnail: '/projects/api-privacy-wall/thumbnail.png',
        images: ['/projects/api-privacy-wall/thumbnail.png'],
        year: 2026,
        description:
  `DTOs are the first line of defense for what an API exposes, but they're static and applied by hand. Redactor adds a policy layer behind them that decides which sensitive fields cross a boundary and in what form: redacted, tokenized, or scoped.`,
role: `
  Backend-Developer <br/>
  Designed and built a reusable privacy library for .NET including test API endpoints:
  <ul>
    <li>🛡️ Policy layer: Built a rule-based engine that redacts, tokenizes, or scopes sensitive fields before data leaves an application.</li>
    <li>📦 Library design: Structured it as a class library with optional ASP.NET Core middleware and MCP adapters, so it plugs into existing projects instead of being called over the network.</li>
    <li>🔐 Data minimization: Applied per-destination rules so third-party APIs and LLM/MCP tool calls only receive the fields they need.</li>
    <li>👓 Demo API: Built an ASP.NET Core Web API showing DTOs as the first layer and Redactor enforcing policy behind them.</li>
  </ul>
`,
    },
];

export const MY_BLOGS = [
    {
        title: 'How to Build High Quality Projects Using AI',
        slug: 'systems-ai',
        category: 'Artificial Intelligence',
        excerpt:
            'A practical cost effective guide for students to build polished, high-quality software projects that solve real problems instead of relying on generic AI-generated output.',
        link: 'https://luka8080.blogspot.com/2026/09/how-to-build-high-quality-projects-with-ai.html',
    },
    {
        title: 'Cloud Native Development',
        slug: 'career',
        category: 'Career',
        excerpt: 'drafting.',
        link: 'unavailable',
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'UI/UX Designer',
        company: 'Freelance',
        duration: 'May 2025 - Present',
        link: 'https://www.figma.com/design/dJJhh7MziT6lCV69FmyCb5/my_projects?node-id=0-1&t=sFOmSkBZOxgl7ppN-1',
    },
];
