import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainHome from './pages/MainHome';
import StudentApp from './student/StudentApp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/student/*" element={<StudentApp />} />
        <Route path="/careers/*" element={<StudentApp />} />
        <Route path="/join/*" element={<StudentApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
