let project = document.getElementById("project-grid");
console.log(project);

let showText = function (projects) {
    console.log('showtext is running')

    for(let i = 0; i < projects.children.length; i++) {
        console.log(projects[i], 'projects i');
        let child = projects.children[i];
        let showDescription = function() {
            child.children[1].classList.add('project-active');
            child.children[0].classList.add("image-active");
        }
        
    child.addEventListener('mouseenter', showDescription);
    };
}

showText(project);

let hideText = function (projects) {
    console.log('hidetext is running')

    for(let i = 0; i < projects.children.length; i++) {
        console.log(projects[i]);
        let child = projects.children[i];
        let hideDescription = function() {
            child.children[1].classList.remove('project-active');
            child.children[0].classList.remove("image-active");
        }
        
    child.addEventListener('mouseleave', hideDescription);
    };
}
hideText(project);

let navigation = document.getElementsByClassName("nav-list");
let navLink = document.getElementsByClassName("nav-link");
let menuButton = document.getElementById("menu-icon");

let showNav = (list, /*links*/) => {
    console.log("function is running");

    for (let i=0; i<list.length; i++) {
        let showLinks = function() {
            list[i].classList.add('nav-list-active');
             //links[i].classList.add('nav-link-active');
            menuButton.style.display = "none";
        };
    menuButton.addEventListener('click', showLinks);
    };
}

showNav(navigation);

let hideNav = (list, /*links*/) => {
    console.log("function is running");

    for (let i=0; i<list.length; i++) {
        let hideLinks = function() {
            list[i].classList.remove('nav-list-active');
            //links[i].classList.remove('nav-link-active');
            menuButton.style.display = "block";
        };
    menuButton.addEventListener('click', hideLinks);
    };
}

hideNav(navigation);

// emailjs.init('sGNzIaKj1_FMf3dbF');
// emailjs.sendForm('contact_service', 'contact_form', this)



