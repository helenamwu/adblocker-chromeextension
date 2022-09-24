console.log('the start of the Facebook code');

function removeAds() {
    // *** Get all elements in the main feed
    let mainFeed = document.querySelector('[role^="main"]')
    // let wholePage = document.querySelector('[id^="mount_0_0_"]')
    // let wholePage = document.getElementsByClassName("vsc-initialized")
 
    // *** Restrict our feed search to ONLY spans & divs
    let pageDivsAndSpans = mainFeed.querySelectorAll('span,div')

    
    for (let i = 0; i < pageDivsAndSpans.length; ++i) {
        if (pageDivsAndSpans[i].innerHTML === 'Sponsored') {
           let card = pageDivsAndSpans[i].closest("g4tp4svg mfclru0v om3e55n1 p8bdhjjv sponsored_ad");
            // If the class changed and we can't find it with closest(), get the 21st parent
               if (card === null) {
                   // Could also be card.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode :D
                   let j = 0;
                   card = pageDivsAndSpans[i];
                   while (j < 21) {
                       card = card.parentNode;
                       ++j;
                   }
               }
           card.remove()
   
            
        }

    }

}


// Ensures ads will be removed as the user scrolls

setInterval(function () {
    removeAds();
}, 100)


function removeRightRail() {
    
     // for the right feed
     let rightFeed = document.querySelector('[data-pagelet^="RightRail"]')
    
     let rightDivsAndSpans = rightFeed.querySelectorAll('span,div')
 
     for (let i = 0; i < rightDivsAndSpans.length; ++i) {

        if (rightDivsAndSpans[i].className === 'sponsored_ad') {
            let card = rightDivsAndSpans[i].closest("sponsored_ad");
 
            console.log('Found card with sponsored_ad class: ', card)
    
            // If the class changed and we can't find it with closest(), get the 3rd parent
            if (card === null) {
    
                console.log('Card was null. Proceeding with internal if loop')

                // Could also be card.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode :D
                let j = 0;
                card = rightDivsAndSpans[i];
                while (j < 2) {
                    card = card.parentNode;
                    ++j;
                }
             card.remove()
            }
        }
 
     }
}

removeRightRail()