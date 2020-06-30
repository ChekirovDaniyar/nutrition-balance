import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'

const SportComponent = props => {
    const [state, setState] = useState({
        burned: 0,
        weight: 0,
        str: null
    })
    //This function sets the sport king
    const handleSportChange = event => {
        setState({
            ...state,
            str: event.target.value
        })
    }
    //This function sets the weight
    const handleWeightChange = event => {
        setState({
            ...state,
            weight: event.target.value
        })
    }
    //This function handles the submit
    const handleSubmit = event => {
        event.preventDefault()
        if (state.weight !== 0 && state.str !== null) {
            switch (state.weight) {
                case '130_and_less':
                    setState({ ...state, burned: state.str.split(',')[0] })
                    break
                case '130_155':
                    setState({ ...state, burned: state.str.split(',')[1] })
                    break
                case '155_180':
                    setState({ ...state, burned: state.str.split(',')[2] })
                    break
                case '180_205':
                    setState({ ...state, burned: state.str.split(',')[3] })
                    break
                default:
                    break
            }
        }
    }
    return (
        <div className="form-wrapper">
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className="input-wrapper">
                    <div className="sport">
                        <h3>Choose sport</h3>
                        <label>
                            Running
                        <input name="sport" type="radio" value="502, 510, 520, 525" onChange={e => handleSportChange(e)} />
                        </label>
                        <label>
                            Boxing
                        <input name="sport" type="radio" value="520, 530, 545, 560" onChange={e => handleSportChange(e)} />
                        </label>
                        <label>
                            Cycling
                        <input name="sport" type="radio" value="500, 515, 520, 540" onChange={e => handleSportChange(e)} />
                        </label>
                        <label>
                            Soccer
                        <input name="sport" type="radio" value="495, 505, 520, 525" onChange={e => handleSportChange(e)} />
                        </label>
                    </div>
                    <div className="weight">
                        <h3>Choose your weight category</h3>
                        <label>
                            130 and less
                        <input name="weight" type="radio" value="130_and_less" onChange={e => handleWeightChange(e)} />
                        </label>
                        <label>
                            130-155
                        <input name="weight" type="radio" value="130_155" onChange={e => handleWeightChange(e)} />
                        </label>
                        <label>
                            155-180
                        <input name="weight" type="radio" value="155_180" onChange={e => handleWeightChange(e)} />
                        </label>
                        <label>
                            180-205
                        <input name="weight" type="radio" value="180_205" onChange={e => handleWeightChange(e)} />
                        </label>
                    </div>
                </div>
                <button className="ui blue button">Submit</button>
            </form>
            <h3>Burned calories: {state.burned} <br /> Gained calories: {props.calories}</h3>
            <div className="bar-chart">
                <Bar
                    data={{
                        labels: [' ', 'Burned Calories', 'Gained Calories', ' '],
                        datasets: [
                            {
                                label: 'Calories Data',
                                data: [0, state.burned, props.calories, 0],
                                backgroundColor: [' ', '#b80000', '#5A6794', ' '],
                                hoverBackgroundColor: [' ', '#eb9694', '#8794C0', ' ']
                            }
                        ]
                    }}
                />
            </div>
        </div>
    )
}

export default SportComponent