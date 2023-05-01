let images =  [{
    url: "./images/rostov.jpg",
    city: "Rostov-on-Don LCD admiral",
    time: "3.5 months",
    apartment: "81 m2",
    cost:"Upon request"
  }, {
    url: "./images/sochi.jpg",
    city: "Sochi Thieves",
    time: "4 months",
    apartment: "105 m2",
    cost:"Upon request"
  }, {
    url: "./images/rostov-patriotik.png",
    city: "Rostov-on-Don Patriotic",
    time: "3 months",
    apartment: "93 m2",
    cost:"Upon request"
  }];

  function initSlider(images, options) {
    if (!images || !images.length) return;
        
      options = options || {
      titles: false, 
      dots: false,
      city: false,
      time: false,
      apartment: false,
      cost: false
    }

    
    const sliderWrapper= document.querySelector(".project-sw");
    const sliderImages = document.querySelector(".slider__images");
    const sliderArrows = document.querySelector(".slider__arrows");
    const cityText = document.querySelector(".city");
    const timeText = document.querySelector(".rtime");
    const apartmentText = document.querySelector(".area");
    const costText = document.querySelector(".cost");
    const sliderLinks = document.querySelectorAll(".slider__title")

    initImages();
    initArrows();
    initEventOnLinks();
    changeTitle(0);
    
    if(options.dots){
      initDots();
    }
    if (options.city){
      initCity();
    }
    if (options.time){
      initTimetext();
    }
    if (options.apartment){
      initApartmentText();
    }
    if (options.cost){
      initCostText();
    }
 
    function initImages() {
      images.forEach((image, index) => {
        let imageElement = document.createElement("div");
        imageElement.className = `image n${index} ${index? "" : "active"}`;
        imageElement.dataset.index = index;
        imageElement.style.backgroundImage = `url(${image.url})`;
        sliderImages.appendChild(imageElement);
      });
    }
    
    function initArrows() {
      let lastIndex = images.length - 1;
      sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
        arrow.addEventListener("click", function() {
          let curNumber = +sliderImages.querySelector(".active").dataset.index;
          let nextNumber;
          if (arrow.classList.contains("left")) {
            nextNumber = curNumber === 0? lastIndex : curNumber - 1;
          } else {
            nextNumber = curNumber === lastIndex? 0 : curNumber + 1;
          }
          moveSlider(nextNumber);
        });
      });
    }
    
    function moveSlider(num) {
      sliderImages.querySelector(".active").classList.remove("active");
      sliderImages.querySelector(`.n${num}`).classList.add("active");
      
      if (options.titles) changeTitle(num);
         
    if (options.dots) {
      let dotsWrapper = document.querySelector(".slider__dots");
      dotsWrapper.querySelector(".active").classList.remove("active");
      dotsWrapper.querySelector(`.n${num}`).classList.add("active");
    }    


    if (options.city) {
      let title = document.querySelector(".city");
      if (images[num].city) {
        title.innerText = images[num].city;
        title.style.display = "block";
      } else {
        title.style.display = "none";
      }
    }

    if (options.time) {
      let timesText = document.querySelector(".rtime");
      if (images[num].time) {
        timesText.innerText = images[num].time;
        timesText.style.display = "block";
      } else {
        timesText.style.display = "none";
      }
    }

    if (options.apartment) {
      let apartmentText = document.querySelector(".area");
      if (images[num].apartment) {
        apartmentText.innerText = images[num].apartment;
        apartmentText.style.display = "block";
      } else {
        apartmentText.style.display = "none";
      }
    }

    if (options.cost) {
      let costText = document.querySelector(".cost");
      if (images[num].cost) {
        costText.innerText = images[num].cost;
        costText.style.display = "block";
      } else {
        costText.style.display = "none";
      }
    }


  }


  function initEventOnLinks(){
  sliderLinks.forEach((link, index) => {
    link.addEventListener("click", function() { 
      moveSlider(index);   
    })
  })
}
 
  function changeTitle(num) {
    document.querySelector('.slider__title.active')?.classList.remove('active');    
    sliderLinks[num].classList.add('active')
  }

  function initDots() {
    let dotsWrapper = document.createElement("div");
    dotsWrapper.className = "slider__dots";
    images.forEach((image, index) => {
      let dot = document.createElement("div");
      dot.className = `slider__dots-item n${index} ${index? "" : "active"}`;
      dot.dataset.index = index;
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      });
      dotsWrapper.appendChild(dot);
    });
    sliderWrapper.appendChild(dotsWrapper);
  }

  function initCity() {
    let cityHTML = `<div class="city">${images[0].city}</div>`;
    cityText.innerHTML += cityHTML;
  }

  function initTimetext() {
    let timeTextHTML = `<div class="rtime">${images[0].time}</div>`;
    timeText.innerHTML += timeTextHTML;
  }
  function initApartmentText() {
    let apartmentTextHTML = `<div class="area">${images[0].apartment}</div>`;
    apartmentText.innerHTML += apartmentTextHTML;
  }
  function initCostText() {
    let costTexttHTML = `<div class="cost">${images[0].cost}</div>`;
    costText.innerHTML += costTexttHTML;
  }

  }



 
  document.addEventListener("DOMContentLoaded", () => {
    let sliderOptions = {
      titles: true,
      dots: true,
      city: true,
      time: true,
      apartment: true,
      cost: true
    }
    initSlider(images, sliderOptions);
  });