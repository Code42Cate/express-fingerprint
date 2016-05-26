var express = require('express')
var Supercookie = require('..')

var app = express()

//
app.use(Supercookie({
	parameters:[
		function(next) {
			next(null,['test1','test2'])
		},
		function(next) {
			next(null,'test3','test4')
		},
		function(next) {
			next()
		}
	]
}))

//
app.set('port',10000)
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port)
})
app.get('*',function(req,res) {
	res.json({
		supercookie:req.supercookie
	})
})
