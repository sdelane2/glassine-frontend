import React from 'react'


const navbar = (props) => (
  <header class="main-header">
  <div>
      <a href="/" class="main-header__brand">glassine</a>
  </div>
  <nav class="main-nav">
      <ul class="main-nav__items">
          <li class="main-nav__item">
              <a href="/services">Services</a>
          </li>
          <li class="main-nav__item">
              <a href="/login">Log in</a>
          </li>
          <li class="main-nav__item main-nav__item--cta">
              <a href="/become-a-handler">Become a Handler</a>
          </li>
      </ul>
  </nav>
</header>
  
);

function NavBar() {
  
    return(
        <div>
            {navbar()}
        </div>
    )

}
export default NavBar