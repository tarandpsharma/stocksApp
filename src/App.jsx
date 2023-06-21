import React, {useState, useEffect} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');
  const [stockData, setStockData] =React.useState([])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() =>{

    async function myfun() {
      
      try{
      const response = await fetch("./data.json");
      const dataa = await response.json();
      {console.log(dataa, "hfgfgfghfggfg")}
      setStockData(dataa);
      }
      catch(error){
        console.log("Page Not Found 404", error)
      }
    }
    myfun();
  },[])

  return (
    <>
    <div>
      <h1 style={{textAlign: "center", fontSize: "50px"}}> Welcome To UpStock </h1>
      <p style={{textAlign: "center", fontSize: "30px"}}>Start trading to see some magic happen!</p>
    </div>
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="STOCK DATA LIST" />
        <Tab value="two" label="MY WATCH LIST" />
      </Tabs>
    </Box>


    {stockData.map((item, index) =>(

      <div style={{display: "flex", marginTop: "30px"}}  key={index}>
      <div style={{display: "grid", width:"200px"}}>  {item.name} <span style={{backgroundColor: "lightgray", width: "30px"}}> {item.stockExchange}</span> </div>
      <div style={{display: "grid"}}> {item.stockPrice} <span style={{color:item.stockValueChange[0]==="-"?"red":"green"}}> {item.stockValueChange} </span></div>
      {console.log(item.stockValueChange , "fsfsfsfsf")}
    </div>
))}
  
   </>
  );
}