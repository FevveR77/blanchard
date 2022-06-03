/* SIMPLEBARS */
document.querySelectorAll(".simplebar").forEach(item => {
  new SimpleBar(item, {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});
})

/* SELECTORS */
const selector = document.querySelector('.gallery-selector');

/* CHOICES */
const choices = new Choices(selector, {
  searchEnabled: false
});

/* SWIPERS */
const swiper__gallery = new Swiper('.swiper__gallery', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper__gallery-button-next",
    prevEl: ".swiper__gallery-button-prev"
  },
  pagination: {
    el: '.swiper__gallery-bullet-pagination',
    type: 'fraction',
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    },
    500: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 35
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20
    }
  }
});

const swiper__events = new Swiper('.swiper__events', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper__events-button-next",
    prevEl: ".swiper__events-button-prev"
  },
  pagination: {
    el: ".swiper__events-pagination",
    clickable: true
  },
  breakpoints: {
    1015: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27
    },
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    }
  }
});

const swiper__hero = new Swiper('.swiper__hero', {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false
});

const swiper__project = new Swiper('.swiper__project', {
  spaceBetween: 50,
  slidesPerView: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".swiper__project-button-next",
    prevEl: ".swiper__project-button-prev"
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    1250: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50
    },
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    }
  }
});

/* VALIDATORS */
var form = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(form);    
new JustValidate('.container-contacts__list__item__form', {
  rules: {
    name: {
      required: true,
      minLength: 2
    },
    phone: {
      required: true,
      function: (name, value) => {
        const num = selector.inputmask.unmaskedvalue()
        return Number(num) && num.length === 10
      }
    }
  },
  messages: {
    name: "Недопустимый формат",
    phone: "Недопустимый формат"
  },
  submitHandler: function(thisForm) {
    let formData = new FormData(thisForm);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
  }
})

/* MAPS */
ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("myMap1", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.760236, 37.614877],
      zoom: 14
  });
  myPlacemark = new ymaps.Placemark([55.760236, 37.614877], {}, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'img/map_marker.svg',
    // Размеры метки.
    iconImageSize: [20, 20],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-25, -20]
  })

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('routeButton');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('rulerControl');
  myMap.controls.remove('geolocationControl');
  myMap.controls.add('geolocationControl', {
    size: 'small',
    float: 'none',
    position: {
      right: '0px',
      bottom: '300px'
    }
  });
  myMap.controls.add('zoomControl', {
    size: 'small',
    float: 'none',
    position: {
      top: '300px',
      right: '0px'
    }
  });
}

/* SCROLL */
$(document).ready(function() {
  $("a.header-container__list__item__list__item__nav__list__item__link").click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });
  $("a.catalog__accordion__list__item__descr-content__block__link").click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });
  $("a.catalog__accordion__list__item__descr-content__block__list__item__list__link").click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });
  $("a.container-hero__btn").click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });
});

/* TOOLTIPS */
tippy('.container-project__tooltip__btn-1', {
  content: 'Пример современных тенденций - современная методология разработки',
  trigger: 'click',
  maxWidth: 264,
});
tippy('.container-project__tooltip__btn-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  trigger: 'click',
  maxWidth: 264,
});
tippy('.container-project__tooltip__btn-3', {
  content: 'В стремлении повысить качество ',
  trigger: 'click',
  maxWidth: 232,
});

/* ACCORDION */
$( function() {
  $( ".catalog__accordion__list" ).accordion( {
    collapsible: true,
    heightStyle: "content",
    active: 0
  });
} );

/* TABS */
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__accordion__list__item__descr-content__block__list__item__list__link').forEach(function(howLink) {
    howLink.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__accordion__list__item__descr-content__block__list__item__list__link').forEach(function(btn) {
        btn.classList.remove('catalog__accordion__list__item__descr-content__block__list__item__list__link-active')
      })
      event.currentTarget.classList.add('catalog__accordion__list__item__descr-content__block__list__item__list__link-active')

      document.querySelectorAll('.catalog__content__list__item').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__content__list__item-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__content__list__item-active')
    })
  })
})

/* MENU */
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header-container__menu__burger__btn-1').addEventListener('click', function() {
    document.querySelector('.header-menu-container').classList.toggle('header-menu-container-active')
  })
})

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header-container__menu__burger__btn-2').addEventListener('click', function() {
    document.querySelector('.header-menu-container').classList.toggle('header-menu-container-active')
  })
})

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header-menu-container__btn').addEventListener('click', function() {
    document.querySelector('.header-menu-container').classList.remove('header-menu-container-active')
  })
})

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.header-menu-container__nav__list__item__link').forEach(function(Link) {
    Link.addEventListener('click', function() {
      document.querySelector('.header-menu-container').classList.remove('header-menu-container-active')
    })
  })
})

