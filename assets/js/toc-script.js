$(document).ready(function() {
    $('.table').DataTable({
        "searching": false,
        "pageLength": 10,
        "dom": '<"top">rt<"bottom"iflp>',
        "ordering": false,
        language: {
            paginate: {
              next: '<img src="./assets/images/RightArrow.svg" />',
              previous: '<img src="./assets/images/LeftArrow.svg" />',
            }
          },
          oLanguage: {
            "sLengthMenu": "Show _MENU_",
            "sInfo": "_START_ to _END_ of _TOTAL_",
         }
        
    });
});

//window onload menu highlight
$(window).on('load', function(){
  var hashTag = window.location.hash;
  //alert(hashTag);
  $('.page-ancher').removeClass('failed');
  $('a.page-ancher[href="'+ hashTag +'"]').addClass('failed');
});

//summary menu active link
$('.page-ancher').on('click', function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
}, 500);

  $('.page-ancher').removeClass('failed');
  $(this).addClass('failed');
 
});

