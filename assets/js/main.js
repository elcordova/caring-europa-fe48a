jQuery(document).ready(function($) {
    const {annotate, annotationGroup} = RoughNotation;
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
                jsPDF:        { format: 'a4', orientation: 'portrait', precision:100, putOnlyUsedFonts:true }
                };
            html2pdf().set(opt).from(wrapper).save('elcordova.pdf');
        });

        const downloadButon = $(".btn")[0];
        const downloadButtonAnimation = annotate(downloadButon, { type: 'box' });
        downloadButtonAnimation.show();

        const skillset = $(".skillset")[0];
        const skillsetAnimation = annotate(skillset, { type: 'crossed-off' });
        skillsetAnimation.show();

        var jobTitleArray = [];
        $(".upper-row").each((index,e)=>{
            const annotation = annotate(e, { type: 'highlight', color:'yellow' });
            jobTitleArray.push(annotation);
        });

        $(".project-title").each((index,e)=>{
            const annotation = annotate(e, { type: 'circle', color:'red' });
            jobTitleArray.push(annotation);
        });
        
        const ag = annotationGroup(jobTitleArray);
        ag.show();
        

    });
   
    

});