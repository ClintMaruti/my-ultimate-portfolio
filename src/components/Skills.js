import { useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils";

export const DesignSkills = () => {
  return (
    <div className="section skills" id="section-skills">
      <div className="content">
        <div className="titles">
          <div className="title">Technical Skills</div>
          <div className="subtitle">Expertise</div>
        </div>
        <div className="skills percent">
          <ul>
            <li>
              <div className="name">System Architecture</div>
              <div className="single-post-text">
                <p>
                  Designing scalable, event-driven, and microservices-based
                  architectures.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "95%" }}>
                  <span className="percent">95%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Full-Stack Development</div>
              <div className="single-post-text">
                <p>
                  Developing robust applications with React, Node.js, Django,
                  and PostgreSQL.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Cloud & DevOps</div>
              <div className="single-post-text">
                <p>
                  Deploying and managing applications on AWS with Docker and
                  Kubernetes.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">AI & Data Engineering</div>
              <div className="single-post-text">
                <p>
                  Implementing data pipelines, vector databases, and AI-powered
                  solutions with LangChain.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "80%" }}>
                  <span className="percent">80%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const LanguagesSkills = () => {
  useEffect(() => {
    dotResize();
    setTimeout(createSkillsDot, 1000);
  }, []);

  return (
    <div className="section skills" id="section-skills-lang">
      <div className="content">
        <div className="titles">
          <div className="title">Language Proficiency</div>
          <div className="subtitle">Communication Skills</div>
        </div>
        <div className="skills dotted">
          <ul>
            <li>
              <div className="name">English</div>
              <div className="single-post-text">
                <p>
                  Professional working proficiency in both verbal and written
                  communication.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "95%" }}>
                  <span className="percent">95%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Swahili</div>
              <div className="single-post-text">
                <p>
                  Fluent in conversational and written Swahili, enhancing
                  cross-cultural communication.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const CodingSkills = () => {
  return (
    <div className="section skills" id="section-skills-code">
      <div className="content">
        <div className="titles">
          <div className="title">Coding Skills</div>
          <div className="subtitle">Technologies & Tools</div>
        </div>
        <div className="skills circles">
          <ul>
            <li>
              <div className="progress p95">
                <div className="percentage" />
                <span>95%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">JavaScript, TypeScript</div>
              <div className="single-post-text">
                <p>
                  Advanced expertise in modern JavaScript frameworks like React
                  and Node.js.
                </p>
              </div>
            </li>
            <li>
              <div className="progress p90">
                <div className="percentage" />
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">Python</div>
              <div className="single-post-text">
                <p>
                  Building data pipelines, APIs, and automation scripts for
                  diverse applications.
                </p>
              </div>
            </li>
            <li>
              <div className="progress p85">
                <div className="percentage" />
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">SQL, NoSQL</div>
              <div className="single-post-text">
                <p>
                  Database design, optimization, and management with PostgreSQL,
                  MongoDB, Redis.
                </p>
              </div>
            </li>
            <li>
              <div className="progress p80">
                <div className="percentage" />
                <span>80%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">Cloud & DevOps</div>
              <div className="single-post-text">
                <p>
                  Proficient with AWS, Docker, and CI/CD pipelines for scalable
                  deployments.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
