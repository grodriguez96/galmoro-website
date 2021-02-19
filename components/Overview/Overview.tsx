import { items, isIcon, isSvg } from "./svg";

export default function Overview() {
  return (
    <section className="overview-section p-3 p-lg-5">
      <div className="container">
        <h2 className="section-title font-weight-bold mb-3">What I do</h2>
        <div className="section-intro mb-5">
          I have more than 10 years' experience building software for clients
          all over the world. Below is a quick overview of my main technical
          skill sets and technologies I use. Want to find out more about my
          experience? Check out my <a href="resume.html">online resume</a> and{" "}
          <a href="portfolio.html">project portfolio</a>.
        </div>
        <div className="row">
          {items.map((item) => {
            return (
              <div key={item.id} className="item col-6 col-lg-3">
                <div className="item-inner">
                  <div className="item-icon">
                    {item.image.filter(isIcon).map((icon) => (
                      <i className={"fab " + icon.class}></i>
                    ))}
                    {item.image.filter(isSvg).map((svg) => (
                      <svg
                        width={svg.width}
                        height={svg.height}
                        viewBox={svg.viewBox}
                      >
                        {svg.path.map((pth) => (
                          <path fill={pth.fill} d={pth.d} />
                        ))}
                      </svg>
                    ))}
                  </div>
                  <h3 className="item-title">{item.title}</h3>
                  <div className="item-desc">{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
