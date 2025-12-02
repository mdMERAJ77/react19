function Button(props){
    

    return(
        <>
            <button onClick={props.handleMessage}>{props.label}</button><br />
            
        </>
    )
}
export default Button;