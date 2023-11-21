import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariable from "./BooleanStateVariable"
import StringStateVariable from "./StringStateVariable"
import DateStateVariable from "./DateStateVariable"
import ObjectStateVariable from "./ObjectStateVariable"
import ArrayStateVariable from "./ArrayStateVariable"
import ParentStateComponent from "./ParentStateComponent"
import ChildStateComponent from "./ChildStateComponent"
import ReduxExamples from "./ReduxExamples"
import TodoList from "../a3/todos/TodoList";


function Assignment4() {
    function sayHello() {
        alert("Hello");
    }
    return (
        <div>
            <h1>Assignment 4</h1>
            <Add a={1} b={2} />
            <ClickEvent/>
            <PassingDataOnEvent/>
            <PassingFunctions theFunction={sayHello} />
            <EventObject/>
            <Counter/>
            <BooleanStateVariable/>
            <StringStateVariable/>
            <DateStateVariable/>
            <ObjectStateVariable/>
            <ArrayStateVariable/>
            <ParentStateComponent/>
            <ChildStateComponent/>
            <ReduxExamples/>
            <TodoList/>
        </div>
    );
}
export default Assignment4;