import { decrement, increment } from './redux/features/CounterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex shadow-lg p-16 bg-slate-200 rounded-md">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md bg-green-500 text-white text-xl font-semibold"
        >
          Increment
        </button>
        <h1 className="text-pink-400 text-4xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md bg-green-500 text-white text-xl font-semibold"
        >
          Decrement
        </button>
      </div>
      {count >= 5 && Array.from({ length: Math.floor(count / 5) }, (_, index) => (
        <div key={index} className="w-4 h-4 bg-blue-500 ml-2"></div>
      ))}
    </div>
  );
}

export default App;
