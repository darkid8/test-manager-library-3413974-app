import { useState, useEffect } from 'react'

function App() {
  const [health, setHealth] = useState('Loading...')

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/health')
      .then(res => res.json())
      .then(data => setHealth(data.status))
      .catch(err => setHealth('Error'))
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Manager Library</h1>
      <p>API Status: <strong>{health}</strong></p>
      
      <h2>Books</h2>
      <p>List of books will go here.</p>

      <h2>Loans</h2>
      <p>List of loans will go here.</p>
    </div>
  )
}

export default App
