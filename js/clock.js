(function(){
console.info("Hello JS")


let myNode = document.createElement('div');
document.getElementById('digitalClock').appendChild(myNode)

// let myDate = new Date();
// myNode.innerHTML = myDate.toTimeString();
// console.dir(myDate);

let updateTime = function(){
    let myDate = new Date();
    myNode.innerHTML = myDate.toTimeString().substring(0,8);    //substring, makes a substring of the string from toTimeString and then the (0,8) 
                                                                //params means you want the first character which is the 0 up to the last character of the time which is the 8th character
}

setInterval(updateTime, 1000);
updateTime();
})();