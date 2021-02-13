function $(s) {
    return document.querySelector(s);
}

//Set each section
let customSelectContainer = $(".select-container")
let customSelectOpts = $(".select-options");
let customSelectedPlan = $(".select-selected");
let customSelectArrow = $(".arrow");
let checkMark = document.createElement("div");



customSelectedPlan.innerHTML = $(".select-opt2").innerHTML

customSelectOpts.classList.remove("hide");



//on click, open options
customSelectedPlan.addEventListener("click", function (e) {
    hideOptions(false);
})

//on selecting option, close options
customSelectOpts.addEventListener("click", function(e){
    if (e.target.classList.contains("select-opt") && !e.target.classList.contains("select-selected")) {
        setCustomSelected(e, false);
    } else if (e.target.parentNode.classList.contains("select-opt")) {
        setCustomSelected(e, true);
    }
    // customSelectOpts.classList.add("hide");
    hideOptions(true);
})

// hide options
function hideOptions(hide){
    let options = document.querySelectorAll(".select-opt");
    options.forEach(function(opt){
        if(!opt.classList.contains("select-selected"))
        {
            if(hide){
                opt.classList.remove("highlight");
                customSelectOpts.classList.add("hide");
                customSelectArrow.classList.remove("arrow--up");
                customSelectArrow.classList.add("arrow--down");
            }
            else{
                opt.classList.add("highlight");
                customSelectOpts.classList.remove("hide");
                customSelectArrow.classList.add("arrow--up");
                customSelectArrow.classList.remove("arrow--down");
            }
        }

    })
}

// set the selected text and data to the option clicked
function setCustomSelected(e, parent) {
    if (parent){
        customSelectedPlan.innerHTML = e.target.parentNode.innerHTML;
    }
    else{
        customSelectedPlan.innerHTML = e.target.innerHTML; 
    }
}