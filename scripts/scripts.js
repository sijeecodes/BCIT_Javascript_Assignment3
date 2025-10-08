"use strict";

let mainData = [...document.getElementsByClassName("thumbnail")].map((e) => {
  return {
    category: e.classList[1],
    class: [...e.classList],
    src: e.src,
    alt: e.alt,
    visible: 1,
  };
});

let filterData = [...document.getElementsByClassName("filter-btn")].map((e) => {
  return {
    category: e.dataset.category,
    text: e.textContent,
  };
});

let visibleMainData = [0, 1, 2, 3, 4];
let currentIndex = 0;
let currentFilter = "all";

///// Initiator /////
(function initiate() {
  makeFilters();
  makeThumbnails();
  updateStats();
}());

///// Functions ///// 
function makeFilters() {
  let newDiv = document.createElement("div");
  let newH2 = document.createElement("h2");
  newH2.textContent = "Filter by Cateogry";
  newDiv.appendChild(newH2);

  filterData.forEach((e) => {
    let newBtn = document.createElement("button");

    newBtn.classList.add("filter-btn");
    if (e.category == currentFilter) newBtn.classList.add("active");

    newBtn.dataset.category = e.category;
    newBtn.textContent = e.text;
    newDiv.appendChild(newBtn);
  });
  document.getElementsByClassName("filter-section")[0].replaceWith(newDiv);
  addEventOnFilters();
}

function addEventOnFilters() {
  document.querySelectorAll(".filter-btn")
	.forEach((filterBtn, index) => {
    filterBtn
		.addEventListener("click", (el) => {
      document.querySelectorAll(".filter-btn", ".active")
      .forEach((activBtn) => activBtn.classList.remove("active"));

      filterBtn.classList.add("active");
      currentFilter = el.target.dataset.category;
			updateMainData()
      makeThumbnails();
    });
  });
}

function makeThumbnails() {
  let newDiv = document.createElement("div");
  newDiv.className = "thumbnails-container";
  newDiv.id = "thumbnails-container";

	if (visibleMainData.length > 0) {
		visibleMainData.forEach((e) => {
      let newImg = document.createElement("img");
      newImg.classList.add("thumbnail", mainData[e].class[1]);
      newImg.src = mainData[e].src;
      newImg.alt = mainData[e].alt;
      if (currentIndex == e) newImg.classList.add("active");
      newDiv.appendChild(newImg);
		});
	}
  document.getElementById("thumbnails-container").replaceWith(newDiv);
  addEventOnThumbnails();
  makeMainImg();
}

function addEventOnThumbnails() {
  document.querySelectorAll(".thumbnail")
  .forEach((thumbnail, index) => {
    thumbnail
    .addEventListener("click", () => {
      document.querySelectorAll(".thumbnail", ".active")
      .forEach((activeThumbnail) => activeThumbnail.classList.remove("active"));

      currentIndex = visibleMainData[index];
      thumbnail.classList.add("active");
      makeMainImg();
    });
  });
}

function makeMainImg() {
  let newSrc = "";
  let newAlt = "";
	if (visibleMainData.length > 0) {
		newSrc = mainData[currentIndex].src;
		newAlt = mainData[currentIndex].alt;
	}
  document.getElementById("main-image").src = newSrc;
  document.getElementById("main-image").alt = newAlt;
  document.getElementById("image-description").textContent = newAlt;
  updateStats();
}

function updateMainData() {
  let newVisibleMainData = [];

  mainData.map((el, index) => {
    if (el.category == currentFilter || currentFilter == "all") {
      el.visible = 1;
      newVisibleMainData.push(index);
    } else {
      el.visible = 0;
    }
    return el;
  });
  visibleMainData = newVisibleMainData;

	if (!visibleMainData.includes(currentIndex)) currentIndex = visibleMainData[0];
}

function updateStats() {
  document.getElementById("total-count").textContent = mainData.length;
  document.getElementById("visible-count").textContent = visibleMainData.length;
}

///// EventListeners //////
document.getElementById("prev-btn").addEventListener("click", (e) => {
	const indexInVisible = visibleMainData.indexOf(currentIndex);

	if (indexInVisible == 0)
		   currentIndex = visibleMainData[visibleMainData.length - 1];
	else currentIndex = visibleMainData[indexInVisible - 1];
  makeThumbnails();
});

document.getElementById("next-btn").addEventListener("click", (e) => {
	const indexInVisible = visibleMainData.indexOf(currentIndex);

	if (indexInVisible >= visibleMainData.length - 1)
			 currentIndex = visibleMainData[0];
	else currentIndex = visibleMainData[indexInVisible + 1];
  makeThumbnails();
});

document.getElementById("shuffle-btn").addEventListener("click", (e) => {
  const dataLength = mainData.length;
  let j, k;
  for (let i = 0; i < dataLength; i++) {
    j = Math.floor(Math.random() * dataLength);
    k = Math.floor(Math.random() * dataLength);

    [mainData[j], mainData[k]] = [mainData[k], mainData[j]];
  }
	updateMainData();
  makeThumbnails();
});

document.getElementById("delete-btn").addEventListener("click", (e) => {
  mainData.splice(currentIndex, 1);
	updateMainData();
  makeThumbnails();
});

document.getElementById("add-image-btn").addEventListener("click", (e) => {
  let src = prompt("Enter image URL:");
  if (!src) return;
  let alt = prompt("Enter image description:");
  if (!alt) return;

  const filterNames = "mountain, ocean, forest, desert, waterfall";
  let category = prompt(`Enter category (${filterNames}):`).toLocaleLowerCase();
  if (!category || !filterNames.includes(category)) return;

  mainData.push({
    category,
    class: ["thumbnail", category],
    src,
    alt,
    visible: 1,
  });
	updateMainData();
  makeThumbnails();
});
