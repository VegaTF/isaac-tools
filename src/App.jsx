import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { ItemList } from './components/ItemList.jsx'
import { SearchBar } from './components/SearchBar.jsx'
import { Pagination } from './components/Pagination.jsx'
import { WebTitle } from './components/WebTitle.jsx'

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}items.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al cargar items.json');
        }
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setItems(data);
          setLoading(false);
        }, 1000);
      })
      .catch((error) => console.error('Error cargando los datos:', error));
  }, []);

  // 2. Filtramos la variable de estado 'items'
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const [currentPage, setCurrentPage] = useState(1)
  
  const itemsPerPage = 12
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)
  
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)

  return (
    <div className='app-container'>
      <Header />

      <main className='content'>

        <WebTitle />

        <SearchBar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />

        {/* 3. Renderizado condicional único */}
        {loading ? (
          <div className='loading-container'>
            <p className='loading'>Loading The Binding of Isaac items...</p>
          </div>
        ) : (
          <ItemList items={currentItems} />
        )}

        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(newPage) => setCurrentPage(newPage)}
        />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
