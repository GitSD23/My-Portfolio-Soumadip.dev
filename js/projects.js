const projects = [

    {
        title: "Signal Strength Prediction Using Deep Learning",

        description:
        "Built Deep Learning models to predict signal strength from frequency datasets and compare performance.",

        tech: [
            "Python",
            "Deep Learning",
            "TensorFlow",
            "Data Analysis"
        ],

        github: "#",

        demo: "#",

        image:
        "assets/images/project1.png"
    },

    {
        title: "Ohm-Mitra Chatbot",

        description:
        "Developed an AI-powered chatbot capable of assisting users with electrical and technical queries.",

        tech: [
            "Python",
            "AI",
            "NLP"
        ],

        github: "#",

        demo: "#",

        image:
        "assets/images/project2.png"
    },

    {
        title: "Elder Assistance System",

        description:
        "A web-based platform designed to assist elderly users with daily activities and emergency support.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        github: "#",

        demo: "#",

        image:
        "assets/images/project3.png"
    },

    {
        title: "Spotify Clone",

        description:
        "Frontend clone of Spotify built to practice modern UI design and responsive layouts.",

        tech: [
            "HTML",
            "CSS"
        ],

        github: "#",

        demo: "#",

        image:
        "assets/images/project4.png"
    }

];

const container = document.getElementById("projects-container");

projects.forEach(project => {

    const card = document.createElement("div");

    card.classList.add("project-card");

    card.innerHTML = `

        <div class="project-image">

            <img src="${project.image}"
                 alt="${project.title}">

        </div>

        <div class="project-content">

            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <div class="project-tech">

                ${project.tech
                    .map(
                        skill =>
                        `<span>${skill}</span>`
                    )
                    .join("")
                }

            </div>

            <div class="project-links">

                <a href="${project.github}"
                   target="_blank">

                    GitHub

                </a>

                <a href="${project.demo}"
                   target="_blank">

                    Demo

                </a>

            </div>

        </div>

    `;

    container.appendChild(card);

});