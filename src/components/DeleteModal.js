import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {openDelModal , deleteData} from '../redux/action/index'

const DeleteModal = (props) => {
    const { openDel,selCourse } = props
    const dispatch = useDispatch();
    return (
        <div >
            <Modal isOpen={openDel} onClosed={() => dispatch(openDelModal(false))} >
                <ModalHeader>Warning</ModalHeader>
                <ModalBody>
                    Are you sure want to delete this course ??
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => dispatch(deleteData(selCourse))} >Yes</Button>{' '}
                    <Button color="danger" onClick={() => dispatch(openDelModal(false))} >Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        openDel: state.course.openDel,
        selCourse: state.course.selCourse
    }
}
export default connect(mapStateToProps, null)(DeleteModal);