
import './App.css';
import  'C:/Users/Windows/Desktop/Cognizant/ReactProjects/scorecalculatorapp/src/Stylesheets/mystyle.css'
import CalculateScore from './Components/CalculateScore';


function App() {
  return (
    <div>
     <CalculateScore
       Name={"Steeve"}
      School={"DNV Public School"}
    total={284}
    goal={3}
     />


    </div>
  );
}

export default App;