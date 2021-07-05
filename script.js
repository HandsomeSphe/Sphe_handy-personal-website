let secondNavigation = document.querySelector(".home__nav2");
let firstNavigation = document.querySelector(".home__nav");
///////////////////////////////////////////
///////////////// Home page buttons
let needAwebsiteBtn = document.querySelector(".needAWebsiteBtn");
let hireMeBtn = document.querySelector(".hireBtn");
let removePopupHire = document.querySelector(".hirePopup__heading--remove");
let companyName = document.querySelector(".companyName");
let companyEmail = document.querySelector(".companyEmail");
let companyMssg = document.querySelector(".mssgCompany");
let hirePopup = document.querySelector(".hirePopup");
let websitePopup = document.querySelector(".websitePopup");
let removePopupWeb = document.querySelector(".websitePopup__heading--remove");
let hireSubmitBtn = document.querySelector("#Hsubmit");
let ClientSubmitBtn = document.querySelector("#Csubmit");
let clientName = document.querySelector(".clientName");
let clientPlan = document.querySelector(".clientPlan");
let clientEmail = document.querySelector(".clientEmail");
let clientMssg = document.querySelector(".mssgClient");
function clearHireDetails() {
  setTimeout(() => {
    companyName.value = "";
    companyEmail.value = "";
    companyMssg.value = "";
  }, 1000);
}
hireSubmitBtn.addEventListener("click", clearHireDetails);

ClientSubmitBtn.addEventListener("click", () => {
  setTimeout(() => {
    clientName.value = "";
    clientPlan.value = "";
    clientEmail.value = "";
    clientMssg.value = "";
  }, 1000);
});
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
///////////////////////////////////////////
///////////////// The FAQs buttons
let showMoreBtn1 = document.querySelector(".FAQ__1--headingBtn");
let showMoreBtn2 = document.querySelector(".FAQ__2--headingBtn");
let showMoreBtn3 = document.querySelector(".FAQ__3--headingBtn");
let showLessBtn1 = document.querySelector(".FAQ__1--headingBtnLess");
let showLessBtn2 = document.querySelector(".FAQ__2--headingBtnLess");
let showLessBtn3 = document.querySelector(".FAQ__3--headingBtnLess");
let showText1 = document.querySelector(".FAQ__1--text");
let showText2 = document.querySelector(".FAQ__2--text");
let showText3 = document.querySelector(".FAQ__3--text");
let FaqBox1 = document.querySelector(".FAQ__1");
let FaqBox2 = document.querySelector(".FAQ__2");
let FaqBox3 = document.querySelector(".FAQ__3");

submit.addEventListener("click", () => {
  setTimeout(() => {
    userName.value = "";
    userEmail.value = "";
    message.value = "";
  }, 1000);
});

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
needAwebsiteBtn.addEventListener("click", () => {});
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

///////////////////////////////////////////
///////////////// What will happen when you click the show more button in the FAQ
showMoreBtn1.addEventListener("click", () => {
  FaqBox1.style.height = "35vh";
  showText1.style.display = "block";
  showMoreBtn1.style.display = "none";
  showLessBtn1.style.display = "block";
});
showLessBtn1.addEventListener("click", () => {
  FaqBox1.style.height = "8vh";
  showText1.style.display = "none";
  showMoreBtn1.style.display = "block";
  showLessBtn1.style.display = "none";
});
showMoreBtn2.addEventListener("click", () => {
  FaqBox2.style.height = "35vh";
  showText2.style.display = "block";
  showMoreBtn2.style.display = "none";
  showLessBtn2.style.display = "block";
});
showLessBtn2.addEventListener("click", () => {
  FaqBox2.style.height = "8vh";
  showText2.style.display = "none";
  showMoreBtn2.style.display = "block";
  showLessBtn2.style.display = "none";
});
showMoreBtn3.addEventListener("click", () => {
  FaqBox3.style.height = "35vh";
  showText3.style.display = "block";
  showMoreBtn3.style.display = "none";
  showLessBtn3.style.display = "block";
});
showLessBtn3.addEventListener("click", () => {
  FaqBox3.style.height = "8vh";
  showText3.style.display = "none";
  showMoreBtn3.style.display = "block";
  showLessBtn3.style.display = "none";
});
removePopupHire.addEventListener("click", () => {
  hirePopup.style.display = "none";
  hirePopup.style.visibility = "none";
});
hireMeBtn.addEventListener("click", () => {
  hirePopup.style.display = "block";
});
removePopupWeb.addEventListener("click", () => {
  websitePopup.style.display = "none";
  websitePopup.style.visibility = "none";
});
needAwebsiteBtn.addEventListener("click", () => {
  websitePopup.style.display = "block";
});
