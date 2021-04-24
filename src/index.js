import React from 'react';
import reactDom from 'react-dom';

//import CounterWithCustomHook from './components/CounterWithCustomHook';
//import CounterApp from './components/CounterApp';
//import SimpleFrom from './components/02-useEffect/SimpleForm';
//import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook';
//import MultipleCustomHook from './components/03-example/MultipleCustomHook';
//import FocusScreen from './components/04-useRef/FocusScreen';
//import RealExampleRef from './components/04-useRef/RealExampleRef';
//import Layaout from './components/05-useLayaoutEffect/Layaout';
//import Memorize from './components/06-memos/Memorize';
//import MemoHook from './components/06-memos/MemoHook';
//import CallbackHook from './components/06-memos/CallbackHook';
//import { Padre } from './components/07-tarea-memo/Padre';
//import './components/08-useReducer/intro-reducer'
import TodoApp from './components/08-useReducer/TodoApp';

const divRoot = document.querySelector('#root');

reactDom.render(<TodoApp  />,divRoot)
//reactDom.render(<Padre  />,divRoot)
//reactDom.render(<CallbackHook  />,divRoot)
//reactDom.render(<MemoHook  />,divRoot)
//reactDom.render(<Memorize  />,divRoot)
//reactDom.render(<Layaout  />,divRoot)
//reactDom.render(<RealExampleRef  />,divRoot)
//reactDom.render(<FocusScreen  />,divRoot)
//reactDom.render(<MultipleCustomHook  />,divRoot)
//reactDom.render(<FormWithCustomHook  />,divRoot)
//reactDom.render(<CounterApp  />,divRoot)
//reactDom.render(<CounterWithCustomHook  />,divRoot)
//reactDom.render(<SimpleFrom  />,divRoot)



