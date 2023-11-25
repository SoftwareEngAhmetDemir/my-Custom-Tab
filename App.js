import React from 'react'
import A from './components/A';
import B from './components/B';
import C from './components/C';
import Tab from './components/Tab';

function App() {
  let data = [
    { key: 0, title: "A", children: <A /> },
    { key: 1, title: "B", children: <B /> },
    { key: 2, title: "C", children: <C /> },
  ];
  const Render = (Default) => {
    return (
      <>       
        hello ahmed
        <Default />
      </>
    );
  }
  return (
    <div>
      <Tab data={data} selectedTab={0} Render={Render} />
    </div>
  )
}

export default App