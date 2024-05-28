import React from 'react';
import '../App.css';

interface Props {
    clicked: boolean,
    hasItem: boolean,
}

const Square: React.FC<Props> = ({hasItem, clicked}) => {
    const squareClasses = clicked ? 'square-no' : 'square';
    const itemClasses = hasItem ? 'item' : '';

    return (
        <div className={squareClasses}>
            <div className={itemClasses}></div>
        </div>
    );
};

export default Square;

