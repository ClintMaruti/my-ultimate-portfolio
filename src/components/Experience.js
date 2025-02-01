import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";

const Experience = () => {
  return (
    <div className="section resume" id="section-experience">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Experience</div>
          <div className="subtitle">Working with</div>
        </div>
        {/* resume items */}
        <div className="content-carousel">
          <Swiper {...sliderProps.experience}>
            <SwiperSlide className="item">
              <div className="resume-item active">
                <div className="date">2024 - Present</div>
                <div className="name">
                  Co-founder, CTO
                  <br />
                  CaselexAi
                </div>
                <div className="single-post-text">
                  <p>
                    Led end-to-end development of an AI-powered legal research
                    platform. Built microservices for data scraping, semantic
                    chunking, and AI-driven search with React and Node.js.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2021 - 2024</div>
                <div className="name">
                  Senior Software Engineer
                  <br />
                  Slide
                </div>
                <div className="single-post-text">
                  <p>
                    Designed event-driven backend architecture with Kafka,
                    integrated chatbot solutions with social media APIs, and
                    improved scalability using microservices on AWS.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2022</div>
                <div className="name">
                  Senior Fullstack Engineer
                  <br />
                  PipeSearch
                </div>
                <div className="single-post-text">
                  <p>
                    Developed frontend features with React and TypeScript,
                    optimized APIs with Node.js, and enhanced PostgreSQL
                    performance for a pipeline management platform.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2021</div>
                <div className="name">
                  Senior Software Engineer
                  <br />
                  Pearl
                </div>
                <div className="single-post-text">
                  <p>
                    Built scalable backend services with Nest.js, developed
                    GraphQL APIs, and delivered investor-ready features to boost
                    fan engagement and monetization.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2019 - 2021</div>
                <div className="name">
                  Software Engineer
                  <br />
                  Letrads Consultants
                </div>
                <div className="single-post-text">
                  <p>
                    Engineered web applications with Node.js and AWS, built
                    real-time chat platforms using WebSockets, and optimized
                    cloud infrastructure for scalability.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* navigation */}
          <div className="navs">
            <span className="experience_prev prev fas fa-chevron-left" />
            <span className="experience_next next fas fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
