import { useState } from 'react';
import './App.css';
import Users from './LESSONS/CRUD_USERS/Users';
import ModalEdit from './LESSONS/MODAL';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        OPEN MODAL
      </button>
      <Users setOpen={setOpen} />
      <ModalEdit open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
