import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons";
function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center">
            <span className="text-xl font-bold my-10 block">Task</span>
            <div className="flex gap-4 justify-center mt-4">
              <Button
                text="1"
                color="blue"
                textColor='white'
                onClick={() => navigate('/UseProps')}
              />
              <Button
                text="2"
                color="red"
                textColor='white'
                onClick={() => navigate('/UseState')}
              />
              <Button
                text="3"
                color="green"
                textColor='white'
                onClick={() => navigate('/UseEffect')}
              />
            </div>
        </div>
    );
}

export default LandingPage;