// File: data.js

const studentsData = {

    // Your profile - put it first!
    // Votre profil - mis à jour avec les détails du CV
    'Youssouf': {
        name: "Youssouf Maham Bowba",
        specialty: "Data Engineering",
        photo: "images/Youssouf.png",
        
        // --- NOUVEAUX CHAMPS BASÉS SUR LA PHOTO ---
        Age: '27',
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
        Nationality: "Moroccan",
        Age: '25'
    },

    'DAHDOUH Ahmed': {
        name: "DAHDOUH Ahmed",
        specialty: "DFS",
        photo: "images/DAHDOUH Ahmed.png",
        Nationality: "Algerian",
        Age: '25'
        
    },
     'GHOULAM Mehdi': {
        name: "GHOULAM Mehdi",
        specialty: "DFS",
        photo: "images/GHOULAM Mehdi.png",
        Nationality: "French & Moroccan",
        Age: '25'
    },

    'THIRY Stephane': {
        name: "THIRY Stephane",
        specialty: "DFS",
        photo: "images/THIRY Stephane.png",
        Nationality: "French",
        Age: '25'
    },

    'Ambroise': {
        name: "Ambroise",
        specialty: "DE",
        photo: "images/Ambroise.png",
        Nationality: "French",
        Age: '25'
    },
    
    'Badre': {
        name: "Badre",
        specialty: "DFS",
        photo: "images/Badre.png",
        Nationality: "French & Moroccan",
        Age: '25'
    },


    'hafsa': {
        name: "Hafsa",
        specialty: "DE",
        photo: "images/hafsa.png",
        Nationality: "Moroccan",
        Age: '25'
    },

    'LOVICHI Dorian': {
        name: "LOVICHI Dorian",
        specialty: "DFS",
        photo: "images/LOVICHI Dorian.png",
        Nationality: "French",
        Age: '25'
    },

    'MARCHISELLI Anthony': {
        name: "MARCHISELLI Anthony",
        specialty: "DFS",
        photo: "images/MARCHISELLI Anthony.png",
        Nationality: "French",
        Age: '25'
    },

    'MENGHI Anthony': {
        name: "MENGHI Anthony",
        specialty: "DFS",
        photo: "images/MENGHI Anthony.png",
        Nationality: "French",
        Age: '25'
    },

    'MICHELOZZI Matthieu': {
        name: "MICHELOZZI Matthieu",
        specialty: "DE",
        photo: "images/MICHELOZZI Matthieu.png",
        Nationality: "French",
        Age: '25'
    },

    'MIRANDE Clementine': {
        name: "MIRANDE Clementine",
        specialty: "DE",
        photo: "images/MIRANDE Clementine.png",
        Nationality: "French",
        Age: '25'
    },

    'monia': {
        name: "monia",
        specialty: "DE",
        photo: "images/monia.png",
        Nationality: "Algerian",
        Age: '25'
    },

    'POIRIER Achille': {
        name: "POIRIER Achille",
        specialty: "DFS",
        photo: "images/POIRIER Achille.png",
        Nationality: "French",
        Age: '25'
    },
    'ROBLES Nicolas': {
        name: "ROBLES Nicolas",
        specialty: "DFS",
        photo: "images/ROBLES Nicolas.png",
        Nationality: "French",
        Age: '25'
    },
    'SECK Abdou samath': {
        name: "SECK Abdou samath",
        specialty: "DE",
        photo: "images/SECK Abdou samath.png",
        Nationality: "Senegalese",
        Age: '25'
    },

    // Remember to remove the duplicate 'THIRY Stephane'
    'Thomas': {
        name: "Thomas",
        specialty: "DFS",
        photo: "images/Thomas.png",
        Nationality: "French",
        Age: '25'
    }
};