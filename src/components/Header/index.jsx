import "./styles.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-container">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Klontong
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
