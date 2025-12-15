import Child from "../components/Child";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
function UseProps() {
    const navigate = useNavigate();
    return (
        
        <div>
            <div className="relative min-h-screen p-8">
                <BackButton onClick={() => navigate('/')}/>
                <span>Use Props Component</span>
                <Child name="Alice" age={20} isStudent={true} />
            </div>
        </div>
  )
}

export default UseProps;