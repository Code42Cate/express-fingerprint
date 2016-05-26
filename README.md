# Supercookie express middleware

Default implementation is `Never trust clients`, So collect only server-side information.  
But you can push additional parameter with initialization config.  

http://programmers.stackexchange.com/questions/122372/is-browser-fingerprinting-a-viable-technique-for-identifying-anonymous-users

### Installation

```
npm install express-supercookie
```
### Usage

#### As a Express middleware

```javascript
var Supercookie = require('express-supercookie')

app.use(Supercookie({
	// Additional parameters
	paramters:[
		function(next) {
			// ...do something...
			next(null,['param1','param2'])
		},
		function(next) {
			// ...do something...
			next(null,'param3','param4')
		},
	]
}))
```

### List of fingerprinting sources

* User Agent
* HTTP_ACCEPT Headers
* GEO-ip

#### License

MIT
