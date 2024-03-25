import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
      <Routes>
      <Route path="/" element={<BudgetMe />} />
      <Route path="/budgetme/signup" element={<Signup />} />
      <Route path="/budgetme/Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
