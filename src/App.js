import React, { useState } from 'react'
import './App.css'
import AddButton from './AddButton'
import CountItem from './CountItem'
import { Pie } from 'react-chartjs-2'
import SportComponent from './SportComponent'

const App = () => {
  // creating state
  const [state, setState] = useState({
    calories: 0,
    carbs: 0,
    protein: 0,
    fat: 0,
    selectedItems: []
  })
  window.state = state
  // This function adds product
  const addProduct = (name, calories, carbs, protein, fat, img) => {
    setState({
      ...state,
      selectedItems: [...state.selectedItems,
      { name: name, calories: calories, carbs: carbs, protein: protein, fat: fat, weight: 0, img: img }]
    })
  }
  //This function checks if product already selected
  const checkProduct = val => {
    return state.selectedItems.some(item => val.name === item.name)
  }
  //This function changes the weight
  const setWeight = (name, weightPayload, caloriePayload, proteinPayload, carbsPayload, fatPayload) => {
    state.selectedItems.find(item => item.name === name).weight += weightPayload
    setState({
      ...state,
      calories: state.calories + caloriePayload,
      protein: state.protein + proteinPayload,
      carbs: state.carbs + carbsPayload,
      fat: state.fat + fatPayload,
      selectedItems: state.selectedItems
    })
  }
  //This function deletes the product
  const deleteProduct = (name, calories, proteins, carbs, fat) => {
    setState({
      ...state,
      calories: state.calories - calories,
      protein: state.protein - proteins,
      carbs: state.carbs - carbs,
      fat: state.fat - fat,
      selectedItems: state.selectedItems.filter(e => e.name !== name)
    })
  }
  return (
    <div className="App">
      <header>
        <div className="carbs-wrapper">

          <AddButton name="Bread" calories={265} carbs={56}
            protein={9} fat={2} img="http://getdrawings.com/free-icon/bread-icon-56.png"
            addProduct={addProduct} checkProduct={checkProduct} />

          <AddButton name="Beans" calories={142} carbs={25}
            protein={11} fat={0.5} img="http://getdrawings.com/free-icon/beans-icon-56.png"
            addProduct={addProduct} checkProduct={checkProduct} />

          <AddButton name="Rice" calories={130} carbs={79}
            protein={11} fat={1} img="http://getdrawings.com/free-icon/rice-icon-56.png"
            addProduct={addProduct} checkProduct={checkProduct} />
        </div>
        <div className="protein-wrapper">

          <AddButton name="Meat" calories={185} carbs={0}
            protein={30} fat={7} img="http://getdrawings.com/free-icon/meat-icon-56.png"
            addProduct={addProduct} checkProduct={checkProduct} />

          <AddButton name="Chicken" calories={122} carbs={0}
            protein={20} fat={4} img="http://getdrawings.com/free-icon/chicken-icon-56.png"
            addProduct={addProduct} checkProduct={checkProduct} />

          <AddButton name="Fish" calories={103} carbs={0}
            protein={19} fat={3} img="http://getdrawings.com/free-icon/fish-icon-56.png"
            addProduct={addProduct} checkProduct={checkProduct} />
        </div>
        <div className="fat-wrapper">

          <AddButton name="Milk" calories={67} carbs={5}
            protein={3} fat={4} img="https://cdn3.iconfinder.com/data/icons/drinks-food/100/milk-512.png"
            addProduct={addProduct} checkProduct={checkProduct} />

          <AddButton name="Banana" calories={79} carbs={19}
            protein={1} fat={1} img="http://getdrawings.com/free-icon/banana-icon-56.png"
            addProduct={addProduct} checkProduct={checkProduct} />

          <AddButton name="Egg" calories={158} carbs={1}
            protein={13} fat={12} img="http://getdrawings.com/free-icon/egg-icon-56.png"
            addProduct={addProduct} checkProduct={checkProduct} />
        </div>
      </header>
      <div className="count-pie">
        <div className="count-wrapper">
          {state.selectedItems.map(item => <CountItem
            name={item.name} calories={item.calories} protein={item.protein} img={item.img}
            fat={item.fat} weight={item.weight} carbs={item.carbs} setWeight={setWeight}
            deleteProduct={deleteProduct}
          />)}
        </div>
        <div className="pie-chart-block">
          <Pie
            data={{
              labels: ['Fats', 'Protein', 'Carbs',],
              datasets: [
                {
                  backgroundColor: [
                    '#b80000',
                    '#fccb00',
                    '#1273de'
                  ],
                  hoverBackgroundColor: [
                    '#eb9694',
                    '#fef3bd',
                    '#c4def6'
                  ],
                  data: [state.fat, state.protein, state.carbs]
                }
              ]
            }}
            width="90%"
          />
        </div>
      </div>
      <div className="sport-wrapper">
          <SportComponent calories={state.calories}/>
      </div>

    </div>
  )
}

export default App