//jshint esversion:6
module.exports = getdate;

function getdate() {
    
let  options = {
    weekday: "long",
    day : "numeric",
    month : "long"
};

let day = today.toLocaleDateString("en-US", options);

return day;
}