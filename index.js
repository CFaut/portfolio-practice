let project = document.getElementById("project-grid");
console.log(project);

let showText = function (projects) {
   
    console.log('showtext is running')

    for(let i = 0; i < projects.children.length; i++) {
        console.log(projects[i]);
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
            child.children[1].classList.add('project-after');
            child.children[0].classList.add("image-after");
        }
        
      child.addEventListener('mouseleave', hideDescription);
    };
}
 hideText(project);