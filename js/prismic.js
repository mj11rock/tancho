const apiToken =
  "MC5YZl9YX0JJQUFDSUFJaWMy.77-977-9Bu-_vT_vv70V77-977-977-977-977-977-9N--_ve-_ve-_ve-_vRcaMu-_vXjvv73vv73vv70kQzbvv73vv70w";
const apiUrl = "https://tancho.cdn.prismic.io/api/v2";
const prismic = PrismicJS.api(apiUrl, { accessToken: apiToken });

//*helper functions
function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function prepend(parent, el) {
  return parent.prepend(el);
}

function closePopup() {
  const popup = document.getElementById("popup"),
    container = document.querySelector(".popup-container");
  popup.style.display = "none";
  container.className = "popup-container";
}

String.prototype.trunc = function(n, useWordBoundary) {
  if (this.length <= n) {
    return this;
  }
  var subString = this.substr(0, n - 1);
  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(" "))
      : subString) + "&hellip;"
  );
};

function trimText(txt) {
  let screen = window.innerWidth;
  if (screen <= 500) {
    return txt.trunc(120, true);
  }
  return txt.trunc(110, true);
}

function markRadioChecked(el) {
  let radios = document.querySelectorAll("[type]");
  let array = Array.from(radios);
  let neededEl;
  array.forEach(radio => {
    if (radio.dataset.type == el) neededEl = radio;
  });
  neededEl.checked = true;
}

//*getting data of background images from api
prismic
  .then(api => {
    return api.query(PrismicJS.Predicates.at("document.type", "bgimages"), {
      lang: mainLang
    });
  })
  .then(response => {
    // console.log(response.results);
    let about = document.getElementById("about");
    let banner = document.getElementById("home");
    banner.style.backgroundImage = `url('${response.results[0].data.img.url}')`;
    about.style.backgroundImage = `url('${response.results[1].data.img.url}')`;
  });

//* setting slider
function getProduct(id) {
  const popup = document.getElementById("popup"),
    container = document.querySelector(".popup-container");
  prismic
    .then(api => {
      return api.query(PrismicJS.Predicates.at("document.id", id));
    })
    .then(response => {
      data = response.results[0].data;
      console.log(data);

      let content = document.getElementById("popup-content"),
        div = createNode("div");
      if (content.hasChildNodes) {
        content.innerHTML = " ";
      }
      div.innerHTML = `
      <div class="popup-media">
        <img src="${data.prod_img.url}" class="popup-image">
      </div>
        
      <div class="popup-desc">
        <h1 class="card-h1">${data.prod_name[0].text}</h1> 
        <p class="card-p">
        ${data.description[0].text} 
        </p>
        <div class="row">
            <div class="col-sm-6">
                <label>Масса:</label>
                <h3 class="card-h3">${
                  data.width[0].text ? data.width[0].text : " - "
                }  гр.</h3>    
            </div>
            
        </div>
      </div>`;

      append(content, div);
      div.className = "popup-item";
    });
  popup.style.display = "flex";
  container.className = "popup-container opened";
}

//* setting slide on banner

let swiper1;

prismic
  .then(api => {
    return api.query(PrismicJS.Predicates.at("document.type", "slider"), {
      lang: mainLang
    });
  })
  .then(response => {
    var data = response.results;
    // console.log(data);
    let banner = document.getElementById("hero"),
      bannerContainer = createNode("div"),
      bannerWrapper = createNode("div"),
      bannerPagination = createNode("div");

    data.map(slider => {
      slider = slider.data;
      //   console.log("slider");
      //   console.log(slider);
      let sliderItem = createNode("div");
      bannerContainer.className = "swiper-container main-banner";
      bannerWrapper.className = "swiper-wrapper";
      sliderItem.className = "swiper-slide";
      bannerPagination.className = "swiper-pagination";

      sliderItem.innerHTML = `
        <div class="slide-item">
            <div class="text-content">
                <h2 class="starter">${slider.name[0].text}</h2>
                <p class="startert">
                    ${slider.description[0].text} 
                </p>                                            
            </div>
            <div class="image-content">
                <img src="${slider.img.url}" class="product-img">
                <div class="primary-blue-button">
                    <a href="#" class="scroll-link" onclick="filterSelection('${
                      slider.type[0].text
                    }'); scrollToID('#product', 750);" data-id="product" style="float: right;width: 100%;">${
        mainLang == "ru" ? "Перейти в каталог" : "Katalogga o'ting"
      }</a>
                </div>
            </div>
        </div> 
        `;
      append(bannerWrapper, sliderItem);
      append(bannerContainer, bannerWrapper);
      append(banner, bannerContainer);
      append(bannerContainer, bannerPagination);

      swiper1 = new Swiper(".main-banner", {
        direction: "horizontal",
        init: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          delay: 5000
        },
        effect: "coverflow",
        coverflowEffect: {
          rotate: 120,
          slideShadows: false
        },
        breakpoints: {
          640: {
            direction: "vertical"
          }
        }
      });
      setInterval(() => {
        swiper1.init();
      }, 500);
    });
  });

window.onload = filterSelection("Ketchup");
let swiper2 = new Swiper(".products-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

function filterSelection(el) {
  markRadioChecked(el);
  const parent = document
    .getElementById("product-swiper")
    .querySelector(".swiper-wrapper");

  parent.hasChildNodes ? (parent.innerHTML = " ") : "";

  prismic
    .then(api => {
      return api.query(PrismicJS.Predicates.at("document.type", "product"), {
        orderings: "[document.first_publication_date ]",
        pageSize: 100,
        lang: mainLang
      });
    })
    .then(response => {
      console.log(response);
      var filter = response.results.filter(item => {
        return item.data.type[0].text == el;
      });

      filter.map((item, i) => {
        let slideHTML = `  
                  <div class="swiper-slide">
                    <div class="inlineflex">
                      <div class="halfWidth gallery-img">
                          <img src="${item.data.prod_img.url}" alt="${
          item.data.prod_name[0].text
        }" class="gallery-image">                                      
                      </div>
                      
                      <div class="halfWidth">
  
                              <h1 class="card-h1" title="${
                                item.data.prod_name[0].text
                              }">${item.data.prod_name[0].text}</h1> 
                              <p class="card-p clampjs">
                              ${item.data.description[0].text} 
                              </p>
                              <div class="row mt-2">
                                  <div class="col-sm-12">
                                      <label>${
                                        mainLang == "ru" ? "Масса" : "Massa"
                                      }:</label>
                                      <h3 class="card-h3">${
                                        item.data.width[0].text
                                      } ${
          mainLang == "ru" ? "гр." : "gr."
        }</h3>    
                                  </div>
                                  
                              </div>
                              <div class="primary-white-button">
                                  <a class="scroll-link" data-id="gold" onclick="getProduct('${
                                    item.id
                                  }')">${
          mainLang == "ru" ? "Подробнее" : "Batafsil"
        }</a>
                              </div>    
  
                      </div>
                  </div>
      </div>
              `;

        swiper2.appendSlide([slideHTML]);
        swiper2.update();
        // console.log(swiper2.slides[i].querySelector(".clampjs"));
        $clamp(swiper2.slides[i].querySelector(".clampjs"), { clamp: 3 });
      });
    });
}

$(window).on("resize", function() {
  // swiper2.autoplay.start();
  swiper2.update();
});
