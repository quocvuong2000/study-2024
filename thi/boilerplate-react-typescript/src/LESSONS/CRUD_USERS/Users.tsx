import { useState } from "react";
import userList from "./data";

type User = {
  id: string;
  name: string;
  username: string;
  email: string;
};

// CRUD => CREATE, READ, UPDATE, DELETE
const Users = () => {
  const [users, setUsers] = useState<User[]>(userList);
  const [inputName, setInputName] = useState("");

  // Reason why we should use key when rendering list
  // => https://medium.com/geekculture/reactjs-why-index-as-a-key-is-an-anti-pattern-4b9dc6ef0067

  const deleteUser = (id: string) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };

  const addUsers = () => {
    if (!inputName) return;

    const newUserObject: User = {
      id: new Date().toISOString(),
      name: inputName,
      username: "",
      email: "",
    };
    const newUserList = [...users, newUserObject];
    setUsers(newUserList);
    setInputName("");
  };


  // 1. Lập 1 cái state lưu selected id
  // 2. sửa title, button, và thêm nút huỷ
  // 3. bấm nút huy => selected id rỗng => input trở về lúc thêm
  // 4. else => có id, có inputName => find cái object dựa trên id
  // 5. sửa lại name của object đó thành newObject
  // 6. gắn lại vô mảng
  // 7. set lại state
  const editName = () => {};

  return (
    <div>
      <div className="w-full my-4 max-w-sm mx-auto">
        <div>Nhập tên user</div>
        <input
          type="text"
          className="border border-blue-600 w-full rounded-xl px-4"
          onChange={(e) => setInputName(e.target.value)}
          value={inputName}
        />
        <button
          className="py-1 px-4 max-h-9 bg-blue-800 text-white  rounded-xl font-semibold mt-5"
          onClick={addUsers}
        >
          Thêm
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
                <button className="py-1 px-4 max-h-9 bg-blue-800 text-white  rounded-xl font-semibold">
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

export default Users;
