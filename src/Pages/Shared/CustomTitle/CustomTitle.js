import React from 'react';
import { Helmet } from 'react-helmet-async';
import './CustomTitle.css'

const CustomTitle = ({title, children}) => {
    return (
        <div>
            <Helmet>
                <title>{title} - Fruit Jet</title>
            </Helmet>
            {children}
        </div>
    );
};

export default CustomTitle;