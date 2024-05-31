import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Index.css';
import Home from "./pages/Home.tsx";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn.tsx";
import SignIn from "./pages/SignIn.tsx";
import CreateNewSurvey from "./pages/CreateNewSurvey.tsx";
import CreateFromTemplate from "./pages/Templates.tsx";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/LogIn" element={<LogIn />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/CreateNewSurvey" element={<CreateNewSurvey />} />
                <Route path="/CreateFromTemplate" element={<CreateFromTemplate />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;