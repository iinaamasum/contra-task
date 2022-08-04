import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
import VerificationPinCodePage from './Components/Auth/VerificationPinCodePage';
import ScrollToTop from './Components/Shared/RouteToTop';

function App() {
  return (
    <section className="bg-[#f7f7f7] min-h-screen">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/verify-pin-code"
            element={<VerificationPinCodePage />}
          />
        </Routes>
      </ScrollToTop>
    </section>
  );
}

export default App;
