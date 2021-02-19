import { routes } from "./routes";
import { icons } from "./icons";

export default function Navbar() {
  return (
    <header className="header text-center">
      <div className="force-overflow">
        <h1 className="blog-name pt-lg-4 mb-0">
          <a href="/">Gabriel Rodriguez</a>
        </h1>

        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navigation" className="collapse navbar-collapse flex-column">
            <div className="profile-section pt-3 pt-lg-0">
              <img
                className="profile-image mb-3 rounded-circle mx-auto"
                src="/images/dashboard-avatar.png"
                alt="profile"
              />

              <div className="bio mb-3">
                Hola, mi nombre es Gabriel Rodriguez y soy un desarrollador web
                junior. <br /> ¡ Bienvenido a mi web peronal !
              </div>
              <ul className="social-list list-inline py-2 mx-auto">
                {icons.map((icon) => (
                  <li key={icon.id} className="list-inline-item">
                    <a href={icon.href} target="blanck">
                      <i className={icon.class}></i>
                    </a>
                  </li>
                ))}
              </ul>
              <hr />
            </div>

            <ul className="navbar-nav flex-column text-left">
              {routes.map((route) => (
                <li key={route.id} className="nav-item">
                  <a className="nav-link" href={route.href}>
                    <i className={route.class + " fa-fw mr-2"}></i>
                    {route.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="dark-mode-toggle text-center w-100">
              <hr className="mb-4" />
              <h4 className="toggle-name mb-3 ">
                <i className="fas fa-adjust mr-1"></i>Modo Oscuro
              </h4>

              <input className="toggle" id="darkmode" type="checkbox" />
              <label
                className="toggle-btn mx-auto mb-0"
                htmlFor="darkmode"
              ></label>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
