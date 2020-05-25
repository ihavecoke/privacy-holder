## Privacy Holder

Hide some sensitive data with character '*'

### Features
1. Support hide common user data like: email, phone number, id card etc.
2. Support Custom rules (fragment method) to hide sensitive data.
3. Test Coverage 100%

### Install

```bash
yarn add privacy-holder
```

or

```bash
npm install privacy-holder
```

> PS: Do not install version `0.0.4, 0.0.5` these versions are break

### Usage

```javascript
 const privacy = require('privacy-holder')
```

Then

```javascript
 privacy.email("ihavecoke@163.com") // ih*******@163.com
 privacy.name("ihavecoke") // *
 privacy.name("i havecoke") // *havecoke
 privacy.idCard("510122199102132018") // 510***19******2018
 privacy.phoneNumber("13800000000") // 138****0000
 privacy.all('all-will-be-*') // *************
```


Also, you can custom rules like this

```javascript
 privacy.fragment('abcdefgi','####',2,6) // ab####i
```
