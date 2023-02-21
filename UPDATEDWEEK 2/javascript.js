function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("./image1.png")) {
        image.src = "https://cdn.wallpapersafari.com/80/27/wfxuD0.jpg";
    }
    else if(image.src.match("https://cdn.wallpapersafari.com/80/27/wfxuD0.jpg")){
        image.src ="https://compote.slate.com/images/e215b527-a335-4674-89ee-3145892c8737.jpg";
    }
    else if(image.src.match("https://compote.slate.com/images/e215b527-a335-4674-89ee-3145892c8737.jpg")){
        image.src ="https://i.pinimg.com/originals/a3/f8/1f/a3f81f8ad847c3c55fec11de5edee010.jpg";
    }
    else if(image.src.match("https://i.pinimg.com/originals/a3/f8/1f/a3f81f8ad847c3c55fec11de5edee010.jpg")){
        image.src ="https://tse4.mm.bing.net/th?id=OIP.RhuxkWjAH0SKDkTQ55zzMQHaEK&pid=Api&P=0";
    }
    else {
        image.src = "./image1.png";
    }
}