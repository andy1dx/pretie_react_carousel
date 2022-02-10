import './css/App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from './pages/home/HomePage'
import Header  from './component/common/header/Header';
import { RouterPathEnum } from './enums/RouterPathEnum';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={RouterPathEnum.HOME} component={HomePage} />
        <Redirect from="/*" to="/" />
      </Switch>
    </div>
  );
}

export default App;
