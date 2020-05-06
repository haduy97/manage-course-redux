import React from 'react';


const CourseForm = (props) => {
    const {inputCourse, _onChange, _onAdd} = props
    return (
        <form>
            <div className="form-group">
                <label>Title</label>
                <div className="field">
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        onChange={_onChange}
                        value={inputCourse.title}
                    />
                </div>
            </div>

            <div className="form-group">
                <label>Author</label>
                <div className="field">
                    <select
                        name="authorId"
                        value={inputCourse.authorId}
                        onChange={_onChange}
                        className="form-control"
                    >
                        <option value="" />
                        <option value="1">Hà Duy</option>
                        <option value="2">Ngọc Ngạn</option>
                        <option value="3">Quang Là</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label>Category</label>
                <div className="field">
                    <input
                        type="text"
                        name="category"
                        className="form-control"
                        onChange={_onChange}
                        value={inputCourse.category}
                    />
                </div>
            </div>

            <button type="submit" className="btn btn-primary" onClick={_onAdd} >Save</button>
        </form>
    );
};

export default CourseForm;