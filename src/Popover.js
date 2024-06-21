import React, { useState, useEffect, useRef } from 'react';
import Button from "./Button"
import './Popover.css';
import AnchorTag from './AnchorTag';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const defaultActions = [
    {
        id: 'confirm_dialog',
        label: 'Confirm Button',
        isLink: false,
        isButton: true,
        imgPath: CheckIcon,
        buttonData: {
            disabled: false,
            callbackFun: () => { window.confirm('Press a button') },
        },
    },
    {
        id: 'apple',
        label: 'Apple(Link)',
        isLink: true,
        isButton: false,
        imgPath: AppleIcon,
        imgAlt: 'Apple logo',
        customClasses: 'class1 class2',
        hrefData: {
            link: 'https://apple.com',
            openNewPage: false,
        },
    },
    {
        id: 'disabled_btn',
        label: 'Disabled button',
        isLink: false,
        isButton: true,
        imgPath: CloseIcon,
        imgAlt: 'close icon',
        buttonData: {
            disabled: true,
            callbackFun: () => { console.log('btn 2 fun') },
        },
        
    },
    {
        id: 'google',
        label: 'Google(Link)',
        isLink: true,
        isButton: false,
        imgPath: GoogleIcon,
        imgAlt: 'Google logo',
        customClasses: 'class1 class2',
        hrefData: {
            link: 'https://google.com',
            openNewPage: true,
        },
    },
]


const Popover = ({ actions = defaultActions, popOverBtnCustomClasses = '', popOverBtnName = 'Click here' }) => {
    const [popoverState, setPopoverState] = useState(false);
    const popoverEle = useRef(null);
    const btnEle = useRef(null);

    useEffect(() => {
        document.addEventListener('click', eve => {
            if (popoverEle.current) {
                if (eve.target === popoverEle.current || popoverEle.current.contains(eve.target) || eve.target === btnEle.current) {
                } else {
                    setPopoverState(false);
                }
            }
        });
    }, [popoverEle]);

    return <>
        <div className='btn-popover-actions' >
            <Button onClickFun={() => setPopoverState(!popoverState)} buttonName={popOverBtnName} refEle={btnEle} customClasses={popOverBtnCustomClasses} />
            {popoverState && <>
                <ul className="popover-menu" role="menu" ref={popoverEle}>
                    {actions && actions.map(action => {
                        return <>
                            <li className={`menu-item ${action.isButton && action.buttonData.disabled ? 'disabled': ''}`} role="presentation">
                                <AnchorTag data={action} setPopoverState={setPopoverState}/>
                            </li>
                        </>
                    })}
                </ul>
                <div className='popover-backdrop'></div>
            </>}
        </div>
    </>
}

export default Popover;