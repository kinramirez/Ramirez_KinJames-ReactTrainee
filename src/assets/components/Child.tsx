interface ChildProps {
  fullName: string;
  department: string;
  employeeId: number;
  yearsExperience: number;
  isFullTime: boolean;
  position: string;
}

function Child({fullName, department, employeeId, yearsExperience, isFullTime, position}: ChildProps) {
  return (
    <div className="w-96 mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
        <h2 className="text-2xl font-bold text-white">{fullName}</h2>
        <p className="text-blue-100 text-sm mt-1">{position}</p>
      </div>

      <div className="p-6 space-y-4">

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-gray-600 font-medium">Department:</span>
          <span className="text-gray-900 font-semibold">{department}</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-gray-600 font-medium">Employee ID:</span>
          <span className="text-gray-900 font-semibold">{employeeId}</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-gray-600 font-medium">Years of Experience:</span>
          <span className="text-gray-900 font-semibold">{yearsExperience} years</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-gray-600 font-medium">Employment:</span>
          <span 
            className="font-bold text-lg"
            style={{ color: isFullTime ? 'green' : 'red' }}
          >
            {isFullTime ? 'Full-Time' : 'Part-Time'}
          </span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-gray-600 font-medium">Position:</span>
          <span className="text-gray-900 font-semibold">{position}</span>
        </div>
      </div>
    </div>
  )
}

export default Child;