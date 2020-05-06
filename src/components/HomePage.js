import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="jumbotron" >
            <h1>Courses</h1>
            <h6>React and React Router for ultra-responsive web apps</h6>
            <Link to="about" className="btn btn-primary" >About</Link>
        </div>
    );
};

export default HomePage;