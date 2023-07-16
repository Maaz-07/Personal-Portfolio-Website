function createNavbar() {
    const navItems = [
      { text: 'Home', link: 'index.html' },
      { text: 'About', link: '#' },
      { text: 'Skills', link: '#' },
      { text: 'Projects', link: '#' },
      { text: 'Contact Me', link: '#' },
    ];
  
    const header = document.createElement('header');
    header.innerHTML = `
      <h1>Maaz's Portfolio</h1>
      <nav>
        <ul>
          ${navItems
            .map(
              (item) => `<li><a href="${item.link}">${item.text}</a></li>`
            )
            .join('')}
        </ul>
      </nav>
    `;
  
    return header;
  }
  
  const headerContainer = document.querySelector('header');
  headerContainer.appendChild(createNavbar());  