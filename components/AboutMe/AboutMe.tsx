export default function AboutMe() {
  return (
    <section className="about-me-section p-3 p-lg-5 theme-bg-light">
      <div className="container">
        <div className="profile-teaser media flex-column flex-lg-row">
          <div className="media-body">
            <h2 className="name font-weight-bold mb-1">Gabriel Rodriguez</h2>
            <div className="tagline mb-3">Desarrollador Web Junior</div>
            <div className="bio mb-4">
              I'm a software engineer specialised in frontend and backend
              development for complex scalable web apps. I write about software
              development on{" "}
              <a className="link-on-bg" href="blog-home.html">
                my blog
              </a>
              . Want to know how I may help your project? Check out my project{" "}
              <a className="link-on-bg" href="projects.html">
                portfolio
              </a>{" "}
              and{" "}
              <a className="link-on-bg" href="resume.html">
                online resume
              </a>
              .
            </div>
            <div className="mb-4">
              <a className="btn btn-primary mr-2 mb-3" href="portfolio.html">
                <i className="fas fa-arrow-alt-circle-right mr-2"></i>
                <span className="d-none d-md-inline">View</span> Portfolio
              </a>
              <a className="btn btn-secondary mb-3" href="resume.html">
                <i className="fas fa-file-alt mr-2"></i>
                <span className="d-none d-md-inline">View</span> Resume
              </a>
            </div>
          </div>
          <img
            className="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0"
            src="\images\support_03.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
