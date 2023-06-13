import { comme } from './PostComments';
import './style/PostComments.css'

interface props{
  comme: comme;
}

const Com = (props: props) =>{

  const {comme} = props;
  return (
    
    <p className='PostCommentsP'><b>{comme.name}</b>: {comme.comment}</p>
    
  )
}

export default Com
