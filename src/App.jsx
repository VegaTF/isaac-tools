import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { ItemList } from './components/ItemList.jsx'
import { SearchBar } from './components/SearchBar.jsx'

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
  fetch('/public/items.json')
    .then((response) => response.json())
    .then((data) => {
      // Simulamos 1 segundo de retardo de red (1000 ms)
      setTimeout(() => {
        setItems(data)
        setLoading(false)
      }, 1000)
    })
    .catch((error) => console.error('Error cargando los datos:', error))
  }, [])

  // 2. Filtramos la variable de estado 'items'
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className='app-container'>
      <Header />

      <main className='content'>
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
          <ItemList items={filteredItems} />
        )}
      </main>
      
      <Footer />
    </div>
  )
}

export default App
