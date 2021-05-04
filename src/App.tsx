import { ThemeProvider } from 'styled-components';

import ScholarshipDetails from "@pages/ScholarshipDetails";
import NormalizeStyle from '@styles/Normalize';
import GlobalStyle from '@styles/Global';
import theme from '@theme';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NormalizeStyle />
        <GlobalStyle />
        <ScholarshipDetails />
      </ThemeProvider>
    </div>
  );
}

export default App;
