import './App.css';
import NavMenu from '../../components/navMenu/index';
import { Switch, Route } from 'react-router-dom';
import Logo from '../../components/logo';
import Profile from '../../components/profile';
import SettingsPage from '../settingPage';
import StatisticPage from '../statisticPage';
import PosPage from '../posPage';

function App() {
  const urlParse = window.location.href.split('/');
  const url = urlParse[urlParse.length - 1]
  console.log(url)
  return (
    <div className="App">
      <div className="left-side_panel">
        <Logo />
        <NavMenu />
      </div>
        <Switch>
          <Route path="/statistic">
            <div className={'right-side_panel'}>
              <div className="container">
                <div className="right__content">
                  <Profile profileName="Александра Константиновна" profileRole="Владелец заведения" avatarLink="https://na-chai.ru/images/dist/profile-avatar-image.jpg"/>
                  <StatisticPage />
                </div>
              </div>
            </div>
          </Route>
          <Route path="/settings">
            <div className={'right-side_panel no-mw'}>
              <div className="container">
                <div className="right__content">
                  <Profile profileName="Александра Константиновна" profileRole="Владелец заведения" avatarLink="https://na-chai.ru/images/dist/profile-avatar-image.jpg"/>
                  <SettingsPage />
                </div>
              </div>
            </div>
          </Route>
          <Route path="/pos">
            <div className={'right-side_panel no-mw'}>
              <div className="container">
                <div className="right__content">
                  <Profile profileName="Александра Константиновна" profileRole="Владелец заведения" avatarLink="https://na-chai.ru/images/dist/profile-avatar-image.jpg"/>
                  <PosPage />
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
  );
}

export default App;
