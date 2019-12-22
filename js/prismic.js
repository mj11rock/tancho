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
  return txt.trunc(120, true);
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
    return api.query(PrismicJS.Predicates.at("document.type", "bgimages"));
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
      return api.query(PrismicJS.Predicates.at("document.type", "product"));
    })
    .then(response => {
      var data = response.results.filter(item => {
        return item.id == id ? item : "";
      });
      data = data[0].data;
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
    return api.query(PrismicJS.Predicates.at("document.type", "slider"));
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
                    <a href="#" class="scroll-link" onclick="filterSelection('${slider.type[0].text}'); scrollToID('#product', 750);" data-id="product" style="float: right;width: 100%;">Перейти в каталог</a>
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

function filterSelection(el) {
  markRadioChecked(el);
  const parent = document.getElementById("product-swiper");

  parent.hasChildNodes ? (parent.innerHTML = " ") : "";

  prismic
    .then(api => {
      return api.query(PrismicJS.Predicates.at("document.type", "product"));
    })
    .then(response => {
      var filter = response.results.filter(item => {
        return item.data.type[0].text == el;
      });

      let block = document.getElementById("product-swiper"),
        swiperContainer = createNode("div"),
        swiperWrapper = createNode("div"),
        btnNext = createNode("div"),
        btnPrev = createNode("div");

      filter.map(item => {
        let div = createNode("div");
        // console.log(item);
        swiperContainer.className = "swiper-container products-container";
        swiperWrapper.className = "swiper-wrapper";
        div.className = "swiper-slide";
        btnNext.className = "swiper-button-next";
        btnPrev.className = "swiper-button-prev";

        div.innerHTML = `  
                  <div class="inlineflex">
                      <div class="halfWidth gallery-img">
                          <img src="${
                            item.data.prod_img.url
                          }" class="gallery-image">                                      
                      </div>
                      
                      <div class="halfWidth">
  
                              <h1 class="card-h1">${
                                item.data.prod_name[0].text
                              }</h1> 
                              <p class="card-p">
                              ${trimText(item.data.description[0].text)} 
                              </p>
                              <div class="row">
                                  <div class="col-sm-12">
                                      <label>Масса:</label>
                                      <h3 class="card-h3">${
                                        item.data.width[0].text
                                      } гр.</h3>    
                                  </div>
                                  
                              </div>
                              <div class="primary-white-button">
                                  <a class="scroll-link" data-id="gold" onclick="getProduct('${
                                    item.id
                                  }')">Подробнее</a>
                              </div>    
  
                      </div>
                  </div>
              `;
        div.setAttribute("data-product", item.id);
        append(swiperWrapper, div);
        append(swiperContainer, swiperWrapper);
        append(block, swiperContainer);
        append(swiperContainer, btnNext);
        append(swiperContainer, btnPrev);

        swiper2 = new Swiper(".products-container", {
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
      });

      //   response.map(data => {
      //       data = data.data;
      //   })
    });
}
