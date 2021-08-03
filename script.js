let elevationBtn = document.getElementById("elevation_btn");
let isoBtn = document.getElementById("iso_btn");
let virtualBtn = document.getElementById("virtual_btn");
let iframe = document.getElementById("6b0ec302-ba89-4dbf-99d5-6fcfe3d661b2");
let badge = document.getElementById("badge_container");

let btnBg = "#ffffff";
let btnColor = "#2c3233";

const elevationURL =
  "https://www.vectary.com/viewer/v1/?model=7d59a429-163b-4b0b-b2c7-48f108edc7bf&env=studio3";
  

const isoURL =
  "https://www.vectary.com/viewer/v1/?model=38c02e98-5248-42f1-96af-bebd88cc0e8b&env=studio3";
const virtualURL = "https://makevr.pro/Dlf%20furished%20tour/";

const resetBtnStyle = () => {
  elevationBtn.style.backgroundColor = btnBg;
  isoBtn.style.backgroundColor = btnBg;
  virtualBtn.style.backgroundColor = btnBg;
  elevationBtn.style.color = btnColor;
  isoBtn.style.color = btnColor;
  virtualBtn.style.color = btnColor;
  badge.style.display = "flex";
  badge.style.visibility = "hidden";
};

const handleBtnClick = (e) => {
  let src = "";
  resetBtnStyle();
  document.getElementById(e.target.id).style.backgroundColor = "black";
  document.getElementById(e.target.id).style.color = "rgba(255,255,255,0.9)";
  switch (e.target.id) {
    case "elevation_btn":
      src = elevationURL;
      break;
    case "iso_btn":
      src = isoURL;
      break;
    case "virtual_btn":
      src = virtualURL;
      badge.style.display = "none";
      break;
  }
  iframe.setAttribute("src", src);
};

handleBtnClick({ target: { id: "elevation_btn" } });

elevationBtn.onclick = handleBtnClick;
isoBtn.onclick = handleBtnClick;
virtualBtn.onclick = handleBtnClick;

iframe.onload = () => (badge.style.visibility = "visible");
