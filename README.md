# react-native-easy-inputs
Input components for React Native app

## Get Started

### Installation

> npm install react-native-easy-inputs

##  Components

### Email Input
```js
import { EmailInput } from 'react-native-easy-inputs';

<EmailInput 
	errorMessage={"wrong format"}
	placeholder={"type here.."}
	onChange={(data) => {
		console.log(data); //true, false
	}}
/>;
```

### Password Input

```js
import { PasswordInput } from 'react-native-easy-inputs';

<PasswordInput
	placeholder={"type here.."}
	errorStyle={{ fontSize:  12 }}
	inputStyle={{ backgroundColor:  '#fff' }}
	onChange={(data) => {
		console.log(data); //[0..100]
	}}
/>
```

## TODO
* [x] Email Input
* [x] Password Input
* [ ] Money Input 
* [ ] Telephone Input
* [ ] Ip Adress Input
