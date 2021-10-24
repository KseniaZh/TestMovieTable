import React from 'react';
import Select from '../../UI/Select/Select';
import Button from '../../UI/Buttons/Button';
import Input from '../../UI/Input/Input';


function FilterHomeHead(props) {


    return (
        <div className={props.classname}>
            <div>Movie counter : {props.stateFilter.movieCount}</div>
            <form>
                <Input
                    value={props.stateFilter.inputSearch}
                    onchange={props.handlerChangeInput}
                    placeholder='Enter the title of the movie'
                    id='filterInputSearch'
                    type='text'
                    labelInput='Search by title'
                    classNameInput='home_homeHead_filter__Input'
                />
                <Select
                    handlerChange={props.handlerChangeSortBy}
                    headerSelect={props.stateFilter.stateSortBy.headerSelect}
                    nameSelect={props.stateFilter.stateSortBy.nameSelect}
                    sizeSelect={props.stateFilter.stateSortBy.sizeSelect}
                    valueSelect={props.stateFilter.stateSortBy.valueSelect}
                    optionSelect={props.stateFilter.stateSortBy.optionSelect}
                    classname={props.stateFilter.stateSortBy.classname}
                />
                <div className='home_filter_search_wrapper'>
                    <div>Search options :</div>
                    {
                        props.stateFilter.stateFormSearch.map((item, index) => {
                    
                            return <Select
                                        key={'Select' + index}
                                        handlerChange={props.handleChangeSelect}
                                        headerSelect={item.headerSelect}
                                        nameSelect={item.nameSelect}
                                        sizeSelect={item.sizeSelect}
                                        valueSelect={item.valueSelect}
                                        optionSelect={item.optionSelect}
                                        classname={item.classname}
                                    />
                        })
                        }
                </div>

                <Button
                    classname='home_homeHead_filter__button_goSearch'
                    onclick={props.onclick}
                    name='&#128269; to find'
                />


            </form>
            <div
                className='filterBlind'
                onClick={props.onclickOpenFilter}
            >
                <Button
                    classname='home_homeHead_blockButton__button_flag'
                    onclick={props.onclickOpenFilter}
                    name='&#128939;'
                />
            </div>

 
        </div>
    )
}

export default FilterHomeHead
