const photoPaths = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
    'img/11.jpg',
    'img/12.jpg',
    'img/13.jpg'
];

function initArray(){
    for (let index = 0; index < 13; index++) {
       photoPaths.push(`img/${index+1}.jpg`);
    }
}

let currentFullView = '';

function showGallery() {
    const photosCont = document.getElementById("photos");
    photosCont.innerHTML = "";

    photoPaths.forEach( (photoPath, index) => {
        photosCont.insertAdjacentHTML("beforeend", generatePhotoView(photoPath));
    });
}

function generatePhotoView(path) {
    return `<img class="myImg" onclick="showFullView('${path}')" src="${path}">`;
}


function showFullView(path){
    currentFullView = path;
    document.getElementById("full-view").classList.remove("d-none");
    document.getElementById("full-view-img").src = `${path}`;
}

function prev(){
    let currentIndex = photoPaths.indexOf(currentFullView);
    if(currentIndex > 0)
        showFullView(photoPaths[--currentIndex]);
}

function next(){
    try{
        let currentIndex = photoPaths.indexOf(currentFullView);
        if(currentIndex < photoPaths.length - 1)
            showFullView(photoPaths[++currentIndex]);
    }catch(error){
      console.error(error);
    }
}

function closeFullView(){
    document.getElementById("full-view").classList.add("d-none");
}