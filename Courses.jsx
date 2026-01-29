// src/pages/Courses.jsx
import React from "react";

function Courses() {
  return (
    <div className="container mt-5">
      <h2>Courses</h2>
      <p>Sample course video:</p>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Sample Course"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Courses;