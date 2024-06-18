import React, { Component, useState } from 'react'
import Navbar from './components/Navbar'
import News from './pages/News'
import NewsItem from './components/NewsItem'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { SearchProvider } from './contexts/useSearch'


const App = () => {
  const [progress, setProgress] = useState(50)
  // const API_KEY = process.env.REACT_APP_NEWS_API;
  const API_KEY = "c9bad5bcc1ba48b8a4a18c17393b66d8";

  return (
    <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <SearchProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<News setProgress={setProgress} API_KEY={API_KEY} category={"general"} />} />
            <Route path='/general' element={<News setProgress={setProgress} API_KEY={API_KEY} category={"general"} />} />
            <Route path='/business' element={<News setProgress={setProgress} API_KEY={API_KEY} category={"business"} />} />
            <Route path='/entertainment' element={<News setProgress={setProgress} API_KEY={API_KEY} category={"entertainment"} />} />
            <Route path='/health' element={<News setProgress={setProgress} API_KEY={API_KEY} category={"health"} />} />
            <Route path='/science' element={<News setProgress={setProgress} API_KEY={API_KEY} category={"science"} />} />
            <Route path='/sports' element={<News setProgress={setProgress} API_KEY={API_KEY} category={"sports"} />} />
            <Route path='/technology' element={<News setProgress={setProgress} API_KEY={API_KEY} category={"technology"} />} />

          </Routes>
        </Router>
      </SearchProvider>

    </div>
  )
}

export default App