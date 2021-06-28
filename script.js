let secondNavigation = document.querySelector(".home__nav2");
let firstNavigation = document.querySelector(".home__nav");
///////////////////////////////////////////
///////////////// Second(one on top) navigation tabs and pages
let homeTab = document.querySelector(".Home");
let aboutTab = document.querySelector(".about");
let portfolioTab = document.querySelector(".portfolio");
let plansTab = document.querySelector(".plans");
let contactsTab = document.querySelector(".contacts");

///////////////////////////////////////////
///////////////// Initial navigation tabs and pages
let ihomeTab = document.querySelector("#iHome");
let iaboutTab = document.querySelector("#iabout");
let iportfolioTab = document.querySelector("#iportfolio");
let iplansTab = document.querySelector("#iplans");
let icontactsTab = document.querySelector("#icontacts");
let homePage = document.querySelector(".home");
let aboutPage = document.querySelector(".About");
let workPage = document.querySelector(".mywork__section");
let plansPage = document.querySelector(".Plans");
let contactsPage = document.querySelector(".Contacts");

///////////////////////////////////////////
///////////////// Contact for  tabs
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const message = document.querySelector("#mssg");
const submit = document.querySelector(".submit");

submit.addEventListener("click", () => {
  setTimeout(() => {
    userName.value = "";
    userEmail.value = "";
    message.value = "";
  }, 1000);
});

///////////////////////////////////////////
///////////////// What will happen when you click the FAQ

///////////////////////////////////////////
///////////////// Bring up the second navigation bar when you scroll down
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    secondNavigation.style.display = "flex";
    secondNavigation.style.position = "sticky";
    secondNavigation.style.top = "0";
    firstNavigation.style.display = "none";
  } else if (window.scrollY < 530) {
    secondNavigation.style.display = "none";
    firstNavigation.style.display = "flex";
  }
});
///////////////////////////////////////////
///////////////// The scrolling down animation
homeTab.addEventListener("click", () => {
  homePage.scrollIntoView({
    behavior: "smooth",
  });
});
ihomeTab.addEventListener("click", () => {
  homePage.scrollIntoView({
    behavior: "smooth",
  });
});
aboutTab.addEventListener("click", () => {
  aboutPage.scrollIntoView({
    behavior: "smooth",
  });
});
iaboutTab.addEventListener("click", () => {
  aboutPage.scrollIntoView({
    behavior: "smooth",
  });
});
portfolioTab.addEventListener("click", () => {
  workPage.scrollIntoView({
    behavior: "smooth",
  });
});
iportfolioTab.addEventListener("click", () => {
  workPage.scrollIntoView({
    behavior: "smooth",
  });
});
plansTab.addEventListener("click", () => {
  plansPage.scrollIntoView({
    behavior: "smooth",
  });
});
iplansTab.addEventListener("click", () => {
  plansPage.scrollIntoView({
    behavior: "smooth",
  });
});
contactsTab.addEventListener("click", () => {
  contactsPage.scrollIntoView({
    behavior: "smooth",
  });
});
icontactsTab.addEventListener("click", () => {
  contactsPage.scrollIntoView({
    behavior: "smooth",
  });
});
