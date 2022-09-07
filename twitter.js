console.log('start Twitter adblocker');

function removeAds() {
    // *** Get all elements on the page
    let wholePage = document.getElementById("react-root")
 
    // *** Restrict our feed search to ONLY spans & divs
    let pageDivsAndSpans = wholePage.querySelectorAll('span,div')

    
    for (let i = 0; i < pageDivsAndSpans.length; ++i) {
        if (pageDivsAndSpans[i].innerHTML === 'Promoted') {
           let card = pageDivsAndSpans[i].closest(".css-1dbjc4n r-1adg3ll r-1ny4l3l");
            // If the class changed and we can't find it with closest(), get the 9th parent
               if (card === null) {
                   // Could also be card.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode :D
                   let j = 0;
                   card = pageDivsAndSpans[i];
                   while (j < 9) {
                       card = card.parentNode;
                       ++j;
                   }
               }
           card.setAttribute("style", "display: none !important;");
   
   
            
        }
    }


}


removeAds();

// Ensures ads will be removed as the user scrolls

setInterval(function () {
    removeAds();
}, 100)
