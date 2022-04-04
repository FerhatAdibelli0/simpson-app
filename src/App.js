import "./App.css";
import Formpage from "./views/formpage";
import Main from "./views/mainpage";
import Detailpage from "./views/detailpage";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/simpson" />} />
          <Route path="/simpson" element={<Main />} />
          <Route path="/simpson/:simpsonId" element={<Detailpage />} />
          <Route path="/add-simpson" element={<Formpage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
