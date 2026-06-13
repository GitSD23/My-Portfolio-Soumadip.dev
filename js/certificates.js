const featuredCertificates = [
    {
        title: "IIT Roorkee Internship",
        issuer: "IIT Roorkee",
        image: "assets/certificates/cert1.jpg",
        link: "#"
    },
    {
        title: "Inspire Manak Award",
        issuer: "Government Initiative",
        image: "assets/certificates/cert2.jpg",
        link: "#"
    },
    {
        title: "Dell Innovation Hackathon",
        issuer: "Dell",
        image: "assets/certificates/cert3.jpg",
        link: "#"
    }
];

const featuredContainer = document.getElementById("featured-certificates");

featuredCertificates.forEach(cert => {

    featuredContainer.innerHTML += `
    
    <div class="featured-cert-card" data-aos="zoom-in" data-aos-duration="1500">

        <img src="${cert.image}" alt="${cert.title}">

        <div class="cert-content">

            <h4>${cert.title}</h4>

            <p>${cert.issuer}</p>

            <a href="${cert.link}" target="_blank">
                View Certificate
            </a>

        </div>

    </div>

    `;
});