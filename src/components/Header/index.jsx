import "./styles.css";

export default function Header() {
  const handleLogout = () => {
    localStorage.removeItem("userId");
    alert("Already Log out");
  };
  return (
    <>
      <header>
        <div className="header-container">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="/" className="nav__link">
                  Klontong
                </a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link" onClick={handleLogout}>
                  Log Out
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
