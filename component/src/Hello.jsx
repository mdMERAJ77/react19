// import styles from "./Hello.module.css"

function Hello(){
    const getName=(yourname)=>{
        return yourname;
    }
    const name = "meraj";
    const name1="sakib";
    //events
    function handleButton(){
        alert("button was clicked");
    }
    //input
    function inputHandle(event){
        console.clear()
        console.log("value is: ",event.target.value)
    }
    //doubleclick
    let doubleclick=()=>{
        alert("dobule clicked")
    }
    return(<>
        <h1>Hello {getName(name)}</h1>
        <h1>Hello {getName(name1)}</h1>
        <button onClick={handleButton}>click me</button>
        <button onClick={()=>alert("inline event")}>click here</button>
        <input type="text" onChange={inputHandle} placeholder="name"/>
        <h1 onDoubleClick={doubleclick} style={{color:"red", cursor:"pointer"}}>mouse double click</h1>
    </>)
}
export default Hello;