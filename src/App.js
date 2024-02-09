import Component from '../src/components/Components.js'
import Comps from '../src/components/Comps.js'
import JSXExample from '../src/components/JSXExample.js'
import Hooks from './components/Hooks.js';
import Props from './components/Prop.js';
import State from './components/State.js';


function App() {
  return (
    <div className="App">
     <Component />
     <Comps />
     <JSXExample/>
     <State />
     <Props />
     <Hooks />
    </div>
  );
}

export default App;
