const initMobileMenu = () => {
  const navigation = document.querySelector('.js-main-header-navigation');
  const buttonMenu = navigation.querySelector('.js-toggle-button');
  const menuList = navigation.querySelector('.js-main-navigation-menu-list');
  const buttonMenuText = buttonMenu.querySelector('.js-main-navigation-toggle-text');

  buttonMenu.addEventListener('click', () => {
    menuList.classList.toggle('menu-list--oppened');
    buttonMenu.classList.toggle('main-navigation__toggle--oppened');

    if (buttonMenu.classList.contains('main-navigation__toggle--oppened')) {
      buttonMenuText.innerText = 'Закрыть меню';
    } else {
      buttonMenuText.innerText = 'Открыть меню';
    }
  }
  );
};

const initPriceSlider = () => {
  const filterPrice = document.querySelector('.js-filter-price');
  const slider = filterPrice.querySelector('.js-filter-price-slider');
  const priceMin = filterPrice.querySelector('.js-filter-price-range-number-from');
  const priceMax = filterPrice.querySelector('.js-filter-price-range-number-to');
  const priceInputs = [priceMin, priceMax];
  let values = [];

  const DEFAULT_SLIDER_OPTIONS = {
    range: {
      min: 0,
      max: 1000,
    },
    start: [0, 900],
    step: 10,
    connect: true,
  };

  noUiSlider.create(slider, {
    ...DEFAULT_SLIDER_OPTIONS
  });

  slider.noUiSlider.on('update', () => {
    values = slider.noUiSlider.get();
    priceMin.value = parseFloat(values[0]);
    priceMax.value = parseFloat(values[1]);
  });

  priceInputs.forEach((element, i) => {
    const item = element;
    const index = i;
    item.addEventListener('change', () => {
      values[index] = item.value;
      slider.noUiSlider.set(values);
    }
    );
  });
};

const initPromoSlider = () => {
  const sliderWrap = document.querySelector('.js-slider');
  const sliderButtonPrev = sliderWrap.querySelector('.js-slider-button-prev');
  const sliderButtonNext = sliderWrap.querySelector('.js-slider-button-next');
  const slider = sliderWrap.querySelector('.js-slider-container');
  const slides = sliderWrap.querySelectorAll('.js-slider-item-wrapper');
  const radioWrap = sliderWrap.querySelector('.js-slider-radio-wrap');
  const radioButtonsTemplate = sliderWrap.querySelector('#slider-radio').content;

  let slideWidth;
  let currentSlidePosition = 0;
  const MIN_POINT = 0;
  let maxPoint;
  let radioCurrentNumber;

  const createRadioButtons = () => {
    for (let i = 0; i <= slides.length - 1; i++) {
      const radioButton = radioButtonsTemplate.cloneNode(true);
      radioWrap.append(radioButton);
    }
  };

  createRadioButtons();

  const radioButtons = sliderWrap.querySelectorAll('.js-slider-radio-input');

  radioButtons[0].checked = true;

  if (currentSlidePosition === MIN_POINT) {
    sliderButtonPrev.disabled = true;
  }

  const updateRadioButton = () => {
    radioCurrentNumber = currentSlidePosition / slideWidth;

    radioButtons[radioCurrentNumber].checked = true;
  };

  const checkSlideWidth = () => {
    slideWidth = slider.offsetWidth;
  };

  const getMaxPoint = () => {
    maxPoint = slideWidth * (slides.length - 1);
  };

  const checkMaxPoint = () => {
    if (currentSlidePosition === maxPoint) {
      sliderButtonNext.disabled = true;
    }
  };

  const checkMinPoint = () => {
    if (currentSlidePosition === MIN_POINT) {
      sliderButtonPrev.disabled = true;
    }
  };

  const updateSlide = () => {
    slider.style.left = `-${currentSlidePosition}px`;

    sliderButtonPrev.disabled = false;
    sliderButtonNext.disabled = false;

    updateRadioButton();
  };

  const showNextSlide = () => {
    checkSlideWidth();
    getMaxPoint();

    if (currentSlidePosition < maxPoint) {
      currentSlidePosition += slideWidth;
      updateSlide();

      checkMaxPoint();
    }
  };

  const showPrevSlide = () => {
    checkSlideWidth();

    if (currentSlidePosition !== MIN_POINT) {
      currentSlidePosition -= slideWidth;
      updateSlide();

      checkMinPoint();
    }
  };

  const updateSlideByRadio = (evt) => {
    const buttons = Array.from(radioButtons);
    const buttonIndex = buttons.indexOf(evt.target);

    checkSlideWidth();
    currentSlidePosition = buttonIndex * slideWidth;
    updateSlide();

    getMaxPoint();
    checkMinPoint();
    checkMaxPoint();
  };

  sliderButtonNext.addEventListener('click', showNextSlide);
  sliderButtonPrev.addEventListener('click', showPrevSlide);

  radioButtons.forEach((button) => {
    button.addEventListener('change', updateSlideByRadio);
  });


};

initMobileMenu();
initPriceSlider();
initPromoSlider ();


