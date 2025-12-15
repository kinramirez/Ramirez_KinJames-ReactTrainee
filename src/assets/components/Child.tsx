interface ChildProps {
  name: string;
  age: number;
  isStudent: boolean;
}

function Child({name, age, isStudent}: ChildProps) {
  return (
    <div className="child">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  )
}
export default Child;