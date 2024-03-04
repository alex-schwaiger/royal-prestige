import { $isNavToggleOpen } from 'src/store';

const menu = document.querySelector('.menu') as HTMLElement;
const toggleButton = document.querySelector('.toggle-button') as HTMLElement;
const toggleOpenButton = document.querySelector(
  '.toggle-open-button',
) as HTMLElement;
const offCanvasBackdrop = document.querySelector(
  '.off-canvas-backdrop',
) as HTMLElement;

const dropdownItems = document.querySelectorAll(
  '.dropdown-item',
) as NodeListOf<HTMLElement>;

toggleButton.addEventListener('click', function () {
  menu.classList.remove('translate-x-0');
  menu.classList.add('-translate-x-full');
  offCanvasBackdrop.classList.remove('opacity-100');
  offCanvasBackdrop.classList.add('opacity-0');
});

toggleOpenButton.addEventListener('click', function () {
  menu.classList.remove('-translate-x-full');
  menu.classList.add('translate-x-0');
  offCanvasBackdrop.classList.remove('opacity-0');
  offCanvasBackdrop.classList.add('opacity-100');
});

const womenFlyoutMenu = document.querySelector(
  '.women-flyout-menu',
) as HTMLElement;
const womenFlyoutOverlay = document.querySelector(
  '.women-flyout-overlay',
) as HTMLElement;

const changeNavToggle = () => {
  $isNavToggleOpen.set(!$isNavToggleOpen.value);
  console.log($isNavToggleOpen.value);
};

const mobileNavBtns = document.querySelectorAll('.mobile-nav-button');

mobileNavBtns.forEach((btn) => {
  btn.addEventListener('click', changeNavToggle);
});

const toggleMenu = (item: HTMLElement) => {
  const flyoutMenu = item.querySelector('.flyout-overlay') as HTMLElement;

  console.log(flyoutMenu);
  console.log(item);

  if (flyoutMenu.classList.contains('opacity-0')) {
    flyoutMenu.classList.remove('hidden');
    flyoutMenu.classList.remove('opacity-0');
    flyoutMenu.classList.add('opacity-100', 'z-10');
  } else {
    flyoutMenu.classList.remove('opacity-100', 'z-10');
    flyoutMenu.classList.add('opacity-0');
    flyoutMenu.classList.add('hidden');
  }
};

const showItem = (item: HTMLElement) => {
  const flyoutMenu = item.querySelector('.flyout-overlay') as HTMLElement;
  const dropdownButton = item.querySelector('.dropdown-button') as HTMLElement; // Add type assertion to HTMLElement

  console.log(item);

  if (flyoutMenu.classList.contains('show-dropdown')) {
    flyoutMenu.classList.remove('show-dropdown');
    flyoutMenu.setAttribute('aria-expanded', 'false');
  } else {
    //
    flyoutMenu.classList.add('show-dropdown');
    flyoutMenu.setAttribute('aria-expanded', 'true');
    console.log('Here:', item);
  }
};

dropdownItems.forEach((item, index) => {
  const dropdownButtons = document.querySelectorAll(
    '.dropdown-button',
  ) as NodeListOf<HTMLElement>;

  console.log(dropdownButtons[index]);

  dropdownButtons[index].addEventListener('click', () => {
    const showDropdown = document.querySelector(
      '.show-dropdown',
    ) as HTMLElement;
    showItem(item);

    console.log(showDropdown);
    console.log(item);

    if (showDropdown && showDropdown !== item) {
      showItem(showDropdown);
    }
  });
});

console.log($isNavToggleOpen.value);

// womenFlyoutMenu.addEventListener('mouseenter', function () {
//   womenFlyoutOverlay.classList.remove('opacity-0');
//   womenFlyoutOverlay.classList.add('opacity-100');
// });

// womenFlyoutMenu.addEventListener('mouseleave', function () {
//   womenFlyoutOverlay.classList.remove('opacity-100');
//   womenFlyoutOverlay.classList.add('opacity-0');
// });

// const menFlyoutMenu = document.querySelector('.men-flyout-menu') as HTMLElement;
// const menFlyoutOverlay = document.getElementById(
//   'men-flyout-overlay',
// ) as HTMLElement;

// menFlyoutMenu.addEventListener('mouseenter', function () {
//   menFlyoutOverlay.classList.remove('opacity-0');
//   menFlyoutOverlay.classList.add('opacity-100');
// });

// menFlyoutMenu.addEventListener('mouseleave', function () {
//   menFlyoutOverlay.classList.remove('opacity-100');
//   menFlyoutOverlay.classList.add('opacity-0');
// });
