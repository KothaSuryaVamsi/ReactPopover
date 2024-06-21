


const Button = ({ buttonName, onClickFun, ariaLabel = '', customClasses = '', disabled = false, buttonId = '', refEle = null }) => {
    return <button type="button" ref={refEle} id={buttonId} disabled={disabled} className={" " + customClasses} onClick={onClickFun} aria-label={ariaLabel}>{buttonName}</button>
}

export default Button;