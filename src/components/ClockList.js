
import Clock from "./Clock";


function ClockList({quantities = []}){

    console.log(Math.random());

    return (
        <>
            <div>
                {quantities.map((clock, index) => <Clock key={Math.random()}/>)}
            </div>
            <div>
                {quantities.map((clock, index) => <Clock key={Math.random()}/>)}
            </div>
        </>
       
    );

}

export default ClockList;