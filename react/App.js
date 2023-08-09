import './App.css';
import Hello from './Hello'; 
import Hello2 from './Hello2'; 
import Hello3 from './Hello3'; 
import Props1 from './Props1'; 
import Props2 from './Props2'; 
import Props3 from './Props3'; 
import Props4 from './Props4'; 
import Props5 from './Props5'; 
import Props6 from './Props6'; 

function App() {
  return (
    <div className="App">
      <Hello/>
      <input/> <br/>
      <Hello2/>
      <Hello3/>
      {/* 값 전달하기 */}
      <Props1 name="세사람"/>
      <Props2 name="네사람" color="blue"/>
      <Props3 name="오사람" color="green"/>
      <Props4/>
      {/* 포함 컴포넌트의 사용 */}
      <Props5>
        <Props2 name="네사람" color="blue"/>
        <Props3 name="오사람" color="green"/>
      </Props5>
      <Props6 name="육사람" color="brown"/>
      <Props6 name="칠사람" color="brown" isSpecial="false"/>
      <Props6 name="팔사람" color="brown" isSpecial="true"/>
      <Props6 name="구사람" color="brown" isSpecial=""/>
      <Props6 name="열사람" color="brown" isSpecial="null"/>
      
      {/* 
      JSX(Java Script XML) : https://goddaehee.tistory.com/296 참조
      */}
    </div>
  );
}

export default App;
