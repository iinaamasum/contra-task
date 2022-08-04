import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
import VerificationPinCodePage from './Components/Auth/VerificationPinCodePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verify-pin-code" element={<VerificationPinCodePage />} />
      </Routes>
    </>
  );
}

export default App;
