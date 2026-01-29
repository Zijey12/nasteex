// src/pages/AddCourse.jsx
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "courses"), { title, description });
      setMessage("Course added successfully!");
      setTitle("");
      setDescription("");
    } catch (error) {
      setMessage("Error adding course: " + error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="form-control mb-2"
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">Add Course</button>
      </form>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}

export default AddCourse;