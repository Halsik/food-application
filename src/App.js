import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/MainPage/LeftSide/Main';
import Menu from './components/Menu/Menu';
import foodData from "./components/Menu/foodData"
import AddPage from './components/AddPage/AddPage';


function App() {



  const [typeOfMeal, setTypeOfMeal] = useState(foodData.food.dessert)
  const [headerMeal, setHeaderMeal] = useState("Dessert")

  const changeToDinner = () => {
    setTypeOfMeal(foodData.food.dinner)
    setHeaderMeal("Dinner")
  }

  const changeToBreakfast = () => {
    setTypeOfMeal(foodData.food.breakfast)
    setHeaderMeal("Breakfast")
  }
  const changeToLunch = () => {
    setTypeOfMeal(foodData.food.lunch)
    setHeaderMeal("Lunch")
  }
  const changeToDessert = () => {
    setTypeOfMeal(foodData.food.dessert)
    setHeaderMeal("Desserts")
  }
  const changeToCoctails = () => {
    setTypeOfMeal(foodData.food.coctails)
    setHeaderMeal("Coctails")
  }

  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Main 
            changeToDinner={changeToDinner}
            changeToLunch={changeToLunch}
            changeToBreakfast={changeToBreakfast}
            changeToDessert={changeToDessert}
            changeToCoctails={changeToCoctails}/>
            }/>
          <Route path='menu' element={<Menu 
            type={typeOfMeal}
            header={headerMeal}/>}/>
          
        </Routes>
      </BrowserRouter>
      {/* <AddPage /> */}
    </div>
  );
}

export default App;
