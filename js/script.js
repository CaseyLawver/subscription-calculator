var subTypeElement = document.querySelector(".subscription-select");
var subDurationElement = document.querySelector(".duration-select");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = Number(1);

subTypeElement.addEventListener("change", function (e) {
    subType = e.target.value;
    updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function(e){
subDuration = Number(e.target.value);
updateSubscriptionDiv();
});

var updateSubscriptionDiv = function () {
    var monthlyCost = Number(5);
if (subType === "standard") {
   monthlyCost = Number(7);
} else if (subType === "premium") {
    monthyCost = Number(10);
}
var total = subDuration * monthlyCost;
result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}`;
};