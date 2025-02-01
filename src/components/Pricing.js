import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";

const Pricing = () => {
  return (
    <div className="section pricing" id="section-pricing">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Pricing</div>
          <div className="subtitle">My Plans</div>
        </div>
        {/* pricing items */}
        <div className="content-carousel">
          <Swiper {...sliderProps.price}>
            {/* Basic Plan */}
            <SwiperSlide className="item">
              <div className="pricing-item">
                <div className="icons">
                  <i className="fas fa-code" />
                </div>
                <div className="name">Basic</div>
                <div className="amount">
                  <span className="number">
                    <span className="dollar">$</span>
                    <span>75</span>
                    <span className="period">hour</span>
                  </span>
                </div>
                <div className="feature-list">
                  <ul>
                    <li>Web Development</li>
                    <li>API Development</li>
                    <li>Database Management</li>
                    <li className="disable">AI Integration</li>
                    <li className="disable">Cloud Solutions</li>
                  </ul>
                </div>
                <a href="#" className="btn">
                  <span className="animated-button">
                    <span>Get Started</span>
                  </span>
                  <i className="icon fas fa-chevron-right" />
                </a>
              </div>
            </SwiperSlide>

            {/* Premium Plan */}
            <SwiperSlide className="item">
              <div className="pricing-item">
                <div className="icons">
                  <i className="fas fa-rocket" />
                </div>
                <div className="name">Premium</div>
                <div className="amount">
                  <span className="number">
                    <span className="dollar">$</span>
                    <span>100</span>
                    <span className="period">hour</span>
                  </span>
                </div>
                <div className="feature-list">
                  <ul>
                    <li>Web Development</li>
                    <li>API Development</li>
                    <li>AI Integration</li>
                    <li>Cloud Solutions</li>
                    <li className="disable">System Architecture</li>
                  </ul>
                </div>
                <a href="#" className="btn">
                  <span className="animated-button">
                    <span>Get Started</span>
                  </span>
                  <i className="icon fas fa-chevron-right" />
                </a>
              </div>
            </SwiperSlide>

            {/* Ultimate Plan */}
            <SwiperSlide className="item">
              <div className="pricing-item">
                <div className="icons">
                  <i className="fas fa-trophy" />
                </div>
                <div className="name">Ultimate</div>
                <div className="amount">
                  <span className="number">
                    <span className="dollar">$</span>
                    <span>150</span>
                    <span className="period">hour</span>
                  </span>
                </div>
                <div className="feature-list">
                  <ul>
                    <li>Web Development</li>
                    <li>API Development</li>
                    <li>AI Integration</li>
                    <li>Cloud Solutions</li>
                    <li>System Architecture</li>
                  </ul>
                </div>
                <a href="#" className="btn">
                  <span className="animated-button">
                    <span>Get Started</span>
                  </span>
                  <i className="icon fas fa-chevron-right" />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* navigation */}
          <div className="navs">
            <span className="price_prev prev fas fa-chevron-left" />
            <span className="price_next next fas fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