/* SEARCH IN HEADER */
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header-container__search__btn').addEventListener('click', function() {
    document.querySelector('.search-container').classList.toggle('search-container-active')
    this.classList.add("header-container__search__btn-none-active");
  })
})

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.search-container__list__item__close__btn').addEventListener('click', function() {
    document.querySelector('.search-container').classList.remove('search-container-active');
    document.querySelector('.header-container__search__btn').classList.remove('header-container__search__btn-none-active')
  })
})

/* MODAL WINDOW */
const modalContainer = document.querySelector('.gallery__modal')
const modalContainerExit = modalContainer.querySelector('.gallery__modal__container__content__exit')
const gallerySlides = document.querySelectorAll('.swiper__gallery__slide').forEach(el=> {
  let srcImg = el.querySelector(`img`).getAttribute('src')
  el.addEventListener('click', ()=> {
    modalContainer.style.display = `flex`
    modalContainer.querySelector('.gallery__modal__container__img').querySelector('img').setAttribute('src', `${srcImg}`)
    if (el.dataset.path === `gallery-slide-1`) {
      modalContainer.querySelector('.gallery__modal__container__content__title1').textContent = `Автор`
      modalContainer.querySelector('.gallery__modal__container__content__title2').textContent = `Название картины`
      modalContainer.querySelector('.gallery__modal__container__content__bottomtitle2').textContent = `Год`
      modalContainer.querySelector('.gallery__modal__container__content__descr').innerHTML = `Описание картины`
    }
    else if (el.dataset.path === `gallery-slide-2`) {
      modalContainer.querySelector('.gallery__modal__container__content__title1').textContent = `Казимир Малевич`
      modalContainer.querySelector('.gallery__modal__container__content__title2').textContent = `“Женщина с граблями”`
      modalContainer.querySelector('.gallery__modal__container__content__bottomtitle2').textContent = `1931-1932`
      modalContainer.querySelector('.gallery__modal__container__content__descr').innerHTML = `Картина из&nbsp;второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за&nbsp;её&nbsp;создание в&nbsp;1930-1931&nbsp;годах, после того, как первый цикл был утерян после Берлинской и&nbsp;Варшавской выставок в&nbsp;1927&nbsp;году.`
    }
    else if (el.dataset.path === `gallery-slide-3`) {
      modalContainer.querySelector('.gallery__modal__container__content__title1').textContent = `Автор`
      modalContainer.querySelector('.gallery__modal__container__content__title2').textContent = `Название картины`
      modalContainer.querySelector('.gallery__modal__container__content__bottomtitle2').textContent = `Год`
      modalContainer.querySelector('.gallery__modal__container__content__descr').innerHTML = `Описание картины`
    }
    else if (el.dataset.path === `gallery-slide-4`) {
      modalContainer.querySelector('.gallery__modal__container__content__title1').textContent = `Автор`
      modalContainer.querySelector('.gallery__modal__container__content__title2').textContent = `Название картины`
      modalContainer.querySelector('.gallery__modal__container__content__bottomtitle2').textContent = `Год`
      modalContainer.querySelector('.gallery__modal__container__content__descr').innerHTML = `Описание картины`
    }
    else if (el.dataset.path === `gallery-slide-5`) {
      modalContainer.querySelector('.gallery__modal__container__content__title1').textContent = `Автор`
      modalContainer.querySelector('.gallery__modal__container__content__title2').textContent = `Название картины`
      modalContainer.querySelector('.gallery__modal__container__content__bottomtitle2').textContent = `Год`
      modalContainer.querySelector('.gallery__modal__container__content__descr').innerHTML = `Описание картины`
    }
    else if (el.dataset.path === `gallery-slide-6`) {
      modalContainer.querySelector('.gallery__modal__container__content__title1').textContent = `Автор`
      modalContainer.querySelector('.gallery__modal__container__content__title2').textContent = `Название картины`
      modalContainer.querySelector('.gallery__modal__container__content__bottomtitle2').textContent = `Год`
      modalContainer.querySelector('.gallery__modal__container__content__descr').innerHTML = `Описание картины`
    }
    setTimeout(() => {
      modalContainer.classList.add('modal-active')
    }, 100);
  })
})
modalContainerExit.addEventListener('click', () => {
  modalContainer.classList.remove('modal-active')
  setTimeout(() => {
    modalContainer.style.display = `none`
  }, 700);
})

