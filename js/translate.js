// let currentLang = localStorage.getItem("lang");
// let currentLang = localStorage.getItem("lang") || "ru";
let mainLang = localStorage.getItem("lang") || "ru";

//* all translated texts
i18next.init(
  {
    lng: mainLang,
    debug: false,
    resources: {
      ru: {
        translation: {
          nav: ["Главная", "Продукция", "О нас", "Контакты"],
          title: ["Каталог продукции", "О Нас"],
          filter: "Фильтр:",
          "filter-names": ["Кетчуп", "Майонез", "Горчица", "Макароны"],

          "address-field": `
                <h1 class="contacts contacts-header">Контакты</h1>
                <h4 class="contacts  contacts-h4">Адрес завода:</h4>
                <p class=" contacts contact-p">Узбекистан, Ташкентская область, Кибрайский район, поселок Янгиобод,
                    ул. Жасорат 100
                    <br />Тел: 8 71 266 66 61
                    <br /> Почта: info@tanho.uz
                </p>
                <h4 class=" contacts  contacts-h4">Адрес коммерческого офиса:</h4>
                <p class="contacts  contact-p">г. Ташкент, ул. Гулобод, д. 5/1
                    <br /> Тел: 8 97 757 91 66
                    <br /> Почта: info@tanho.uz
                </p>
                <div class="contacts">
                    <a href="https://www.facebook.com/tanhoholding/" target="_blank">
                        <img src="./img/facebook.svg" alt="">
                    </a>
                    <a href="https://www.instagram.com/tanho_uz/" target="_blank"><img src="./img/instagram.svg" alt=""></a>
                </div>
            `,

          "about-desc": `
            Уважаемый гость, в этом разделе мы с радостью хотим поделиться с Вами нашими планами на будущее.
                <br />
                <br />
                В сентябре 2019 года в компании Tanho состоялась стратегическая сессия, в которой приняли участие её
                руководители и ключевые менеджеры. Это дало нам возможность определить миссию, видение и ценности
                компании, а также разработать дорожную карту до конца 2022 года.
                <br />
                <br />
                К чему мы пришли?
                <br />
                <br />
                Наша миссия: Мы привносим вкус к жизни, производя качественные и натуральные
                продукты
                питания.
                <br />
                <br />
                Наше видение: Присутствовать на каждом столе, объединяя семью, друзей и близких.
                <br />
                <br />
                Наши 5 ценностей: Доверие, командная сплочённость, забота, саморазвитие,
                эффективность. <a class="more" data-toggle="modal" data-target="#description-modal">
                    <br />
                    Подробнее...
                </a>
                `,

          "about-modal": `
            <div class="col-lg-12" >
                Уважаемый гость, в этом разделе мы с радостью хотим поделиться с Вами нашими планами
                на будущее.
                <br />
                <br />
                В сентябре 2019 года в компании Tanho состоялась стратегическая сессия, в которой
                приняли участие её
                руководители и ключевые менеджеры. Это дало нам возможность определить миссию,
                видение и ценности
                компании, а также разработать дорожную карту до конца 2022 года.
                <br />
                <br />
                К чему мы пришли?
                <br />
                <br />
                Наша миссия: Мы привносим вкус к жизни, производя качественные и натуральные
                продукты
                питания.
                <br />
                <br />
                Наше видение: Присутствовать на каждом столе, объединяя семью, друзей и близких.
                <br />
                <br />
                Наши 5 ценностей: Доверие, командная сплочённость, забота, саморазвитие,
                эффективность.
                <ul>
                    <li>
                        Наша миссия: добавить жизни вкуса, производя качественные и натуральные
                        продукты
                        питания.

                    </li>
                    <li>
                        Наше видение: присутствовать в каждом доме, объединяя семью, друзей и
                        близких.

                    </li>
                    <li>
                        5 основных ценностей: доверие, сплочённость команды, забота, саморазвитие,
                        эффективность.

                    </li>
                </ul>
            </div>
            <div class="col-lg-12">
                <h3 class="text-center"><strong>Курс на ближайшие годы</strong></h3>
                <ul>
                    <h4 class="text-center">10 ключевых задач, ради которых ежедневно приходим на
                        работу:</h4>
                    <li>1 Построить эффективную систему дистрибьюции (сделать продукцию Tanho
                        доступной всем жителям, от Андижана до Нукуса и от Термеза до Учкудука);
                    </li>
                    <li>2 Провести оптимизацию и модернизацию логистики (предоставить гарантию на
                        правильное хранение и своевременную доставку продукции Tanho до «Вашего»
                        магазина);</li>
                    <li>3 Провести оптимизацию и модернизацию производства (обеспечить Вас
                        натуральным продуктом в удобной упаковке, произведенным по современному и
                        безопасному методу);</li>
                    <li>4 Внедрить функцию HR (создать штат из компетентных и целеустремлённых
                        сотрудников, способных принимать эффективные решения для популяризации
                        продукции Tanho в нашей стране);</li>
                    <li>5 Внедрить функцию торгового маркетинга (запускать интересные акции и
                        инициативы как способы выражения благодарности Вам за доверие и лояльность);
                    </li>
                    <li>6 Внедрить функцию бренд маркетинга и PR (продолжать максимально прозрачную
                        коммуникацию со своей аудиторией и делиться новостями, чтобы всегда быть с
                        Вами на связи);</li>
                    <li>7 Выстроить систему планирования (вне зависимости от сроков импорта
                        ингредиентов, своевременно доставлять продукцию Tanho до «Вашего» магазина);
                    </li>
                    <li>8 Внедрить стратегически важные финансовые инструменты (правильно
                        распределять бюджет в нашей большой семье, то есть внутри компании);</li>
                    <li>9 Выход на экспортные рынки (объединять семью, друзей и близких как в нашей
                        гостеприимной стране, так и за её пределами); </li>
                    <li>10 Запуск новых продуктовых направлений (расширять линейку вкусов, чтобы
                        радовать Вас и другими натуральными продуктами нашего производства).</li>
                </ul>
            </div>
                <h4 class="col-lg-12 text-center">

                    Спасибо что зашли к нам в гости. Нам хочется верить, что у Вас хватило терпения
                    дочитать информацию о наших планах до конца.

                </h4>
            `,
          "about-us": "О нас"
        }
      },
      uz: {
        translation: {
          nav: ["Bosh", "Mahsulotlar", "Biz haqimizda", "Aloqa"],
          title: ["Mahsulotlar katalogi", "Biz haqimizda"],
          filter: "Filt:",
          "filter-names": ["Ketchup", "Mayonez", "Xantal", "Makaron"],
          "address-field": `
            <h1 class="contacts contacts-header">Aloqa</h1>
            <h4 class="contacts  contacts-h4">Zavod manzili:</h4>
            <p class=" contacts contact-p">O'zbekiston, Toshkent viloyati, Qibray tumani, Yangiobod qishlog'i, ko'chasi Jasorat 100
                <br />Tel: 8 71 266 66 61
                <br /> Pochta: info@tanho.uz
            </p>
            <h4 class=" contacts  contacts-h4">Tijorat ofisining manzili:</h4>
            <p class="contacts  contact-p">Toshkent sh., Ko'chasi Gulobod, 5/1 uy
                <br /> Tel: 8 97 757 91 66
                <br /> Pochta: info@tanho.uz
            </p>
            <div class="contacts">
                <a href="https://www.facebook.com/tanhoholding/" target="_blank">
                    <img src="./img/facebook.svg" alt="">
                </a>
                <a href="https://www.instagram.com/tanho_uz/" target="_blank"><img src="./img/instagram.svg"
                        alt=""></a>
            </div>
        `,

          "about-desc": `
          Hurmatli mehmon, ushbu bo'limda biz kelajakdagi rejalarimizni siz bilan baham ko'rishdan mamnunmiz
            <br />
            <br />
            2019 yil sentyabr oyida Tanho kompaniyasida strategic sessiya bo'lib o'tdi, unda uning
            rahbarlari va asosiy menejerlari ishtirok etdi. Bu bizga vazifamizni, tassavurimizni 
            va kompaniyaning qadriyatlarini aniqlash, shuningdek 2022 yil oxirigacha yo'l xaritasini 
            ishlab chiqish imkoniyatini berdi.
            <br />
            <br />
            Biz nima fikrga keldik?
            <br />
            <br />
            Bizning vazifamiz: Biz sifatli va tabiiy oziq-ovqat 
            mahsulotlarini ishlab chiqarish orqali hayotga mazali lazzatni kiritamiz.
            <br />
            <br />
            Bizning tasavvurimiz: Oila, do'stlar va yaqinlaringizni birlashtirib har bir stolda bo'lishi.
            <br />
            <br />
            Bizning 5 ta qadriyatimiz: Ishonch, jamoaviy hamjihatlik, g'amxo'rlik, o'zini rivojlantirish, samaradorlik.
            <a class="more" data-toggle="modal" data-target="#description-modal">
                <br />
                Batafsil...
            </a>
            `,
          "about-modal": `
            <div class="col-lg-12" >
            Hurmatli mehmon, ushbu bo'limda biz kelajakdagi rejalarimizni siz bilan baham ko'rishdan mamnunmiz
            <br />
            <br />
            2019 yil sentyabr oyida Tanho kompaniyasida strategic sessiya bo'lib o'tdi, unda uning
            rahbarlari va asosiy menejerlari ishtirok etdi. Bu bizga vazifamizni, tassavurimizni 
            va kompaniyaning qadriyatlarini aniqlash, shuningdek 2022 yil oxirigacha yo'l xaritasini 
            ishlab chiqish imkoniyatini berdi.
            <br />
            <br />
            Biz nima fikrga keldik?
            <br />
            <br />
                <ul>
                    <li>
                    Bizning vazifamiz: Biz sifatli va tabiiy oziq-ovqat 
                    mahsulotlarini ishlab chiqarish orqali hayotga mazali lazzatni kiritamiz.

                    </li>
                    <li>
                    Bizning tasavvurimiz: Oila, do'stlar va yaqinlaringizni birlashtirib har bir stolda bo'lishi.
                    </li>
                    <li>
                    Bizning 5 ta qadriyatimiz: Ishonch, jamoaviy hamjihatlik, g'amxo'rlik, o'zini rivojlantirish, samaradorlik.
                    </li>
                </ul>
            </div>
            <div class="col-lg-12">
                <h3 class="text-center"><strong>Kelgusi yillar uchun kurs</strong></h3>
                <ul>
                    <h4 class="text-center">Biz o'zimizga ularni yechish uchun har kuni ishga keladigan 10 ta asosiy vazifani belgilab oldik:</h4>
                    <li>1 Samarali tarqatish tizimini yaratish ("Tanho" mahsulotlarini Andijondan Nukusgacha va Termizdan Uchquduqgacha bo'lgan barcha aholi uchun mavjud bo'lish);
                    </li>
                    <li>2 Logistikani optimallashtirish va modernizatsiya qilish (Tanho mahsulotlarini "Sizning" do'konga to'g'ri saqlash va o'z vaqtida yetkazib berish kafolati taqdim etish);</li>
                    <li>3 Ishlab chiqarishni optimallashtirish va modernizatsiyalash (Zamonaviy va xavfsiz uslubda ishlab chiqarilgan qulay qadoqlangan tabiiy mahsulot bilan Sizni ta’minlash);</li>
                    <li>4 HR funktsiyasini joriy qilish (Tanho mahsulotlarini mamlakatimizda ommalashtirish bo'yicha samarali qarorlar qabul qila oladigan, malakali va tashabbuskor xodimlar shtatini yaratish);</li>
                    <li>5 Savdo marketingining funktsiyasini joriy qilish (ishonch va sodiqlik uchun Sizga minnatdorchilik bildirish usullari sifatida qiziqarli aksiyalar va tashabbuslarni boshlash);
                    </li>
                    <li>6 Brend marketing va PR funktsiyasini joriy qilish (Siz bilan doimo aloqada bo'lish va yangiliklar bilan almashish uchun maksimal shaffof kommunikatsiyani davom ettirish);</li>
                    <li>7 Rejalashtirish tizimini yaratish (ingredientlarni olib kelish vaqtidan qat'iy nazar, Tanho mahsulotlarini "Sizning" do'konga o'z vaqtida etkazib berish);
                    </li>
                    <li>8 Strategik muhim moliyaviy vositalarni joriy qilish (bizning katta oilamizda, ya'ni kompaniya ichida byudjetni to'g'ri taqsimlash);</li>
                    <li>9 Eksport bozorlariga chiqish (nafaqat bizning mehmondo'st mamlakatimizda, balki undan tashqarida ham oilasini, do'stlarini va qarindoshlarini birlashtirish);</li>
                    <li>10 Mahsulotning yangi yo'nalishlarini yo'lga qo'yish (bizning ishlab chiqarishimizning boshqa tabiiy mahsulotlari bilan sizni xursand qilish uchun ta'mlar doirasini kengaytirish).</li>
                </ul>
            </div>
                <h4 class="col-lg-12 text-center">

                    Спасибо что зашли к нам в гости. Нам хочется верить, что у Вас хватило терпения
                    дочитать информацию о наших планах до конца.

                </h4>
            `,
          "about-us": "Biz haqimizda"
        }
      }
    }
  },
  function(err, t) {
    // initialized and ready to go!
    updateContent();
  }
);

