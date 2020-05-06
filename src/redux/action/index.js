import {GET_COURSE, INPUT_COURSE, ADD_COURSE, DEL_MODAL, DEL_COURSE, SELECT_COURSE} from '../constants/action-types'
import { getCourses } from "../../api/courseApi";
import {deleteCourse}  from "../../api/courseApi";

export const getData = () => (dispatch) => {
    const data = getCourses().then(courses => {
        dispatch({
            type: GET_COURSE,
            payload: courses,
            meta: { resource: "course" }
        })
    })
    return data;
}

export const inputCourseInfo = (payload) => (dispatch) => {
    dispatch({
        type: INPUT_COURSE,
        payload,
        meta: { resource: "course" }
    })
}

export const addCourse = (payload) => (dispatch) => {
    dispatch({
        type: ADD_COURSE,
        payload,
        meta: { resource: "course" }
    })
}

export const openDelModal = (payload) => (dispatch) => {
    dispatch({
        type: DEL_MODAL,
        payload,
        meta: { resource: "course" }
    })
}
export const deleteData = (payload) => (dispatch) => {
    dispatch({
        type: DEL_COURSE,
        payload,
        meta: { resource: "course" }
    })
}
export const selectCourse = (payload) => (dispatch) => {
    dispatch({
        type: SELECT_COURSE,
        payload,
        meta: { resource: "course" }
    })
}