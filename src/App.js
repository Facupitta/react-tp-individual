import './App.css';

//---Components----------------------------
import Header from './Components/Header';
import Section from './Components/Section';

//---Styles--------------------------------
import './Styles/Header.css';
import './Styles/Section.css';

function App() {
  return (
    <div className="fondo">
      <Header></Header>
      <Section></Section>
    </div>
  );
}

export default App;
