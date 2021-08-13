import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="GSP-Logo"> </div>
          <div className="Bar-Items"> 
            <ul className="Navigation-Bar-Items">
              <li> DESPRE NOI </li>
              <li> CURSURI </li>
              <li> CURSURI ONLINE </li>
              <li> STIRI </li>
              <li> CONTACT </li>
            </ul>
            <ul className="Log-In-Register-Buttons">
              <li className="Login-Button"> LOGIN </li>
              <li className="Register-Button"> INREGISTRARE </li>
            </ul>
          </div>
      </nav> 
      <body>
      <div className="Background-Image"> </div>
      <div class="Welcome-Text">
          <h1 className="WTHeader1"> Centrul de training GSP </h1>
          <h3 className="WTHeader2"> Inscrie-te pentru a obtine acreditarile necesare activitilor profesionale din domeniul Oil & Gas. </h3>
          <button className="WTButton"> Inscrie-te la cursuri! </button>
      </div>
          <div className="Background-Design"> </div>
          <p className="Acreditation-Text" > Acreditarile GSP Training Center </p>
      <div className="Acreditation-Block">
            <div className="Certificate1"> </div>
            <div className="Certificate2"> </div>
            <div className="Certificate3"> </div>
            <div className="Certificate4"> </div>
      </div> 
      <div className="Drilling-Simulator-Block"> 
      <h3 className="DSTHeader1"> Simulatorul nostru  </h3>
      <h1 className="DSTHeader2"> Drilling Simulator Drill SIM - 600 </h1>
      <h3 className="DSTHeader3"> Cel mai avansat simulator de specialitate din sud-estul europei. Acreditari IWCF Level 1-4 in centrul GSP Training Center acreditat IWCF din anul 2009. </h3>
      <button className="DSTButton"> Inscrie-te acum! </button>
      </div>
      <div className="Rig-Image"> </div>
      <div className="Curved-Line"> </div>
      <div className="Information-Background"> </div>
      <div className="Platform-Image"> </div>
      <div className="Training-Image">  </div>
      <div className="Career-Oil-Gas-Block">
      <h3 className="CIGHeader1"> GSP Training Center </h3>
      <h1 className="CIGHeader2"> Construieste-ti cariera in domeniul <span className="CIGHeader3-Blue"> Oil & Gas </span> </h1>
      <h3 className="CIGHeader3"> Descopera cursurile GSP Training Center si acrediteaza-te pentru domeniul Oil & Gas.</h3>
      <button className="CIGButton"> AFLA MAI MULTE </button>
      </div>
      <div className="Online-Training-Block">
      <h3 className="OTHeader1"> PLATFORMA DE EDUCATIE ONLINE</h3> 
      <h1 className="OTHeader2"> GSP Online Training </h1>
      <h3 className="OTHeader3"> Eficientizam procesele de invatare din domeniul Oil & Gas. Descopera platforma online. </h3>
      <button className="OTButton"> AFLA MAI MULTE </button>
      </div>
      <div className="Globe-Image"> </div>
      <div className="Extra-Background"> </div>
      <div className="Career-Block">
      <h1 className="CHeader1"> Ofera <span className="CHeader1-Red"> noi perspective </span> carierei tale  </h1>
      <h3 className="CHeader2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue tellus urna,mi velit diam. Turpis diam amet massa id. </h3>
      <button className="CButton"> AFLA MAI MULTE </button>
      </div>
      <div className="CommentBlock1">
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue tellus urna,mi velit diam. </p>
      <div className="ProfilePicture1"></div>
      <h3 className="CommentName"> Irina Tofan </h3>
      <h4 className="CommentJob"> Project Manager </h4>
      </div>
      <div className="CommentBlock2">
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue tellus urna,mi velit diam. </p>
      <div className="ProfilePicture2"></div>
      <h3 className="CommentName" > Alexandru Andreescu </h3>
      <h4 className="CommentJob"> Chief Drilling Operator </h4>
      </div>
      <div className="CommentBlock3">
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue tellus urna,mi velit diam. </p>
      <div className="ProfilePicture3"> </div>
      <h3 className="CommentName"> Maria Dragomiroiu</h3>
      <h4 className="CommentJob"> Search & Rescue</h4>
      </div>
      <div className="CommentBlock4">
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue tellus urna,mi velit diam. </p>
      <div className="ProfilePicture4"> </div>
      <h3 className="CommentName"> Bogdan Stoian </h3>
      <h4 className="CommentJob"> Capitan Via Explorere</h4> 
      </div>
      </body>
    </div>
  );
}

export default App;
