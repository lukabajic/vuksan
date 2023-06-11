import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTeacher, getGradesByTeacher } from '../../services/DataService';
import './styles.css';

function TeacherDetails() {
  const { teacherId } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    getTeacher(teacherId).then(response => {
      console.log(response)
      setTeacher(response.data);
    });

    getGradesByTeacher(teacherId).then(response => {
      setGrades(response.data);
    });
  }, [teacherId]);

  if (!teacher) {
    return <div>Loading...</div>;
  }

  // Calculate average grade
  const totalGrades = grades.length;
  const totalGradeSum = grades.reduce((sum, grade) => sum + grade.grade, 0);
  const averageGrade = totalGrades ? totalGradeSum / totalGrades : 0;

  return (
    <div className="teacher-details-container">
      <div className="teacher-info">
        <h2>Teacher Details</h2>
        <p>Name: {`${teacher.firstName} ${teacher.lastName}`}</p>
        <p>Subject: {teacher.subject}</p>
        <p>Average Grade: {averageGrade.toFixed(2)}</p>
      </div>

      <div className="grades-table-container">
        <h3>Grades</h3>
        {grades.length ? (
          <table className="grades-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Student Name</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {grades.map(grade => (
                <tr key={grade.id}>
                  <td>{grade.id}</td>
                  <td>
                    <Link to={`/students/${grade.studentId}`}>{grade.studentName}</Link>
                  </td>
                  <td>{grade.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No grades available for this teacher.</p>
        )}
      </div>
    </div>
  );
}

export default TeacherDetails;
