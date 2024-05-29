VanillaTilt.init(document.querySelector(".card"), {
    max: 25,
    speed: 400,
    glare:true,
    "max-glare":0.1,
    
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".card"));