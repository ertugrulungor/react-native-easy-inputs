# react-native-easy-inputs
Input components for React Native app

## Get Started

### Installation

> npm install react-native-easy-inputs

### Usage

Basic use is as follows

```js
import { EmailInput } from 'react-native-easy-inputs';

<EmailInput 
	errorMessage={"wrong format"}
	placeholder={"type here.."}
	onChange={(data) => {
		console.log(data);
	}}
/>;
```

## TODO
* [x] Email Input
* [ ] Password Input
* [ ] Money Input 
* [ ] Telephone Input
* [ ] Ip Adress Input
