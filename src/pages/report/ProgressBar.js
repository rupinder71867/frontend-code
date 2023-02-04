import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = (props) => {
 const { color, percentage } = props
 return (
  <div style={{ width: 200, height: 200, marginLeft: '10%', }}>
   <CircularProgressbar value={percentage} styles={buildStyles({ pathColor: color })}
   />
  </div>

 )

}
export default ProgressBar;
