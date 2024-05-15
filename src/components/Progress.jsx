

const Progress = ({ progress }) => {
const getColor = () => {
    return "#48BB78"
}


 const getValue = () => {
    return progress;
  };


  return (
    <div className="bg-neutral h-6 rounded-lg">
      
      <div className="bg-green-500 h-5  rounded-lg" style={{ width: `${progress}%`, backgroundColor : getColor() }}>{getValue()}%</div>
    </div>
  );
};

export default Progress;
