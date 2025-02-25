import Square from './components/Square.tsx';

export default function App() {

  return (
    <>
      <h1 className="text-center">Battleships</h1>

      <div className="dashboard">
        <div className="board">
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  )
}