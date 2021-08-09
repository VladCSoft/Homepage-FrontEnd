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
          <h3 className="WTHeader2"> Inscrie-te pentru a obtine acreditarile necesare activitilor din domeniul Oil & Gas </h3>
          <button className="WTButton"> Inscrie-te la cursuri! </button>
      </div>
      </body>
    </div>
  );
}

export default App;
