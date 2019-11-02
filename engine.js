
$(document).ready(function(){

  /*  $('#pl').click(function(){
        	
       // $('#preview').show();

        console.log($('#preview').css('display'));
       var preview = `<div id="preview" class="preview"></div>`;
       var previewBody = `<div id="preview-body" class="preview-body"></div>`;
       $('#pl').after(preview);
       $('#preview').show().append(previewBody);
       $('#preview-body').append($('#preview-img'))
        var prevHead = `<div class="pre-head">
                            <div class="toolbox float-right">
                                &times;
                            </div>
                        </div>`;
        $('#preview-img').show().before(prevHead);

        var prevFoot = `<div class="footer">
                        <div class="nav-box float-left">
                            <i class="fas fa-arrow-left"></i>
                        </div>
                        <div class="nav-box float-right text-right">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>`;

        $('#preview-img').after(prevFoot);


        $('.toolbox').click(function(){
            $('#preview').hide();

        });
        
    }); */
  

    $('.gthumbnail').click(function(e){
        e.preventDefault();
        //e.stopPropagation();
        //alert($(this)[0].);
        var parent = $('.gthumbnail').parent();
       // var gprev = $('.gpreview').attr('href');
       var gprev = $(this).parent().attr('href');
        // console.log(parent.index);
        // console.log(gprev);
        console.log($(this).parent().next().attr('href'));

        // Structure
        var preview = `<div id="preview" class="preview"></div>`;
       var previewBody = `<div id="preview-body" class="preview-body"></div>`;
       $('body').prepend(preview);
       $('#preview').show().append(previewBody);
       var gimg = `<img id="preview-img" src=""/>`

       $('#preview-body').append(gimg);
       $('#preview-img').attr('src',gprev)
        var prevHead = `<div class="pre-head">
                            <div class="toolbox float-right">
                                &times;
                            </div>
                        </div>`;
        

        $('#preview-img').show().before(prevHead);
     
        var prevFoot = `<div class="footer">
                        <div class="nav-box float-left">
                            <div id="prev" class="nboxl">
                                <i class="fas fa-arrow-left"></i>
                            </div>
                        </div>
                        <div class="nav-box float-right text-right">
                            <div id="nex" class="nboxr">
                                <i class="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>`;

        $('#preview-img').after(prevFoot);


        $('.toolbox').click(function(){
            $('#preview').remove();

        });

        // var par = $("#preview").();
        // if($('#preview').css('display') == 'block'){
        //     console.log('thank you1');
        //     par.click(function(){
        //     console.log('thank you2');
        //         // $('#preview').toggle();
        //     });
        // }
    
        // $(window).click(function(event){
        //      if (event.target = $('#preview')){

        //         $('#preview').hide();
        //         console.log('thank you');
        //      }
        // });

        //     var nexTag = $(this).parent();
        //     console.log(nexTag);
        // $('#nex').click(function(){
        //     var next = nexTag.next().attr('href');

        //      $('#preview-img').attr('src',next);
        // });



       var nexTag = $(this).parent().index();

       //==next-button==

        $('#nex').click(function(){
           // var next = nexTag.next().attr('href');
            var nexr = $('.gpreview').eq(nexTag).attr('href');
            var xl = $('.gpreview').length;

            if($('#preview-img').attr('src') == nexr){
                var nex = $('.gpreview').eq(nexTag + 1);

                var next =  nex.attr('href');
        
                console.log(next);
                $('#preview-img').attr('src',next);
                console.log(nexTag);
                

             }else{
               nexTag =  nexTag + 1;
                var nex = $('.gpreview').eq(nexTag + 1);

                var next =  nex.attr('href');
        
                //console.log(next);
                $('#preview-img').attr('src',next);
                
                console.log(xl);
             }
        });

        //===prev-button==
        $('#prev').click(function(){
           // var next = nexTag.next().attr('href');
            var nexr = $('.gpreview').eq(nexTag).attr('href'); 

            if($('#preview-img').attr('src') == nexr){
                var nex = $('.gpreview').eq(nexTag - 1);

                var next =  nex.attr('href');
        
                console.log(next);
                $('#preview-img').attr('src',next);
                console.log(nexTag);
                

             }else{
               nexTag =  nexTag - 1;
                var nex = $('.gpreview').eq(nexTag - 1);

                var next =  nex.attr('href');
        
                console.log(next);
                $('#preview-img').attr('src',next);
                console.log(nexTag);
             }
        });
        //===Zoom===
        $('.pre-head').click(function(){
            var imgz = $('#preview-img').css('transform','scale()');
            console.log(imgz);
        });



        //===Zoom end===
        //===Clicks outside Window===
    //     if($('#preview').css('display') == 'block'){
    //         console.log('pass');
    //     document.addEventListener("click", (evt) => {
    //         const flyoutElement = document.querySelector(".gthumbnail");
    //         let targetElement = evt.target; // clicked element

    //         do {
    //             if (targetElement == flyoutElement) {
    //                 // This is a click inside. Do nothing, just return.
    //                document.getElementById("preview").style.display = "block";
    //                 return;
    //             }
    //             // Go up the DOM
    //             targetElement = targetElement.parentNode;
    //         } while (targetElement);

    //         // This is a click outside.
    //         document.getElementById("preview").style.display = "none";
    //         //document.getElementById("preview").textContent = "Clicked outside!";
    //     });
    // }     

       //===second==
                //  if($('#preview').css('display') == 'block'){
                // var box = document.querySelector("#preview");

                // // Detect all clicks on the document
                // document.addEventListener("click", function(event) {

                // // If user clicks inside the element, do nothing
                // if (event.target.closest("#preview")) return;if (event.target.closest(".gthumbnail")) return;

                // // If user clicks outside the element, hide it!
                //     box.style.display = 'none';
                //     console.log('Bye');
                // });
                // }
        //==End==
    });

          

});
// var modal = document.getElementById('preview');
//         window.onclick = function(event) {

//         if (event.target == modal) {
//             console.log('hello');
//             modal.style.display = "none";
//             }
//         }


// window.addEventListener('click', function(e){   
//   if (document.getElementById('modal').contains(e.target)){
//     console.log('Hello World')
//   } else{
//     modal.style.display = "none";
//     // Clicked outside the box";

//   }
// });
