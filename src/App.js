import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main.jsx';
import Topics from './pages/Topics.jsx';
import About from './pages/About.jsx';
import Authorize from './pages/Authorize.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <BrowserRouter>
		<Routes>
			<Route path="/main" element={<Main/> } />
			<Route path="/" element={<Authorize/>} />
			<Route path="/topics/" element={<Topics/> } />
			<Route path="/about/" element={<About/>} />
		</Routes>
		<div align='center'><ToastContainer /></div>
  	</BrowserRouter>
	
  );
}