import "./App.css";
import AddUsers from "./components/addUsers/AddUsers";
import UsersDetail from "./components/usersDetail/UsersDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeleteUser from "./components/deleteUser/DeleteUser";
import UpdateUser from "./components/updateUser/UpdateUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/AddUsers" element={<AddUsers />} /> */}
        <Route index element={<AddUsers />} />
        <Route path="/UsersDetail" element={<UsersDetail />} />
        <Route path="/update" element={<UpdateUser />} />
        <Route path="/delete" element={<DeleteUser />} />
        <Route path="/abc" element={<DeleteUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
