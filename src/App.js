import { Routes, Route } from 'react-router-dom'

import SongsProvider from './context/songs/SongsProvider';
import Header from './components/layout/Header';
import SearchResult from './components/search/SearchResult';
import SearchPagination from './components/search/SearchPagination';
import LyricItem from './components/songs/LyricItem';
import './App.css';

const App = () => {
  return (
    <SongsProvider>
      <Header />
      <Routes>
        <Route path="/" element={<SearchResult />} />
        <Route path="/:artist/:songTitle" element={<LyricItem />} />
      </Routes>
      <SearchPagination />
    </SongsProvider>
  );
}

export default App;
