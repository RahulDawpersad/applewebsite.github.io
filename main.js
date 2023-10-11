const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const navbar = document.querySelector('nav');

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

//Navbar blur effect
window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");

    if (window.scrollY >= 50) {
        navbar.style.backgroundColor = "transparent"; // Solid background color when scrolled rgba(255, 255, 255, 1) */
        navbar.style.backdropFilter = "blur(50px)"; // Add blur effect when scrolled * 
    } else {
        navbar.style.backgroundColor = "#232526"; // Initial background color rgba(255, 255, 255, 0.8)*/
        navbar.style.backdropFilter = "blur(10px)"; //Initial blur effect */
     }
});

//create the intersection observer
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {   //it can observe multiple entries at the same time
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});
//grab all the elements that have that specific class.
const hiddenElements = document.querySelectorAll('.hidden');


//tell it what to observe
hiddenElements.forEach((el)=> observer.observe(el)); //Tell the observer to observe
