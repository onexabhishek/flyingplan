
$(document).ready(function(){

    $('.gthumbnail').click(function(e){
        e.preventDefault();
        //e.stopPropagation();
        //alert($(this)[0].);
        var parent = $('.gthumbnail').parent();
       // var gprev = $('.gpreview').attr('href');
       var gprev = $(this).parent().attr('href');
       structure();

        // Structure
       //  var preview = `<div id="preview" class="preview"></div>`;
       // var previewBody = `<div id="preview-body" class="preview-body"></div>`;
       // $('body').prepend(preview);
       // $('#preview').show().append(previewBody);
       // var img_container = `<div class="img-control"></div>`
       var gimg = `<img id="preview-img" onload="trigger()" class="img-control" src=""/>`
       // $('#preview-body').append(img_container);
       $('.img-control').append(gimg);
       $('#preview-img').attr('src',gprev)
       //  var prevHead = `<div class="pre-head">
       //                      <div class="toolbox float-right">
       //                          &times;
       //                      </div>
       //                  </div>`;
						
        

       //  $('#preview-body').prepend(prevHead);
     
       //  var prevFoot = `<div class="footer">
       //                  <div class="nav-box float-left">
       //                      <div id="prev" onclick="prev()" class="nboxl">
       //                          <i class="fas fa-arrow-left"></i>
       //                      </div>
       //                  </div>
       //                  <div class="nav-box float-right text-right">
       //                      <div onclick="next()" id="nex" class="nboxr">
       //                          <i class="fas fa-arrow-right"></i>
       //                      </div>
       //                  </div>
       //              </div>`;

       //  $('#preview-body').append(prevFoot);

       //  var capText = `<div class="captext"></div>`;
       //  $('#preview-body').append(capText);

       //  $('.toolbox').click(function(){
       //      $('#preview').remove();

       //  });
		
		$('*').click(function(){
			// console.log(this.getAttribute('id'));
			if(this.getAttribute('id')=='preview')
			{
				
            $('#preview').remove();
			}
			//break;
			return false;
			
		});

        // //===fullscreen====
        //  var zBtn = `<div class="z-btn">
        //      <a id="zplus" onclick="fullWidth()" href="#" class="zbtn-control">+</a>
        //  </div>`
        // $('#preview-body').append(zBtn);
   
        
        // //===fullscreen====

        //====Zoom-Button===
        // var zBtn = `<div class="z-btn">
        //     <a id="zplus" onclick="zPlus()" href="#" class="zbtn-control">+</a>
        //     <a id="zminus" href="#" class="zbtn-control">-</a>
        // </div>`
        // $('#preview-body').append(zBtn);
        // var xdr = +100;
        // $('#zplus').click(function(){
        //     var a = 200;
        //     c =a+xdr;
        //    $('#preview-img').css({'width':c,'height':c});
        //    return;
        // });

        //====Zoom-Button===
		
        
        // // shortpreview

        // var thumb = $('.gthumbnail').parent();
       
         
        // $('.img-control').after(`<div class="shortarea"><div id="id2" class='shortpreview'>`);
        // for(i = 0;i<thumb.length;i++){
        // var a = thumb[i].innerHTML;
            
        //     $('.shortpreview').append(a);
     
        // }
        // $('.shortpreview img').attr('class','shortthumb');
        // $('.footer').before('</div></div>');
        // jQuery('.shortpreview').contents().find('a').before('hello');
        
            // js approch to shortpreview
        


        $('.shortthumb').click(function(){
            var h = $(this);
            // var a = $(this).parent().attr('href');
           shortThumbClick(h);

        });
        // var cap = $(this).attr('alt');
        //   var xdr = $(this).parent().index();


        // indexing(xdr,cap);
       
        //===Video===
        var vid = $(this).attr('data-type');
        

        if(vid=='video'){
            videoPlay(gprev);
                      
        }
        

       //===highlight====
       // var e = $(this).parent().index();
       // $('.shortthumb')[e].setAttribute('class','gactive');
       // var e = $('.gpreview').attr('href',d)attr('class','gactive');
       
       //===highlight===
      
      $('.shortarea').on('mouseenter',function(){
        $('.shortpreview').show(500);

      });
      $('.shortarea,.footer').on('mouseleave',function(){
        $('.shortpreview').hide(500);
        

      });
      


        //==End==
    });


//===Click on Vidthumb===
 $('.vidthumb').click(function(e){
    e.preventDefault();
    
    var gprev = $(this).attr('href');
    // starting(gprev);
    structure();
    // console.log(gprev);
    videoPlay(gprev);
    $('.shortarea').on('mouseenter',function(){
        $('.shortpreview').show(500);

      });
      $('.shortarea,.footer').on('mouseleave',function(){
        $('.shortpreview').hide(500);
        

      });
      $('.shortthumb').click(function(){
            var h = $(this);
            // var a = $(this).parent().attr('href');
           shortThumbClick(h);

        });

 });
//===Click on Vidthumb===
          

});

