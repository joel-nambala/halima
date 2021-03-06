'use strict';

///////////////////////////////////////////////////
// Copyright year
const copyrightYear = document.querySelector('.copyright-year');

/**
 * @argument no arguements
 * @author Joel Nambala
 * @description changes the copyright year dynamically
 */
const changeCopyrightYear = function () {
  // 1. Get the date object
  const today = new Date();

  // 2. Get the current year
  const currentYear = today.getFullYear();

  // 3. Display the current year to the UI
  copyrightYear.textContent = currentYear;
};

changeCopyrightYear();

////////////////////////////////////////
// Sticky navigation
const navigation = document.querySelector('.navigation');

/**
 * @author Joel Nambala
 * @param No parameters
 * @description Adds a fixed navigation class to the nav on scroll
 */
const fixedNav = function () {
  // 1. Get the scroll height of the document on scroll
  const scrollHeight = window.scrollY;

  // 2. Get the height of the navigation bar
  const navHeight = navigation.getBoundingClientRect().height;

  // 3. Add and remove the sticky class based on different consitions
  if (scrollHeight > navHeight) navigation.classList.add('sticky');
  else navigation.classList.remove('sticky');
};

window.addEventListener('scroll', fixedNav);

////////////////////////////////////////////
// Responsive navigation
const navToggle = document.querySelector('.nav__bars');
const linksContainer = document.querySelector('.links__container');
const navList = document.querySelector('.nav__list');

/**
 * @author Joel Nambala
 * @argument No arguments
 * @description Resposive navigation bar
 */
navToggle.addEventListener('click', function () {
  // 1. Get the height of the navigation bar
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const listHeight = navList.getBoundingClientRect().height;

  // 2. Add the height dynamically
  if (containerHeight === 0) linksContainer.style.height = `${listHeight}px`;
  else linksContainer.style.height = 0;
});

//////////////////////////////////////////////
// Smooth scroll
const navLink = document.querySelectorAll('.nav__link');
navLink.forEach(function (link) {
  link.addEventListener('click', function (e) {
    // Prevent default
    e.preventDefault();

    // Navigate to a specific spot
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    // Calculate the heights
    const navHeight = navigation.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navigation.classList.contains('sticky');

    let position = element.offsetTop - navHeight;

    if (!fixedNav) position = position - navHeight;
    if (navHeight > 82) position = position + containerHeight;

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
