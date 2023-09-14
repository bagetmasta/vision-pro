import Image from "next/image";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Entertainment</a>
          </li>
          <li>
            <a>Support</a>
          </li>
        </ul>
      </nav>

      <a
        href="https://www.apple.com/"
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

      <form action="/search" method="get" className="search-form">
        <label htmlFor="search-input" className="visually-hidden">
          Search
        </label>
        <input
          type="search"
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

      <span>
        <Image src="/images/header/bag.svg" alt="bag" width={24} height={24} />
      </span>
      <span>
        <Image
          src="/images/header/person.svg"
          alt="person"
          width={24}
          height={24}
        />
      </span>
    </header>
  );
}

export default Header;
