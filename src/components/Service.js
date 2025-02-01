const Service = () => {
  return (
    <div className="section service" id="section-services">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Services</div>
          <div className="subtitle">What I Do</div>
        </div>
        {/* services items */}
        <div className="service-items">
          {/* Full-Stack Development */}
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-code" />
              </div>
              <div className="name">
                Full-Stack <br />
                Development
              </div>
              <div className="single-post-text">
                <p>
                  Building scalable, high-performance web applications with
                  seamless front-end and back-end integration. Proficient in
                  React, Node.js, and modern frameworks.
                </p>
              </div>
            </div>
          </div>

          {/* AI & Machine Learning */}
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-brain" />
              </div>
              <div className="name">
                AI & Machine <br />
                Learning
              </div>
              <div className="single-post-text">
                <p>
                  Developing AI-powered solutions using LangChain, LLMs, and
                  RAG. Specializing in semantic search, data processing, and
                  intelligent automation.
                </p>
              </div>
            </div>
          </div>

          {/* Cloud Solutions */}
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-cloud" />
              </div>
              <div className="name">
                Cloud <br />
                Solutions
              </div>
              <div className="single-post-text">
                <p>
                  Designing and deploying scalable cloud infrastructure on AWS,
                  Azure, and Google Cloud. Expertise in serverless computing,
                  microservices, and data storage.
                </p>
              </div>
            </div>
          </div>

          {/* System Architecture */}
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-project-diagram" />
              </div>
              <div className="name">
                System <br />
                Architecture
              </div>
              <div className="single-post-text">
                <p>
                  Crafting resilient, event-driven architectures for
                  high-traffic applications. Proficient in Kafka, RabbitMQ, and
                  microservice design patterns.
                </p>
              </div>
            </div>
          </div>

          {/* API Development */}
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-cogs" />
              </div>
              <div className="name">
                API <br />
                Development
              </div>
              <div className="single-post-text">
                <p>
                  Building robust, scalable RESTful and GraphQL APIs for
                  seamless communication between systems. Optimized for
                  performance and security.
                </p>
              </div>
            </div>
          </div>

          {/* Database Management */}
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-database" />
              </div>
              <div className="name">
                Database <br />
                Management
              </div>
              <div className="single-post-text">
                <p>
                  Designing and managing relational and NoSQL databases
                  (PostgreSQL, MongoDB, Redis). Expertise in query optimization
                  and data integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default Service;
