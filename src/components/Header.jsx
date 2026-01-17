import { useSettings } from '../SettingsContext.jsx';

function Header() {
  const { language } = useSettings();

  const titleText = language === 'en' ? 'Welcome' : 'ยินดีต้อนรับ';

  return (
    <header className="header">
      <h1>{titleText}</h1>
    </header>
  );
}

export default Header;
