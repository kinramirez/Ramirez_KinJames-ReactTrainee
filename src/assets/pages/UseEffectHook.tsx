import { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import { useNavigate } from 'react-router-dom';

function UseEffect() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <BackButton onClick={() => navigate('/')} />
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Window Resize Listener
        </h1>
        
        <p className="text-gray-600 mb-8 text-center">
          Try resizing your browser window!
        </p>

        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-sm text-gray-600 mb-2">Width</div>
            <div className="text-4xl font-bold text-blue-600">
              {windowWidth}<span className="text-xl">px</span>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-sm text-gray-600 mb-2">Height</div>
            <div className="text-4xl font-bold text-purple-600">
              {windowHeight}<span className="text-xl">px</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseEffect;