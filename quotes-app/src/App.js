import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import QuoteViewer from './components/QuoteViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './assets/background.png';

function App() {
  return (
    <Router>
      <div
      className="App min-h-screen text-white flex flex-col items-center p-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
        <div className="w-full max-w-3xl text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Quotes App</h1>
          <nav className="space-x-4 text-lg">
            <Link className="hover:underline text-blue-300" to="/quotes/love">Love</Link>
            <Link className="hover:underline text-blue-200" to="/quotes/sad">Sad</Link>
            <Link className="hover:underline text-blue-100" to="/quotes/motivational">Motivational</Link>
          </nav>
        </div>

        <Routes>
          <Route path="/quotes/:category" element={<QuoteViewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
