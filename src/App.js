import { useState, useEffect } from "react";

function App() {
  const [counter, setVaule] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setVaule((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time");
  useEffect(() => {
    console.log("CALL THE API....");
  }, []);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
