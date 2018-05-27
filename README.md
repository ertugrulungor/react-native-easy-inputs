# react-native-easy-inputs
Input components for React Native app

## Get Started

### Installation

> npm install react-native-easy-inputs

### Usage

Basic usage is as follows

```js
import { EmailInput } from 'react-native-easy-inputs';

<EmailInput
    errorMessage={"asdas"}
    placeholder={"dsds"}
    provider={"gmail.com"}
    errorStyle={{ fontSize: 12 }}
    inputStyle={{ backgroundColor: '#fff' }}
    onChange={(data) => {
        console.log(data);
    }}/>
```

## TODO
* [x] Email Input
* [x] Password Input
* [ ] Money Input 
* [ ] Telephone Input
* [ ] Ip Adress Input
