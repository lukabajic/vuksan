const teachers = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1990-01-01',
    subject: 'Mathematics',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    birthDate: '1985-05-10',
    subject: 'English',
  },
  {
    id: 3,
    firstName: 'David',
    lastName: 'Johnson',
    birthDate: '1988-09-15',
    subject: 'Science',
  },
  {
    id: 4,
    firstName: 'Sarah',
    lastName: 'Wilson',
    birthDate: '1992-03-25',
    subject: 'History',
  },
  {
    id: 5,
    firstName: 'Michael',
    lastName: 'Brown',
    birthDate: '1987-07-18',
    subject: 'Geography',
  },
  {
    id: 6,
    firstName: 'Emily',
    lastName: 'Jones',
    birthDate: '1991-11-29',
    subject: 'Mathematics',
  },
  {
    id: 7,
    firstName: 'Andrew',
    lastName: 'Davis',
    birthDate: '1984-12-08',
    subject: 'English',
  },
  {
    id: 8,
    firstName: 'Olivia',
    lastName: 'Thomas',
    birthDate: '1995-02-14',
    subject: 'Science',
  },
  {
    id: 9,
    firstName: 'Daniel',
    lastName: 'Wilson',
    birthDate: '1989-06-07',
    subject: 'History',
  },
  {
    id: 10,
    firstName: 'Sophia',
    lastName: 'Anderson',
    birthDate: '1993-04-16',
    subject: 'Geography',
  },
]

export function getListOfTeachers() {
  // return axios.get('/teacher/list')
  //   .then(response => response.data)
  //   .catch(error => {
  //     console.error('Error fetching list of teachers:', error);
  //     return { data: [] };
  //   });

  return Promise.resolve({
    data: teachers
  });
}

const students = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1995-01-01',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    birthDate: '1996-02-02',
  },
  {
    id: 3,
    firstName: 'Michael',
    lastName: 'Johnson',
    birthDate: '1997-03-03',
  },
  {
    id: 4,
    firstName: 'Emily',
    lastName: 'Davis',
    birthDate: '1998-04-04',
  },
  {
    id: 5,
    firstName: 'Daniel',
    lastName: 'Wilson',
    birthDate: '1999-05-05',
  },
  {
    id: 6,
    firstName: 'Olivia',
    lastName: 'Brown',
    birthDate: '2000-06-06',
  },
  {
    id: 7,
    firstName: 'David',
    lastName: 'Miller',
    birthDate: '2001-07-07',
  },
  {
    id: 8,
    firstName: 'Sophia',
    lastName: 'Taylor',
    birthDate: '2002-08-08',
  },
  {
    id: 9,
    firstName: 'William',
    lastName: 'Anderson',
    birthDate: '2003-09-09',
  },
  {
    id: 10,
    firstName: 'Isabella',
    lastName: 'Clark',
    birthDate: '2004-10-10',
  },
  {
    id: 11,
    firstName: 'Ethan',
    lastName: 'Thomas',
    birthDate: '2005-11-11',
  },
  {
    id: 12,
    firstName: 'Mia',
    lastName: 'Moore',
    birthDate: '2006-12-12',
  },
  {
    id: 13,
    firstName: 'James',
    lastName: 'Jackson',
    birthDate: '2007-01-13',
  },
  {
    id: 14,
    firstName: 'Charlotte',
    lastName: 'Harris',
    birthDate: '2008-02-14',
  },
]

export function getListOfStudents() {
  // return axios.get('/student/list')
  // .then(response => response.data)
  // .catch(error => {
  //   console.error('Error fetching list of students:', error);
  //   return { data: [] };
  // });



  return Promise.resolve({
    data: students
  });
}

