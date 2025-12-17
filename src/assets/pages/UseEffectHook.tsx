import BackButton from '../components/BackButton';
import { useNavigate} from 'react-router-dom';
import { useEffect, useState, } from 'react';
import Button from '../components/Buttons';

function UseEffect() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(`Counter value changed to: ${count}`);
    console.log(`The number is ${count % 2 === 0 ? 'even' : 'odd'}`);
  }, [count]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const isEven = count % 2 === 0;

  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-12 max-w-md w-full">
        <BackButton onClick={() => navigate('/')}/>
        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Counter with useEffect
        </h1>
        
        <div className="mb-8">
          <div 
            className={`text-8xl font-bold text-center py-8 rounded-lg transition-colors duration-300 ${
              isEven ? 'text-red-500 bg-red-50' : 'text-green-500 bg-green-50'
            }`}
          >
            {count}
          </div>
          <p className="text-center text-gray-600 mt-4">
            {isEven ? 'Even number' : 'Odd number'}
          </p>
        </div>

        <div className="flex gap-4">
          <Button
            text='Decrement'
            color='blue'
            textColor='white'
            onClick={decrement}
            className='rounded-lg flex-1 px-6 py-4 text-lg font-semibold'       
          />
          <Button
            text='Increment'
            color='blue'
            textColor='white'
            onClick={increment}
            className='rounded-lg flex-1 px-6 py-4 text-lg font-semibold'
          />
        </div>
      </div>
    </div>
  );
}

export default UseEffect;