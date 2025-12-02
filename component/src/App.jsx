import Array from './Array';
import Bye from './Bye';
import Hello from './Hello';
import Object from './Object';
import ConditionRendering from './ConditionRendering';
import Props from './Props';
import Button from './Button';
function App(){
  const hobbies=["reading","coding","basketball"];
  function message(){
    return alert("hello from message box");
  }
  function byeMessage(){
    return alert("bye from byeMessage box");
  }

  return(
  <>
    {/* <h1>App</h1>
    <Hello/>
    <Bye/> */}
    <Array/>
    <Object/>
    <ConditionRendering/>
    <Props name="meraj" age={20} hobbies={hobbies}/>
    <Button label="click me" handleMessage={message}/>
    <Button label="just click" handleMessage={byeMessage}/>

  </>
  )
}
export default App;