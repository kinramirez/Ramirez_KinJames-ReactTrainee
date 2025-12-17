import Child from "../components/Child";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
function UseProps() {
    const navigate = useNavigate();

    const employee1 = {
        fullName: "Kin James Ramirez",
        department: "IT",
        employeeId: 12345,
        yearsExperience: 3.6,
        isFullTime: false,
        position: "Developer"
    }
    const employee2 = {
        fullName: "Maria Santos",
        department: "HR",
        employeeId: 67890,
        yearsExperience: 5,
        isFullTime: true,
        position: "Manager"
    };
    const employee3 = {
        fullName: "Shane Sibal",
        department: "IT",
        employeeId: 11223,
        yearsExperience: 2,
        isFullTime: true,
        position: "Analyst"
    };
    return (
        
        <div>
            <div className="relative min-h-screen p-8">
                <BackButton onClick={() => navigate('/')}/>
                <div>
                    <span className="text-xl font-bold mb-10 block">New Employee</span>
                    <div className="flex flex-nowrap gap-4">
                        <Child {...employee1} />
                        <Child {...employee2} />
                        <Child {...employee3} />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default UseProps;