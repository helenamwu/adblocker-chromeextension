/*
    This event triggers when the browser has committed to loading a webpage.
    As opposed to e.g. webNavigation.onCompleted, this will start to run early
    so that we can begin to remove ads as soon as possible.
*/
chrome.webNavigation.onCommitted.addListener(function (tab) {
    // Prevents script from running when other frames load
    if (tab.frameId == 0) {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {

            // Get the URL of the webpage
            let url = tabs[0].url;
            // Remove unnecessary protocol definitions and www subdomain from the URL
            // changed to https to fix bug
            let parsedUrl = url.replace("https://", "")
                .replace("https://", "")
                .replace("www.", "")

            // Remove path and queries e.g. linkedin.com/feed or linkedin.com?query=value
            // We only want the base domain
            let domain = parsedUrl.slice(0, parsedUrl.indexOf('/') == -1 ? parsedUrl.length : parsedUrl.indexOf('/'))
                .slice(0, parsedUrl.indexOf('?') == -1 ? parsedUrl.length : parsedUrl.indexOf('?'));

            try {
                console.log(domain);
                if (domain.length < 1 || domain === null || domain === undefined) {
                    return;
                } else if (domain === "www.linkedin.com") {
                    runLinkedinScript();
                    return;
                } else if (domain === "twitter.com") {
                    runTwitterScript();
                    return;
                } 

                
            } catch (err) {
                throw err;
            }

        });
    }
});


function runLinkedinScript() {
    // Inject script from file into the webpage
    chrome.tabs.executeScript({
        file: 'linkedin.js'
    });
    return true;
}

function runTwitterScript() {
    // Inject script from file into the webpage
    chrome.tabs.executeScript({
        file: 'twitter.js'
    });
    return true;
}