//* putting all text place by place
function updateContent() {
  //* filling navigarion
  [...document.querySelectorAll("[data-hero]")].map((el, i) => {
    el.innerHTML = i18next.t("nav", { returnObjects: true })[i];
  });

  //* all titles
  [...document.querySelectorAll("[data-title]")].map((el, i) => {
    el.innerHTML = i18next.t("title", { returnObjects: true })[i];
  });

  //* filter text
  [...document.querySelectorAll("[data-filter]")].map((el, i) => {
    el.innerHTML = i18next.t("filter");
  });

  //* filter names
  [...document.getElementsByClassName("filter-name")].map((el, i) => {
    el.innerHTML = i18next.t("filter-names", { returnObjects: true })[i];
  });

  //* address container
  document.getElementById("address-content").innerHTML = i18next.t(
    "address-field"
  );

  //* fill about-desc
  document.getElementById("about-desc").innerHTML = i18next.t("about-desc");

  //* fill about-modal
  document.getElementById("about-modal").innerHTML = i18next.t("about-modal");
  //* footer nav
  [...document.getElementsByClassName("foot-nav")].map((el, i) => {
    el.innerHTML = i18next.t("nav", { returnObjects: true })[i];
  });
  //* modal title
  document.getElementById("exampleModalLongTitle").innerHTML = i18next.t(
    "about-us"
  );
}

//* function handels language changing
function changeLng(lng) {
  console.log(lng);
  localStorage.setItem("lang", lng);
  i18next.changeLanguage(lng);
}

//* calling content filling after language changed

i18next.on("languageChanged", () => {
  // console.log(lng);
  // updateContent();

  const windowReload = new Promise((resolve, reject) => {
    resolve(window.location.reload());
  });

  windowReload.then(() => {
    setTimeout(() => {
      updateContent();
    }, 3000);
  });
});

//change language button
