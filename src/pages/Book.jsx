import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
// CSS
import './css/book.css';

export const Book = () => {
	const { bookData, fetchBookFromLocalStorage } = useContext(AppContext);

    const { id, book, author, category, desc } = bookData;

	useEffect(() => {
		fetchBookFromLocalStorage();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section>
			<div className="container">
            <div className="book-section" key={id}>
						<h1>{book}</h1>
						<div className="span-wrapper">
							<span>Author: {author}</span>
							<span>Category: {category}</span>
						</div>
						<p>{desc}</p>
					</div>
			</div>
		</section>
	);
};
