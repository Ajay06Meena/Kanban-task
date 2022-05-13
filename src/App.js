import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';
import Comment from './components/Comment';

function App() {
 
  return (
    <div className="App">
     <Todo />
     <Comment />
    </div>
  );
}

export default App;
