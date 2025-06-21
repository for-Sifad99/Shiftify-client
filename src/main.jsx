import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/router';
import { RouterProvider } from 'react-router';
import AOSInitializer from './pages/shared/AOSInitializer/AOSInitializer';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AOSInitializer />
    <div className='max-w-7xl mx-auto font-urbanist'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
