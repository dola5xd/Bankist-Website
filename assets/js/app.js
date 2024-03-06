// Make Hover links Handler

const links = document.querySelectorAll("header nav .links ul li");

links.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    document.querySelector("header nav .logo").style.opacity = 0.5;
    links.forEach((el) => (el.style.opacity = 0.5));
    e.style.opacity = 1;
  });
  e.addEventListener("mouseleave", () => {
    document.querySelector("header nav .logo").style.opacity = 1;
    links.forEach((el) => (el.style.opacity = 1));
  });
});

// Make Img load with All quality (lazyload)

(async function () {
  const imgContainer = document.querySelectorAll(".card .img-container img");
  imgContainer.forEach((e) => {
    const imgSrcs = e.getAttribute("data-src");
    e.src = imgSrcs;
    e.addEventListener("load", () => {
      e.classList.remove("filter");
    });
  });
})();

// Buttons events

const buttons = document.querySelectorAll(".check-btn");
const content = document.querySelector(".content-card");

buttons.forEach((e) => {
  e.addEventListener("click", (el) => {
    buttons.forEach((e) => e.classList.remove("active"));
    el.target.classList.add("active");
    content.textContent = "";
    let num = el.target.getAttribute("data-num");
    renderCard(num);
  });
});

const renderCard = function (i) {
  let html;
  if (i == 1) {
    html = `<div class="ico it">
    <span class="it">
    <i class="fa-solid fa-upload"></i>
    </span>

  </div>
  <div class="txt">
    <h3>Tranfser money to anyone, instantly! No fees, no BS.</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>`;
  } else if (i == 2) {
    html = `<div class="ico il">   
    <span class="il">
    <i class="fa-solid fa-house"></i>
    </span>
  </div>
  <div class="txt">
    <h3>Buy a home or make your dreams come true, with instant loans.</h3>
    <p>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>`;
  } else {
    html = `<div class="ico ic">
    <span class="ic">
    <i class="fa-regular fa-user"></i>
    </span>
  </div>
  <div class="txt">
    <h3>No longer need your account? No problem! Close it instantly.</h3>
    <p>
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>`;
  }
  content.insertAdjacentHTML("afterbegin", html);
};

// Slider
const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");
const card = document.getElementById("card");
const dots = document.querySelectorAll(".dots span");

nextBtn.addEventListener("click", () => {
  card.style.transform = "translateX(200%)";
  card.style.opacity = 0;
  card.textContent = "";

  dots.forEach((e) => e.classList.remove("active"));
  let user = card.className.split(" ")[1];
  if (user == "user-1") {
    SliderCard(2);
    dots[1].classList.add("active");
    card.classList.replace("user-1", "user-2");
  } else if (user == "user-2") {
    SliderCard(3);
    dots[2].classList.add("active");
    card.classList.replace("user-2", "user-3");
  } else {
    SliderCard(1);
    dots[0].classList.add("active");
    card.classList.replace("user-3", "user-1");
  }
});

backBtn.addEventListener("click", () => {
  card.style.transform = "translateX(-200%)";
  card.style.opacity = 0;
  card.textContent = "";

  dots.forEach((e) => e.classList.remove("active"));
  let user = card.className.split(" ")[1];
  if (user == "user-1") {
    SliderCard(3);
    dots[2].classList.add("active");
    card.classList.replace("user-1", "user-3");
  } else if (user == "user-2") {
    SliderCard(1);
    dots[0].classList.add("active");
    card.classList.replace("user-2", "user-1");
  } else {
    SliderCard(2);
    dots[1].classList.add("active");
    card.classList.replace("user-3", "user-2");
  }
});

dots.forEach((e) => {
  e.addEventListener("click", () => {
    card.style.transform = "translateX(200%)";
    card.style.opacity = 0;
    card.textContent = "";

    dots.forEach((e) => e.classList.remove("active"));
    let user = card.className.split(" ")[1];
    if (e.getAttribute("data-num") == "1") {
      SliderCard(1);
      dots[0].classList.add("active");
      card.classList.replace(user, "user-1");
    } else if (e.getAttribute("data-num") == "2") {
      SliderCard(2);
      dots[1].classList.add("active");
      card.classList.replace(user, "user-2");
    } else {
      SliderCard(3);
      dots[2].classList.add("active");
      card.classList.replace(user, "user-3");
    }
  });
});

