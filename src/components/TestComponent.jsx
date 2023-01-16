import { useState } from "react";

export default function TestComponent() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [finalData, setFinalData] = useState([]);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Please get your grip on:
  // MAPPING FUNCTION
  // ARRAY FUNCTIONS IN GENERAL
  // USESTATE HOOK
  // DESTRUCTURING - > THE MOST IMPORTANT ONE

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName && password) {
      setFinalData([...finalData, { userName, password }]);
    }
  };

  console.log(finalData);

  return (
    <div>
      <form>
        <label>
          Username: <input name="username" type="text" onChange={handleUserNameChange} />
        </label>
        <label>
          Password: <input name="password" type="text" onChange={handlePasswordChange} />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <hr />
      <ol>
        {finalData.map((v, i) => {
          return <li key={i}>{`${v.userName} has password: ${v.password}`}</li>;
        })}
      </ol>
    </div>
  );
}
