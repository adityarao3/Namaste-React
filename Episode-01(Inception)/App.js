/**********
 * <div id ="parent">
 * <div id="child">
 * <h1>hey i am h1 tag</h1>
 * </div>
 * 

****/


const parent =

React.createElement('div', { id: 'parent' },[

React.createElement('div', { id: 'child' },

React.createElement('h1', {}, "Hey i am h1 tag"))]


);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
