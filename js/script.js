var subTypeElement = document.querySelector(".subscription-select");
var subDurationElement = document.querySelector(".duration-select");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = Number(1);

subTypeElement.addEventListener("change", function (e) {
    subType = e.target.value;
});

subDurationElement.addEventListener("change", function(e){
subDuration = Number(e.target.value);
console.log(subDuration);
});