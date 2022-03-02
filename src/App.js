import './App.css';
import firebase from './firebase/config'
import 'firebase/firestore';
import 'firebase/storage'; 

function App() {
  return (
    <div className="App">
     <button onClick={()=>{
        firebase.firestore().collection('products').doc('Lol9aZ0Fh5f0lTXG1O5Y').set({
          name:'update'
        })
     }}>Click</button>
    </div>
  );
}

export default App;
