import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TeacherList from './components/TeacherList';
import StudentList from './components/StudentList';
import Dashboard from './components/Dashboard';
import TeacherDetails from './components/TeacherDetails';
import StudentDetails from './components/StudentDetails';
import ErrorPage from './components/ErrorPage';

function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/teachers" exact component={TeacherList} />
      <Route path="/students" exact component={StudentList} />
      <Route path="/teachers/:teacherId" component={TeacherDetails} />
      <Route path="/students/:studentId" component={StudentDetails} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default AppRouter;
