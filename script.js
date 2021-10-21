let elevationBtn = document.getElementById("elevation_btn");
let isoBtn = document.getElementById("iso_btn");
let virtualBtn = document.getElementById("virtual_btn");
let onSiteBtn = document.getElementById("on_site_btn");
let iframe = document.getElementById("6b0ec302-ba89-4dbf-99d5-6fcfe3d661b2");
let badge = document.getElementById("badge_container");

let btnBg = "#ffffff";
let btnColor = "#4B0188";
const selectedBtnBg = "#4B0188";
const selectedBtnClr = "#ffffff";

const elevationURL =
  "https://www.vectary.com/viewer/v1/?model=d87950bb-571c-4fba-ac24-4b33d43be0a3&env=studio3";

const isoURL =
  "https://www.vectary.com/viewer/v1/?model=38c02e98-5248-42f1-96af-bebd88cc0e8b&env=studio3";
const virtualURL = "https://makevr.pro/Dlf_tour/";

const onSiteURL =
  "https://www.vectary.com/viewer/v1/?model=6a4307b3-16f2-4152-9271-8be738eafd9a&env=studio3";

const resetBtnStyle = () => {
  elevationBtn.style.backgroundColor = btnBg;
  isoBtn.style.backgroundColor = btnBg;
  onSiteBtn.style.backgroundColor = btnBg;
  virtualBtn.style.backgroundColor = btnBg;

  elevationBtn.style.color = btnColor;
  isoBtn.style.color = btnColor;
  virtualBtn.style.color = btnColor;
  onSiteBtn.style.color = btnColor;

  badge.style.display = "flex";
  badge.style.visibility = "hidden";
};

const handleBtnClick = (e) => {
  let src = "";
  resetBtnStyle();
  document.getElementById(e.target.id).style.backgroundColor = selectedBtnBg;
  document.getElementById(e.target.id).style.color = selectedBtnClr;
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
    case "on_site_btn":
      src = onSiteURL;
      break;
  }
  iframe.setAttribute("src", src);
};

handleBtnClick({ target: { id: "virtual_btn" } });

elevationBtn.onclick = handleBtnClick;
isoBtn.onclick = handleBtnClick;
virtualBtn.onclick = handleBtnClick;
onSiteBtn.onclick = handleBtnClick;

iframe.onload = () => (badge.style.visibility = "visible");
