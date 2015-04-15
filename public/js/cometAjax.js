
  (function() {
    window.liftComet = {
      lift_handlerSuccessFunc: function() {
        setTimeout("liftComet.lift_cometEntry();",100);
      },

      lift_unlistWatch : function(watchId) {
        var ret = [];
        for (item in lift_toWatch) {
          if (item !== watchId) {
            ret.push(item);
          }
        }
        lift_toWatch = ret;
      },

      lift_handlerFailureFunc: function() {
        setTimeout("liftComet.lift_cometEntry();",10000);
      },

      lift_cometEntry: function() {
        var isEmpty = function(){for (var i in lift_toWatch) {return false} return true}();
        if (!isEmpty) {
          liftAjax.lift_uriSuffix = undefined;
        jQuery.ajax({ url : "/comet_request/" + Math.floor(Math.random() * 100000000000) + "/1js8or71gt70c" + "/" + lift_page, data : lift_toWatch, type : "GET", dataType : "script", timeout : 140000, cache : false, success : liftComet.lift_handlerSuccessFunc, error : liftComet.lift_handlerFailureFunc });
              }
            }
          }})();
          jQuery(document).ready(function() {liftComet.lift_handlerSuccessFunc()});