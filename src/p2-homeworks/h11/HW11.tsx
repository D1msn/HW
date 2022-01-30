import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {Range} from "rc-slider";

import 'rc-slider/assets/index.css';

function HW11() {
    const [value1, setValue1] = useState(20)
    const [value2, setValue2] = useState(70)
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                />
            </div>

            <div>
                <span>{value1}</span>
                    <Range onChange={(values) => {
                        setValue1(values[0])
                        setValue2(values[1])
                    }}
                           value={[value1, value2]}
                           allowCross={false}
                    />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
