function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
};

let mondayWork = function (business="go to the office"){
    return `This Monday, I will ${business}.`
};

let wrapAdjective = (flair = "*") => {
    return function (adj = "special") {
        return `You are ${flair}${adj}${flair}!`;
    };
};