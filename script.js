let shareBtn = document.querySelector(".share");
let shareToolTip = document.querySelector(".share-tool-tip");
let authorComponent = document.querySelector(".author-component");
let authorInfo = document.querySelector(".author-info");
let shareMobileView = document.querySelector(".share-mobile-view");
shareBtn.addEventListener('click',toggleClick);
function toggleClick() {
    if(window.innerWidth >= 426 ){
        if(shareToolTip.style.display === 'flex'){
            shareToolTip.style.display = 'none';
        }else{
            shareToolTip.style.display = 'flex';
        }
    }
    if(window.innerWidth <= 425){
        shareToolTip.style.display = 'none';
        authorComponent.classList.toggle('black');
        authorInfo.classList.toggle('d-none');
        shareMobileView.classList.toggle('show');
    }
}