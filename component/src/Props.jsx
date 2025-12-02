function Props({name="UNKNOW",age="34", hobbies}){
    return(
        <>
            <h2>My Name is: {name} and i am {age} years old.</h2>
            <h2>Hobbies is: </h2>
            <ul>
                {hobbies.map((currHobbies,index)=>(
                    <li key={index}>
                        {currHobbies}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Props;