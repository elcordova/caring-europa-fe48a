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
                margin:       0,
                filename:     'elcordova_cv.pdf',
                html2canvas:  { windowWidth:  1500},
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
                };
            html2pdf().set(opt).from(wrapper).save('elcordova.pdf');
        });

    });
   
    

});