const SliderCard = function (usernum) {
  let cardHtml;
  card.textContent = "";
  if (usernum == 1) {
    card.textContent = "";
    cardHtml = ` 
    <h1 class="article">Best financial decision ever!</h1>
    <p class="opinion">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Accusantium quas quisquam non? Quas voluptate nulla minima
      deleniti optio ullam nesciunt, numquam corporis et asperiores
      laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus
      id alias reiciendis, perferendis facere pariatur dolore veniam
      autem esse non voluptatem saepe provident nihil molestiae.
    </p>
    <div class="user">
      <img src="./assets/images/user-1.jpg" alt="user-1" />
      <div class="info">
        <h3 class="name">Aarav Lynn</h3>
        <h6 class="location">San Francisco, USA</h6>
      </div>
    </div>`;
  } else if (usernum == 2) {
    card.textContent = "";
    cardHtml = ` 
    <h1 class="article">The last step to becoming a complete minimalist</h1>
    <p class="opinion">
      Quisquam itaque deserunt ullam, quia ea repellendus provident,
      ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum.
      Incidunt numquam perferendis veritatis neque repellendus. Lorem,
      ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt
      exercitationem deleniti.
    </p>
    <div class="user">
      <img src="./assets/images/user-2.jpg" alt="user-2" />
      <div class="info">
        <h3 class="name">Miyah Miles</h3>
        <h6 class="location">London, UK</h6>
      </div>
    </div>`;
  } else {
    card.textContent = "";
    cardHtml = ` 
    <h1 class="article">Finally free from old-school banks
    </h1>
    <p class="opinion">
      Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt commodi
      architecto numquam omnis nulla autem, necessitatibus blanditiis modi similique
      quidem. Odio aliquam culpa dicta beatae quod maiores ipsa minus
      consequatur error sunt, deleniti saepe aliquid quos inventore sequi.
      Necessitatibus id alias reiciendis, perferendis facere.
    </p>
    <div class="user">
      <img src="./assets/images/user-3.jpg" alt="user-3" />
      <div class="info">
        <h3 class="name">Francisco Gomes</h3>
        <h6 class="location">Lisbon, Portugal</h6>
      </div>
    </div>`;
  }
  setTimeout(() => {
    card.insertAdjacentHTML("afterbegin", cardHtml);
    card.style.transform = "translateX(0%)";
    card.style.opacity = 1;
  }, 500);
};

// create account

const openBtnS = [
  document.getElementById("open"),
  document.getElementById("open_2"),
];
const closeBtn = document.getElementById("close");
const model = document.getElementById("model");

openBtnS.forEach((e) => {
  e.addEventListener("click", () => {
    model.style.display = "block";
    setTimeout(() => {
      model.style.opacity = 1;
    }, 500);
  });
});

closeBtn.addEventListener("click", () => {
  model.style.opacity = 0;
  setTimeout(() => {
    model.style.display = "none";
  }, 500);
});

window.addEventListener("click", (e) => {
  if (e.target.id == "model") {
    model.style.opacity = 0;
    setTimeout(() => {
      model.style.display = "none";
    }, 500);
  }
});

// Related to scroll

const header = document.querySelector("header nav");
const sections = document.querySelectorAll("section");

// window.addEventListener("scroll", () => {
//   console.log(scrollY);
//   const initsec = sections[1].getBoundingClientRect();
//   if (window.scrollY > initsec.top) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
//   sections.forEach((e) => {
//     if (!e.classList.contains("hero")) {
//       if (window.scrollY >= e.getBoundingClientRect().top + 200) {
//         e.classList.add("reveal");
//       } else {
//         e.classList.remove("reveal");
//       }
//     }
//   });
// });

// window.onscroll = function () {
//   scrollY >= sections[1].getBoundingClientRect().top - 500
//     ? header.classList.add("sticky")
//     : header.classList.remove("sticky");
// };

const headerCallBack = function (entries) {
  const [entry] = entries;
  !entry.isIntersecting
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(headerCallBack, {
  root: null, // means to viewport
  threshold: 0.5, //percent of target element
});

headerObserver.observe(sections[0]);

const elementCallBack = function (entries) {
  entries.forEach((e) => {
    e.isIntersecting
      ? e.target.classList.add("reveal") // means the target element show in view part with the percent
      : e.target.classList.remove("reveal"); // means the target element Not show in view part with the percent
  });
};

const elementOptions = {
  root: null, // means to viewport
  threshold: 0.3, //percent of target element
};

const elementObserver = new IntersectionObserver(
  elementCallBack,
  elementOptions
);

elementObserver.observe(sections[1]);
elementObserver.observe(sections[2]);
elementObserver.observe(sections[3]);
elementObserver.observe(sections[4]);
