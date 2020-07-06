const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// adding contents to the nav links 
let navItems = document.querySelectorAll('nav a')
for (let i = 0; i < 6; i++) {
  navItems[i].textContent = siteContent['nav'][`nav-item-${i + 1}`]
  //changing the color to green
  navItems[i].style.color = 'green'
}


//adding content to the cta title h1 element
let ctaTitle = document.querySelector('h1')
// ctaTitle.textContent = siteContent['cta']['h1'].split(' ').join('\n')
ctaTitle.innerHTML = `${siteContent['cta']['h1'].split(' ')[0]}<br>${siteContent['cta']['h1'].split(' ')[1]}<br>${siteContent['cta']['h1'].split(' ')[2]}`                 

//adding content to the button
let ctaButton = document.querySelector('button')
ctaButton.textContent = siteContent['cta']['button']

//adding src attribute to the image
let ctaImg = document.querySelector('#cta-img')
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

//h4
let contentTitle = document.querySelectorAll('h4')
contentTitle[0].textContent = siteContent['main-content']['features-h4']
contentTitle[1].textContent = siteContent['main-content']['about-h4']
contentTitle[2].textContent = siteContent['main-content']['services-h4']
contentTitle[3].textContent = siteContent['main-content']['product-h4']
contentTitle[4].textContent = siteContent['main-content']['vision-h4']
contentTitle[5].textContent = siteContent['contact']['contact-h4']

//content p
let contentText = document.querySelectorAll('.main-content p')
contentText[0].textContent = siteContent['main-content']['features-content']
contentText[1].textContent = siteContent['main-content']['about-content']
contentText[2].textContent = siteContent['main-content']['services-content']
contentText[3].textContent = siteContent['main-content']['product-content']
contentText[4].textContent = siteContent['main-content']['vision-content']

//middle img
let contentImg = document.querySelector('#middle-img')
contentImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

//contact p
let contactText = document.querySelectorAll('.contact p')
contactText[0].innerHTML = `${siteContent['contact']['address'].substr(0, 19)}<br>${siteContent['contact']['address'].substr(19)}`
contactText[1].textContent = siteContent['contact']['phone']
contactText[2].textContent = siteContent['contact']['email']

//footer p
let footerText = document.querySelector('footer p')
footerText.textContent = siteContent['footer']['copyright']

//adding two nav items
let navHome = document.createElement('a')
navHome.style.color = 'green'
navHome.textContent = 'Home'

let navApp = document.createElement('a')
navApp.style.color = 'green'
navApp.textContent = 'App'

let navContainer = document.querySelector('nav')
navContainer.prepend(navHome)
navContainer.appendChild(navApp)

console.log(document)