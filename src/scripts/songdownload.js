(async () => {
    while(true) {
    // console.log("The download script is running")
    // console.log(window.location.href);
        if(!window.location.href.includes("recording/")) {
            await new Promise(resolve => setTimeout(resolve, 10));
            continue;
        }
        let moreActionsButton;
        for(const element of document.getElementsByTagName("button")) if(element.ariaLabel == "More actions") {
            moreActionsButton = element;
            break;
        }
        // console.log("The download script is runningasga")
        if(!moreActionsButton) {
            console.log("'more actions' button not found");
            await new Promise(resolve => setTimeout(resolve, 500));
            continue;
        }

        if(moreActionsButton.injected) {
            await new Promise(resolve => setTimeout(resolve, 500));
            continue;
        }

        moreActionsButton.injected = true;
        moreActionsButton.addEventListener("click", async () => {
            await new Promise(resolve => setTimeout(resolve, 10));

            for(const element of moreActionsButton.parentElement.children) if(element.tagName === "NAV") {
                const navList = element.children[0];

                const downloadButton = navList.appendChild(navList.children[1].cloneNode(2));

                downloadButton.querySelector("span span").innerText = "Download";

                const aElement = downloadButton.querySelector("a");

                aElement.href = document.getElementsByClassName("vjs-tech")[0].src;

                aElement.download = true;

                break;
            }
        });
    }
})();