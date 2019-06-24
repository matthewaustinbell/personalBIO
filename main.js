
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const createProjectCard = () => {
    let domString = '';
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].available === true) {
            domString += `<div class="projectsPage">`
            domString += `<h3>title:${projects[i].title}</h3>`;
            domString += `<img src='${projects[i].screenshot}' />`;
            domString += `<h3>${projects[i].description}</h3>`;
            domString += `<h3>${projects[i].technologiesUsed}</h3>`;
            domString += `<h3>${projects[i].url}</h3>`;
            domString += `<h3>${projects[i].githubUrl}</h3>`;
            domString += `</div>`
        }
        
    }
    printToDom('projectsPage', domString)
};

const projects = [{
    title: "Cool Project1",
    screenshot: "https://vignette.wikia.nocookie.net/joke-battles/images/7/72/12198090531909861341man-silhouette-svg-hi12.png/revision/latest?cb=20161120035851",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/matthewaustinbell/tamogachi3", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/matthewaustinbell/tamogachi3"
}, {
    title: "Cool Project2",
    screenshot: "https://vignette.wikia.nocookie.net/joke-battles/images/7/72/12198090531909861341man-silhouette-svg-hi12.png/revision/latest?cb=20161120035851",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
}, {
    title: "Cool Project3",
    screenshot: "https://vignette.wikia.nocookie.net/joke-battles/images/7/72/12198090531909861341man-silhouette-svg-hi12.png/revision/latest?cb=20161120035851",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
}, {
    title: "Cool Project4",
    screenshot: "https://vignette.wikia.nocookie.net/joke-battles/images/7/72/12198090531909861341man-silhouette-svg-hi12.png/revision/latest?cb=20161120035851",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
}, {
    title: "Cool Project5",
    screenshot: "https://vignette.wikia.nocookie.net/joke-battles/images/7/72/12198090531909861341man-silhouette-svg-hi12.png/revision/latest?cb=20161120035851",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
}];




const init = () => {
    createProjectCard();
};

init();