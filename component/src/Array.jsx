function Array(){
    const fruits=["apple","banana","pineapple"];
    return(
        <>
        <h1>Fruits Name</h1>
            <ul>
                {fruits.map((currFruits,index)=>(
                    <li key={index}><h3>{currFruits}</h3></li>
                ))}
            </ul>
        </>
    )
}
export default Array;