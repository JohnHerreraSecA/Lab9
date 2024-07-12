// photo.js
$(document).ready(function() {
    // Function to filter the gallery
    function filterGallery(category) {
        if (category === 'all') {
            $('.photo').show();
        } else {
            $('.photo').hide();
            $(`.photo[data-category='${category}']`).show();
        }
    }

    // Event handler for filter buttons
    $('button.filter').click(function() {
        const category = $(this).attr('onclick').replace('filterGallery(\'', '').replace('\')', '');
        filterGallery(category);
    });

    // Lightbox functionality
    $('.photo img').click(function() {
        const src = $(this).attr('src');
        const caption = $(this).next('.caption').text();
        $('#img01').attr('src', src);
        $('#caption').text(caption);
        $('#myModal').show();
    });

    // Close the lightbox
    $('.close').click(function() {
        $('#myModal').hide();
    });
});

