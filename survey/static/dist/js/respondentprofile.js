var count = 0;
window.onload = function() {
$( document ).ready(function() {

// WORK INFO //
// Internaltional Training //
$('#div_id_attendance_inter_training input[type="radio"]').change(function(){
    var diait = $(this).val()
        if (diait =="Yes") {
        $("#div_id_yes_inter_training").show();
        $('input:radio[name=yes_inter_training]').prop('required', true);
        $('#liyes').show();
        $('#lino').hide();
        $("#div_id_no_inter_training").hide();
        $('#div_id_no_inter_training_reason').hide();
        $('input:text[name=no_inter_training_reason]').prop('required', false);
        $('#id_no_inter_training_reason').val("");
        $('input:checkbox[name=no_inter_training]').prop('checked', false);
        $("#id_no_inter_training_8").prop("checked", true);
        $("#id_no_local_training_8").hide();
        }
        else if (diait =="No") {
        $("#div_id_yes_inter_training").hide();
        $('input:radio[name=yes_inter_training]').prop('required', false);
        $('input:radio[name=yes_inter_training]').prop('checked', false);
        $('#liyes').hide();
        $('#lino').show();

        $("#div_id_no_inter_training").show();
        $('input:checkbox[name=no_inter_training]').prop('checked', false);
        $("#id_no_inter_training_8").prop("checked", true);
        $("#id_no_inter_training_8").hide();
        }
        else {
        $("#div_id_yes_inter_training").hide();
        $("#div_id_no_inter_training").hide();
        $('#liyes').hide();
        $('#lino').hide();
        }
});
});
   $(document).ready(function () {
    var dinitr = $("input:radio[name=attendance_inter_training]:checked").val()
    if (dinitr == "Yes"){
        $('#liyes').show();
        $('#lino').hide();
        $('#div_id_yes_inter_training').show();
        $('input:radio[name=yes_inter_training]').prop('required', true);
        $('#div_id_no_inter_training').hide();
        $('#div_id_no_inter_training_reason').hide();
        $('input:text[name=no_inter_training_reason]').prop('required', false);
        $('#id_no_inter_training_reason').val("");
        $('input:checkbox[name=no_inter_training]').prop('checked', false);
        $("#id_no_inter_training_8").prop("checked", true);
        $("#id_no_inter_training_8").hide();
    }
    else if (dinitr == "No")
    {
        $('#liyes').hide();
        $('#lino').show();
        $('#div_id_yes_inter_training').hide();
        $('input:radio[name=yes_inter_training]').prop('required', false);
        $('#div_id_no_inter_training_reason').hide();
        //$('#id_no_inter_training_reason').val("");
        //$('input:checkbox[name=no_inter_training]').prop('checked', false);
        $("#id_no_inter_training_8").prop("checked", true);
        $("#id_no_inter_training_8").hide();
    }
    else {
        $("#div_id_yes_inter_training").hide();
        $("#div_id_no_inter_training").hide();
        $('#liyes').hide();
        $('#lino').hide();
    }

});
    $(document).ready(function () {
    $('#id_no_inter_training_7').ready(function() {
        if ($('#id_no_inter_training_7').is(':checked')) {
        $('#div_id_no_inter_training_reason').show();
        $('input:text[name=no_inter_training_reason]').prop('required', true);
    } else
    {   $('#div_id_no_inter_training_reason').hide();
        $('input:text[name=no_inter_training_reason]').prop('required', false);
        $('#id_no_inter_training_reason').val("");
        }
});
});

$('#id_no_inter_training_7').on('click',function() {
        if ($(this).is(':checked')) {
        $('#div_id_no_inter_training_reason').show();
        $( "#id_no_inter_training_reason" ).attr('required', 'required');
        }
     else{
            $('#div_id_no_inter_training_reason').hide();
            $('#id_no_inter_training_reason').removeAttr('required');
            $('#id_no_inter_training_reason').val("");
     }
});
//local training
$('#div_id_attendance_local_training input[type="radio"]').change(function(){
    var dialt = $(this).val()
        if (dialt =="Yes") {
        $("#div_id_yes_local_training").show();
        $('input:radio[name=yes_local_training]').prop('required', true);
        $('#llyes').show();
        $('#llno').hide();
        $("#div_id_no_local_training").hide();
        $('#div_id_no_local_training_reason').hide();
        $('input:text[name=no_local_training_reason]').prop('required', false);
        $('#id_no_local_training_reason').val("");
        $('input:checkbox[name=no_local_training]').prop('checked', false);
        $("#id_no_local_training_8").prop("checked", true);
        $("#id_no_local_training_8").hide();
        }
        else if (dialt =="No") {
        $("#div_id_yes_local_training").hide();
        $('input:radio[name=yes_local_training]').prop('required', false);
        $('input:radio[name=yes_local_training]').prop('checked', false);
        $('#llyes').hide();
        $('#llno').show();

        $("#div_id_no_local_training").show();
        $('input:checkbox[name=no_local_training]').prop('checked', false);
        $("#id_no_local_training_8").prop("checked", true);
        $("#id_no_local_training_8").hide();
        }
        else {
        $("#div_id_yes_local_training").hide();
        $("#div_id_no_local_training").hide();
        $('#llyes').hide();
        $('#llno').hide();
        }
});

   $(document).ready(function () {
    var dinltr = $("input:radio[name=attendance_local_training]:checked").val()
    if (dinltr == "Yes"){
        $('#llyes').show();
        $('#llno').hide();
        $('#div_id_yes_local_training').show();
        $('input:radio[name=yes_local_training]').prop('required', true);
        $('#div_id_no_local_training').hide();
        $('#div_id_no_local_training_reason').hide();
        $('input:text[name=no_local_training_reason]').prop('required', false);
        $('#id_no_local_training_reason').val("");
        $('input:checkbox[name=no_local_training]').prop('checked', false);
        $("#id_no_local_training_8").prop("checked", true);
        $("#id_no_local_training_8").hide();
    }
    else if (dinltr == "No")
    {
        $('#llyes').hide();
        $('#llno').show();
        $('#div_id_yes_local_training').hide();
        $('input:radio[name=yes_local_training]').prop('required', false);
        $('#div_id_no_local_training_reason').hide();
        $("#id_no_local_training_8").prop("checked", true);
        $("#id_no_local_training_8").hide();
    }
    else {
        $("#div_id_yes_local_training").hide();
        $("#div_id_no_local_training").hide();
        $('#llyes').hide();
        $('#llno').hide();
    }
});
    $(document).ready(function () {
    $('#id_no_local_training_7').ready(function() {
        if ($('#id_no_local_training_7').is(':checked')) {
        $('#div_id_no_local_training_reason').show();
        $('input:text[name=no_local_training_reason]').prop('required', true);
    } else
    {   $('#div_id_no_local_training_reason').hide();
        $('input:text[name=no_local_training_reason]').prop('required', false);
        $('#id_no_local_training_reason').val("");
        }
});
});

$('#id_no_local_training_7').on('click',function() {
        if ($(this).is(':checked')) {
        $('#div_id_no_local_training_reason').show();
        $( "#id_no_local_training_reason" ).attr('required', 'required');
        }
     else{
            $('#div_id_no_local_training_reason').hide();
            $('#id_no_local_training_reason').removeAttr('required');
            $('#id_no_local_training_reason').val("");
     }
});
// Internaltional Conference //
$('#div_id_attendance_inter_confer input[type="radio"]').change(function(){
    var diaic = $(this).val()
        if (diaic =="Yes") {
        $("#div_id_yes_inter_confer").show();
        $('input:radio[name=yes_inter_confer]').prop('required', true);
        $('#licyes').show();
        $('#licno').hide();
        $("#div_id_no_inter_confer").hide();
        $('#div_id_no_inter_confer_reason').hide();
        $('input:text[name=no_inter_confer_reason]').prop('required', false);
        $('#id_no_inter_confer_reason').val("");
        $('input:checkbox[name=no_inter_confer]').prop('checked', false);
        $("#id_no_inter_confer_8").prop("checked", true);
        $("#id_no_local_confer_8").hide();
        }
        else if (diaic =="No") {
        $("#div_id_yes_inter_confer").hide();
        $('input:radio[name=yes_inter_confer]').prop('required', false);
        $('input:radio[name=yes_inter_confer]').prop('checked', false);
        $('#licyes').hide();
        $('#licno').show();

        $("#div_id_no_inter_confer").show();
        $("#id_no_inter_confer_8").prop("checked", true);
        $("#id_no_inter_confer_8").hide();
        }
        else {
        $("#div_id_yes_inter_confer").hide();
        $("#div_id_no_inter_confer").hide();
        $('#licyes').hide();
        $('#licno').hide();
        }
});

   $(document).ready(function () {
    var dinicr = $("input:radio[name=attendance_inter_confer]:checked").val()
    if (dinicr == "Yes"){
        $('#licyes').show();
        $('#licno').hide();
        $('#div_id_yes_inter_confer').show();
        $('input:radio[name=yes_inter_confer]').prop('required', true);
        $('#div_id_no_inter_confer').hide();
        $('#div_id_no_inter_confer_reason').hide();
        $('input:text[name=no_inter_confer_reason]').prop('required', false);
        $('#id_no_inter_confer_reason').val("");
        $('input:checkbox[name=no_inter_confer]').prop('checked', false);
        $("#id_no_inter_confer_8").prop("checked", true);
        $("#id_no_inter_confer_8").hide();
    }
    else if (dinicr == "No")
    {
        $('#licyes').hide();
        $('#licno').show();
        $('#div_id_yes_inter_confer').hide();
        $('input:radio[name=yes_inter_confer]').prop('required', false);
        $('#div_id_no_inter_confer_reason').hide();
        $("#id_no_inter_confer_8").prop("checked", true);
        $("#id_no_inter_confer_8").hide();
    }
    else {
        $("#div_id_yes_inter_confer").hide();
        $("#div_id_no_inter_confer").hide();
        $('#licyes').hide();
        $('#licno').hide();
    }
});


    $(document).ready(function () {
    $('#id_no_inter_confer_7').ready(function() {
        if ($('#id_no_inter_confer_7').is(':checked')) {
        $('#div_id_no_inter_confer_reason').show();
        $('input:text[name=no_inter_confer_reason]').prop('required', true);
    } else
    {   $('#div_id_no_inter_confer_reason').hide();
        $('input:text[name=no_inter_confer_reason]').prop('required', false);
        $('#id_no_inter_confer_reason').val("");
        }
});
});


$('#id_no_inter_confer_7').on('click',function() {
        if ($(this).is(':checked')) {
        $('#div_id_no_inter_confer_reason').show();
        $( "#id_no_inter_confer_reason" ).attr('required', 'required');
        }
     else{
            $('#div_id_no_inter_confer_reason').hide();
            $('#id_no_inter_confer_reason').removeAttr('required');
            $('#id_no_inter_confer_reason').val("");
     }
});

// local Conference //
$('#div_id_attendance_local_confer input[type="radio"]').change(function(){
    var dialc = $(this).val()
        if (dialc =="Yes") {
        $("#div_id_yes_local_confer").show();
        $('input:radio[name=yes_local_confer]').prop('required', true);
        $('#llcyes').show();
        $('#llcno').hide();
        $("#div_id_no_local_confer").hide();
        $('#div_id_no_local_confer_reason').hide();
        $('input:text[name=no_local_confer_reason]').prop('required', false);
        $('#id_no_local_confer_reason').val("");
        $('input:checkbox[name=no_local_confer]').prop('checked', false);
        $("#id_no_local_confer_8").prop("checked", true);
        $("#id_no_local_confer_8").hide();
        }
        else if (dialc =="No") {
        $("#div_id_yes_local_confer").hide();
        $('input:radio[name=yes_local_confer]').prop('required', false);
        $('input:radio[name=yes_local_confer]').prop('checked', false);
        $('#llcyes').hide();
        $('#llcno').show();

        $("#div_id_no_local_confer").show();
        $('input:checkbox[name=no_local_confer]').prop('checked', false);
        $("#id_no_local_confer_8").prop("checked", true);
        $("#id_no_local_confer_8").hide();
        }
        else {
        $("#div_id_yes_local_confer").hide();
        $("#div_id_no_local_confer").hide();
        $('#llcyes').hide();
        $('#llcno').hide();
        }
});

   $(document).ready(function () {
    var dinlcrr = $("input:radio[name=attendance_local_confer]:checked").val()
    if (dinlcrr == "Yes"){
        $('#llcyes').show();
        $('#llcno').hide();
        $('#div_id_yes_local_confer').show();
        $('input:radio[name=yes_local_confer]').prop('required', true);
        $('#div_id_no_local_confer').hide();
        $('#div_id_no_local_confer_reason').hide();
        $('input:text[name=no_local_confer_reason]').prop('required', false);
        $('input:checkbox[name=no_inter_confer]').prop('checked', false);
        $("#id_no_local_confer_8").prop("checked", true);
        $("#id_no_local_confer_8").hide();
    }
    else if (dinlcrr == "No")
    {
        $('#llcyes').hide();
        $('#llcno').show();
        $('#div_id_yes_local_confer').hide();
        $('input:radio[name=yes_local_confer]').prop('required', false);
        $('#div_id_no_local_confer_reason').hide();
        $("#id_no_local_confer_8").prop("checked", true);
        $("#id_no_local_confer_8").hide();
    }
    else {
        $("#div_id_yes_local_confer").hide();
        $("#div_id_no_local_confer").hide();
        $('#llcyes').hide();
        $('#llcno').hide();
    }
});

    $(document).ready(function () {
    $('#id_no_local_confer_7').ready(function() {
    //var gt1 = $("input:radio[name=gad_training]:checked").val()
        if ($('#id_no_local_confer_7').is(':checked')) {
        $('#div_id_no_local_confer_reason').show();
        $('input:text[name=no_local_confer_reason]').prop('required', true);
    } else
    {   $('#div_id_no_local_confer_reason').hide();
        $('input:text[name=no_local_confer_reason]').prop('required', false);
        $('#id_no_local_confer_reason').val("");
        }
});
});
$('#id_no_local_confer_7').on('click',function() {
        if ($(this).is(':checked')) {
        $('#div_id_no_local_confer_reason').show();
        $( "#id_no_local_confer_reason" ).attr('required', 'required');
        }
     else{
            $('#div_id_no_local_confer_reason').hide();
            $('#id_no_local_confer_reason').removeAttr('required');
            $('#id_no_local_confer_reason').val("");
     }
});

// Sexual Harassment //
$('document').ready(function() {
    var exh1 = $("input:radio[name=experience_sexual_harass]:checked").val()
        if (exh1 == "Yes")  {
        $('#div_id_yes_seek_assistance_codi').show();
//            $('#div_id_yes_satisfied').hide();
//            $('#div_id_satisfied_reason').hide();
//            $('#div_id_reason_noavail_codi').hide();
//            $('#div_id_other_noavail_reason').hide();
        }
     else{
            $('#div_id_yes_seek_assistance_codi').hide();
            $('#div_id_yes_satisfied').hide();
            $('#div_id_satisfied_reason').hide();
            $('#div_id_reason_noavail_codi').hide();
            $('#div_id_other_noavail_reason').hide();

     }
});

$("input[name='experience_sexual_harass']").change(function() {
    $("input:radio[name=experience_sexual_harass]:checked").val()
        if ($(this).val()=="Yes") {
        $('#div_id_yes_seek_assistance_codi').show();
        }
     else{
            $("input[name='yes_seek_assistance_codi']").attr("checked", false);
            $("input[name='yes_satisfied']").attr("checked", false);
            $('#id_satisfied_reason').val("");
            $("input[name='reason_noavail_codi']").attr("checked", false);
            $('#id_other_noavail_reason').val("");

            $('#div_id_yes_seek_assistance_codi').hide();
            $('#div_id_yes_satisfied').hide();
            $('#div_id_satisfied_reason').hide();
            $('#div_id_reason_noavail_codi').hide();
            $('#div_id_other_noavail_reason').hide();
     }
});
$('document').ready(function() {
var shsac1 = $("input:radio[name=yes_seek_assistance_codi]:checked").val()
        if (shsac1 == "Yes")  {
        $('#div_id_yes_satisfied').show();
        //$('#div_id_satisfied_reason').show();
        $('#div_id_reason_noavail_codi').hide();
        $('#div_id_other_noavail_reason').hide();
        $("input:radio[name='reason_noavail_codi']").prop("checked", false);
        }
     else if (shsac1 == "No") {
            $('#div_id_reason_noavail_codi').hide();
            $("input:radio[name='yes_satisfied']").prop("checked", false);
            $('#div_id_yes_satisfied').hide();
            $('#div_id_satisfied_reason').hide();
           }
           else {
           $('#div_id_reason_noavail_codi').hide();
           $('#div_id_yes_satisfied').hide();
           }
});

$("input[name='yes_seek_assistance_codi']").change(function() {
    $("input:radio[name=yes_seek_assistance_codi]:checked").val()
        if ($(this).val()=="Yes") {
        $('#div_id_yes_satisfied').show();
        $('#div_id_satisfied_reason').hide();
        $('#div_id_reason_noavail_codi').hide();
        $("input:radio[name='reason_noavail_codi']").prop("checked", false);
        $("#id_other_noavail_reason").val("");
        $("#div_id_other_noavail_reason").hide();
        }
     else{
            $('#div_id_reason_noavail_codi').show();
            $("input:radio[name='yes_satisfied']").prop("checked", false);
            $('#div_id_yes_satisfied').hide();
            $('#id_satisfied_reason').val("");
            $('#div_id_satisfied_reason').hide();
     }
});

$("input[name='reason_noavail_codi']").change(function() {
    $("input:radio[name=reason_noavail_codi]:checked").val();
        if ($(this).val()=="Others") {
        $('#div_id_other_noavail_reason').show();
        }
     else{
            $('#div_id_other_noavail_reason').hide();
     }
});
$('document').ready(function() {
if ($('#id_reason_noavail_codi_3').is(':checked')) {
        $('#div_id_other_noavail_reason').show();
        }
     else{
            $('#div_id_other_noavail_reason').hide();
        }
});

$('document').ready(function() {
    var ysc1 = $("input:radio[name=yes_satisfied]:checked").val();
        if (ysc1 =="Yes" |  ysc1 =="No"){
        $('#div_id_satisfied_reason').show();
        console.log("Hello");
           }
});

$("input[name='yes_satisfied']").change(function() {
    $("input:radio[name=yes_satisfied]:checked").val()
        if ($(this).val()=="Yes" |  $(this).val()=="No"){
        $('#div_id_satisfied_reason').show();
        //$('#div_id_other_noavail_reason').hide();
     }
});

// Domestic Violence //
$("input[name='experience_domestic_violence']").change(function() {
    $("input:radio[name=experience_domestic_violence]:checked").val();
        if ($(this).val()=="Yes") {
        $('#div_id_yes_seek_help').show();
        }
     else{
            $("input:radio[name='yes_seek_help']").prop("checked", false);
            $('#div_id_yes_seek_help').hide();
            $("input:radio[name='yes_towhom']").prop("checked", false);
            $('#div_id_yes_towhom').hide();
            $('#id_domestic_seek_nohelp').val("");
            $('#div_id_domestic_seek_nohelp').hide();
            $('#id_reason_noseek_help').val("");
            $('#div_id_reason_noseek_help').hide();
     }
});
$('document').ready(function() {
    var edv1 = $("input:radio[name=experience_domestic_violence]:checked").val();
        if (edv1 == "Yes")  {
        $('#div_id_yes_seek_help').show();
        }
     else{
            $('#div_id_yes_seek_help').hide();
            $('#div_id_yes_towhom').hide();
            $('#div_id_domestic_seek_nohelp').hide();
            $('#div_id_reason_noseek_help').hide();
     }
});
$('document').ready(function() {
    var yessh = $("input:radio[name=yes_seek_help]:checked").val();
        if (yessh == "Yes")  {
        $('#div_id_yes_towhom').show();
        $('#div_id_reason_noseek_help').hide();
        }
     else{
            $('#div_id_yes_towhom').hide();
            $('#div_id_domestic_seek_nohelp').hide();
            $('#id_domestic_seek_nohelp').val("");
     }
});

$("input[name='yes_seek_help']").change(function() {
    $("input:radio[name=yes_seek_help]:checked").val()
        if ($(this).val()=="Yes") {
        $('#div_id_yes_towhom').show();
        $('#div_id_reason_noseek_help').hide();
        $('#div_id_domestic_seek_nohelp').hide();
        $('#id_reason_noseek_help').val("");
        }
     else{
            $("input:radio[name='yes_towhom']").prop("checked", false);
            $('#div_id_yes_towhom').hide();
            $('#div_id_domestic_seek_nohelp').hide();
            $('#div_id_reason_noseek_help').show();
            $('#id_domestic_seek_nohelp').val("");
     }
});

$('document').ready(function() {
    var yesSeek = $("input:radio[name=yes_towhom]:checked").val()
        if (yesSeek == "Others")  {
        $('#div_id_domestic_seek_nohelp').show();
        }
     else{
            $('#div_id_domestic_seek_nohelp').hide();
            $('#id_domestic_seek_nohelp').val("");
     }
});

$("input[name='yes_towhom']").change(function() {
    $("input:radio[name=yes_towhom]:checked").val()
        if ($(this).val()=="Others") {
        $('#div_id_domestic_seek_nohelp').show();
        }
     else{
            $('#div_id_domestic_seek_nohelp').hide();
     }
});


//Rate TEchnical
$('document').ready(function() {
    if ($("input:radio[name=rate_technical]:checked").val())
       {
        $('#div_id_rate_technical_reason').show();
        $( "#id_rate_technical_reason" ).attr('required', 'required');
        }
     else{
            $('#div_id_rate_technical_reason').hide();
            $('#id_rate_technical_reason').val("");
     }
});

$("input[name='rate_technical']").change(function() {
    //var rtcheck = $("input:radio[name=rate_technical]:checked").val();
    if ($("input:radio[name=rate_technical]:checked").val())
       {
        $('#div_id_rate_technical_reason').show();
        $('#id_rate_technical_reason').val("");
        $( "#id_rate_technical_reason" ).attr('required', 'required');
        }
     else{
            $('#div_id_rate_technical_reason').hide();
            $('#id_rate_technical_reason').val("");
     }
});

//Rate People
$('document').ready(function() {
    if ($("input:radio[name=rate_people]:checked").val())
     {
        $('#div_id_rate_people_reason').show();
        $( "#id_rate_people_reason" ).attr('required', 'required');
        }
     else{
            $('#div_id_rate_people_reason').hide();
            $('#id_rate_people_reason').val("");
     }
});
$("input[name='rate_people']").change(function() {
    //var rtcheck = $("input:radio[name=rate_technical]:checked").val();
    if ($("input:radio[name=rate_people]:checked").val())
     {
        $('#div_id_rate_people_reason').show();
        $('#id_rate_people_reason').val("");
        $( "#id_rate_people_reason" ).attr('required', 'required');
        }
     else{
            $('#div_id_rate_people_reason').hide();
            $('#id_rate_people_reason').val("");
     }
});

//Rate Transparency //
$('document').ready(function() {
    if ($("input:radio[name=rate_tranparency]:checked").val())
  {
        $('#div_id_rate_tranparency_reason').show();
        $( "#id_rate_tranparency_reason" ).attr('required', 'required');
        }
     else{
            $('#div_id_rate_tranparency_reason').hide();
            $('#id_rate_tranparency_reason').val("");
     }
});
$("input[name='rate_tranparency']").change(function() {
    //var rtcheck = $("input:radio[name=rate_technical]:checked").val();
    if ($("input:radio[name=rate_tranparency]:checked").val())
  {
        $('#div_id_rate_tranparency_reason').show();
         $('#id_rate_tranparency_reason').val("");
        $( "#id_rate_tranparency_reason" ).attr('required', 'required');
        }
     else{
            $('#div_id_rate_tranparency_reason').hide();
            $('#id_rate_tranparency_reason').val("");
     }
});


//Rate gad //
$('document').ready(function() {
    if ($("input:radio[name=rate_gad]:checked").val())
        {
        $('#div_id_rate_gad_reason').show();
        $( "#id_rate_gad_reason" ).attr('required', 'required');
        }
     else{
            $('#div_id_rate_gad_reason').hide();
            $('#id_rate_gad_reason').val("");
     }
});
$("input[name='rate_gad']").change(function() {
    //var rtcheck = $("input:radio[name=rate_technical]:checked").val();
    if ($("input:radio[name=rate_gad]:checked").val())
        {
        $('#div_id_rate_gad_reason').show();
        $('#id_rate_gad_reason').val("");
        $( "#id_rate_gad_reason" ).attr('required', 'required');
        }
     else{
            $('#div_id_rate_gad_reason').hide();
            $('#id_rate_gad_reason').val("");
     }
});

// Is Work Affected //
$('document').ready(function() {
    var iswa1 = $("input:radio[name=iswork_affected]:checked").val()
        if (iswa1 == "Yes")  {
        $('#div_id_yes_reason').show();
        $( "#id_yes_reason" ).attr('required', 'required');
        }
     else{
            $('#div_id_yes_reason').hide();
            $('#id_yes_reason').removeAttr('required');
            $('#id_yes_reason').val("");
     }
});
$("input[name='iswork_affected']").change(function() {
    $("input:radio[name=iswork_affected]:checked").val()
        if ($(this).val()=="Yes"){
        $('#div_id_yes_reason').show();
        $( "#id_yes_reason" ).attr('required', 'required');}
        else {
                $('#div_id_yes_reason').hide();
                $('#id_yes_reason').removeAttr('required');
                $('#id_yes_reason').val("");
        }
});
// Gad Training
$('document').ready(function() {
$('#id_gad_training_7').ready(function() {
    //var gt1 = $("input:radio[name=gad_training]:checked").val()
        if ($('#id_gad_training_7').is(':checked')) {
            $('#div_id_gad_other_training').show();
        }
     else{
            $('#div_id_gad_other_training').hide();

     }
});
});

$('#id_gad_training_7').on('click',function() {

        if ($(this).is(':checked')) {
        $('#div_id_gad_other_training').show();
        }
     else{
            $('#div_id_gad_other_training').hide();
            $('#id_gad_other_training').val("");
     }
});

///Membership Organizations
//Office
$('document').ready(function() {
    var office1 = $("input:radio[name=office]:checked").val()
        if (office1 == "Yes")  {
        $('#div_id_office_position').show();
       // $( "#id_yes_reason" ).attr('required', 'required');
        }
     else if (office1 == "No") {
            $('#div_id_office_position').hide();
            //$('#id_yes_reason').removeAttr('required');
           // $('#id_yes_reason').val("");
     }
     else {
     $('#div_id_office_position').hide();
     }
});
$("input[name='office']").change(function() {
    $("input:radio[name=office]:checked").val()
        if ($(this).val()=="Yes"){
        $('#div_id_office_position').show();
       // $( "#id_yes_reason" ).attr('required', 'required');
       }
        else {
                $('input:radio[name=office_position]').prop('required', false);
                $('#div_id_office_position').hide();
              //  $('#id_yes_reason').removeAttr('required');
               // $('#id_yes_reason').val("");
        }
});
//Community
$('document').ready(function() {
    var community1 = $("input:radio[name=community]:checked").val()
        if (community1 == "Yes")  {
        $('#div_id_community_position').show();
       // $( "#id_yes_reason" ).attr('required', 'required');
        }
     else if (community1 == "No") {
            $('#div_id_community_position').hide();
            //$('#id_yes_reason').removeAttr('required');
           // $('#id_yes_reason').val("");
     }
     else {
     $('#div_id_community_position').hide();
     }
});
$("input[name='community']").change(function() {
    $("input:radio[name=community]:checked").val()
        if ($(this).val()=="Yes"){
        $('#div_id_community_position').show();
       // $( "#id_yes_reason" ).attr('required', 'required');
       }
        else {
                $('input:radio[name=community_position]').prop('required', false);
                $('#div_id_community_position').hide();
              //  $('#id_yes_reason').removeAttr('required');
               // $('#id_yes_reason').val("");
        }
});

//Religion
$('document').ready(function() {
    var religion1 = $("input:radio[name=religious]:checked").val()
        if (religion1 == "Yes")  {
        $('#div_id_religious_position').show();
       // $( "#id_yes_reason" ).attr('required', 'required');
        }
     else if (religion1 == "No") {
            $('#div_id_religious_position').hide();
            //$('#id_yes_reason').removeAttr('required');
           // $('#id_yes_reason').val("");
     }
     else {
     $('#div_id_religious_position').hide();
     }
});
$("input[name='religious']").change(function() {
    $("input:radio[name=religious]:checked").val()
        if ($(this).val()=="Yes"){
        $('#div_id_religious_position').show();
       // $( "#id_yes_reason" ).attr('required', 'required');
       }
        else {
                $('#div_id_religious_position').hide();
                $('input:radio[name=religious_position]').prop('required', false);
              //  $('#id_yes_reason').removeAttr('required');
               // $('#id_yes_reason').val("");
        }
});


}
