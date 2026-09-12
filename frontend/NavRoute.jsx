import { Route, Routes } from "react-router-dom";
import CreateForm from "./src/component/CreateForm";
import UpdateForm from "./src/component/UpdateForm";

const NavRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/create" element={<CreateForm />}></Route>
        <Route path="/read" element={<div>This is read page</div>}></Route>
        <Route path="/update" element={<UpdateForm />}></Route>
        <Route path="/delete" element={<div>This is delete page</div>}></Route>
      </Routes>
    </div>
  );
};

export default NavRoute;
