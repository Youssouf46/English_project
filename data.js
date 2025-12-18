// File: data.js

const studentsData = {

    // Your profile - put it first!
    // Votre profil - mis à jour avec les détails du CV
    'Youssouf': {
        name: "Youssouf Maham Bowba",
        specialty: "Data Engineering",
        photo: "images/Youssouf.png",
        
        // --- NOUVEAUX CHAMPS BASÉS SUR LA PHOTO ---
        Age: '25',
        dob: "31/12/1997",
        nationality: "Mauritanian",
        placeOfBirth: "Nouakchott, Mauritania", 
        bio: `
        As a Data Engineering Master's student (M2) at the University of Corsica Pasquale Paoli, I bring an international perspective and a strong academic background. I hold a double engineering degree: one in Data Engineering & Decision Support Systems from ENET'Com (Tunisia), and another in Statistics & Data Engineering from ESP Nouakchott (Mauritania).

        **Coding Strengths**
        My primary coding strengths lie in the Big Data ecosystem. I have extensive hands-on experience with Python, Scala, and the full Hadoop/Spark stack (including Kafka, Hive, and Hbase). My professional experiences, like my internship at SYSTEO DIGITAL, have allowed me to build robust, end-to-end data pipelines. I am also proficient in web development (Django, React, Node.js) and database management (SQL and NoSQL), which allows me to understand and build the entire data lifecycle, from collection to visualization (Talend, PowerBI).

        **Coding Weaknesses**
        While I am confident in backend and data processing, I am actively working to improve my front-end design (UI/UX) skills. I sometimes find advanced CSS and animation challenging, which is why I am currently taking online courses to become more proficient in modern front-end styling principles.

        **Biggest Achievement in Coding**
       My biggest achievement so far was the design and deployment of the web application for SYSTEO DIGITAL. I was responsible for the entire project, from analyzing the need to deploying the final product. This tool successfully extracts data from CVs and matches them with job offers, a complex task that required...

        **Future Plans**
        My immediate future plan is to secure a challenging end-of-studies internship starting in February 2025. I am eager to join a dynamic team where I can apply my data engineering skills to real-world Big Data problems. My long-term goal is to grow into a role as a Senior Data Architect, designing and managing large-scale data infrastructure.
        `,
        // --- FIN DE L'ÉVALUATION ÉCRITE ---

        skills: [
            "Python", "R", "Scala", "Java", "SQL",
            "Hadoop", "Spark", "Kafka", "Hive", "Hbase",
            "MongoDB", "MySQL", "Talend", "PowerBI",
            "Django", "Flask", "React.js", "Node.js",
            "Scrum", "UML", "Merise"
        ]
    },

    // Other students' profiles

  'EZ-ZAHER Manal': {
        name: "EZ-ZAHER Manal",
        specialty: "DFS",
        photo: "images/EZ-ZAHER Manal.png",
        nationality: "Moroccan",
        Age: '25',
        dob: "15/03/2000",
        placeOfBirth: "Casablanca, Morocco",
        bio: `
        **Coding Strengths**
        I excel in front-end development with React and modern JavaScript frameworks. I have a strong eye for UI/UX design and can transform complex designs into responsive, accessible web applications. My strength lies in creating intuitive user interfaces with smooth animations and excellent user experience.

        **Coding Weaknesses**
        While I'm comfortable with front-end technologies, I sometimes struggle with complex database optimization and advanced backend architecture patterns. I'm currently working on improving my skills in microservices architecture and distributed systems.

        **Biggest Achievement in Coding**
        I developed a complete e-commerce platform for a local business using React and Node.js. The platform handles over 1,000 daily transactions and includes features like real-time inventory management, payment integration, and an admin dashboard. This project taught me the importance of scalability and user-centered design.

        **Interesting Fun Fact**
        I'm a huge fan of pixel art and sometimes create 8-bit style animations for my web projects. I also participate in coding marathons and once coded for 24 hours straight during a hackathon!
        `,
        skills: [
            "JavaScript", "React", "Node.js", "Express",
            "HTML5", "CSS3", "MongoDB", "SQL",
            "Git", "REST API", "TypeScript", "Vue.js"
        ]
    },

    'DAHDOUH Ahmed': {
        name: "DAHDOUH Ahmed",
        specialty: "DFS",
        photo: "images/DAHDOUH Ahmed.png",
        nationality: "Algerian",
        Age: '25',
        dob: "22/07/2000",
        placeOfBirth: "Algiers, Algeria",
        bio: `
        **Coding Strengths**
        I have strong expertise in Python and Django for building robust backend systems. My strength lies in designing efficient APIs and implementing clean, maintainable code following best practices. I'm particularly skilled at database design and optimization, as well as implementing authentication and security features.

        **Coding Weaknesses**
        I sometimes find myself spending too much time perfecting code instead of shipping features quickly. I'm also working on improving my skills in modern CSS frameworks and animations, as I tend to focus more on backend logic than visual design.

        **Biggest Achievement in Coding**
        I built a comprehensive student management system for my university that handles course registration, grade tracking, and scheduling for over 5,000 students. The system reduced administrative workload by 60% and is still in active use today.

        **Interesting Fun Fact**
        I taught myself to code by building a bot that automatically solves Sudoku puzzles. Now I use AI to generate new challenging puzzles. I also love competitive programming and have participated in several ACM ICPC competitions!
        `,
        skills: [
            "Python", "Django", "JavaScript", "React",
            "PostgreSQL", "Docker", "AWS", "GraphQL",
            "Redux", "FastAPI", "Git", "Tailwind CSS"
        ]
    },
     'GHOULAM Mehdi': {
        name: "GHOULAM Mehdi",
        specialty: "DFS",
        photo: "images/GHOULAM Mehdi.png",
        nationality: "French & Moroccan",
        Age: '25',
        dob: "10/11/1999",
        placeOfBirth: "Marseille, France",
        bio: `
        **Coding Strengths**
        I specialize in Angular and TypeScript for building enterprise-level applications. I'm very comfortable with reactive programming using RxJS and creating complex state management solutions. My strength is in architecting scalable front-end applications with clean, modular code.

        **Coding Weaknesses**
        I sometimes overcomplicate solutions by trying to make everything too perfect and reusable. I'm also working on improving my DevOps skills, particularly with CI/CD pipelines and cloud infrastructure management.

        **Biggest Achievement in Coding**
        I developed a real-time collaboration tool similar to Google Docs using Angular and WebSockets. The application supports simultaneous editing by multiple users with conflict resolution and is used by my team for documentation and project planning.

        **Interesting Fun Fact**
        I'm bilingual and I code-switch between French and Arabic when debugging - somehow thinking in different languages helps me see bugs differently! I also collect vintage computer keyboards and have over 15 mechanical keyboards.
        `,
        skills: [
            "Angular", "TypeScript", "Node.js", "NestJS",
            "MySQL", "MongoDB", "Docker", "Kubernetes",
            "REST API", "Material UI", "SASS", "Jest"
        ]
    },

    'THIRY Stephane': {
        name: "THIRY Stephane",
        specialty: "DFS",
        photo: "images/THIRY Stephane.png",
        nationality: "French",
        Age: '25',
        dob: "05/04/2000",
        placeOfBirth: "Lyon, France",
        bio: `
        **Coding Strengths**
        I'm highly proficient in Next.js and React ecosystem, specializing in server-side rendering and static site generation. I excel at creating performant web applications with excellent SEO and fast load times. I also have strong skills in API design with tRPC for type-safe APIs.

        **Coding Weaknesses**
        I sometimes get too caught up in optimizing performance before features are even complete. I'm also working on improving my mobile development skills, as most of my experience is in web development.

        **Biggest Achievement in Coding**
        I created a popular blog platform using Next.js that has over 10,000 monthly active users. The platform features markdown editing, image optimization, and a custom analytics dashboard. It's been featured in several web development newsletters.

        **Interesting Fun Fact**
        I started coding at age 12 by making simple games in Scratch. Now I contribute to open-source projects and have had several PRs merged into major frameworks. I also stream coding sessions on Twitch occasionally!
        `,
        skills: [
            "React", "Next.js", "Node.js", "Express",
            "PostgreSQL", "Prisma", "Vercel", "Git",
            "TypeScript", "Tailwind CSS", "Zustand", "tRPC"
        ]
    },

    'Ambroise': {
        name: "Ambroise",
        specialty: "DE",
        photo: "images/Ambroise.png",
        nationality: "Togolese",
        Age: '25',
        dob: "18/09/2000",
        placeOfBirth: "Lomé, Togo",
        bio: `
        **Coding Strengths**
        I excel at building data pipelines with Apache Spark and working with large-scale distributed systems. My strength lies in optimizing ETL processes and designing efficient data architectures. I'm particularly skilled at handling streaming data with Kafka and implementing real-time analytics.

        **Coding Weaknesses**
        I sometimes struggle with front-end technologies and user interface design. My focus has always been on backend data processing, so I'm working on improving my visualization skills with tools like D3.js and creating better dashboards.

        **Biggest Achievement in Coding**
        I built a real-time fraud detection system for a fintech company that processes millions of transactions daily. The system reduced fraud by 45% and saved the company over €500,000 in its first year of operation.

        **Interesting Fun Fact**
        I'm obsessed with data visualization and spend my free time creating interactive data stories. I once visualized 10 years of climate data in a single beautiful animation. I also play chess competitively and use data analysis to improve my game!
        `,
        skills: [
            "Python", "Apache Spark", "Hadoop", "Kafka",
            "SQL", "PostgreSQL", "ETL", "Airflow",
            "Pandas", "NumPy", "Docker", "Git"
        ]
    },
    
    'Badre': {
        name: "Badre",
        specialty: "DFS",
        photo: "images/Badre.png",
        nationality: "French & Moroccan",
        Age: '25',
        dob: "28/12/1999",
        placeOfBirth: "Rabat, Morocco",
        bio: `
        **Coding Strengths**
        I'm proficient in Vue.js ecosystem and PHP Laravel framework. I excel at creating modern, reactive web applications with clean architecture. My strength is in rapid prototyping and turning ideas into working products quickly while maintaining code quality.

        **Coding Weaknesses**
        I tend to stick with technologies I'm comfortable with and sometimes resist learning new frameworks. I'm working on being more open to trying different tech stacks and expanding my knowledge beyond the Vue/Laravel combo.

        **Biggest Achievement in Coding**
        I developed a complete SaaS platform for restaurant management using Laravel and Vue.js. The platform handles reservations, inventory, and staff management for over 50 restaurants across Morocco and France.

        **Interesting Fun Fact**
        I learned to code by building a website for my family's restaurant when I was 16. Now I help local businesses digitize their operations. I also speak four languages: French, Arabic, English, and Berber!
        `,
        skills: [
            "Vue.js", "Nuxt.js", "PHP", "Laravel",
            "MySQL", "Redis", "Docker", "Git",
            "JavaScript", "Bootstrap", "Vuetify", "REST API"
        ]
    },


    'hafsa': {
        name: "Hafsa",
        specialty: "DE",
        photo: "images/hafsa.png",
        nationality: "Moroccan",
        Age: '25',
        dob: "14/06/2000",
        placeOfBirth: "Marrakech, Morocco",
        bio: `
        **Coding Strengths**
        I specialize in data engineering with PySpark and building scalable data pipelines. I'm very skilled at data modeling and creating efficient ETL workflows. My expertise includes working with both SQL and NoSQL databases, and I excel at data quality management.

        **Coding Weaknesses**
        I sometimes struggle with real-time data streaming architectures and need to improve my understanding of advanced Kafka configurations. I'm also working on improving my knowledge of cloud-native data solutions.

        **Biggest Achievement in Coding**
        I designed and implemented a complete data warehouse solution for an e-commerce company, integrating data from 15 different sources. The solution improved reporting speed by 80% and enabled real-time business intelligence dashboards.

        **Interesting Fun Fact**
        I'm passionate about using data for social good. I volunteer with NGOs to analyze data for education and healthcare projects in Morocco. I also love hiking in the Atlas Mountains and use GPS data to create detailed trail maps!
        `,
        skills: [
            "Python", "PySpark", "SQL", "Hive",
            "Kafka", "MongoDB", "Elasticsearch", "Talend",
            "PowerBI", "Pandas", "Azure", "Git"
        ]
    },

    'LOVICHI Dorian': {
        name: "LOVICHI Dorian",
        specialty: "DFS",
        photo: "images/LOVICHI Dorian.png",
        nationality: "French",
        Age: '25',
        dob: "03/02/2000",
        placeOfBirth: "Nice, France",
        bio: `
        **Coding Strengths**
        I have strong expertise in Java Spring Boot for building enterprise microservices. I excel at designing RESTful APIs and implementing robust backend systems with proper testing. My strength lies in writing clean, maintainable code following SOLID principles.

        **Coding Weaknesses**
        I sometimes over-engineer solutions and create too many abstraction layers. I'm working on finding the right balance between flexibility and simplicity. I also need to improve my front-end skills beyond basic React.

        **Biggest Achievement in Coding**
        I architected and developed a microservices-based inventory management system that handles over 100,000 products across multiple warehouses. The system includes real-time tracking, automated reordering, and integration with major e-commerce platforms.

        **Interesting Fun Fact**
        I'm a huge retro gaming fan and I've built several emulators for old game consoles. I also participate in coding dojos every week to practice different programming paradigms. My goal is to master 10 programming languages!
        `,
        skills: [
            "React", "JavaScript", "Spring Boot", "Java",
            "MySQL", "Docker", "Jenkins", "Git",
            "REST API", "Microservices", "JUnit", "Maven"
        ]
    },

    'MARCHISELLI Anthony': {
        name: "MARCHISELLI Anthony",
        specialty: "DFS",
        photo: "images/MARCHISELLI Anthony.png",
        nationality: "French",
        Age: '25',
        dob: "19/08/2000",
        placeOfBirth: "Ajaccio, France",
        bio: `
        **Coding Strengths**
        I'm specialized in C# and .NET ecosystem, particularly with Blazor for building modern web applications. I excel at creating full-stack applications using Microsoft technologies and Azure cloud services. My strength is in rapid application development with strong typing and clean architecture.

        **Coding Weaknesses**
        I'm very comfortable in the Microsoft ecosystem but less experienced with other tech stacks like Node.js or Python frameworks. I'm working on diversifying my skills and learning more about cross-platform development.

        **Biggest Achievement in Coding**
        I developed a complete hospital management system using .NET Core and Blazor that manages patient records, appointments, and billing for a 200-bed hospital. The system improved efficiency by 50% and is used by over 300 staff members daily.

        **Interesting Fun Fact**
        I'm a Corsican native and I code while listening to traditional Corsican polyphonic singing - it helps me focus! I also built a mobile app that teaches the Corsican language to children.
        `,
        skills: [
            "C#", ".NET Core", "Blazor", "React",
            "SQL Server", "Azure", "Entity Framework", "Git",
            "SignalR", "REST API", "Swagger", "Dapper"
        ]
    },

    'MENGHI Anthony': {
        name: "MENGHI Anthony",
        specialty: "DFS",
        photo: "images/MENGHI Anthony.png",
        nationality: "French",
        Age: '25',
        dob: "11/01/2000",
        placeOfBirth: "Bastia, France",
        bio: `
        **Coding Strengths**
        I specialize in mobile development with React Native, creating cross-platform applications for iOS and Android. I'm very skilled at integrating native modules and optimizing app performance. My expertise includes real-time features using Socket.io and push notifications.

        **Coding Weaknesses**
        I sometimes struggle with native iOS/Android development when React Native isn't sufficient. I'm learning Swift and Kotlin to be able to write native modules when needed. I also need to improve my backend architecture skills.

        **Biggest Achievement in Coding**
        I built a popular fitness tracking app that has over 50,000 downloads on both iOS and Android. The app includes workout planning, nutrition tracking, and social features. It was featured in the App Store's "Apps We Love" section.

        **Interesting Fun Fact**
        I'm an avid marathon runner and I use my coding skills to analyze my training data. I've completed 5 marathons and I'm building an AI coach app that provides personalized training plans. I also do trail running in the Corsican mountains!
        `,
        skills: [
            "React Native", "JavaScript", "Node.js", "Express",
            "Firebase", "MongoDB", "Redux", "Git",
            "Expo", "REST API", "Socket.io", "Jest"
        ]
    },

    'MICHELOZZI Matthieu': {
        name: "MICHELOZZI Matthieu",
        specialty: "DE",
        photo: "images/MICHELOZZI Matthieu.png",
        nationality: "French",
        Age: '25',
        dob: "25/05/2000",
        placeOfBirth: "Corte, France",
        bio: `
        **Coding Strengths**
        I'm highly proficient in Scala and functional programming paradigms. I excel at building high-performance data processing systems with Apache Spark and handling massive datasets. My strength lies in optimizing complex data transformations and working with distributed systems.

        **Coding Weaknesses**
        I sometimes write overly complex functional code that's hard for others to understand. I'm working on balancing functional purity with code readability. I also need to improve my skills in data visualization and creating user-friendly dashboards.

        **Biggest Achievement in Coding**
        I built a real-time recommendation engine using Scala and Spark that processes 10 million events per day. The system improved product recommendations by 35% and increased sales conversion by 20% for an e-commerce platform.

        **Interesting Fun Fact**
        I'm fascinated by functional programming and I read academic papers on type theory for fun! I also contribute to Apache Spark open-source project. In my free time, I play traditional Corsican guitar and sometimes perform at local festivals.
        `,
        skills: [
            "Scala", "Apache Spark", "Kafka", "Hadoop",
            "Hive", "Cassandra", "Elasticsearch", "Git",
            "Python", "SQL", "Airflow", "Docker"
        ]
    },

    'MIRANDE Clementine': {
        name: "MIRANDE Clementine",
        specialty: "DE",
        photo: "images/MIRANDE Clementine.png",
        nationality: "French",
        Age: '25',
        dob: "07/10/2000",
        placeOfBirth: "Toulouse, France",
        bio: `
        **Coding Strengths**
        I specialize in modern data stack tools like Snowflake and DBT for analytics engineering. I excel at transforming raw data into business-ready models and creating comprehensive data documentation. My strength is in building reliable, tested data pipelines with great data quality.

        **Coding Weaknesses**
        I'm very focused on the analytics side and less experienced with real-time streaming data. I'm working on learning more about Kafka and event-driven architectures. I also need to improve my machine learning skills.

        **Biggest Achievement in Coding**
        I led the migration of a legacy data warehouse to Snowflake and DBT, reducing query times by 70% and data pipeline failures by 90%. I also established data quality standards and documentation practices that are now company-wide standards.

        **Interesting Fun Fact**
        I started my tech journey as a data analyst and fell in love with SQL. Now I write poetry about data pipelines! I also volunteer teaching coding to young girls through Girls Who Code. I'm passionate about increasing women representation in tech.
        `,
        skills: [
            "Python", "SQL", "Snowflake", "DBT",
            "Airflow", "Tableau", "PowerBI", "Git",
            "Pandas", "AWS", "ETL", "Data Modeling"
        ]
    },

    'monia': {
        name: "Monia",
        specialty: "DE",
        photo: "images/monia.png",
        nationality: "Algerian",
        Age: '25',
        dob: "30/03/2000",
        placeOfBirth: "Oran, Algeria",
        bio: `
        **Coding Strengths**
        I'm proficient in Python data engineering tools and Apache Spark for big data processing. I excel at building robust ETL pipelines and working with both relational and NoSQL databases. My strength lies in data quality assurance and implementing automated data validation.

        **Coding Weaknesses**
        I sometimes find cloud infrastructure and DevOps challenging, particularly with advanced Kubernetes configurations. I'm taking courses to improve my cloud-native data engineering skills and working on AWS and Azure certifications.

        **Biggest Achievement in Coding**
        I designed and implemented a complete data lake architecture for a telecommunications company, consolidating data from over 20 different sources. The solution processes over 5TB of data daily and powers all business intelligence dashboards.

        **Interesting Fun Fact**
        I learned Python by analyzing social media data to understand trending topics in Algeria. Now I use data science for social research projects. I also love traditional Algerian cuisine and I built a recipe recommendation system based on ingredient availability!
        `,
        skills: [
            "Python", "Apache Spark", "Hadoop", "SQL",
            "MongoDB", "Kafka", "Talend", "PowerBI",
            "Pandas", "NumPy", "Docker", "Linux"
        ]
    },

    'POIRIER Achille': {
        name: "POIRIER Achille",
        specialty: "DFS",
        photo: "images/POIRIER Achille.png",
        nationality: "French",
        Age: '25',
        dob: "16/11/2000",
        placeOfBirth: "Bordeaux, France",
        bio: `
        **Coding Strengths**
        I specialize in Svelte and SvelteKit for building ultra-fast, reactive web applications. I'm passionate about web performance and creating smooth user experiences. My strength is in writing minimal, efficient code that compiles to highly optimized JavaScript.

        **Coding Weaknesses**
        Since Svelte has a smaller ecosystem than React, I sometimes struggle to find ready-made solutions. I'm working on contributing to the Svelte community and building reusable components. I also need to improve my backend architecture skills.

        **Biggest Achievement in Coding**
        I built a real-time collaborative whiteboard application using SvelteKit and WebSockets that's used by over 5,000 remote teams. The app has perfect 100 Lighthouse scores and handles complex real-time synchronization smoothly.

        **Interesting Fun Fact**
        I'm obsessed with web performance optimization. I once spent an entire weekend optimizing a website's load time from 3 seconds to 0.8 seconds! I also love wine and I'm building an app to help wine enthusiasts track their cellar collections.
        `,
        skills: [
            "Svelte", "SvelteKit", "TypeScript", "Node.js",
            "PostgreSQL", "Prisma", "Tailwind CSS", "Git",
            "Vite", "REST API", "WebSocket", "Vitest"
        ]
    },
    'ROBLES Nicolas': {
        name: "ROBLES Nicolas",
        specialty: "DFS",
        photo: "images/ROBLES Nicolas.png",
        nationality: "French",
        Age: '25',
        dob: "21/07/2000",
        placeOfBirth: "Montpellier, France",
        bio: `
        **Coding Strengths**
        I'm highly skilled in Ruby on Rails for rapid web application development. I excel at following Rails conventions and building maintainable, well-tested applications. My strength is in creating elegant, readable code and implementing complex business logic efficiently.

        **Coding Weaknesses**
        I'm very comfortable with Rails but less experienced with modern front-end frameworks like React or Vue. I'm working on improving my JavaScript skills and learning more about modern front-end development beyond Hotwire.

        **Biggest Achievement in Coding**
        I built a complete project management SaaS platform using Rails that serves over 1,000 companies. The platform includes time tracking, invoicing, team collaboration, and integrations with popular tools like Slack and GitHub.

        **Interesting Fun Fact**
        I'm a huge Ruby enthusiast and I contribute to several Ruby gems. I also organize a local Ruby meetup in Montpellier. Outside of coding, I'm a semi-professional photographer and I built a portfolio platform for photographers using Rails!
        `,
        skills: [
            "Ruby", "Ruby on Rails", "JavaScript", "React",
            "PostgreSQL", "Redis", "Sidekiq", "Git",
            "Heroku", "REST API", "RSpec", "Hotwire"
        ]
    },
    'SECK Abdou samath': {
        name: "SECK Abdou samath",
        specialty: "DE",
        photo: "images/SECK Abdou samath.png",
        nationality: "Senegalese",
        Age: '25',
        dob: "09/04/2000",
        placeOfBirth: "Dakar, Senegal",
        bio: `
        **Coding Strengths**
        I'm proficient in both Python and R for data engineering and statistical analysis. I excel at building data pipelines and creating insightful visualizations. My strength lies in bridging the gap between data engineering and data science, understanding both technical implementation and statistical methodology.

        **Coding Weaknesses**
        I sometimes struggle with very large-scale distributed systems and advanced Spark optimizations. I'm working on deepening my knowledge of cluster computing and performance tuning. I also need to improve my cloud infrastructure skills.

        **Biggest Achievement in Coding**
        I developed a complete agricultural data platform for Senegalese farmers that collects weather data, soil information, and crop yields to provide farming recommendations. The platform is used by over 2,000 farmers and has helped improve crop yields by 25%.

        **Interesting Fun Fact**
        I'm passionate about using technology for social impact in Africa. I volunteer teaching coding to young people in Dakar. I also love Senegalese wrestling (La Lutte) and I built a stats tracking system for wrestling matches!
        `,
        skills: [
            "Python", "R", "Apache Spark", "SQL",
            "Kafka", "Hive", "MySQL", "MongoDB",
            "Tableau", "ETL", "Airflow", "Git"
        ]
    },

    // Remember to remove the duplicate 'THIRY Stephane'
    'Thomas': {
        name: "Thomas",
        specialty: "DFS",
        photo: "images/Thomas.png",
        nationality: "French",
        Age: '25',
        dob: "12/09/2000",
        placeOfBirth: "Nantes, France",
        bio: `
        **Coding Strengths**
        I specialize in Flutter for cross-platform mobile development. I excel at creating beautiful, performant mobile applications with excellent UI/UX. My strength is in implementing complex animations and custom widgets while maintaining clean, maintainable code architecture.

        **Coding Weaknesses**
        I'm very focused on mobile development and less experienced with web technologies. I'm working on learning React and web development to become a more well-rounded fullstack developer. I also need to improve my backend API design skills.

        **Biggest Achievement in Coding**
        I developed a popular language learning app using Flutter that has over 100,000 downloads. The app uses spaced repetition algorithms and gamification to make learning fun. It supports 15 languages and has a 4.8-star rating on both app stores.

        **Interesting Fun Fact**
        I'm a polyglot who speaks 5 languages (French, English, Spanish, German, and Japanese) and I used my language learning experience to design better educational apps. I also love anime and I'm building an anime recommendation system!
        `,
        skills: [
            "Flutter", "Dart", "Firebase", "Node.js",
            "MongoDB", "REST API", "Provider", "Git",
            "BLoC", "GetX", "Material Design", "Figma"
        ]
    }
};