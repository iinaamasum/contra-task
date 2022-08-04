import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
