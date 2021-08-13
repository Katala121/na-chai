import './App.css';
import NavMenu from '../../components/navMenu/index';
import Logo from '../../components/logo';
import Profile from '../../components/profile';
import SettingsPage from '../../components/settingPage';

function App() {
  return (
    <div className="App">
      <div className="left-side_panel">
        <Logo />
        <NavMenu />
      </div>
      <div className="right-side_panel no-mw">
        <div className="container">
          <div className="right__content">
            <Profile profileName="Александра Константиновна" profileRole="Владелец заведения" avatarLink="https://na-chai.ru/images/dist/profile-avatar-image.jpg"/>
            <SettingsPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
