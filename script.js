let shareBtn = document.querySelector(".share");
let shareToolTip = document.querySelector(".share-tool-tip");
shareBtn.addEventListener('click',toggleClick);
function toggleClick() {
    if(shareToolTip.style.display === 'flex'){
        shareToolTip.style.display = 'none';
    }else{
    shareToolTip.style.display = 'flex';
    }
}