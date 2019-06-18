import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// import App from './App';
// import Lifecycle from './Lifecycle';
// import CartSample from './CartSample';
// import CommentList from './components/CommentList';
// import Composition from './components/Composition';
// import Hoc from './components/Hoc';
// import ContextSample from './components/ContextSample';
// import AntdTest from './components/AntdTest';
// import KFormSample from './components/KFormSample';

import store from './store';
import ReduxTest from './components/ReduxTest';



// ReactDOM.render(<h1>React真酷</h1>,document.querySelector('#root'))
// ReactDOM.render(<App />,document.querySelector('#root'))
// ReactDOM.render(<Lifecycle />, document.querySelector('#root'))
// ReactDOM.render(<CartSample title="aaa" />, document.querySelector('#root'))
// ReactDOM.render(<CommentList />, document.querySelector('#root'))

// ReactDOM.render(<Composition />, document.querySelector('#root'))
// ReactDOM.render(<Hoc stage="React" />, document.querySelector('#root'))
// ReactDOM.render(<ContextSample />, document.querySelector('#root'))
// ReactDOM.render(<AntdTest />, document.querySelector('#root'))
// ReactDOM.render(<KFormSample />, document.querySelector('#root'))


// 动态渲染
// function tick(){
//     ReactDOM.render(<h2>{new Date().toLocaleTimeString()}</h2>,document.querySelector('#root'))
// }
// setInterval(tick,1000)

// redux
// function render(){
//     ReactDOM.render(<ReduxTest />, document.querySelector('#root'))
// }
// render()
// store.subscribe(render)


ReactDOM.render((
    <Provider store={store}>
        <ReduxTest />
    </Provider>
), document.querySelector('#root'))

