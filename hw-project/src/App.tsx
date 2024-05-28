import './App.css';
import Square from './Square/Square.tsx';
import {useState} from "react";

interface SquareItem {
    key: number;
    hasItem: boolean;
    clicked: boolean;
}

const createItems = () => {
    const squares: SquareItem[] = [];
    for (let i = 0; i < 36; i++) {
        squares.push({ key: i, hasItem: false, clicked: false });
    }
    const randomIndex = Math.floor(Math.random() * squares.length);
    squares[randomIndex].hasItem = true;
    return squares;
}

const App  = () => {
    const [items, setItems] = useState<SquareItem[]>(createItems());

    const handleClick = (index: number) => {
        if (items[index].clicked) {
            alert('Нельзя повторно выбирать одну и ту же ячейку!');
            return;
        }

        setItems(prevState => {
            return prevState.map((item, i) => {
                if (i === index) {
                    return { ...item, clicked: true };
                } else {
                    return item;
                }
            });
        });
        console.log(items);
    };

    return (
        <div className="container">
            <div className="App">
                <div className="App">
                    {items.map((square: SquareItem, index) => (
                        <Square
                            key={square.key}
                            hasItem={square.hasItem}
                            clicked={square.clicked}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
                <button className='reset'>Reset</button>
            </div>
        </div>

    );
};

export default App;
