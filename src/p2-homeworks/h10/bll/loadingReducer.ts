type StateType = {
    loadingStatus: boolean
}

const initState: StateType = {
    loadingStatus: false,
}

export const loadingReducer = (state = initState, action: setIsLoadingAT): StateType => {
    switch (action.type) {
        case "H10/SET_IS_LOADING":
            return {...state, loadingStatus: action.loadingStatus}
        default: return state
    }
}

type Actions = setIsLoadingAT


// type IsLoadingActionType = ReturnType<typeof setIsLoading>


// export const setIsLoading = (loadingStatus: LoadingTypes) => ({type: 'H10/SET_IS_LOADING', loadingStatus} as const)

type setIsLoadingAT = {
    type: 'H10/SET_IS_LOADING',
    loadingStatus: boolean
}

export const setIsLoading = (loadingStatus: boolean): setIsLoadingAT => {
    return {
        type: 'H10/SET_IS_LOADING',
        loadingStatus
    }
}
