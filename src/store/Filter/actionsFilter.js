import {
    CHANGE_VALUE_SELECT,
    CHANGE_VALUE_SORT_BY,
    CHANGE_VALUE_INPUT,
    MOVIE_COUNT,

} from "./types";

export const changeValueSelect = (nameTarget, valueTarget, stateFilterOld) => {

let stateFilter = stateFilterOld.map((obj, index) => {
        if (obj.nameSelect === nameTarget) {
            obj.valueSelect = valueTarget
    }
    return obj
})
    return {
        type: CHANGE_VALUE_SELECT,
        payload: stateFilter
    }
}
export const changeValueSortBy = (valueTarget, stateSortByOld) => {

    let stateSortBy = stateSortByOld;
    stateSortBy.valueSelect = valueTarget;
    return {
        type: CHANGE_VALUE_SORT_BY,
        payload: stateSortBy
    }
}
export const changeValueInput = (valueTarget) => {

    return {
        type: CHANGE_VALUE_INPUT,
        payload: valueTarget
    }
}
export const countMuvieSelect = (dataFromServer) => {

    return {
        type: MOVIE_COUNT,
        payload: dataFromServer.data.movie_count
    }
}