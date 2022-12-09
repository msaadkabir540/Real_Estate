import { usePromiseTracker } from 'react-promise-tracker';
// import  { Watch } from 'react-loader-spinner'
import { BeatLoader} from 'react-spinners'


export default function Loader(){
    


    
const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
    return (
    promiseInProgress &&
    //  <h1>Please Wait!</h1>
    <div
      style={{
        width: "100vw",
        height: "25vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <BeatLoader color="#b39e3c" height="100%" width="100%" size={30} />
    </div>
   );  
  }


    return(

        <>
        <div className=''>

         <LoadingIndicator/>
        </div>
        </>
    )
}