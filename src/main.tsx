import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import './styles/buttons.styles.css';
import './styles/typography.styles.css';
import './styles/form.styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);

declare namespace File {
	interface File {
		id: string;
	}
}
