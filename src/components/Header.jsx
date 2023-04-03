// Components
import { BookForm } from './BookForm';
// CSS
import './css/header.css';

export const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header-section">
                    <h1>Manage Books</h1>
					<BookForm />
				</div>
			</div>
		</header>
	);
};
