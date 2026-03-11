document.addEventListener('DOMContentLoaded', function() {

    const thumbnails = document.querySelectorAll('.thumbnail');
    const largeImage = document.getElementById('largeImage');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {

            const largeImageUrl = this.getAttribute('data-large');
            const imageTitle = this.getAttribute('title') || this.getAttribute('alt');

            largeImage.style.opacity = 0;

            setTimeout(() => {
                largeImage.src = largeImageUrl;
                largeImage.alt = imageTitle;
                largeImage.style.opacity = 1;
                largeImage.style.display = 'block';
            }, 300);
        });
    });

});