import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import TaskLogging from './TaskLogging.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskLogging />
  </StrictMode>,
)