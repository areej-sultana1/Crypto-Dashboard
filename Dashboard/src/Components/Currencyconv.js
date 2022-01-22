
import { tab } from "@testing-library/user-event/dist/tab";
import Rate from "./Exchangerate";
import {useState} from 'react';
import axios from 'axios'

function Currencyoconverter() {
    const currencies = ["BTC", 'ETH','USD','XRP','LTC','ADA'] // i is showing the loop variable in the currency
    const [chosenPrimarycurrency, setchosenprimarycurrency] = useState("BTC");
    const [chosenSecondarycurrency, setchosenSecondarycurrency] = useState("BTC");
    const[Amount, setamount]= useState(1); // 1 btc. or currency will be converted to
    const [Exchangerate , setexchangerate]= useState(0);
    const [Primarycurrencyexchanged , setprimarycurrencyexchanged]= useState('BTC');
    const [secondarycurrencyexchanged , setsecondarycurrencyexchanged]= useState('BTC');
    const [result, setResult]=useState(0);
    
    console.log(chosenPrimarycurrency)
    console.log(chosenSecondarycurrency)
    console.log(Amount);

    const convert =()=>
    {

        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: {from_currency: chosenPrimarycurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondarycurrency},
            headers: {
              'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
              'x-rapidapi-key': '5510fd612emsha783cb017505369p1798d1jsnd4811d4394b6'
            }
          };
          
          axios.request(options).then((response)=> {
              console.log(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
              setexchangerate(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
              setResult(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]* Amount)
              setprimarycurrencyexchanged(chosenPrimarycurrency);
              setsecondarycurrencyexchanged(chosenSecondarycurrency);
          }).catch( (error)=> {
              console.error(error);
          });
          console.log(Exchangerate)
    }

    return (
      <div className = "currency-feed" >
      <h2>Currency Converter</h2>
      <div className="input-box">
      <table>
          <tbody>
          <tr>
              <td>Primary Currency</td>
              <td><input type = "number" name ="currency-amount-1" value ={Amount} 
                  onChange = {(e)=>{setamount(e.target.value)}}
              /></td>
              <td><select value= {chosenPrimarycurrency} name = "select-options-1 " className = "currency-options" 
              onChange = {(e)=>setchosenprimarycurrency(e.target.value)}>
              {currencies.map( (i, _index) =>(<option key ={_index}>{i}</option> ))}</select></td>  
          </tr>
          <tr>
              <td>Secondary Currency</td>
              <td><input type = "number" name ="currency-amount-2" value ={result} disabled={true} /></td>
              <td><select value= {chosenSecondarycurrency} name = "select-options-2 " className = "currency-options"
              onChange = {(e)=>setchosenSecondarycurrency(e.target.value)}>
              {currencies.map( (i, _index) =>(<option key ={_index}>{i}</option> ))}</select></td>  
          </tr>

          </tbody>
         
      </table>
      <button id ="convert-button" onClick={convert}>Convert </button>
      </div>
      <Rate
         exchangerate = {Exchangerate}
         chosenPrimarycurrency={Primarycurrencyexchanged}
         chosenSecondarycurrency={secondarycurrencyexchanged}
      />
        
      </div>
    );
  }
  
  export default Currencyoconverter
  