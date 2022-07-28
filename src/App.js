

import './App.css';
import Links from './sections/links/links.section';
import Main from './sections/main/main.section';
import Navigation from './sections/navigation/navigation.section';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Links />
    </div>
  );
}

export default App;
