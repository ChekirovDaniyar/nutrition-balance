import React from 'react';

const AddButton = props => {
    return(
        <div className="button-block">
            <button onClick={() => {
                if(props.checkProduct({name: props.name}) === false){
                    props.addProduct(props.name, props.calories, props.carbs, props.protein, props.fat, props.img)
                }
            }}>{props.name}</button>
        </div>
    )
}
export default AddButton