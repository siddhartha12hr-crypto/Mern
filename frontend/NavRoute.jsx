import { Route, Routes } from "react-router-dom";
import CreateForm from "./src/component/CreateForm";
import ReadAll from "./src/component/ReadAll";
import UpdateForm from "./src/component/UpdateForm";
import ReadSpecific from "./src/component/ReadSpecific";

const NavRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/create" element={<CreateForm />}></Route>
        <Route path="/read" element={<ReadAll />}></Route>
        <Route path="/readSpecific/:id" element={<ReadSpecific />}></Route>
        <Route path="/update/:id" element={<UpdateForm />}></Route>
        <Route path="/delete" element={<div>This is delete page</div>}></Route>
      </Routes>
    </div>
  );
};

export default NavRoute;
