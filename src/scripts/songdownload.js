window.addEventListener("load", async e => {

    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("The download script is running")
    if(!document.URL.includes("www.smule.com/recording/")) 
        return;
    let moreActionsButton;
    for(const element of document.getElementsByTagName("button")) if(element.ariaLabel == "More actions") {
        moreActionsButton = element;
        break;
    }
    console.log(moreActionsButton);
    if(!moreActionsButton) 
        throw new Error("'more actions' button not found");
});