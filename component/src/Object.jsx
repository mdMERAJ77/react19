function Object(){
    const users=[{
        firstname:"meraj",
        lastname:"shaikh",
        age:20
    },
    {
        firstname:"sakib",
        lastname:"shaikh",
        age:24
    },
    {
        firstname:"sarik",
        lastname:"shaikh",
        age:13
    }
    ]
    function fullname(user){
        return user.firstname +" "+ user.lastname;
    }
    return(
        <>
            <h1>User Details</h1>
            <ul>
                {users.map((user,index)=>(
                    <li key={index}>{fullname(user)} is {user.age} years old.</li>
                ))}
            </ul>
        </>
    )
}
export default Object;