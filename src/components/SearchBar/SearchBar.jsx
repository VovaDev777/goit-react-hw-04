import css from './SearchBar.module.css'
import { AiOutlineSearch } from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';

const Header = ({ onAdd }) => {

    const handleSubmit = (event) => {
        const inputValue = event.target.elements.search.value;
        event.preventDefault();
        if (inputValue === "") {
            toast.error('Please, write something!');
            
        } else {
            
            onAdd(inputValue);
        }
        
    }

    return (
        <header className={css.d1}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name='search'
                />

                <button type="submit">
                    <AiOutlineSearch className={css.icon} />
                </button>
                <Toaster />
            </form>
        </header>
        

    )
}

export default Header