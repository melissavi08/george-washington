const menuIcon = document.querySelector(".menu__icon");
const menuIconLines = document.querySelectorAll("menu__icon-line");
const menuContainer = document.querySelector(".menu__container");

const stats = document.querySelector(".stats");

const teamMembers = document.querySelector(".team__members .swiper-wrapper");

const copyrightYear = document.querySelector("#copyright__year");

menuIcon.addEventListener("click", menuClosed);

copyrightYear.innerText = new Date().getFullYear();

// MENU ANIMATION
function menuClosed() {
  const isClosed = menuIcon.classList.contains("addAnimation");

  if (!isClosed) {
    menuContainer.classList.add("active");
    menuIcon.classList.add("addAnimation");
    menuIcon.classList.remove("removeAnimation");
  } else {
    menuContainer.classList.remove("active");
    menuIcon.classList.remove("addAnimation");
    menuIcon.classList.add("removeAnimation");
  }
}

// SWIPER
const settingsPagination = {
  loop: true,
  speed: 700,
  spaceBetween: 100,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
    disableOnInteraction: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

const settings = {
  loop: true,
  speed: 1000,
  spaceBetween: 16,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    720: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
};

const swiperHeroNews = new Swiper(".hero__news", settingsPagination);
const swiperAboutUsGallery = new Swiper(
  ".about-us__gallery",
  settingsPagination
);
const swiperSlideshow = new Swiper(".container--slideshow", settingsPagination);
const swiperTeamMembers = new Swiper(".team__members", settings);

// ADD TEAM MEMBERS
function member(name, position, image, alt) {
  this.name = name;
  this.position = position;
  this.image = image;
}

function renderMembers(arr) {
  for (member of arr) {
    const teamMember = document.createElement("div");
    teamMember.classList.add("team__member");
    teamMember.classList.add("swiper-slide");

    const memberImg = document.createElement("img");
    memberImg.setAttribute("src", member.image);
    memberImg.setAttribute("alt", member.name);
    memberImg.classList.add("member__img");

    const memberName = document.createElement("h6");
    memberName.innerText = member.name;

    const memberPosition = document.createElement("span");
    memberPosition.classList.add("member--white");
    memberPosition.innerText = member.position;

    teamMember.appendChild(memberImg);
    teamMember.appendChild(memberName);
    memberName.appendChild(memberPosition);
    teamMembers.appendChild(teamMember);
  }
}

renderMembers([
  new member(
    "MsC. Odlanier Rico",
    "Director \nGeneral",
    "./assets/images/odlanier-rico.webp"
  ),
  new member(
    "MsC. Danay Sánchez",
    "Directora \nAdjunta",
    "./assets/images/dany-sanchez.webp"
  ),
  new member(
    "Lic. Susana Hernández",
    "Directora \nContabilidad y Finanzas",
    "./assets/images/susana-hernandez.webp"
  ),
  new member(
    "Lic.Zuleika Amador",
    "Directora \nCapital Humano",
    "./assets/images/zuleika-amador.webp"
  ),
  new member(
    "Ing. Bárbara C. Vasallo",
    "Directora \nInversiones y Construcción",
    "./assets/images/barbara-vasallo.webp"
  ),
  new member(
    "Ing. Pedro A. Córdoves",
    "Director \nC.I.T.M.A",
    "./assets/images/pedro-cordoves.webp"
  ),
  new member(
    "Lic. Daymis Rodríguez",
    "Directora \nAuditaría Interna",
    "./assets/images/daymis-rodriguez.webp"
  ),
  new member(
    "Br. Liudisbel López",
    "Directora Informática, \ncomunicaciones y análisis",
    "./assets/images/liudisbel-lopez.webp"
  ),
  new member(
    "Ing. Juan C. González",
    "Director \nCaña",
    "./assets/images/juan-gonzalez.webp"
  ),
  new member(
    "TM. Kenia Argüelles",
    "Directora \nProducciones Agropecuarias",
    "./assets/images/kenia-arguelles.webp"
  ),
  new member(
    "MsC. Liván C. Hernández",
    "Administrador \nCentral Azucarero",
    "./assets/images/livan-hernandez.webp"
  ),
  new member(
    "TM. Jorge L. Rodríguez",
    "Director \nUEB Servicios Generales",
    "./assets/images/jorge-rodriguez.webp"
  ),
  new member(
    "Lic. Raúl Diez",
    'Director UEB Producciones \nAgropecuarias "Las Margaritas"',
    "./assets/images/raul-diez.webp"
  ),
  new member(
    "Lic. Yaneisy Calzada",
    "Jefa de Grupo \nde Asesoría Legal",
    "./assets/images/yaneysi-calzada.webp"
  ),
]);
