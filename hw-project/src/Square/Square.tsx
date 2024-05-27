import React from 'react';
import '../App.css';

interface Props {
    clicked: boolean,
    hasItem: boolean,
}

const Square: React.FC<Props> = ({hasItem, clicked}) => {
    const squareNoClasses = 'square-no';
    const squareClasses = 'square';
    const hasItemNoClasses = 'item-no';
    const hasItemClasses = 'item';
    return (
        <div className={clicked ? squareNoClasses : squareClasses}>
            <div className={hasItem ? hasItemNoClasses : hasItemClasses}></div>
        </div>
    );
};

export default Square;

