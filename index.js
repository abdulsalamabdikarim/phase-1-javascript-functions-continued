//console.log(saturdayFun()); can be accessed before initialization
//because functions declared in this way are hoisted
function saturdayFun(activity = `roller-skate`){
    return `This Saturday, I want to ${activity}!`;
}
//console.log(mondayWork()); cannot be accessed before initialization
//because it is a function expression. It is not hoisted
const mondayWork = function(activity = `go to the office`){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(visualFlair = `*`){
    return function(praise = `special`){
        return `You are ${visualFlair}${praise}${visualFlair}!`;
    }
}

//console.log(wrapAdjective(`%%`)(`awesome`));