function structure(){
     var parent = $('.gthumbnail').parent();
       // var gprev = $('.gpreview').attr('href');
       // var gprev = $(this).parent().attr('href');

        // Structure
        var preview = `<div id="preview" class="preview"></div>`;
       var previewBody = `<div id="preview-body" class="preview-body"></div>`;
       $('body').prepend(preview);
       $('#preview').show().append(previewBody);
       var img_container = `<div class="img-control"></div>`
       // var gimg = `<img id="preview-img" onload="trigger()" class="img-control" src=""/>`
       $('#preview-body').append(img_container);
       // $('.img-control').append(gimg);
       // $('#preview-img').attr('src',gprev)
        var prevHead = `<div class="pre-head">
                            <div class="toolbox float-right">
                                &times;
                            </div>
                        </div>`;
                        
        

        $('#preview-body').prepend(prevHead);
     
        var prevFoot = `<div class="footer">
                        <div class="nav-box float-left">
                            <div id="prev" onclick="prev()" class="nboxl">
                                <i class="fas fa-arrow-left"></i>
                            </div>
                        </div>
                        <div class="nav-box float-right text-right">
                            <div onclick="next()" id="nex" class="nboxr">
                                <i class="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>`;

        $('#preview-body').append(prevFoot);

        var capText = `<div class="captext"></div>`;
        $('#preview-body').append(capText);

        $('.toolbox').click(function(){
            $('#preview').remove();

        });
        
        $('*').click(function(){
            // console.log(this.getAttribute('id'));
            if(this.getAttribute('id')=='preview')
            {
                
            $('#preview').remove();
            }
            //break;
            return false;
            
        });
        //===fullscreen====
         var zBtn = `<div class="z-btn">
             <a id="zplus" onclick="fullWidth()" href="#" class="zbtn-control">+</a>
         </div>`
        $('#preview-body').append(zBtn);
   
        
        //===fullscreen====
        shortPrev();
        
}



 function shortThumbClick(h){
        var a = h.index();
    console.log(h.attr('data-type'));
            var b = $('.gpreview')[a].getAttribute("href");
                gprev = b;
            if(h.attr('data-type')=='video'){
                videoPlay(gprev);
                console.log('hello');
            }else{
            // var c = b.attr('href');
            $('#preview-img').attr('src',b);
            // var f = $('#preview-img').attr('src');
            // if(a==$(''))
            }
            $('.shortpreview img').removeClass('gactive');
            $(this).attr('class','gactive');
            // var cap = $(this).attr('alt');
            // $('.captext').html(cap);
 }
  //==special opration =====

function shortPrev(){
     // shortpreview

        var thumb = $('.gthumbnail').parent();
       
         
        $('.img-control').after(`<div class="shortarea"><div id="id2" class='shortpreview'>`);
        for(i = 0;i<thumb.length;i++){
        var a = thumb[i].innerHTML;
            
            $('.shortpreview').append(a);
     
        }
        $('.shortpreview img').attr('class','shortthumb');
        $('.footer').before('</div></div>');
}

