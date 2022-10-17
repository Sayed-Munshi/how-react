import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseStep = () => {
        const newStepCount = steps + 1;
        setSteps(newStepCount);
    }

    useEffect(() => {

    }, [])
    return (
        <div>
            <h4> This is my smart watch</h4>

            <h3>My Current Steps: {steps}</h3>
            <button onClick={increaseStep}>Increase</button>

            <Display name={"Sayed"} steps={steps}></Display>
        </div>
    );
};

export default Watch;