
// just for the demos, avoids form submit
jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});
$( "#frmPractice" ).validate({
  rules: {
    id_others_privpay: {
        required: true,
        min: 3
        },
      id_others_availeaved:{
      required: function(element){
      return $("#id_others_privpay").val() < 13;
      }
    }
  }
});

