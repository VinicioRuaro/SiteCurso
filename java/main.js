const imagesBaleia = [ 'img/baleiaAzul1.jpg' , 'img/baleiaAzul2.jpg', 'img/baleiaAzul3.jpg'];
    let currentBaleia = 0;

    function changePhotoBaleia(x) {
        currentBaleia = currentBaleia + x;
        if (currentBaleia > 2) 
            currentBaleia = 0;
        if (currentBaleia < 0)
            currentBaleia = 2;
        let imgPhotoBaleia = document.getElementById('imgPhotoBaleia');
        imgPhotoBaleia.src = imagesBaleia[currentBaleia];
    }




const imagesPeixeBoi= [ 'img/peixeBoi1.jpg' , 'img/peixeBoi2.jpg', 'img/peixeBoi3.jpg'];
    let currentPeixeBoi = 0;

    function changePhotoPeixeBoi(x) {
        currentPeixeBoi = currentPeixeBoi + x;
        if (currentPeixeBoi > 2) 
            currentPeixeBoi = 0;
        if (currentPeixeBoi < 0)
             currentPeixeBoi = 2;
        let imgPhotoPeixeBoi = document.getElementById('imgPhotoPeixeBoi');
          imgPhotoPeixeBoi.src = imagesPeixeBoi[currentPeixeBoi];
}


const imagesPanda= [ 'img/panda.jpg' , 'img/panda2.jpg', 'img/panda3.jpg'];
    let currentPanda = 0;

    function changePhotoPanda(x) {
        currentPanda = currentPanda + x;
        if (currentPanda > 2) 
            currentPanda = 0;
        if (currentPanda < 0)
             currentPanda = 2;
        let imgPhotoPanda = document.getElementById('imgPhotoPanda');
          imgPhotoPanda.src = imagesPanda[currentPanda];
}

const imagesonca= [ 'img/onça.jpg' , 'img/onça2.jpg', 'img/onça3.jpg'];
    let currentonca = 0;

    function changePhotoonca(x) {
        currentonca = currentonca + x;
        if (currentonca > 2) 
            currentonca = 0;
        if (currentonca < 0)
             currentonca = 2;
        let imgPhotoonca = document.getElementById('imgPhotoonca');
          imgPhotoonca.src = imagesonca[currentonca];
}


const imagesrino= [ 'img/rino.jpg' , 'img/rino2.jpg', 'img/rino3.jpg'];
    let currentrino = 0;

    function changePhotorino(x) {
        currentrino = currentrino + x;
        if (currentrino > 2) 
            currentrino = 0;
        if (currentrino < 0)
             currentrino = 2;
        let imgPhotorino = document.getElementById('imgPhotorino');
          imgPhotorino.src = imagesrino[currentrino];
}

const imagesAnimaisAquaticos= [ 'img/baleiaAzul1.jpg' , 'img/peixeBoi1.jpg', 'img/tubaraoFrade.jpg' , 'img/peixeBoi2.jpg', 'img/baleiaAzul3.jpg' , 'img/peixeBoi3.jpg',];
    let currentAnimaisAquaticos = 0;


function changePhotoAnimaisAquaticos(x) {
    currentAnimaisAquaticos = currentAnimaisAquaticos + x;
    if (currentAnimaisAquaticos > 5) 
        currentAnimaisAquaticos = 0;
    if (currentAnimaisAquaticos < 0)
         currentAnimaisAquaticos = 5;
    let imgPhotoAnimaisAquaticos = document.getElementById('imgPhotoAnimaisAquaticos');
      imgPhotoAnimaisAquaticos.src = imagesAnimaisAquaticos[currentAnimaisAquaticos];
    contarTempoAnimaisAquaticos();
}
function contarTempoAnimaisAquaticos(){
    setTimeout("changePhotoAnimaisAquaticos(1);",2000);
}

    

const imagesAnimaisTerrestes= [ 'img/onça.jpg' , 'img/panda.jpg', 'img/rino.jpg', 'img/onça2.jpg' , 'img/panda2.jpg', 'img/rino2.jpg', 'img/onça3.jpg' , 'img/panda3.jpg', 'img/rino3.jpg',];
    let currentAnimaisTerrestes = 0;

function changePhotoAnimaisTerrestes(x) {
    currentAnimaisTerrestes = currentAnimaisTerrestes + x;
    if (currentAnimaisTerrestes > 8) 
        currentAnimaisTerrestes = 0;
    if (currentAnimaisTerrestes < 0)
         currentAnimaisTerrestes = 8;
    let imgPhotoAnimaisTerrestes = document.getElementById('imgPhotoAnimaisTerrestes');
        imgPhotoAnimaisTerrestes.src = imagesAnimaisTerrestes[currentAnimaisTerrestes];
    contarTempoAnimaisTerrestes();
}
function contarTempoAnimaisTerrestes(){
    setTimeout("changePhotoAnimaisTerrestes(1);",2000);
}


    

