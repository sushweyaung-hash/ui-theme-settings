import './App.css';
import { useSettings } from './SettingsContext.jsx';
import Header from './components/Header.jsx';
import SettingsPanel from './components/SettingsPanel.jsx';
import PreviewCard from './components/PreviewCard.jsx';

function App() {
  const { theme } = useSettings();

  return (
    <div className={`app app-${theme}`}>
      <div className="app-container">
        <Header />
        <div className="content">
          <SettingsPanel />
          <PreviewCard />
        </div>
      </div>
    </div>
  );
}

export default App;
