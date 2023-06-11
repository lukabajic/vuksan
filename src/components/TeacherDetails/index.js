import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTeacher, getGradesByTeacher } from '../../services/DataService';
import './styles.css';

function TeacherDetails() {
  // ovde ova komponenta
  // uzima ID iz URL-a
  // onda po tom ID-ju dohvati podatke za profesora
  const { teacherId } = useParams();
  // u pocetku je prazno
  const [teacher, setTeacher] = useState(null);
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    // onda se zove api prvo za podatke
    getTeacher(teacherId).then(response => {
      setTeacher(response.data);
    });

    // pa se zove api za sve ocene
    // koje je taj profesor dao
    getGradesByTeacher(teacherId).then(response => {
      setGrades(response.data);
    });
  }, [teacherId]);

  if (!teacher) {
    return <div>Loading...</div>;
  }

  // Izracunavanje prosecne ocene
  const totalGrades = grades.length;
  const totalGradeSum = grades.reduce((sum, grade) => sum + grade.grade, 0);

  // ako ima izracunaj
  // ukupan zbir ocena podeljeno sa brojem ocena
  let averageGrade = 0;

  if (totalGrades > 0) {
    averageGrade = totalGradeSum / totalGrades
  }


  return (
    <div className="teacher-details-container">
      {/* prikaz podataka */}
      <div className="teacher-info">
        <h2>Teacher Details</h2>
        <p>Name: {`${teacher.firstName} ${teacher.lastName}`}</p>
        <p>Subject: {teacher.subject}</p>
        <p>Average Grade: {averageGrade.toFixed(2)}</p>
      </div>

      {/* tabela ocena */}
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
