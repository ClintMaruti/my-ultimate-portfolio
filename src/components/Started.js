import TypingAnimation from "./TypingAnimation";

const Started = () => {
  return (
    <div className="section started" id="section-started">
      <div className="centrize full-width">
        <div className="vertical-center">
          {/* title */}
          <h1 className="h-title">
            Clint <br />
            Maruti
          </h1>
          {/* content started */}
          <div className="started-content">
            {/* subtitle */}
            <div className="h-subtitles">
              <div className="h-subtitle typing-subtitle">
                <TypingAnimation />
              </div>
              <span className="typed-subtitle" />
            </div>
            {/* text */}
            <div className="h-text">
              Crafting scalable solutions. Building seamless experiences.
              Innovating with code.
            </div>
            {/* button */}
            <a href="#section-contacts" className="btn">
              <span className="animated-button">
                <span>Let's Connect</span>
              </span>
              <i className="icon fas fa-chevron-right" />
            </a>
            {/* mouse button */}
            <a
              href="#section-about"
              className="btn mouse-btn"
              style={{ display: "none" }}
            >
              <i className="icon fas fa-chevron-down" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started;
