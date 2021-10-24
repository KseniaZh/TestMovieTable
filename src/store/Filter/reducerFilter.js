import {
    CHANGE_VALUE_SELECT,
    CHANGE_VALUE_SORT_BY,
    CHANGE_VALUE_INPUT,
    MOVIE_COUNT,

} from "./types";

const initialState = {

    flagSearch: false,
    movieCount: 0,
    inputSearch: '',
    stateSortBy: {
        headerSelect: 'Sort by',
        nameSelect: 'sortBy',
        valueSelect: 'date_added',
        sizeSelect: '1',
        optionSelect: [
            { value: 'date_added', label: 'date added' },
            { value: 'title', label: 'title' },
            { value: 'year', label: 'year' },
            { value: 'rating', label: 'rating' },
        ],
        classname: 'home_homeHead_filter__sortBy',
    },
    stateFormSearch: [
        {
            headerSelect: 'Quality',
            nameSelect: 'quality',
            valueSelect: 'all',
            sizeSelect:'1',
            optionSelect: [
                { value: 'all', label: 'all' },
                { value: '720p', label: '720p' },
                { value: '1080p', label: '1080p' },
                { value: '2160p', label: '2160p' },
                { value: '3D', label: '3D' },
            ],
            classname: 'home_homeHead_filter__select',
        },
        {
            headerSelect: 'Genre',
            nameSelect: 'genre',
            valueSelect: 'all',
            sizeSelect:'1',
            optionSelect: [
                { value: 'all', label: '' },
                { value: 'action', label: '' },
                { value: 'adventure', label: '' },
                { value: 'animation', label: '' },
                { value: 'biography', label: ''},
                { value: 'comedy', label: ''},
                { value: 'crime', label: ''},
                { value: 'documentary', label: ''},
                { value: 'drama', label: '' },
            ],
            classname: 'home_homeHead_filter__select',
        },
        {
            headerSelect: 'Rating',
            nameSelect: 'rating',
            valueSelect: '0',
            sizeSelect:'1',
            optionSelect: [
                { value: '0', label: 'All' },
                { value: '9', label: '9+' },
                { value: '8', label: '8+' },
                { value: '7', label: '7+' },
                { value: '6', label: '6+' },
                { value: '5', label: '5+' },
                { value: '4', label: '4+' },
                { value: '3', label: '3+'},
                { value: '2', label: '2+' },
                { value: '1', label: '1+' },
            ],
            classname: 'home_homeHead_filter__select',
        },
        //{
        //    headerSelect: 'Year',
        //    nameSelect: 'year',
        //    valueSelect: '0',
        //    sizeSelect:'1',
        //    optionSelect: [
        //        { value: '0', label: 'All' },
        //        { value: '2021', label: '2021'},
        //        { value: '2020', label: '2020' },
        //        { value: '2019', label: '2019'},
        //        { value: '2015-2018', label: '2015-2018'},
        //        { value: '2010-2014', label: '2010-2014'},
        //    ],
        //    classname: 'home_homeHead_filter__select',
        //},
    ],

            };


const stateFilter = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_VALUE_SELECT:
            return {
                ...state,
                stateFormSearch: action.payload
            }
    }
    switch (action.type) {
        case CHANGE_VALUE_SORT_BY:
            return {
                ...state,
                stateSortBy: action.payload
            }
    }
    switch (action.type) {
        case CHANGE_VALUE_INPUT:
            return {
                ...state,
                inputSearch: action.payload
            }
    }
    switch (action.type) {
        case MOVIE_COUNT:
            return {
                ...state,
                movieCount: action.payload
            }
        default:
            return state;
    }
}
export default stateFilter