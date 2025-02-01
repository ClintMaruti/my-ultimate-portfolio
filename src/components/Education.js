import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";

const Education = () => {
  return (
    <div className="section resume" id="section-education">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Education</div>
          <div className="subtitle">Studied at</div>
        </div>
        {/* resume items */}
        <div className="content-carousel">
          <Swiper {...sliderProps.education}>
            <SwiperSlide className="item">
              <div className="resume-item active">
                <div className="date">2013 - 2015</div>
                <div className="name">
                  BSc. Mathematics & Computer Science
                  <br />
                  JKUAT
                </div>
                <div className="single-post-text">
                  <p>
                    Focused on computational mathematics, software development,
                    and system architecture, laying the foundation for
                    full-stack engineering expertise.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2023</div>
                <div className="name">
                  Machine Learning Certification
                  <br />
                  Stanford Online
                </div>
                <div className="single-post-text">
                  <p>
                    Gained in-depth knowledge of machine learning algorithms,
                    supervised/unsupervised learning, and model optimization
                    techniques.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* navigation */}
          <div className="navs">
            <span className="education_prev prev fas fa-chevron-left" />
            <span className="education_next next fas fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
