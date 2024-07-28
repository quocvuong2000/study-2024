import { useState } from 'react';
import userList from './data';

type User = {
  id: string;
  name: string;
  username: string;
  email: string;
};

// CRUD => CREATE, READ, UPDATE, DELETE
const SearchUsers = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const [users, setUsers] = useState<User[]>(userList);
  const [inputName, setInputName] = useState('');
  const [searchInput, setSearchInput] = useState('');
  // Reason why we should use key when rendering list
  // => https://medium.com/geekculture/reactjs-why-index-as-a-key-is-an-anti-pattern-4b9dc6ef0067

  const deleteUser = (id: string) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };


  const searchUser = (value: string) => {
    // const textSearch = 'leannE graham';
    // DATA ban đầu
    let arr = userList.filter((user) => {
      //"Leanne Graham".toLowercase().includes('lea'.toLowercase());
      const isExistSearchText = user.name
        .toLowerCase()
        .includes(value.toLowerCase());
      // FILTERS NÓ LẤY CÁI GÌ SAU KHI ĐÃ FILTER [true,false,true,true]
      return isExistSearchText;
    });
    setUsers(arr);
  };
  return (
    <div>
      <div className="w-full my-4 max-w-sm mx-auto">
        <div className="mt-4">SEARCH TEN USER</div>
        <input
          type="text"
          className="border border-blue-600 w-full rounded-xl px-4"
          onChange={(e) => {
            const value = e.target.value;
            // setSearchInput(value);
            searchUser(value);
          }}
          // value={searchInput}
        />
        <button
          className="py-1 px-4 max-h-9 bg-blue-800 text-white  rounded-xl font-semibold mt-5"
          // onClick={searchUser}
        >
          Search
        </button>
      </div>
      {users?.map((user, idx) => {
        return (
          <div key={idx} className="max-w-md mx-auto border-b-2 pb-2 mb-2">
            <div className="flex justify-between mb-4">
              <div className="flex flex-col items-start">
                <span>{user?.name}</span>
                <span>{user?.email}</span>
              </div>
              <div className="flex gap-2">
                <button className="py-1 max-h-9 px-4 bg-red-500 text-white  rounded-xl font-semibold">
                  Xoá
                </button>
                <button
                  className="py-1 px-4 max-h-9 bg-blue-800 text-white  rounded-xl font-semibold"
                  onClick={() => setOpen(true)}
                >
                  Edit Name
                </button>
              </div>
            </div>
            {/* {user?.id === selectedId ? <>input</> : <></>} */}
          </div>
        );
      })}
    </div>
  );
};

export default SearchUsers;
