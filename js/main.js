//  Select   DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//Initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    showMenu = false;
  }
}

//Chart

//chart options
const options = {
  chart: {
    height: 200,
    width: "30%",
    type: "bar",
    background: "transparent",
    forcolor: "#333",
  },
  series: [
    {
      // name: "skills",
      data: [70],
    },
  ],
  xaxis: {
    categories: ["CSS"],
  },

  fill: {
    colors: ["#f44336"],
  },

  dataLabels: {
    enabled: false,
  },

  title: {
    align: "Center",
    margin: 20,
    offsetY: 20,
    style: {
      fontsize: "25px",
    },
  },

  dropShadow: {
    enabled: false,
  },
};

//initialize chart
// const chart = new ApexCharts(document.querySelector("#chart"), options);

// //Render Chart
// chart.render();

// //Button Event - Orientation
// document.querySelector("button").addEventListener("click", () =>
//   chart.updateOptions({
//     plotOptions: {
//       bar: {
//         horizontal: true,
//         columnWidth: "2%",
//         barHeight: "5%"
//       }
//     }
//   })
// );

// const Progressbar = document.getElementsByClassName("progressbar")[0];

// setInterval(() => {
//   const computedstyle = getComputedStyle(Progressbar);
//   const width = parseFloat(computedstyle.getPropertyValue("--width")) || 0;
//   Progressbar.style.setProperty("--width", width + 0.1);
// }, 5);

for (i = 0; i < 5; i++) {
  const bar = document.getElementsByClassName("progressbar")[i];
  const computedstyle = getComputedStyle(bar);

  setInterval(() => {
    var width = parseInt(computedstyle.getPropertyValue("--width"));
    bar.style.setProperty("--width", width + 0.1);
  }, 5);
}
