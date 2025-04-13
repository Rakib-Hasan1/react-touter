import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-10 hover: hover:text-gray-400'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;