const grades = [
  {
    "id": 1,
    "studentId": 1,
    "subject": "Mathematics",
    "teacherId": 1,
    "grade": 87.5,
    "studentName": "John Doe"
  },
  {
    "id": 2,
    "studentId": 1,
    "subject": "English",
    "teacherId": 2,
    "grade": 92.3,
    "studentName": "John Doe"
  },
  {
    "id": 3,
    "studentId": 1,
    "subject": "Science",
    "teacherId": 3,
    "grade": 78.9,
    "studentName": "John Doe"
  },
  {
    "id": 4,
    "studentId": 1,
    "subject": "History",
    "teacherId": 4,
    "grade": 81.2,
    "studentName": "John Doe"
  },
  {
    "id": 5,
    "studentId": 1,
    "subject": "Geography",
    "teacherId": 5,
    "grade": 89.6,
    "studentName": "John Doe"
  },
  {
    "id": 6,
    "studentId": 2,
    "subject": "Mathematics",
    "teacherId": 1,
    "grade": 95.8,
    "studentName": "Jane Smith"
  },
  {
    "id": 7,
    "studentId": 2,
    "subject": "English",
    "teacherId": 2,
    "grade": 88.4,
    "studentName": "Jane Smith"
  },
  {
    "id": 13,
    "studentId": 14,
    "subject": "Science",
    "teacherId": 8,
    "grade": 79.1,
    "studentName": "Charlotte Harris"
  },
  {
    "id": 14,
    "studentId": 14,
    "subject": "History",
    "teacherId": 9,
    "grade": 85.6,
    "studentName": "Charlotte Harris"
  },
  {
    "id": 15,
    "studentId": 14,
    "subject": "Geography",
    "teacherId": 10,
    "grade": 91.7,
    "studentName": "Charlotte Harris"
  },
  {
    "id": 16,
    "studentId": 2,
    "subject": "Mathematics",
    "teacherId": 1,
    "grade": 90.2,
    "studentName": "Jane Smith"
  },
  {
    "id": 17,
    "studentId": 2,
    "subject": "English",
    "teacherId": 2,
    "grade": 86.5,
    "studentName": "Jane Smith"
  },
  {
    "id": 18,
    "studentId": 2,
    "subject": "Science",
    "teacherId": 3,
    "grade": 82.9,
    "studentName": "Jane Smith"
  },
  {
    "id": 19,
    "studentId": 2,
    "subject": "History",
    "teacherId": 4,
    "grade": 88.7,
    "studentName": "Jane Smith"
  },
  {
    "id": 20,
    "studentId": 2,
    "subject": "Geography",
    "teacherId": 5,
    "grade": 91.1,
    "studentName": "Jane Smith"
  },
  {
    "id": 65,
    "studentId": 14,
    "subject": "Mathematics",
    "teacherId": 6,
    "grade": 93.8,
    "studentName": "Charlotte Harris"
  },
  {
    "id": 66,
    "studentId": 14,
    "subject": "English",
    "teacherId": 7,
    "grade": 85.2,
    "studentName": "Charlotte Harris"
  },
  {
    "id": 67,
    "studentId": 14,
    "subject": "Science",
    "teacherId": 8,
    "grade": 78.3,
    "studentName": "Charlotte Harris"
  },
  {
    "id": 68,
    "studentId": 14,
    "subject": "History",
    "teacherId": 9,
    "grade": 87.9,
    "studentName": "Charlotte Harris"
  },
  {
    "id": 69,
    "studentId": 14,
    "subject": "Geography",
    "teacherId": 10,
    "grade": 92.5,
    "studentName": "Charlotte Harris"
  },
  {
    "id": 70,
    "studentId": 3,
    "subject": "Mathematics",
    "teacherId": 1,
    "grade": 84.6,
    "studentName": "Michael Johnson"
  },
  {
    "id": 71,
    "studentId": 3,
    "subject": "English",
    "teacherId": 2,
    "grade": 89.2,
    "studentName": "Michael Johnson"
  },
  {
    "id": 72,
    "studentId": 3,
    "subject": "Science",
    "teacherId": 3,
    "grade": 76.8,
    "studentName": "Michael Johnson"
  },
  {
    "id": 73,
    "studentId": 3,
    "subject": "History",
    "teacherId": 4,
    "grade": 90.3,
    "studentName": "Michael Johnson"
  },
  {
    "id": 74,
    "studentId": 3,
    "subject": "Geography",
    "teacherId": 5,
    "grade": 83.1,
    "studentName": "Michael Johnson"
  },
  {
    "id": 119,
    "studentId": 13,
    "subject": "Mathematics",
    "teacherId": 6,
    "grade": 91.4,
    "studentName": "James Jackson"
  },
  {
    "id": 120,
    "studentId": 13,
    "subject": "English",
    "teacherId": 7,
    "grade": 82.7,
    "studentName": "James Jackson"
  },
  {
    "id": 121,
    "studentId": 13,
    "subject": "Science",
    "teacherId": 8,
    "grade": 88.9,
    "studentName": "James Jackson"
  },
  {
    "id": 122,
    "studentId": 13,
    "subject": "History",
    "teacherId": 9,
    "grade": 85.2,
    "studentName": "James Jackson"
  },
  {
    "id": 123,
    "studentId": 13,
    "subject": "Geography",
    "teacherId": 10,
    "grade": 93.1,
    "studentName": "James Jackson"
  },
  {
    "id": 124,
    "studentId": 4,
    "subject": "Mathematics",
    "teacherId": 1,
    "grade": 89.5,
    "studentName": "Emily Davis"
  },
  {
    "id": 125,
    "studentId": 4,
    "subject": "English",
    "teacherId": 2,
    "grade": 83.2,
    "studentName": "Emily Davis"
  },
  {
    "id": 126,
    "studentId": 4,
    "subject": "Science",
    "teacherId": 3,
    "grade": 87.8,
    "studentName": "Emily Davis"
  },
  {
    "id": 127,
    "studentId": 4,
    "subject": "History",
    "teacherId": 4,
    "grade": 91.7,
    "studentName": "Emily Davis"
  },
  {
    "id": 128,
    "studentId": 4,
    "subject": "Geography",
    "teacherId": 5,
    "grade": 79.4,
    "studentName": "Emily Davis"
  },
  {
    "id": 223,
    "studentId": 14,
    "subject": "Mathematics",
    "teacherId": 6,
    "grade": 88.6,
    "studentName": "Charlotte Harris"
  },
  {
    "id": 224,
    "studentId": 14,
    "subject": "English",
    "teacherId": 7,
    "grade": 86.9,
    "studentName": "Charlotte Harris"
  },
  {
    "id": 225,
    "studentId": 14,
    "subject": "Science",
    "teacherId": 8,
    "grade": 79.8,
    "studentName": "Charlotte Harris"
  },
  {
    "id": 226,
    "studentId": 14,
    "subject": "History",
    "teacherId": 9,
    "grade": 92.3,
    "studentName": "Charlotte Harris"
  },
  {
    "id": 227,
    "studentId": 14,
    "subject": "Geography",
    "teacherId": 10,
    "grade": 85.1,
    "studentName": "Charlotte Harris"
  },
  {
    "id": 324,
    "studentId": 5,
    "subject": "Mathematics",
    "teacherId": 1,
    "grade": 86.4,
    "studentName": "Daniel Wilson"
  },
  {
    "id": 325,
    "studentId": 5,
    "subject": "English",
    "teacherId": 2,
    "grade": 91.2,
    "studentName": "Daniel Wilson"
  },
  {
    "id": 326,
    "studentId": 5,
    "subject": "Science",
    "teacherId": 3,
    "grade": 78.9,
    "studentName": "Daniel Wilson"
  },
  {
    "id": 327,
    "studentId": 5,
    "subject": "History",
    "teacherId": 4,
    "grade": 87.1,
    "studentName": "Daniel Wilson"
  },
  {
    "id": 328,
    "studentId": 5,
    "subject": "Geography",
    "teacherId": 5,
    "grade": 83.6,
    "studentName": "Daniel Wilson"
  },
  {
    "id": 423,
    "studentId": 12,
    "subject": "Mathematics",
    "teacherId": 6,
    "grade": 92.1,
    "studentName": "Mia Moore"
  },
  {
    "id": 424,
    "studentId": 12,
    "subject": "English",
    "teacherId": 7,
    "grade": 85.3,
    "studentName": "Mia Moore"
  },
  {
    "id": 425,
    "studentId": 12,
    "subject": "Science",
    "teacherId": 8,
    "grade": 89.7,
    "studentName": "Mia Moore"
  },
  {
    "id": 426,
    "studentId": 12,
    "subject": "History",
    "teacherId": 9,
    "grade": 82.8,
    "studentName": "Mia Moore"
  },
  {
    "id": 427,
    "studentId": 12,
    "subject": "Geography",
    "teacherId": 10,
    "grade": 93.4,
    "studentName": "Mia Moore"
  }
]

export function getGradesByTeacher(teacherId) {
  // replace this with actual API call when connected to backend
  // return axios.get(`localhost:8080/grades/teacher/${teacherId}`)

  const gradesByTeacher = grades.filter(grade => grade.teacherId === Number(teacherId));
  return Promise.resolve({
    data: gradesByTeacher,
  });
}

export function getGradesByStudent(studentId) {
  // replace this with actual API call when connected to backend
  // return axios.get(`localhost:8080/grades/student/${studentId}`)

  const gradesByStudent = grades.filter(grade => grade.studentId === Number(studentId));
  return Promise.resolve({
    data: gradesByStudent,
  });
}

export function getTeacher(teacherId) {
  console.log(teachers)
  console.log(teacherId)
  const teacher = teachers.find(teacher => teacher.id === Number(teacherId));
  console.log(teacher)
  return Promise.resolve({
    data: teacher,
  });
}

export function getStudent(studentId) {
  const student = students.find(student => student.id === Number(studentId));
  return Promise.resolve({
    data: student,
  });
}


