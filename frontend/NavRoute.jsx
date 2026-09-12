import { Route, Routes } from "react-router-dom";
import Form1 from "./src/component/UpdateForm";
import Form from "./src/component/CreateForm";
import Form2 from "./src/component/Form2";
import UpdateForm from "./src/component/UpdateForm";

const NavRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/create" element={<Form2 />}></Route>
        <Route path="/read" element={<div>This is read page</div>}></Route>
        <Route path="/update" element={<UpdateForm />}></Route>
        <Route path="/delete" element={<div>This is delete page</div>}></Route>
      </Routes>
    </div>
  );
};

export default NavRoute;
