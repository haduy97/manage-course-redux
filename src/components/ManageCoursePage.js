import React, { useState } from 'react';
import { Prompt, Redirect } from 'react-router-dom';
import CourseForm from './CourseForm';
import * as courseApi from "../api/courseApi";
import {inputCourseInfo , addCourse} from '../redux/action/index'
import { useDispatch, connect } from 'react-redux';

const ManageCoursePage = (props) => {
    const {inputCourse} = props
    const dispatch = useDispatch();

    const _onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(inputCourseInfo({...inputCourse, [name]:value}))
    }

    return (
        <>
            <h2>Manage Course</h2>
            {/* <Prompt when={true} message="Bạn có muốn thoát ?" /> */}
            <CourseForm
                inputCourse={inputCourse}
                _onChange={_onChange}
                _onAdd={() => dispatch(addCourse(inputCourse))}
            />
        </>
    );
};
const mapStateToProps = (state) => {
    return {
        inputCourse: state.course.inputCourse
    }
}

export default connect(mapStateToProps, null)(ManageCoursePage);