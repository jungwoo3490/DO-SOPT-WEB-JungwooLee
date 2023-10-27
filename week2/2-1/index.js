const imageBoxList = document.querySelectorAll('.section_1_image_box');
const imageTitleList = document.querySelectorAll('.image_title');
const imageContentList = document.querySelectorAll('.image_content');

imageBoxList.forEach(function(imageBox) {

    imageBox.addEventListener('mouseover', function() {

        imageBox.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        
        const title = imageBox.querySelector('.image_title');
        const content = imageBox.querySelector('.image_content');
        
        title.style.display = 'block';
        content.style.display = 'block';
    });

    imageBox.addEventListener('mouseout', function() {

        imageBox.style.backgroundColor = 'transparent';

        const title = imageBox.querySelector('.image_title');
        const content = imageBox.querySelector('.image_content');

        title.style.display = 'none';
        content.style.display = 'none';
    });
});


window.addEventListener('scroll', function() {

    const innerHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const topButton = document.querySelector('.top_button');
    
    topButton.style.opacity = scrollY / innerHeight;
});