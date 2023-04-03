import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [ books, setBooks ] = useState([]);
    const [ bookData, setBookData ] = useState({
        id: 0,
        book: '',
        author: '',
        category: '',
        desc: ''
    })
    const [ formData, setFormData ] = useState({
        id: Math.floor(Math.random() * 10000),
        book: '',
        author: '',
        category: '',
        desc: ''
    })
    const [ bookEdit, setBookEdit ] = useState({
        item: {},
        edit: false
    })

    const navigate = useNavigate();

    useEffect(() => {
        if(bookEdit.edit) {
            setFormData({
                book: bookEdit.item.book,
                author: bookEdit.item.author,
                category: bookEdit.item.category,
                desc: bookEdit.item.desc
            })
        }
    }, [bookEdit])

    const getBookData = (id) => {
        books.forEach(item => {
            if(item.id === id) {
                // Store book data in state
                setBookData(item)
                // Store book data in localStorage
                localStorage.setItem('book', JSON.stringify(item))
            }
        })
    }

    const fetchBookFromLocalStorage = () => {
        // Fetch book data from localStorage
        const bookFromLocalStorage = localStorage.getItem('book');

        if(bookFromLocalStorage) {
            setBookData(JSON.parse(bookFromLocalStorage))
        }
    }
    const fetchBooksFromLocalStorage = () => {
        // Fetch books from localStorage
        const booksFromLocalStorage = localStorage.getItem('books');

        // Check if books exist in localStorage
        if (booksFromLocalStorage) {
            setBooks(JSON.parse(booksFromLocalStorage));
        }
    }
    const updateBook = (id, updateItem) => {
        const newArr = books.map(book => {
            if(book.id === id) {
                return {
                    ...book,
                    ...updateItem
                }
            }
            return book
        })

        // Update books in state
        setBooks(newArr)

        // Update books in localStorage
        localStorage.setItem('books', JSON.stringify(newArr))

        setBookEdit({
            item: {},
            edit: false
        })
        
    }

    const addBook = (e) => {
        e.preventDefault();

        // Edit book
        if(bookEdit.edit === true) {
            updateBook(bookEdit.item.id, formData)
        } else {
            // Store books in state
            setBooks(prevState => [...prevState, formData])

            // Store books in localStorage
            const localStorageBooks = [];
            localStorageBooks.push(...books, formData)
            localStorage.setItem('books', JSON.stringify(localStorageBooks))
        }
        
        // Navigate to books route
        navigate('/books')

        // Clear form
        setFormData({
            id: Math.floor(Math.random() * 10000),
            book: '',
            author: '',
            category: '',
            desc: ''
        })
    } 

    const handleChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const editBook = (item) => {
        setBookEdit({
            item,
            edit: true
        })

        navigate('/')
    }

	const deleteBook = (id) => {
		const newArr = books.filter((book, index) => index !== id);

		setBooks(newArr);

		localStorage.setItem('books', JSON.stringify(newArr));
	};

    return (<AppContext.Provider value={{
        books,
        formData,
        bookData,
        bookEdit,
        addBook,
        editBook,
        handleChange,
        getBookData,
        deleteBook,
        fetchBooksFromLocalStorage,
        fetchBookFromLocalStorage,
    }}>
        {children}
    </AppContext.Provider>
    )
} 

export default AppContext