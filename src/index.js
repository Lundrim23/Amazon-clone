import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Përdor output.css në vend të index.css

const root = createRoot(document.getElementById('root'));
root.render(<App />);
