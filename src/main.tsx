import { createRoot } from 'react-dom/client';
import App from './src/App.tsx';
import './src/index.css';

// Create root and render app
const root = createRoot(document.getElementById("root")!);
root.render(<App />);