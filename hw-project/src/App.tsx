import './App.css';
import Square from './Square/Square.tsx';

const createSquares = () => {
    const squares = [];
    for (let i = 0; i < 36; i++) {
        squares.push(<Square key={i} hasItem={false} clicked={false} />);
    }
    return squares;
}

const App = () => {
    return (
        <div className="App">
            {createSquares()}
        </div>
    );
};

export default App;
