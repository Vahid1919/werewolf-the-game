import { useState } from "react";
// TODO: Tailwind classes are not working

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black text-red-600">Hello World</div>
    </>
  );
}

export default App;
