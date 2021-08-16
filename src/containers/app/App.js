import './App.css';
import NavMenu from '../../components/navMenu/index';
import { Switch, Route } from 'react-router-dom';
import Logo from '../../components/logo';
import Profile from '../../components/profile';
import SettingsPage from '../settingPage';
import StatisticPage from '../statisticPage';

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
            <Switch>
              <Route path="/statistic">
                <StatisticPage />
              </Route>
              <Route path="/settings">
                <SettingsPage />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
