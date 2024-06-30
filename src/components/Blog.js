import React from "react";
import "./Blog.css";

export default function Blog() {
  return (
    <div className="blog-section">
      <h1 className="blog-heading">Our Recent Blog</h1>
      <div className="blog-container">
        <div className="blog-column ">
          <h3>
            Complete all of the task but didn't get certification yet? 😓🤦‍♀️
          </h3>
          <p>
            📧 Drop us a quick email at issues@internee.pk with the subject
            "Didn't get certification yet." Our team will swiftly resolve the
            matter, ensuring you get your recognition promptly.
          </p>
        </div>
        <div className="blog-column">
          <h3>We've hit a major milestone: 20,000 followers on LinkedIn! 🎉</h3>

          <p>
            Thank you for being a part of our incredible journey towards
            empowering students and professionals in the world of IT and
            services. Your support means the world to us! 🚀
          </p>
        </div>
        <div className="blog-column">
          <h3>
            🚀Calling communities to Empower Students, Collaborate with
            Internee.pk!✌
          </h3>

          <p>
            We'd love to discuss how a collaboration with Internee.pk can
            benefit your universites , socities, institutes and educational
            institutions and specially with students.
          </p>
        </div>
        <div className="blog-column">
          <h3>
            Ready to Showcase Your Expertise? Follow These Simple Steps! 🌟
          </h3>
          <p>
            To complete the process, send us all the task details via email at
            careers@internee.pk. This ensures that we have all the necessary
            information to validate your certification.
          </p>
        </div>
      </div>
    </div>
  );
}
