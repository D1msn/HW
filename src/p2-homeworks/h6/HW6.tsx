import React, {useEffect, useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue("")
        localStorage.removeItem('editable-span-value')
    }

    useEffect(()=> {
        setValue(restoreState<string>('editable-span-value', ''))
    } , [])

    return (
        <div style={{ maxWidth: 300 }}>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div style={{ marginTop: 10 }}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                    errorText={"Поле обязательное"}
                    onBlur={save}
                    onEnter={save}
                />
            </div>
            <div className="hw-6__buttons">
                <SuperButton onClick={save}>save</SuperButton>
                <SuperButton onClick={restore}>restore</SuperButton>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
