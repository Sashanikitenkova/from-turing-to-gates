$(document).ready(function(){

    $('#backBtn').click(() => window.history.back());
    $('#forwardBtn').click(() => window.history.forward());
    $('#closeBtn').click(() => alert('You can not close the tabs form browser with JS, but this is a fake button :)'));
    $('#homeBtn').click(() => window.location.href='https://example.com');
    
    $('#goBtn').click(() => {
        let url = $('#urlInput').val().trim();
        
        if(!url) {
            alert("Please enter a website address");
            return;
        }

        if (!/^https?:\/\//i.test(url)) {
            url = 'https://' + url;
        }

        window.open(url, "_blank");
        $('#urlInput').val('');
        $('#urlInput').focus();
    })

    $('.toggle-img').click(function () {
        const img = $(this);
        const currentSrc = $(this).attr('src');
        const altSrc = $(this).attr('data-alt');

        img.fadeOut(300, function() {
            img.attr('src', altSrc);
            img.attr('data-alt', currentSrc);
            img.fadeIn(300);
        });
    });

})

