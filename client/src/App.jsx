import React, {useContext} from "react";
import {TransactionContext} from "./context/TransactionContext";


const Input = ({placeholder, name, type, value, handleChange}) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    style={{border: "1px solid black", margin: "10px 0"}}
    onChange={(e) => handleChange(e, name)}
  />
);


const App = () => {
  
  const {
    transactionCount,
    connectWallet,
    transactions,
    currentAccount,
    isLoading,
    sendTransaction,
    handleChange,
    formData,
    
  } = useContext(TransactionContext)
  
  return (
    <div className={"center"}>
      <div className={"card"}>
        <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange}/>
        <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange}/>
        <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange}/>
        <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange}/>
        <button
          onClick={()=>""}
          style={{background: "#E55137", color: 'white'}}
        >
          Отправить coins
        </button>
      </div>
      <div className={"card"}>
        <button
          onClick={sendTransaction}
          style={{background: "#E55137", color: 'white'}}
        >
          Список транзакций внутри смарт контракта
        </button>
        <ul className={"list"}>
          {transactions.map(i=>{
            const {amount, keyword, message, timestamp} = i
            return (
              <li className={"item"}>
                <div>amount - {amount}</div>
                <div>keyword - {keyword}</div>
                <div>message - {message}</div>
                <div>timestamp - {timestamp}</div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  
  )
}
export default App;
