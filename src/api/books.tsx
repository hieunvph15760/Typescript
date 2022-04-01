import instance from "./axiosBooks";


// Books
export const createBooks = (data:any) =>{
    return instance.post('/books/',data);
}

export const getAllBooks = () =>{
    return instance.get('/books/');
}

export const getBook = (id:string|number|undefined) =>{
    return instance.get(`/books/${id}`);
}

export const removeBook = (id:string|undefined|number) =>{
    return instance.delete(`/books/${id}`);
}

export const updateBook = (id:string|undefined|number,data:any) =>{
    return instance.put(`/books/${id}`,data);
}



// Categories
export const getCategory = (id:string|number|undefined) =>{
    return instance.get(`/categories/${id}`);
}

export const getAllCategories = () =>{
    return instance.get('/categories');
}

export const createCategories = (data:any) =>{
    return instance.post('/categories/',data);
}

export const removeCategorie = (id:string|undefined|number) =>{
    return instance.delete(`/categories/${id}`);
}

export const updateCategorie = (id:string|undefined|number,data:any) =>{
    return instance.put(`/categories/${id}`,data);
}