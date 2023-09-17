import { Routes, Route, Navigate } from 'react-router-dom';
import Books from './pages/BookList';
import BookDetails from './pages/BookDetails';
import { NotFound } from './pages/NotFound';


export const Routing = () => {

  return(
    <Routes>
      <Route path='/' exact element={ <Navigate to='/books'/> } />
      <Route path='/books' exact element={ <Books /> } />
      <Route path='/books/:isbn' element={ <BookDetails /> } />
      <Route path='*' element={ <NotFound /> }/>
    </Routes>
  );
}
