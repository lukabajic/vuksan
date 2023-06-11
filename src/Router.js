import React from 'react';
import { Route } from 'react-router-dom';
import TeacherList from './components/TeacherList';
import StudentList from './components/StudentList';
import Dashboard from './components/Dashboard';
import TeacherDetails from './components/TeacherDetails';
import StudentDetails from './components/StudentDetails';

function AppRouter() {
  return (
    <React.Fragment>
      <Route path="/" exact component={Dashboard} />
      <Route path="/teachers" exact component={TeacherList} />
      <Route path="/students" exact component={StudentList} />
      <Route path="/teachers/:teacherId" component={TeacherDetails} />
      <Route path="/students/:studentId" component={StudentDetails} />
    </React.Fragment>
  );
}

export default AppRouter;
