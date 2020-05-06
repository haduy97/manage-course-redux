import React from 'react';
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';
import {openDelModal} from '../redux/action/index'
import { useDispatch } from 'react-redux';
import DeleteModal from '../components/DeleteModal';
import { Button } from 'reactstrap';
import {selectCourse} from '../redux/action/index';

const CourseList = (props) => {
    const { courses } = props
    const dispatch = useDispatch();
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author ID</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((_course) => {
                    return (
                        <tr key={_course.id}>
                            <td>
                                <Link to={"/" + _course.slug}>{_course.title}</Link>
                            </td>
                            <td>{_course.authorId}</td>
                            <td>{_course.category}</td>
                            <td><Button className="btn btn-danger" onClick={() => {dispatch(openDelModal(true)); dispatch(selectCourse(_course.id)) }} >Delete</Button></td>
                        </tr>
                    )
                })}
            </tbody>
            <DeleteModal />
        </table>
    );
};
// Proptype chỉ kiểm tra cho dev
CourseList.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            authorId: PropTypes.number.isRequired,
            category: PropTypes.string.isRequired
        })
    ).isRequired
}

export default CourseList;