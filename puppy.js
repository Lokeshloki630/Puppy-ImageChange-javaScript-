let buttonid =document.getElementById("buttonid");
let likeimage =document.getElementById("likeimage");
let puppyImage =document.getElementById("puppyImage");
let isImageLiked=true;
function onClickLikeButton(){
    if (isImageLiked===true){
        puppyImage.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        buttonid.style.backgroundColor="#0967d2";
        buttonid.style.color="#ffffff";
        likeimage.style.color="#0967d2";
        isImageLiked=false;
    }
    else{
        puppyImage.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        buttonid.style.backgroundColor="#cbd2d9";
        buttonid.style.color="#9aa5b1";
        likeimage.style.color="#cbd2d9";
        isImageLiked=true;
    }
}