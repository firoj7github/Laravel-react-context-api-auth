import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
import { AuthProvider } from './AuthContext.jsx';

const app = createRoot(document.getElementById('app'));
app.render(
    <BrowserRouter>
    <AuthProvider>
        <App />
    </AuthProvider>
    </BrowserRouter>
);

