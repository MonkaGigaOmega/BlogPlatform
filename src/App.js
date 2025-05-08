import Header from './components/Header/Header'
import ArticleList from './components/ArticleList/ArticleList'
import { Routes, Route } from 'react-router-dom'
import ArticlePage from './components/ArticlePage/ArticlePage'
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
      </Routes>
    </>
  )
}

export default App
