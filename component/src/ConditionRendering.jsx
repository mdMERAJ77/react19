import "./App.css"
function ConditionRendering(){
    const isLoggedIn =false;
    const message = true;
    const isVisible = true;
    return(
        <>
            {isLoggedIn ? <h1>User loggedIn</h1> :<h1>Login Please</h1>}
            {message && <h2>You have a new message</h2>}
            <h1 className={isVisible?"visible":"unvisible"}>Condition Rendering</h1>
        </>
    );
}
export default ConditionRendering;