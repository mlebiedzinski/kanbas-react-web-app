function FindIndex() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2', 'string3'];

    const fourIndex = numberArray1.find(a => a === 4);
    const string3Index = stringArray1.find(a => a === 'string3');

    return(
        <>
        <h3>FindIndex function</h3>
        fourIndex = {fourIndex}<br/>
        string3Index = {string3Index}
        
        </>

    );
} export default FindIndex