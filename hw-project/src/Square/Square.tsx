import React from 'react';
import '../App.css';

interface Props {
    clicked: boolean,
    hasItem: boolean,
    onClick: React.MouseEventHandler,
}

const Square: React.FC<Props> = ({hasItem, clicked, onClick}) => {
    const squareClasses = clicked ? 'square-no' : 'square';
    const itemClasses = hasItem ? 'item' : '';

    return (
        <div className={squareClasses} onClick={onClick}>
            <div className={itemClasses}></div>
        </div>
    );
};

export default Square;

