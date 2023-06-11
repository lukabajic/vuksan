import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getStudent, getGradesByStudent } from '../../services/DataService';
import './styles.css';

function StudentDetails() {
  const { studentId } = useParams();
  const [student, setStudent] = useState(null);
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    getStudent(studentId).then(response => {
      setStudent(response.data);
    });

    getGradesByStudent(studentId).then(response => {
      setGrades(response.data);
    });
  }, [studentId]);

  // Izracunavanje prosecne ocene
  const calculateAverageGrade = () => {
    if (grades.length === 0) return 0; // ako nema ocena prosek je 0

    // ako ima izracunaj
    // ukupan zbir ocena podeljeno sa brojem ocena
    const totalGrade = grades.reduce((sum, grade) => sum + grade.grade, 0);
    return (totalGrade / grades.length).toFixed(2);
  };

  return (
    <div className="student-details-container">
      <div className="student-info">
        <h2>Student Details</h2>
        {student && (
          <>
            <p>
              <strong>ID:</strong> {student.id}
            </p>
            <p>
              <strong>Full Name:</strong> {`${student.firstName} ${student.lastName}`}
            </p>
            <p>
              <strong>Birth Date:</strong> {student.birthDate}
            </p>
            <p>
              <strong>Average Grade:</strong> {calculateAverageGrade()}
            </p>
          </>
        )}
      </div>
      <div className="grades-table">
        <h2>Grades</h2>
        {grades.length ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Subject</th>
                <th>Grade</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {grades.map(grade => (
                <tr key={grade.id}>
                  <td>{grade.id}</td>
                  <td>{grade.subject}</td>
                  <td>{grade.grade}</td>
                  <td>
                    <Link to={`/teachers/${grade.teacherId}`}>See Teacher</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No grades available for this student.</p>
        )}
      </div>
    </div>
  );
}

export default StudentDetails;
