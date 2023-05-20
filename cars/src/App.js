import CarForm from './components/CarFrom';
import CarList from './components/CarList';
import CarValue from './components/CarValue';
import CarSearch from './components/CarSearch';


function App() {
  return <div>
    <CarForm/>
    <CarList/>
    <CarSearch/>
    <CarValue/>
  </div>
}

export default App;

//Section 20
//Redux Store Design
//1. Identify what state exists in the app.
//2. Identify how that state changes over time.
//3. Group together common pieces of state.
//4. Create a slice for each group.
//Anytime something changes on the screen state is used.