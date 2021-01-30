import { h, FunctionComponent } from 'preact';
import { observer } from "mobx-react-lite";
import './App.css';
import type { IFoo } from './store'



//const App = observer( (props:any) => {
const App:FunctionComponent<{ store: IFoo }> = observer( (props) => {
  return (
    <main className="app">
      <h1 className="text-red-600">{props.store.name}</h1>
      
    </main>
  );
})

export default App;
