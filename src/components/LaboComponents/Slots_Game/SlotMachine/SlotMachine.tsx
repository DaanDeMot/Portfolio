import Slot from "../Slot/Slot";
import React, { useEffect, useState } from "react";
import styles from "../Slot.module.css";

const getRandomValues = (quantity: number) => {
  let slots: number[] = [];
  for (let i = 0; i < quantity; i++) {
    slots.push(Math.floor(Math.random() * 5));
  }
  return slots;
};
const SlotMachine = () => {
  const [money, setMoney] = useState<number>(100);
  const [quantitySlots, setQuantitySlots] = useState<number>(3);
  const [profit, setProfit] = useState<number>(20);
  const [slots, setSlots] = useState<number[]>(getRandomValues(quantitySlots));
  const [loading, setLoading] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const [timesLost, setTimesLost] = useState<number>(0);
  const [timesWon, setTimesWon] = useState<number>(0);

  const ChangeSlotsAndProfit = (value:number) => {
    setQuantitySlots(value);
    setSlots(getRandomValues(value))
    changeProfit(value);
    setGameStarted(false)
  };

  const changeProfit = (value:number) => {
    if (value == 1) {
      setProfit(0);
    } else if (value == 2) {
      setProfit(5);
    } else if (value == 3) {
      setProfit(20);
    } else {
      setProfit(value * (15 + value));
    }
  };

  const PullLeverAndReward = () => {
    setLoading(true);
    setSlots(getRandomValues(quantitySlots));
    rewardPlayer();
    setGameStarted(true)
    setTimeout(()=>{
      setLoading(false)
    }, 2000);
  };

  const rewardPlayer = () => {
    if (TrueWhenWon()) {
      setMoney(money + profit);
      setTimesWon(timesWon+1);
    } else {
      setMoney(money - 1);
      setTimesLost(timesLost+1)
    }
  };

  const TrueWhenWon = () => {
    if (slots.every((val, i, arr) => val === arr[0])) {
      return true;
    } else {
      return false;
    }
  };


  return (
    <div className={styles.SlotContainer}>
      <p className={styles.Saldo}>Saldo : ${money}</p>


        <div>
          <div className={styles.slot_header}>
          <p className={styles.slot_profit}> Profit for win is : {profit}</p>
          <div className={styles.slot_header_left}>
          <input
            className={styles.quantity}
            type="number"
            defaultValue={3}
            onChange={(event) => {
              ChangeSlotsAndProfit(parseInt(event.target.value));
            }}
          ></input>
          </div>
          <div className={styles.slot_header_right}>
          <p className={styles.times_won_lost}> Times won   : {timesWon}</p>
          <p className={styles.times_won_lost}> Times lost  : {timesLost}</p>
          </div>
          </div>
          {money >= 0 ? 
           <div className={styles.PlayContainer}>
           <div className={styles.leverButton_container}>
             <button
               className={styles.button_80}
               onClick={() => PullLeverAndReward()}>
               Pull lever for $1
             </button>
             </div>
             <div className={styles.slots_container}> 
             {slots.map((slot: number, index: number) => (
               <div key={index} className={styles.SingleSlot}>
                 { loading ?
                 <div className={styles.box_spin} ></div> 
                 :
                  <Slot value={slot}></Slot>}
                 
               </div>
             ))}
             </div>
                    
              {gameStarted && !loading? 
              <div className={styles.feedback}>
                {TrueWhenWon()?
                <p className={styles.winFeedback}>You won! You receive {profit}</p> 
                :
                <p className={styles.lossFeedback}>Ohno! You lost $1.</p>
                }
              </div>
              :
              <p></p>
              }
           </div>
          : <p> You have no more money, go home..</p> }
  
        </div>
 
        
    </div>
  );
};
export default SlotMachine;
