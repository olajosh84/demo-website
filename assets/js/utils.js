
const links = document.querySelector('.links');
const menuIcon = document.querySelector('.menu-icon');
const copyright = document.querySelector('.copyright');
const topLink = document.querySelector('.back-to-top');
const footer = document.querySelector("footer");

let currentYear = new Date().getFullYear();

menuIcon.addEventListener("click", () => {
    links.classList.toggle('show');
})



//show/hide back to top link
window.addEventListener("scroll", () => {
    let windowHeight = window.scrollY;
    if(windowHeight > 500){
        topLink.style.visibility = "visible";

    }else{
        topLink.style.visibility = "hidden";
    }
});

//menu items
links.innerHTML = `
    <li><a class="nav-link active" href="index.html">home</a></li>
    <li><a class="nav-link" href="about.html">about</a></li>
    <li><a class="nav-link" href="contact.html">contact</a></li>
    <li><a class="nav-link" href="blog.html">blog</a></li>
    <li><a class="nav-link" href="gallery.html">gallery</a></li>
    <li><a class="nav-link" href="register.html" target="_blank"><button class="signup-btn">sign up</button></a></li>
`;

//footer address info;
footer.innerHTML = `
    <div class="footer-top">
        <div class="address-info">
            <div class="logo"></div>
            <div class="address">
                <p>
                    <span><i class="fas fa-map-marker-alt"></i></span>
                    Eko Hotels & Suites Plot 1415 Adetokunbo Ademola Street, Victoria Island 106104, Lagos .
                </p>
                <p>
                    <span><i class="fas fa-phone"></i></span>
                    <span>+2348137989322</span> 
                </p>
                <p>
                    <span><i class="fas fa-envelope"></i></span>
                    <span>olumuyiwajames@gmail.com</span>   
                </p>
            </div>
            <div class="social-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin"></i>
            </div>
        </div>
        <div class="quick-links">
            <h4>quick links</h4>
            <ul id="quick-links">
                <li><a class="nav-link active" href="index.html">home</a></li>
                <li><a class="nav-link" href="about.html">about</a></li>
                <li><a class="nav-link" href="contact.html">contact</a></li>
                <li><a class="nav-link" href="blog.html">blog</a></li>
                <li><a class="nav-link" href="gallery.html">gallery</a></li>
                <li><a class="nav-link" href="login.html" target="_blank">login</a></li>
                <li><a class="nav-link" href="register.html" target="_blank">register</a></li>
            </ul>
        </div>
        <div class="newsletter">
            <p>Please subscribe to our newsletter</p>
            <div class="news-form">
                <input id="news-input" type="text" placeholder="Enter email address">
                <button>submit</button>
            </div>
                    
        </div>
    </div>
    <div class="copyright">
        <small>&copy; Copyright ${currentYear} Olajeks Coding. All Rights Reserved.</small>
    </div>
`;

//changing the logo color
const logos = document.querySelectorAll('.logo');
logos.forEach(logo => {
    logo.innerHTML = "<a href='index.html'><span class='one-half-logo'>Olajeks</span> <span class='other-half-logo'>Coding</span></a>";
});

const pageUrl = window.location.href;
const navLinks = document.querySelectorAll("a.nav-link");

function activeLink(page){
    if(pageUrl.includes(page)){
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if(link.getAttribute("href") === page){
                link.classList.add("active");
            }
        })
    }
}








/*links.innerHTML = menuItems.map((menu) => {
    const {id, item} = menu;
    let newItem;
    if(item === "home"){
        newItem = "index";
    }else{
        newItem = item;
    }
    return `<li><a href="${newItem}.html">${item}</a></li>`
}).join("");*/