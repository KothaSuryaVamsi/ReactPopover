

const AnchorTag = ({ data, setPopoverState }) => {

    const handleOnClick = () => {
        if (data.isButton) {
            if (data.buttonData.callbackFun) data.buttonData.callbackFun();   
        }
        if (setPopoverState) setPopoverState(false);
    }
    const { imgPath: DynamicImgPath } = data;
    
    return <a 
        href={data.isLink ? data.hrefData.link : 'javascript:void(0)'} 
        id={data.id} 
        aria-label={data.ariaLabel} 
        className={`menu-item-link  ${data.customClasses} `} 
        target={data.isLink && data.hrefData.openNewPage ? '_blank' : '_self'}
        onClick={handleOnClick}
    
    >
        {data.imgPath && <DynamicImgPath />}
        <span>{data.label} </span>
    </a>
}

export default AnchorTag;