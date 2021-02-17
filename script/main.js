"use strict"

const links = document.querySelectorAll('a[href*="#"]'),
      projects = document.querySelectorAll('.project'),
      upButton = document.querySelector('.up');

for (let link of links) {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const link_id = link.getAttribute('href').substr(1);

    document.getElementById(link_id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

for (let project of projects) {
  project.addEventListener('mouseover', () => {
    let title = project.querySelector('.pr_title')
    title.classList.remove('hide')
  })
}

for (let project of projects) {
  project.addEventListener('mouseout', () => {
    let title = project.querySelector('.pr_title')
    title.classList.add('hide')
  })
}

const buttonToggle = (bool) => {
  if (bool) {
    upButton.classList.remove('hide');
  }
  else {
    upButton.classList.add('hide');
  }
}

const trackScroll = () => {
  const scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight;
  scrolled > coords ? buttonToggle(1) : buttonToggle(0);
}

const scrollTop = () => {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -30);
    setTimeout(scrollTop, 0);
  }
}

window.addEventListener('scroll', trackScroll)
upButton.addEventListener('click', scrollTop);