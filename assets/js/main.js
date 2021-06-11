jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });


        $(".btn").click(function() {
            const wrapper = $(".wrapper")[0];
            var opt = {
                margin:       1,
                filename:     'elcordova_cv.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 1 },
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
                };
            html2pdf().set(opt).from(wrapper).save('elcordova.pdf');
        });

    });
   
    

});