function nextTock(cb,n,thisArg){
	function tick(){
		if(n--)
			process.nextTick(tick)
		else
			cb.call(thisArg)
	}
	tick()
}
nextTock.nextTock= nextTock
module.exports= nextTock
