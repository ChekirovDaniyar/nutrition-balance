import React from 'react'

const CountItem = props => {
    return (
        <div className="count-block">
            <img src={props.img} alt={props.name} />
            <div className="item-name">
                <span>{props.name}  <br /> Weight: {props.weight}</span>
            </div>
            <div className="button-block">
                <button
                    onClick={() => {
                        if (props.weight > 0) {
                            props.setWeight(props.name, -100, -props.calories, -props.protein, -props.carbs, -props.fat)
                        }
                    }}
                    className="ui inverted red button">-</button>
                <button
                    onClick={() => {
                        props.setWeight(props.name, 100, props.calories, props.protein, props.carbs, props.fat)
                    }}
                    className="ui inverted green button">+</button>
            </div>
            <div className="item-data">
                <p>Carbs: {props.carbs * props.weight / 100}</p>
                <p>Proteins: {props.protein * props.weight / 100}</p>
                <p>Fats: {props.fat * props.weight / 100}</p>
            </div>
            <div className="delete-block">
                <button
                    onClick={() => {
                        props.deleteProduct(props.name, props.calories *props.weight / 100,
                                            props.protein * props.weight / 100, props.carbs * props.weight / 100,
                                             props.fat * props.weight / 100)
                    }}
                    className="delete-btn">
                    <i className="material-icons">
                        delete
                </i>
                </button>
            </div>
        </div>
    )
}

export default CountItem