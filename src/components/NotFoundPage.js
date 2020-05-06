import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <h2>Không tìm thấy trang</h2>
            <p>
                <Link to='/'>Trở về Home</Link>
            </p>
        </div>
    );
};

export default NotFoundPage;