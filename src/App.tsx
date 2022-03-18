import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Table from './pages/students';
function App() {
  const [count,setCount] = useState<number>(0);
  const [name,setName] = useState<string>('');
  const [isShowTable,setShowTable] = useState<boolean>(true);
  const headCells = [
    {
      label:'Ten',
      key:'name'
    },
    {
      label:'Tuoi',
      key:'age'
    },
    {
      label:'Dia chi',
      key:'address'
    },
    {
      label:'Phone',
      key:'phone'
    },
  ]
  const students = [
    {
      name: 'Hieu',
      age:21,
      address:'Ha Noi',
      phone:13212313123
    }
  ];

  
  return (
    <div className="App">
      {/* <button onClick={()=>setCount(count+1)}>UpdateCount</button>
      <p>{count}</p>
      <button onClick={()=>setName('Hiếu')}>UpdateName</button>
      <p>{name}</p>
      <Login/> */}
      <button type='button' onClick={()=>setShowTable(!isShowTable)}>{isShowTable === true ? 'Ẩn ' : 'Hiện '}bảng</button>
      {
        isShowTable === true ? <Table rows={students} headCells={headCells}/>:null
      }

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Thay đổi rồi đó !</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
