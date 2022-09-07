console.log('the start of the Reddit code');

function removeAds() {
    // *** Get all elements on the page
    let wholePage = document.getElementById("2x-container")
 
    // *** Restrict our feed search to ONLY spans & divs
    let pageDivsAndSpans = wholePage.querySelectorAll('span,div')

    
    for (let i = 0; i < pageDivsAndSpans.length; ++i) {
        if (pageDivsAndSpans[i].innerHTML === 'promoted') {
           let card = pageDivsAndSpans[i].closest("._2oEYZXchPfHwcf9mTMGMg8 V0WjfoF5BV7_qbExmbmeR");
            // If the class changed and we can't find it with closest(), get the 10th parent
               if (card === null) {
                   // Could also be card.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode :D
                   let j = 0;
                   card = pageDivsAndSpans[i];
                   while (j < 10) {
                       card = card.parentNode;
                       ++j;
                   }
               }
           card.remove()
   
            
        }
    }
    

}

let pixel = document.getElementById('acceptabletest')
pixel.remove()

removeAds();

// Ensures ads will be removed as the user scrolls

setInterval(function () {
    removeAds();
}, 100)