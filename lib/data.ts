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
        thumbnail: '/projects/images/thumbnail/paypoint_payroll.png',
        longThumbnail: '/projects/images/thumbnail/paypoint_payroll.png',
        images: ['/projects/images/paypoint-system-1.png'],
    },
    {
        title: 'Pearl Lanka - Travel Advisory',
        slug: 'pearl-lanka',
        icon: 'https://img.icons8.com/?size=100&id=17030&format=png&color=FFFFFF',
        techStack: [
            'React',
            '.NET',
            'PostgreSQL',
            'Mapbox GL',
            'Tailwind CSS',
            'JSON',
        ],
        thumbnail: '/projects/images/thumbnail/travel-advisory1.png',
        longThumbnail: '/projects/images/thumbnail/travel-advisory1.png',
        images: [
            '/projects/images/travel-advisory1.png',
            '/projects/images/travel-advisory2.png',
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
        techStack: [
            'ASP.NET Core',
            'C#',
            'SQL Server',
            'Entity Framework Core',
            'Redis',
        ],
        thumbnail: '/projects/images/thumbnail/cliniq.png',
        longThumbnail: '/projects/images/thumbnail/cliniq.png',
        images: ['/projects/images/cliniq.png'],
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
        title: 'API Privacy Wall',
        slug: 'api-privacy',
        icon: 'https://img.icons8.com/?size=100&id=47390&format=png&color=FFFFFF',
        techStack: ['C#', '.NET'],
        thumbnail: '/projects/images/thumbnail/property-pro-1.png',
        longThumbnail: '/projects/images/thumbnail/property-pro-1.png',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        year: 2026,
        description:
            'exploring how APIs can act as a controlled privacy boundary between clients and internal application data.',
        role: `
      Backend-Developer <br/>
      Contributed across the server side lifecycle:
      <ul>
        <li>🛡️ Privacy: Implemented a custom ASP.NET Core middleware to act as a privacy boundary for API requests and responses.</li>
        <li>📦 DTOs: Used pure record type DTOs to control what data crosses the API boundary.</li>
        <li>🔐 Security: Added validation and authorization to protect endpoints.</li>
        <li>👓 Design: Considered security, data exposure, and failure points when designing the request flow.</li>
      </ul>
      `,
    },
];

export const MY_BLOGS = [
    {
        title: 'How to Build High End Non-AI Slop Projects',
        slug: 'systems-ai',
        category: 'Artificial Intelligence',
        excerpt:
            'A practical guide to building polished, high-quality software projects that solve real problems instead of relying on generic AI-generated output.',
        link: 'https://luqman-highend-projects-ai.blogspot.com/2026/09/how-to-build-high-quality-projects.html',
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
    },
    {
        title: 'Open Source Contributer',
        company: 'Github',
        duration: 'Dec 2024 - Present',
    },
];
