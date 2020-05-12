var count=1;
  $(document).ready(function(){
    $("#menubutton").click(function(){
      $("#headies").toggleClass("menu-active");
      var cls = $("#menubutton").attr("class");
      if(count%2==1){
        $("#menubutton").removeClass(cls);
        $("#menubutton").addClass("fa fa-times");
        count++;
      }
      else{
        $("#menubutton").removeClass(cls);
        $("#menubutton").addClass("fa fa-bars");
        count++;
      }
    });
  });
