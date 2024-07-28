import './style.css';
type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const ModalEdit = ({ open, setOpen }: Props) => {
  //state input 1
  //state input 2
  //state input 3
  return (
    <div
      className={`modalWrapper ${open ? 'open' : 'close'}`}
      // => .modalWrapper .close {}
      style={{
        display: open ? 'block' : 'none',
      }}
    >
      <div className="modalContent">
        <button
          className="closeBtn"
          onClick={() => {
            setOpen(false);
          }}
        >
          X
        </button>
        input
        <input type="b" />
        {/* <button onClick={hand}>Edit</button> */}
        {/* <button onClick={handleEdit}>Edit</button> */}
      </div>
    </div>
  );
};

export default ModalEdit;
