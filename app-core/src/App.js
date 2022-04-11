import React from "react";

// Import the micro-frontend
// can be lazy load to
import SomeFeature from 'some_feature_app/App';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        App Core
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SomeFeature />
      </header>
    </div>
  );
}

export default App;
