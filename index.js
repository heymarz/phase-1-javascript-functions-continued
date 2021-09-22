function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
} 

//hoisting
const mondayWork = function(activity="go to the office"){
    return (`This Monday, I will ${activity}.`);
}


let wrapAdjective = function(defaul = '*'){
    return function(part1) {
        return `You are ${defaul}${part1}${defaul}!`;
    }
};
