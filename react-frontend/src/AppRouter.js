// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import SecondPage from './SecondPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
