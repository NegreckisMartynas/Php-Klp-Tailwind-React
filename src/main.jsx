import Table from './components/Table.jsx';
import data from './data/table-data.js';


let domContainer = document.querySelector('#react-table');
const likeButtonRoot = ReactDOM.createRoot(domContainer);
likeButtonRoot.render(Table(data));
