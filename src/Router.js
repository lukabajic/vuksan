import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TeacherList from './components/TeacherList';
import StudentList from './components/StudentList';
import Dashboard from './components/Dashboard';
import TeacherDetails from './components/TeacherDetails';
import StudentDetails from './components/StudentDetails';
import ErrorPage from './components/ErrorPage';

// aplikacija ima 6 razlicitih stranica
function AppRouter() {
  return (
    <Switch>
      {/* path znaci: */}
      {/* kada je sajt/aplikacija na tom URL-u */}
      {/* prikaze se ta komponenta/stranica */}
      
      {/* na home strani je samo ona poruka */}
      <Route path="/" exact component={Dashboard} />
      {/* ovo je lista nastavnika */}
      <Route path="/teachers" exact component={TeacherList} />
      {/* ovo je lista studenata */}
      <Route path="/students" exact component={StudentList} />
      {/* ovo su detalji kad se klikne na nastavnika */}
      <Route path="/teachers/:teacherId" component={TeacherDetails} />
      {/* ovo su detalji kad se klikne na studenta */}
      <Route path="/students/:studentId" component={StudentDetails} />
      {/* error stranica kada je los link */}
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default AppRouter;
