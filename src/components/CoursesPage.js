import React, { useState, useEffect } from 'react';
import { getCourses } from "../api/courseApi";
import CourseList from './CourseList';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import {getData} from '../redux/action/index'

const CoursesPage = (props) => {
    const {courses} = props;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    },[]);
    
    return (
        <>
            <h2>Courses</h2>
            <Link class="btn btn-primary" to="/manage-course">
                Add Courses
            </Link><br/><br/>
            <CourseList courses={courses} />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        courses: state.course.courses,
    }
}

export default connect(mapStateToProps, null)(CoursesPage);