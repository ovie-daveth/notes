import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import { QueryClient, QueryClientProvider } from 'react-query'; 

import { BrowserRouter } from "react-router-dom"

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Navbar />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Footer />
    </QueryClientProvider>
  </React.StrictMode>,
)
