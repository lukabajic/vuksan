import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getListOfTeachers } from '../../services/DataService';
import './styles.css';

function TeacherList() {
  // spisak nastavnika 
  // u pocetku je prazan
  const [teachers, setTeachers] = useState([]);

  // onda kad se otvori stranica
  // on zove API i popuni taj spisak
  useEffect(() => {
    getListOfTeachers().then(response => {
      setTeachers(response.data);
    });
  }, []);

  // htmle koji prikazuje tabelu sa spiskom
  // u return komponente uvek ide html koji hoces da prikazes
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
          {/* ovo je react nacin */}
          {/* ide loop po array-u nastavnika */}
          {/* i za svakog nastavnika se prikaze */}
          {/* jedan red u tabeli */}
          {teachers.map(teacher => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{`${teacher.firstName} ${teacher.lastName}`}</td>
              <td>{teacher.subject}</td>
              <td>{teacher.firstName}</td>
              <td>{teacher.lastName}</td>
              <td>{teacher.birthDate}</td>
              <td>
                {/* ovde je dodat dinamcki link */}
                {/* koji salje na stranicu detalja nastavnika */}
                {/* u url stavlja ID tog nastavnika */}
                {/* onda ce se prikazati TeacherDetails komponenta */}
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
