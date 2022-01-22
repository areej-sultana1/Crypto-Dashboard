

function Exchangerate({exchangerate, chosenPrimarycurrency, chosenSecondarycurrency}) {
    return (
      <div className = "exchange-rate" >
        <h3>Exchange Rate</h3>
        <p>{exchangerate}</p>
        <p>{chosenPrimarycurrency} to {chosenSecondarycurrency}</p>
      </div>
    );
  }
  
  export default Exchangerate
  