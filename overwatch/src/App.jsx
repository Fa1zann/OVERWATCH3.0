import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '@/pages/Landing';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Rescuer from '@/pages/Rescuer';
import Victim from '@/pages/Victim';
import PageNotFound from '@/lib/PageNotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rescuer" element={<Rescuer />} />
        <Route path="/victim" element={<Victim />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
