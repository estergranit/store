
import './App.css';
import Router from './comp/router';
import { Provider } from 'react-redux'
import store1 from './Redux/store'
import ResponsiveAppBar from './comp/navigate';

function App() {
  return (
    <Provider store={store1}>
      <div className="App">
        <Router>
        </Router>
      </div>
    </Provider>
  );
}
export default App;
