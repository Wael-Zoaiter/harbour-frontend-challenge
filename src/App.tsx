import { ThemeProvider } from 'styled-components';

import NormalizeStyle from 'Styles/Normalize';
import GlobalStyle from 'Styles/Global';
import theme from 'Theme';
import ScholarshipDetails from 'Pages/ScholarshipDetails';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NormalizeStyle />
        <GlobalStyle />
        {/* Pages */}
        <ScholarshipDetails />
      </ThemeProvider>
    </div>
  );
}

export default App;
