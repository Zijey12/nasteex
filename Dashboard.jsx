// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Dashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const colRef = collection(db, "courses");
      const snapshot = await getDocs(colRef);
      setCourses(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchCourses();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Dashboard - Your Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h5>{course.title}</h5>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;