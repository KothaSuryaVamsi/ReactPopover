# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# Output:
![Example Image](Output/screenshot.png)


## Commands to install and usage:
### npm i react-button-popover

import like this in your component 
### import Popover from 'react-button-popover'

the Popover component has the below props:
### actions: array of objects, popOverBtnCustomClasses: string, popOverBtnName: string

## example for props:

### actions:
```json
[
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

```

### popOverBtnCustomClasses:
"btn btn-primary btn-icon"

### popOverBtnName:
"Click here"