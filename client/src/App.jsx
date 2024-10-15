import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hola</h1>} />
        <Route path="/profile" element={<h1>profile</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/add-task" element={<h1>add-task</h1>} />
        <Route path="/edit-task" element={<h1>edit-task</h1>} />
        <Route path="/tasks/:id" element={<h1>task</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
