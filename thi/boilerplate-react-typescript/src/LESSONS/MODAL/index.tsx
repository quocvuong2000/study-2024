import './style.css';
type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  userName?: string;
  handleEdit?: () => void;
};

const ModalEdit = ({ open, setOpen, handleEdit }: Props) => {
  //state input 1
  //state input 2
  //state input 3
  return (
    <div className={`modalWrapper ${open ? '' : 'close'}`}>
      <div className="modalContent">
        <button className="closeBtn" onClick={() => setOpen(!open)}>
          X
        </button>
        input
        <input type="b" />
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
};

export default ModalEdit;
