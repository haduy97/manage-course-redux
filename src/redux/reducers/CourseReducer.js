import { GET_COURSE, INPUT_COURSE,ADD_COURSE, DEL_COURSE, DEL_MODAL, SELECT_COURSE } from '../constants/action-types'
import * as courseApi from "../../api/courseApi";
const initState = {
    courses: [],
    inputCourse: {
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    },
    openDel: false,
    selCourse: null
}

const CourseReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_COURSE: {
            return {
                ...state,
                courses: [...action.payload]
            }
        }
        // add course
        case INPUT_COURSE: {
            return {
                ...state, inputCourse: action.payload
            }
        }
        case ADD_COURSE : {
            const courses = [...state.courses, courseApi.saveCourse(action.payload)]
            return {
                ...state, courses
            }
         }
         // delete course
         case DEL_MODAL: {
             return {
                 ...state, openDel: action.payload
             }
         }
         case DEL_COURSE: {
             const courses = state.courses.filter((_course) => _course.id !== courseApi.deleteCourse(action.payload))
             return {
                 ...state, courses
             }
         }
         case SELECT_COURSE: {
             return {
                 ...state, selCourse: action.payload
             }
         }
        default:
            return state;
    }
};
export default CourseReducer;