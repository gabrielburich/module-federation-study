import React from "react";

function App() {
  return (
    <div>
        Some feature!! <br />
        {sessionStorage.getItem('key')}
    </div>
  );
}

export default App;
