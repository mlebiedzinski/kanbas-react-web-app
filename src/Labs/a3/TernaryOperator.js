function TernaryOperator() {
    let loggedIn = true;
    return(
        <div>
            <h2>Logged In</h2>
            { loggedIn ? <p>Welcome</p> : <p>Plese login</p>}
        </div>
    );
}
export default TernaryOperator