import "./ErrorTxt.css";

function ErrorTxt({ children }) {

  return (
    <div className='errorMsg'>
        <span className='icon-wrench'>{ children }</span>
    </div>
  )
}

export default ErrorTxt