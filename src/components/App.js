import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './UI/Header';
import CoursesPage from "./CoursesPage";
import {Route , Switch, Redirect } from "react-router-dom";
import NotFoundPage from './NotFoundPage';
import ManageCoursePage from './ManageCoursePage';

const App = () => {
    
    return (
    <div className="container-fuild">
        <Header />
        {/* Chỉ có 1 route trong switch sẽ match */}
        <Switch>
            {/* exact là phải đúng với "/" thì mới ra homepage */}
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/courses" component={CoursesPage} />
            <Route path="/manage-course/:slug" component={ManageCoursePage} />
            <Route path="/manage-course" component={ManageCoursePage} />
            <Redirect from="/about-page" to="about" />
            <Route component={NotFoundPage}/>
        </Switch>
    </div> )
};

export default App;