const links = document.querySelectorAll('a[href*="#"]')

for (let link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const link_id = link.getAttribute('href').substr(1);

    document.getElementById(link_id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
