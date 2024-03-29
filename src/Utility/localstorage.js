const getStoredBook = () =>{
    const storedBook = localStorage.getItem('book-list');
    if(storedBook){
        return JSON.parse(storedBook);
    }
    return [];
}

const saveBookList = id => {
    const storedBooks = getStoredBook();
    const exists = storedBooks.find(jobId => jobId === id);
    if(!exists){
        storedBooks.push(id);
        localStorage.setItem('book-list', JSON.stringify(storedBooks))
    }
}

export {getStoredBook, saveBookList}