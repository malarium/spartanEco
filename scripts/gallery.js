var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: 'images/gallery/pic1.jpg',
        w: 900,
        h: 900
    },
    {
        src: 'images/gallery/pic2.jpg',
        w: 900,
        h: 900
    },
    {
       src: 'images/gallery/pic3.jpg',
        w: 900,
        h: 900 
    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();

gallery.listen('close', function() {
    window.location.href='index.html'
 });