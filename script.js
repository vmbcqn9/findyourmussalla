const icons = document.getElementById("icons");
const nav = document.querySelector("nav");
const body = document.body;
const html = document.documentElement;


icons.addEventListener("click", () => {
    console.log('Icons clicked!');
    icons.classList.toggle('actived');
    nav.classList.toggle('active');
    bn.classList.toggle('active');
    bn2.classList.toggle('active');

    // Toggle body scrolling
    body.classList.toggle("no-scroll");

    // Toggle scrolling for the entire HTML document
    html.classList.toggle("no-scroll");

    if (body.classList.contains("no-scroll")) {
        console.log('Body is set to no-scroll');
        // Ensure the scroll position is maintained when scrolling is disabled
        body.style.top = `-${window.scrollY}px`;
    } else {
        console.log('Body scrolling is enabled');
        // Restore the scroll position when scrolling is enabled
        const scrollY = parseInt(body.style.top || "0");
        body.style.top = "";
        window.scrollTo(0, scrollY);
    }

    if (html.classList.contains("no-scroll")) {
        console.log('HTML document is set to no-scroll');
        // Ensure the scroll position is maintained for the entire HTML document
        html.style.top = `-${window.scrollY}px`;
    } else {
        console.log('HTML document scrolling is enabled');
        // Restore the scroll position for the entire HTML document
        const scrollY = parseInt(html.style.top || "0");
        html.style.top = "";
        window.scrollTo(0, scrollY);
    }
});


const links = document.querySelectorAll("nav li");
links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        icons.classList.remove('actived');
        bn.classList.remove('actived');
        bn2.classList.remove('actived');
        body.classList.remove("no-scroll");
        html.classList.remove("no-scroll")

        // Restore the scroll position when a navigation link is clicked
        const scrollY = parseInt(body.style.top || "0");
        const scrollY2 = parseInt(html.style.top || "0");
       
        body.style.top = "";
        html.style.top = "";
        window.scrollTo(0, scrollY);
        window.scrollTo(0, scrollY2);
    });
});



