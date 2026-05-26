import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Main from './pages/main'
import HybridIce from './pages/hybridice'
import Kuraban from './pages/kuraban'
import KurabanEx from './pages/kuraban_ex'
import SeaSnow from './pages/seasnow'
import About from './pages/about'
import Contact from './pages/contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/hybridice" element={<HybridIce />} />
          <Route path="/kuraban" element={<Kuraban />} />
          <Route path="/kuraban-ex" element={<KurabanEx />} />
          <Route path="/seasnow" element={<SeaSnow />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
