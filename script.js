const album = document.querySelector(".album_created");

let images = [];
let currentIndex1 = 0;
let currentIndex2 =1;
let currentIndex3 =2;
let currentIndex4 =3;



fetch("https://pixabay.com/api/?key=53924132-ba36207f56064643a8fe19353&q=flowers&image_type=photo&per_page=30")
  .then(res => res.json())
  .then(data => {
    images = data.hits;
    console.log("Images loaded:", images.length);

    startSlideshow();
  });

function startSlideshow() {
  const box = document.createElement("div");

    box.className = "img_box";

    box.style.width = "300px";
    box.style.height = "300px";
    box.style.display = "flex";
    box.style.alignItems = "center";
    box.style.justifyContent = "center";
    box.style.backgroundColor = "#808080";
    box.style.borderRadius = "20px";
    const img = document.createElement("img");
    img.src = images[currentIndex1].webformatURL;

    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "contain";
    img.style.borderRadius = "20px";
    album.style.display = "flex";
album.style.justifyContent = "space-evenly"; 
album.style.alignItems = "center";     
const box_1=document.createElement("div");
box_1.className="img_box";

    box_1.style.width = "300px";
    box_1.style.height = "300px";
    box_1.style.display = "flex";
    box_1.style.alignItems = "center";
    box_1.style.justifyContent = "center";
    box_1.style.backgroundColor = "#808080";
    box_1.style.borderRadius = "20px";


    const img_1=document.createElement("img");


    img_1.src=images[currentIndex2].webformatURL;
    img_1.style.width = "100%";
    img_1.style.height = "100%";
    img_1.style.objectFit = "contain";
    img_1.style.borderRadius = "20px";


    const box_2=document.createElement("div")
    box_2.style.height = "300px";
    box_2.style.width="300px";
    box_2.style.display="flex";
    box_2.style.alignItems="center";
    box_2.style.justifyContent="center";
    box_2.style.backgroundColor="#808080";
    box_2.style.borderRadius="20px";

    const img_2=document.createElement("img");


    img_2.src=images[currentIndex2].webformatURL;
    img_2.style.width = "100%";
    img_2.style.height = "100%";
    img_2.style.objectFit = "contain";
    img_2.style.borderRadius = "20px";

    const box_3=document.createElement("div")
    box_3.style.height = "300px";
    box_3.style.width="300px";
    box_3.style.display="flex";
    box_3.style.alignItems="center";
    box_3.style.justifyContent="center";
    box_3.style.backgroundColor="#808080";
    box_3.style.borderRadius="20px";


    const img_3=document.createElement("img");


    img_3.src=images[currentIndex2].webformatURL;
    img_3.style.width = "100%";
    img_3.style.height = "100%";
    img_3.style.objectFit = "contain";
    img_3.style.borderRadius = "20px";

    box_3.appendChild(img_3);
    album.appendChild(box_3)

box_2.appendChild(img_2);
    album.appendChild(box_2);

    box_1.appendChild(img_1);
    album.appendChild(box_1);

  box.appendChild(img);
  album.appendChild(box);



  
  setInterval(() => {
    currentIndex1 = (currentIndex1 + 2) % images.length;
    currentIndex2 = (currentIndex2 + 2) % images.length;
    currentIndex3 = (currentIndex3 + 2) % images.length;
    currentIndex4 = (currentIndex4 + 2) % images.length;

    img.src   = images[currentIndex1].webformatURL;
    img_1.src = images[currentIndex2].webformatURL;
    img_2.src = images[currentIndex3].webformatURL;
    img_3.src = images[currentIndex4].webformatURL;

  }, 1000);

}
function createpopup() {
  if (document.querySelector(".center_section")) return;

  const centerSection = document.createElement("div");
  centerSection.className = "center_section";

  const popup = document.createElement("div");
  popup.className = "popup";

  const star = document.createElement("div");
  star.className = "star";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete_btn";

  deleteBtn.addEventListener("click", () => {
    centerSection.remove();
    localStorage.removeItem("popupCreated");
  });

  popup.appendChild(star);
  popup.appendChild(deleteBtn);
  centerSection.appendChild(popup);

  const main_body1 = document.querySelector(".main_body");
  main_body1.appendChild(centerSection);
}


document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("popupCreated") === "true") {
    createpopup();
  }
});


const create = document.querySelector(".create_select");

create.addEventListener("click", (e) => {
  e.preventDefault();
  createpopup();
  localStorage.setItem("popupCreated", "true");
});
