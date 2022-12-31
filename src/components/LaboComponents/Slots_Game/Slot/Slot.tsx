
interface ISlot {
    value:number
  }
  
  const Slot = (props : ISlot) => {
  return(
  <>
    <div>
    {
        props.value === 1 ? <img height={75} src={require('../assets/cherry.png')} />:
        props.value === 2 ? <img height={75} src={require('../assets/grape.png')} /> :
        props.value === 3 ? <img height={75} src={require('../assets/melon.png')} /> :
        props.value === 4 ? <img height={75} src={require('../assets/seven.png')} /> :
        <img height={75} src={require('../assets/lemon.png')} />
    } 
    </div>
  </>
  );
  }

  export default Slot;