function produceDrivingRange(blockrange){
  return function (block1, block2){
    let start = parseInt(block1)
    let end = parseInt(block2)
    let range = Math.abs(start - end)
    
    // if blockrange < 10 return 
    let difference = blockrange - range
    if (difference > 0){
      return `within range by ${difference}`}
      else{
        return `${Math.abs(difference)} blocks out of range` 
      }
    
  }
}  

function produceTipCalculator(tip){

  return function(fare){
    return fare * tip
  }
}