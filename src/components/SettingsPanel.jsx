import { useSettings } from '../SettingsContext.jsx';

function SettingsPanel() {
  const { theme, language, setTheme, setLanguage, resetSettings } = useSettings();

  return (
    <div className="card settings-panel">
      <h2>Settings</h2>

      {/* Theme selector */}
      <div className="setting-group">
        <span>Theme:</span>
        <div className="button-group">
          <button
            className={theme === 'light' ? 'btn active' : 'btn'}
            onClick={() => setTheme('light')}
          >
            Light
          </button>
          <button
            className={theme === 'dark' ? 'btn active' : 'btn'}
            onClick={() => setTheme('dark')}
          >
            Dark
          </button>
        </div>
      </div>

      {/* Language selector */}
      <div className="setting-group">
        <span>Language:</span>
        <div className="button-group">
          <button
            className={language === 'en' ? 'btn active' : 'btn'}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button
            className={language === 'th' ? 'btn active' : 'btn'}
            onClick={() => setLanguage('th')}
          >
            TH
          </button>
        </div>
      </div>

      {/* Reset button */}
      <button className="btn reset-btn" onClick={resetSettings}>
        Reset to default
      </button>
    </div>
  );
}

export default SettingsPanel;
