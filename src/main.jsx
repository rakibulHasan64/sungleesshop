import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/Store.js';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider from './provoder/AuthProvider.jsx';



const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <App />
            <ToastContainer />
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
   </AuthProvider>
  </StrictMode>
);
