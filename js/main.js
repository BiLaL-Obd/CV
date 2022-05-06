// Control Setting Box
let gear = document.querySelector(".gear .fa-gear");
gear.onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".setting-box").classList.toggle("show");
};

// Colors List
let colorList = document.querySelectorAll(".colors li");
let mainColor = localStorage.getItem("Color-List");
if (mainColor !== null) {
  // Check Class Active In Colors (List) & Get Color From LocalStorage
  document.documentElement.style.setProperty("--main-color", mainColor);
  document.documentElement.style.setProperty(
    "--transparent-color",
    localStorage.getItem("transparent-color")
  );

  colorList.forEach((li) => {
    li.classList.remove("active");

    // Add Class Active To li If data-color === (mainColor)
    if (li.dataset.color === mainColor) {
      li.classList.add("active");
    }
  });
}

// Check Class Active In Colors (List) & Set Color From LocalStorage
colorList.forEach((li) => {
  li.addEventListener("click", (e) => {
    colorList.forEach((li) => {
      li.classList.remove("active");
    });

    e.target.classList.add("active");
    // Add Color To LocalStorage
    localStorage.setItem("Color-List", e.target.dataset.color);

    // Add Transparent Color To LocalStorage
    localStorage.setItem("transparent-color", `${e.target.dataset.color}80`);

    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    document.documentElement.style.setProperty(
      "--transparent-color",
      `${e.target.dataset.color}80`
    );
  });
});

// Color Landing
let colorBack = document.querySelectorAll(".colors-back li");
let backColor = localStorage.getItem("Color-Back");

if (backColor !== null) {
  // Check Class Active In Colors (List) & Get Color From LocalStorage
  document.documentElement.style.setProperty("--main-color-lk", backColor);

  colorBack.forEach((li) => {
    li.classList.remove("active");

    // Add Class Active To li If data-color === (backColor)
    if (li.dataset.color === backColor) {
      li.classList.add("active");
    }
  });
}

// Check Class Active In Colors (Landing) & Set Color From LocalStorage
colorBack.forEach((li) => {
  li.addEventListener("click", (e) => {
    colorBack.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");

    // Add Color To LocalStorage
    localStorage.setItem("Color-Back", e.target.dataset.color);

    document.documentElement.style.setProperty(
      "--main-color-lk",
      e.target.dataset.color
    );
  });
});

// Bundle List
let optSpan = document.querySelectorAll(".option-box span");
let getOption = localStorage.getItem("Option-box");

if (getOption !== null) {
  optSpan.forEach((span) => {
    span.classList.remove("active");
    if (span.dataset.option === getOption) {
      span.classList.add("active");
    }
  });
  // Check GetItem From LocalStorage
  if (getOption === "yes") {
    document.querySelector(".bundle").classList.add("show");
  } else {
    document.querySelector(".bundle").classList.remove("show");
  }
}

optSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    optSpan.forEach((span) => {
      span.classList.remove("active");
    });
    e.target.classList.add("active");

    // Add Option Box To LocalStorage
    localStorage.setItem("Option-box", e.target.dataset.option);

    // Check if Data Option === yes or no To Show
    if (e.target.dataset.option === "yes") {
      document.querySelector(".bundle").classList.add("show");
    } else {
      document.querySelector(".bundle").classList.remove("show");
    }
  });
});

// Add Class Show To Icon
let icon = document.querySelector(".icons");
icon.onclick = function () {
  this.classList.toggle("show");
};

// Slide Images
let putImage = document.querySelector(".about-content .image img");
let myImages = [
  "myphoto-01.jpg",
  "myphoto-02.jpg",
  "myphoto-03.jpg",
  "myphoto-04.jpg",
];
let imgsIndex = 0;
document.addEventListener("click", (e) => {
  // Next About Image
  if (e.target.classList.contains("fa-angle-right")) {
    imgsIndex += 1;
    if (imgsIndex > myImages.length - 1) {
      imgsIndex = 0;
    }
    putImage.setAttribute("src", `images/${myImages[imgsIndex]}`);
  }

  if (e.target.classList.contains("fa-angle-left")) {
    imgsIndex -= 1;
    if (imgsIndex < 0) {
      imgsIndex = myImages.length - 1;
    }
    putImage.setAttribute("src", `images/${myImages[imgsIndex]}`);
  }
});

// Window On Scroll
window.onscroll = function () {
  //Remove Class Show When Scrolling Down
  if (window.scrollY >= 400) {
    icon.classList.remove("show");
  }

  // Give Skills Width
  let sectionSkill = document.querySelector(".skills");
  let spanSkill = document.querySelectorAll(".box .prog span");
  if (window.scrollY >= sectionSkill.offsetTop - 350) {
    spanSkill.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  // Add And Remove Class Show On Button Scroll Top
  let goTop = document.querySelector(".goUp");
  if (window.scrollY >= 500) {
    goTop.classList.add("show");
  } else {
    goTop.classList.remove("show");
  }
};
