import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import IssuesPage from './pages/IssuesPage'
import MagentoPage from './pages/MagentoPage'
import PartnersPage from './pages/PartnersPage'

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[linear-gradient(180deg,#f8faff_0%,#eef3ff_28%,#ffffff_100%)] text-slate-950">
        <Header />
        <main className="overflow-x-clip pt-20 md:pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/issues-solved" element={<IssuesPage />} />
            <Route path="/magento" element={<MagentoPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
