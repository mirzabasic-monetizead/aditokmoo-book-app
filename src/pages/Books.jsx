import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
// Icons
import { BiEdit, BiCategory } from 'react-icons/bi';
import { BsFillTrashFill, BsBookmarkFill, BsPencilSquare } from 'react-icons/bs';
import { MdNumbers } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai'
// CSS
import { Link } from 'react-router-dom';
import './css/books.css';

export const Books = () => {
	const { editBook, deleteBook, books, fetchBooksFromLocalStorage, getBookData } = useContext(AppContext);

    useEffect(() => {
        fetchBooksFromLocalStorage();
    }, [])

	return (
		<section>
			<div className="container">
				<div className="books-section">
					<ul className="head-list">
						<li><MdNumbers className='icon' /> Index</li>
						<li><BsBookmarkFill className='icon' /> book</li>
						<li><BsPencilSquare className='icon' /> author</li>
						<li><BiCategory className='icon' /> category</li>
						<li><AiFillEdit className='icon' /> edit</li>
					</ul>
					{books.map((item, index) => (
						<ul className="item-list" key={index}>
							<li>{index}</li>
							<li>{item.book}</li>
							<li>{item.author}</li>
							<li>{item.category}</li>
							<li>
								<span onClick={() => editBook(item)}>
									<BiEdit />
								</span>
								<span onClick={() => deleteBook(index)}>
									<BsFillTrashFill />
								</span>
								<span>
									<Link to={`/books/${item.id}`} className="item-link" onClick={() => getBookData(item.id)}>
										Detalji
									</Link>
								</span>
							</li>
						</ul>
					))}
				</div>
			</div>
		</section>
	);
};
