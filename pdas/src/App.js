import 'bulma/css/bulma.css';

import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

console.log(AlexaImage);
console.log(SiriImage);

function App () {
  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'>Person Digital Assistants </p>
        </div>
      </section>
      
        <div className="container">
          <section className="section">
            <div className='columns'>
            <div className='column is-4'>
              <ProfileCard 
                title = "Alexa" 
                handle = "@alexa99" 
                image={AlexaImage}
                content="Alexa is created by Amazon"/>
            </div>
            <div className='column is-4'>
              <ProfileCard 
                title = "Siri" 
                handle = "@siri89"
                image={SiriImage}
                content="Made by Microsoft"/>
            </div>
            <div className='column is-4'>
              <ProfileCard 
                title = "Cortana" 
                handle = "@cortana09" 
                image={CortanaImage}
                content="made by apple"/>
            </div>
            </div>
          </section>
        </div>
    </div>
  );
}

export default App;