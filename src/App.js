import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
import VerificationPinCodePage from './Components/Auth/VerificationPinCodePage';
import ScrollToTop from './Components/Shared/RouteToTop';
import SocialLinks from './Components/SocialLinks/SocialLinks';
import UpdateProfilePage from './Components/UpdateProfile/UpdateProfilePage';

function App() {
  return (
    <section className="bg-[#f0f0f0] min-h-screen">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/verify-pin-code"
            element={<VerificationPinCodePage />}
          />
          <Route path="/update-profile" element={<UpdateProfilePage />} />
          <Route path="/social-links" element={<SocialLinks />} />
        </Routes>
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: 'green',
              },
            },
            error: {
              style: {
                background: 'red',
              },
            },
          }}
        />
      </ScrollToTop>
    </section>
  );
}

export default App;
