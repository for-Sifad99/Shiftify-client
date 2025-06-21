import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/router';
import { RouterProvider } from 'react-router';
import AOSInitializer from './pages/shared/AOSInitializer/AOSInitializer';
import AuthProvider from './contexts/AuthProvider/AuthProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AOSInitializer />
    <AuthProvider>
      <div className='max-w-7xl mx-auto font-urbanist'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>,
)
