const links = document.querySelectorAll('a[href*="#"]');
const projects = document.querySelectorAll('.project');

for (let link of links) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const link_id = link.getAttribute('href').substr(1);

    document.getElementById(link_id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

for (let project of projects) {
  project.addEventListener('mouseover', () => {
    let title = project.querySelector('.pr_title');
    title.classList.remove('hide');
  })
}

for (let project of projects) {
  project.addEventListener('mouseout', () => {
    let title = project.querySelector('.pr_title');
    title.classList.add('hide');
  })
}