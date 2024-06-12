var imagens_index = 1;
mostrar_imagens(imagens_index);
function passar_imagens(num){
    mostrar_imagens(imagens_index += num)
}
function current_slides(num){
    mostrar_imagens(imagens_index = num)
}
function mostrar_imagens(num){

    var imagens = document.getElementsByClassName("fade");
    var i;

    if(num<1){
        imagens_index = imagens.length;
    }
    
    if(num>imagens.length){
        imagens_index = 1;
    }

    for(i=0; i<imagens.length; i++){
        imagens[i].style.display = "none"
    }

    imagens[imagens_index-1].style.display = "block";
}