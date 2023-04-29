import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'; 

//Anything between the tags will be passed down as children (you can also pass in components)
function ButtonPage() {

  const handleClick = () => {
    console.log('Clicked');
  }
 
  return <div>
    <div>
      <Button success rounded className="mb-1" onClick = {handleClick}><GoBell className="mr-1"></GoBell>Hide Ads</Button>
    </div>
    <div>
      <Button 
      secondary 
      rounded 
      className="mb-1">
      <GoCloudDownload className="mr-1"></GoCloudDownload>Click</Button>
    </div>  
    <div>
      <Button warning rounded className="mb-1"><GoDatabase className="mr-1"></GoDatabase>See More</Button>
    </div>
    <div>
      <Button primary rounded className="mb-1">Primary</Button>
    </div>
  </div>
}

export default ButtonPage;

// component - reusable react component that shows a handful of elements 
// Page - Still a react component but is not meant for reuse