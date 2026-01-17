import { useSettings } from '../SettingsContext.jsx';

function PreviewCard() {
  const { theme, language } = useSettings();

  const previewMessage =
    language === 'en'
      ? 'This is your preference preview.'
      : 'นี่คือหน้าตัวอย่างการตั้งค่า';

  const themeLabel = theme === 'light' ? 'Light' : 'Dark';
  const languageLabel = language === 'en' ? 'English (EN)' : 'Thai (TH)';

  return (
    <div className="card preview-card">
      <h2>Preview</h2>
      <p><strong>Current theme:</strong> {themeLabel}</p>
      <p><strong>Current language:</strong> {languageLabel}</p>
      <p className="preview-message">{previewMessage}</p>
    </div>
  );
}

export default PreviewCard;
