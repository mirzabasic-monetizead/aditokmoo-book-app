import { useContext } from "react"
import AppContext from "../context/AppContext"

export const BookForm = () => {
    const { addBook, handleChange, formData } = useContext(AppContext)

    return (
        <section>
            <form onSubmit={(e) => addBook(e)}>
                <div className="form-container">
                    <div className="input-container">
                        <label htmlFor="book">Naslov knjige</label>
                        <input type="text" value={formData.book} placeholder="Upisi naslov knjige" id="book" onChange={(e) => handleChange(e)}  required/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="author">Ime autora</label>
                        <input type="text" value={formData.author} placeholder="Upisi ime autora" id="author" onChange={(e) => handleChange(e)}  required/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="category">Kategorija knjige</label>
                        <input type="text" value={formData.category} placeholder="Upisi kategoriju knjige" id="category" onChange={(e) => handleChange(e)} required/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="desc">Opis knjige</label>
                        <textarea id="desc" value={formData.desc} placeholder="Upisi opis knjige" onChange={(e) => handleChange(e)}></textarea>
                    </div>
                    
                    <button type="submit">Add Book</button>
                </div>
            </form>
        </section>
    )
}