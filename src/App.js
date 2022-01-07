import { Route, Switch } from "react-router-dom";
import Callscreen from './Components/Callscreen/Callscreen';

function App() {
  return (
    <div className="App">
      <Switch>
        < Route path='/' component={Callscreen} / >
      </Switch>
    </div>
  );
}

export default App;
