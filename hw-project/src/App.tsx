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
    console.log(squares);
    return squares;
}

const App: React.FC  = () => {
    const [items] = useState<SquareItem[]>(createItems());

    return (
        <div className="container">
            <div className="App">
                <div className="App">
                    {items.map((square: SquareItem) => (
                        <Square
                            key={square.key}
                            hasItem={square.hasItem}
                            clicked={square.clicked}
                        />
                    ))}
                </div>
                <button className='reset'>Reset</button>
            </div>
        </div>

    );
};

export default App;
