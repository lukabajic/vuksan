import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getListOfTeachers } from '../../services/DataService';
import './styles.css';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    getListOfTeachers().then(response => {
      setTeachers(response.data);
    });
  }, []);

  return (
    <div className="teacher-list-container">
      <table className="teacher-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Subject</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birth Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(teacher => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{`${teacher.firstName} ${teacher.lastName}`}</td>
              <td>{teacher.subject}</td>
              <td>{teacher.firstName}</td>
              <td>{teacher.lastName}</td>
              <td>{teacher.birthDate}</td>
              <td>
                <Link to={`/teachers/${teacher.id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherList;
