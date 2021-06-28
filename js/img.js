let images = [];
for(let i=0;i<9;i++){
    images[i]=new Image();
    images[i].src ="dress/anh" + i + ".jpg";
}

let index = 0;
function next(){
    index ++;
    if(index>=images.length){
        index=0;
    }
    let anh = document.getElementById('anh');
    anh.src = images[index].src;
    document.getElementById("num").innerHTML = index+1;
}

function prev(){
    index--;
    if(index<0){
        index=images.length-1;
    }
    let anh = document.getElementById("anh");
    anh.src = images[index].src;
    document.getElementById("num").innerHTML = index+1;
}