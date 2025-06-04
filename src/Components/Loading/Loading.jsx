import './Loading.css'
import Loading_Img from '../../assets/images/loading.gif'

const Loading = () => {
  return (
    <div className='loading'>

        <img src={Loading_Img} alt="Loading" />
        
    </div>
  )
}

export default Loading