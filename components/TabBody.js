import React from 'react'
import "../App.css";
function TabBody({tabs,selectedTab}) {
    return (
        <div>
            {
                tabs.map(({children,key,rendered,visited}) => {
                    return rendered&&<span className={visited?"block":"hide"} key={key}>{children}</span>;
                } )
            }
    </div>
  )
}

export default TabBody