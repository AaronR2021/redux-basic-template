import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store'
import ComponentA from './component/ComponentA.js'

function App() {
  return (
    <Provider store={store}>
      <ComponentA/>
    </Provider>
  );
}

export default App;
