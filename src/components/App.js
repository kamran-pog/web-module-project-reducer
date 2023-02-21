import React from 'react';
import { useReducer } from 'react';
import './App.css';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer, { initialState } from '../reducers';
import { addOne, applyNumber, changeOperation, clearDisplay, Mplus, MemR, MemC } from '../actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  // const [addOne, applyNumber, changeOperation] = state;
  // const [setAddOne, setApplyNumber, setChangeOperation ] = actions;

  const eventHandleNum = (value) => {
     dispatch(applyNumber(value))
  }

  const eventHandleOp = (value) => {
    dispatch(changeOperation(value))
  }

  const eventHandleCe = (value) => {
    dispatch(clearDisplay(value))
  }

   const eventHandleMplus = () => {
    dispatch(Mplus())
  }

  const eventHandleMemR = () => {
    dispatch(MemR())
  }

  const eventHandleMemC = () => {
    dispatch(MemC())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
              <span id="total"><b>Total:</b>{state.total}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => eventHandleMplus(0)}value={"M+"}/>
              <CalcButton onClick={() => eventHandleMemR(0)}value={"MR"}/>
              <CalcButton onClick={() => eventHandleMemC(0)}value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => eventHandleNum(1)}value={1}/>
              <CalcButton onClick={() => eventHandleNum(2)}value={2}/>
              <CalcButton onClick={() => eventHandleNum(3)}value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => eventHandleNum(4)}value={4}/>
              <CalcButton onClick={() => eventHandleNum(5)}value={5}/>
              <CalcButton onClick={() => eventHandleNum(6)}value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => eventHandleNum(7)}value={7}/>
              <CalcButton onClick={() => eventHandleNum(8)}value={8}/>
              <CalcButton onClick={() => eventHandleNum(9)}value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => eventHandleOp("+")}value={"+"}/>
              <CalcButton onClick={() => eventHandleOp("*")}value={"*"}/>
              <CalcButton onClick={() => eventHandleOp("-")}value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => eventHandleOp("÷")}value={"÷"}/>
              <CalcButton onClick={() => eventHandleCe()}value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
