window.addEventListener('load', () => {
    const image1 = document.getElementById('image1');
    image1.addEventListener('click', () => {
        window.location.href = '/pages/about/about.html';
    });

    const image2 = document.getElementById('image2');
    image2.addEventListener('click', () => {
        window.location.href = '/pages/clouds/clouds.html';
    }); 

    const image3 = document.getElementById('image3');
    image3.addEventListener('click', () => {
        window.location.href = '/pages/meshes/meshes.html';
    });  

    const image4 = document.getElementById('image4');
    image4.addEventListener('click', () => {
        window.location.href = '/pages/paper/paper.html';
    });       

    const image5 = document.getElementById('image5');
    image5.addEventListener('click', () => {
        window.location.href = '/pages/generate/generate.html';
    });            

    const image6 = document.getElementById('image6');
    image6.addEventListener('click', () => {
        window.location.href = '/pages/mothlight/mothlight.html';
    });            
});

const image7 = document.getElementById('image7');
image7.addEventListener('click', () => {
    window.location.href = '/pages/footage/footage.html';
});

const image8 = document.getElementById('image8');
image8.addEventListener('click', () => {
    window.location.href = '/pages/story/story.html';
});