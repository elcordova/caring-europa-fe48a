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
                html2canvas:  { windowWidth: 1500, windowHeight: 3508},
                pagebreak: { mode: ['css', 'legacy'] },
                jsPDF:        { format: 'a4', orientation: 'portrait', precision:100, putOnlyUsedFonts:true, hotfixes : ["px_scaling"] }
                };
            html2pdf().set(opt).from(wrapper).save('elcordova.pdf');
        });

    });
   
    

});