import ReactDOM from 'react-dom';
import App from './components/App';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Oswald",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif"
    ].join(",")
  }
});


ReactDOM.render(
  <ThemeProvider theme={theme}>
  <Router>
    <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
