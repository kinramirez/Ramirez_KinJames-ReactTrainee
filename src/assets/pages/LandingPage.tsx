import { useNavigate } from "react-router-dom";
import Button from "../components/buttons";
function LandingPage() {
    const navigate = useNavigate();

    return (
        <div>
            <span>Task</span>
            <div className="btn" style={{display: 'flex',gap: '10px'}}>
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
                onClick={() => navigate('/UseUseEffect')}
              />
            </div>
        </div>
    );
}

export default LandingPage;