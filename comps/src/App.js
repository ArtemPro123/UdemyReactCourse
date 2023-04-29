import Accordion from "./components/Accordion";

//Anything between the tags will be passed down as children (you can also pass in components)
function App() {

  const items = [
    {
      id: 'asd',
      label: 'Can I use React',
      content: 'Yes'
    },
    {
      id: 'dsa',
      label: 'Can I use CSS',
      content: 'No'
    },
    {
      id: 'dsa1',
      label: 'Can I use HTML',
      content: 'No'
    }
  ]

  return <Accordion items={items}/>
 
}

export default App;

// component - reusable react component that shows a handful of elements 
// Page - Still a react component but is not meant for reuse