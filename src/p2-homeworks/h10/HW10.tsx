import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {ReactComponent as Loader} from "../../loader.svg";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {setIsLoading} from "./bll/loadingReducer";

function HW10() {
    const dispatch = useDispatch()
    const isLoading = useSelector<AppStoreType, boolean>((state) => state.loading.loadingStatus)

    const setLoading = () => {
        dispatch(setIsLoading(true))
        setTimeout(() => dispatch(setIsLoading(false)) , 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <Loader/>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