function trigger(){
    var d = $('#preview-img').attr('src');
    var r = $('.gpreview');

    for(var m =0;m<r.length;m++){

        if(d==$('.gpreview')[m].getAttribute('href')){
            $('.shortpreview img').removeClass('gactive');
            $('.shortpreview img')[m].setAttribute('class','gactive');
            var cap = $('.shortpreview img')[m].getAttribute('alt');
            // $('.captext').html(cap);
            var xdr = m;
            indexing(xdr,cap);
            console.log(m);
            }
    }
    
}
          

function next(){

    var d = $('#preview-img').attr('src');
        var r = $('.gpreview');
        $('.shortpreview').show(500);
    for(var m =0;m<r.length;m++){
        if(d==r[m].getAttribute('href')){
        
            var prc = $('.gpreview')[m+1].getAttribute('href');
            var vr = $('.gthumbnail')[m+1].getAttribute('data-type');
            if(vr=="video"){
                gprev = prc;
                videoPlay(gprev);
            }else if($('#preview-img').attr('data-type')=='video'){
               afterVideoPlayBack(prc);
                
            }else{

            $('#preview-img').attr('src',prc);
            trigger();
            }
            break;
        }
    }
    
}
function prev(){

    var d = $('#preview-img').attr('src');
        var r = $('.gpreview');
        $('.shortpreview').show(500);
    for(var m =0;m<r.length;m++){
        if(d==r[m].getAttribute('href')){
        
            var prc = $('.gpreview')[m-1].getAttribute('href');
            var vr = $('.gthumbnail')[m-1].getAttribute('data-type');
            if(vr=="video"){
                gprev = prc;
                videoPlay(gprev);
            }else if($('#preview-img').attr('data-type')=='video'){
               afterVideoPlayBack(prc);
                
            }else{
            $('#preview-img').attr('src',prc);
            trigger();
            }
            break;
        }
    }
    
}
function fullWidth(){
    var d = $('#preview-img').attr('src');
    var e = `<img id="fullWidthImg" src="" />`
    $('#preview-body').addClass('fullWidthControl');
    $('#preview-body').html(e);
    $('#fullWidthImg').attr('src',d);
    $('#fullWidthImg').before(`<div onclick="removFrame()" class="tools shift-right">
                                &times;
                            </div>`);
    }
function removFrame(){
    $('#preview').remove();
}
function videoPlay(gprev){
    var vidSyn = `<video id="vidControl" width="100%" height="100%" controls>
                          <source id="preview-img" src="" type="video/mp4" data-type="video">
                        </video>`
            $('.img-control').html(vidSyn);
            $('#preview-img').attr('src',gprev);
            var video = document.getElementById('vidControl');
            video.play();
            $('#fullWidthImg').hide();
            $('.z-btn').hide();
            $('.shortarea').hide();

}
function afterVideoPlayBack(prc){
     var gimg = `<img id="preview-img" onload="trigger()" class="img-control" src=""/>`
                $('.img-control').html(gimg);
                $('#preview-img').attr('src',prc);
                $('#fullWidthImg').show();
            $('.shortarea').show();
                $('.z-btn').show();
                trigger();
    }
function indexing(xdr,cap){
     //==index==
          var xdr1 = $('.gpreview').length;
          // console.log();
        // $('.captext').text(xdr);
        //==index===
        //===Caption==
        // $('.captext').html('<span>'+xdr+1+'/'+xdr1+'</span>'+'<span>'+cap+'</span>');
        $('.captext').html(xdr+1+' of '+xdr1+'<span>'+cap+'</span>');
        //===Caption==
}
// $(".gthumbnail[data-type='video']").getAttribute('class','vidthumb');
      $(".gthumbnail[data-type='video']").parent().addClass('vidthumb');
// $("[data-type='video']").setAttribute('class','vidthumb');
 //==special opration =====}}
