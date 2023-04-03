import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
// Components
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
// Pages
import { Books } from './pages/Books';
import { Book } from './pages/Book';
// CSS
import './App.css';

function App() {
	return (
		<Router>
			<AppContextProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<Header />} />
					<Route path="/books" element={<Books />} />
					<Route path="/books/:id" element={<Book />} />
				</Routes>
			</AppContextProvider>
		</Router>
	);
}

export default App;
