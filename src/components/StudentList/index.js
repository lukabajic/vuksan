import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getListOfStudents } from '../../services/DataService';
import './styles.css';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getListOfStudents().then(response => {
      setStudents(response.data);
    });
  }, []);

  return (
    <div className="student-list-container">
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birth Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{`${student.firstName} ${student.lastName}`}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.birthDate}</td>
              <td>
                <Link to={`/students/${student.id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
