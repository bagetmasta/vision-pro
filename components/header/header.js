import Image from "next/image";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li className="header__nav-item">
            <a>Home</a>
          </li>
          <li className="header__nav-item">
            <a>Products</a>
          </li>
          <li className="header__nav-item">
            <a>Entertainment</a>
          </li>
          <li className="header__nav-item">
            <a>Support</a>
          </li>
        </ul>
      </nav>

      <a
        href="https://www.apple.com/"
        className="header__logo"
        aria-label="Apple website"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/header/apple.svg"
          alt="Apple logo"
          width={48}
          height={48}
        />
      </a>

      <div>
        <form action="/search" method="get" className="search-form">
          <label htmlFor="search-input" className="visually-hidden">
            Search
          </label>
          <input
            type="search"
            className="search-input"
            id="search-input"
            name="query"
            placeholder="Search"
          />
          <button type="submit" className="search-icon">
            <Image
              src="/images/header/loupe.svg"
              alt="loupe"
              width={24}
              height={24}
            />
          </button>
        </form>

        <div className="header__span-container">
          <span className="header__span-item">
            <Image
              src="/images/header/bag.svg"
              alt="bag"
              width={24}
              height={24}
            />
          </span>
          <span className="header__span-item">
            <Image
              src="/images/header/person.svg"
              alt="person"
              width={24}
              height={24}
            />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
