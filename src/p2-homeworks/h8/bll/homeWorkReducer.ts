import {PeopleType} from "../HW8";

export type ActionsPeopletype = PeopleSortDownAction | PeopleSortUpAction | PeopleCheckAction

type PeopleSortDownAction = {
    type: 'sort'
    payload: 'up'
}
type PeopleSortUpAction = {
    type: 'sort'
    payload: 'down'
}
type PeopleCheckAction = {
    type: 'check'
    payload: number
}

export const homeWorkReducer = (state: PeopleType, action: ActionsPeopletype): PeopleType => { // need to fix any
    switch (action.type) {
        case 'sort': {

            switch (action.payload) {
                case 'up':
                    return [...state].sort((x,y) => {
                        if (x.name < y.name) {return -1;}
                        if (x.name > y.name) {return 1;}
                        return 0;
                    })

                case 'down':
                   return [...state].sort((x,y) => {
                       if (y.name < x.name) {return -1;}
                       if (y.name > x.name) {return 1;}
                       return 0;
                   })
            }
        }
        case 'check': {
            return state.filter(item => item.age >= action.payload)
        }
        default: return state
    }
}
