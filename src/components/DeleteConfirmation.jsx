import { useEffect, useState } from "react";

const TIMER = 4000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const interval =  setInterval(() => {
      setRemainingTime(prevTime => prevTime - 10);
    }, 10);

    return() => {
    clearInterval(interval);
    }
}, []);

  useEffect(() => {
    console.log('timer is set');
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return() => {
      console.log('timer is cleared')
      clearTimeout(timer);
    };
  }, [onConfirm]);

  function timeGone() {
    setRemainingTime('0');
  }


  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER}/>
    </div>
  );
}
