import Header from './components/Header/Header'
import ArticleList from './components/ArticleList/ArticleList'
import { Routes, Route } from 'react-router-dom'
import ArticlePage from './components/ArticlePage/ArticlePage'
import SignUpPage from './components/SignUpPage/SignUpPage'
import SignInPage from './components/SignInPage/SignInPage'
import ProfilePage from './components/ProfilePage/ProfilePage'
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/sign-in" element={<SignInPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
      </Routes>
    </>
  )
}

export default App
