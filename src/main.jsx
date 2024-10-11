import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoreOlympusWebtoon from './LoreOlympusWebtoon.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoreOlympusWebtoon />
  </StrictMode>,
)
