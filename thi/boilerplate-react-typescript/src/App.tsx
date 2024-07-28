import { useState } from 'react';
import './App.css';
import UseEffectLesson from './LESSONS/USE_EFFECT';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      {/* <button
        onClick={() => {
          setOpen(true);
        }}
      >
        OPEN MODAL
      </button>
      <Users setOpen={setOpen} />
      <ModalEdit open={open} setOpen={setOpen} /> */}
      <UseEffectLesson />
    </div>
  );
}

export default App;
