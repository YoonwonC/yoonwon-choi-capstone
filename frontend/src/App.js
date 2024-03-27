import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BudgetMe from "./pages/BudgetMe/BudgetMe";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import MyPage from "./pages/MyPage/MyPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<BudgetMe />} />
          <Route path="/budgetme/login" element={<Login />} />
          <Route path="/budgetme/signup" element={<Signup />} />
          <Route path="/budgetme/:id" element={<MyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
