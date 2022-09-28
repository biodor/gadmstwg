

///////////////////////////////////////////////////////////////////////////////////
// global vars
var count = 0;
var region_code = $('#id_res_region').val();
var spouseEmployedCheck = $("input:radio[name=spouse_employed]:checked").val()
window.onload = function() {
// indigenous //
countChecked();
//$("input[name='indigenous']").change(function() {
//    $("input:options[name=indigenous]:selected").text()
//        if ($(this).val()=="YES") {
//        //$('#div_id_reason_status').show();
//        $('#div_id_indigenous_specify').show();
//        $( "#id_indigenous_specify" ).prop('required', true);
//        console.log("Yes indigen");
//        }
//     else if ($(this).val()=="NO"){
//            //$('#div_id_reason_status').hide();
//            $('#id_indigenous_specify').prop('required', false);
//            $('#div_id_indigenous_specify').hide();
//            $('#id_indigenous_specify').val("");
//
//
//           console.log("No indigen");
//     }
//});
//
//// indigenous //
// $('document').ready(function(){
//         var indigen1 = $("#id_indigenous option:selected").text()
//               if(indigen1=="YES")
//               {
//                   $('#div_id_indigenous_specify').show();
//                   $( "#id_indigenous_specify" ).attr('required', 'required');
//                   console.log("Yes specify");
//                   }
//               else
//               {
//                   $('#id_indigenous_specify').removeAttr('required');
//                   $('#id_indigenous_specify').val("");
//                   $('#div_id_indigenous_specify').hide();
//                   console.log("No specify");
//                   }
//               });
// disability //
//$("input[name='disability']").change(function() {
//    $("input:radio[name=disability]:checked").val()
//        if ($(this).val()=="YES") {
//        $('#div_id_disability_specify').show();
//        $( "#id_disability_specify" ).attr('required', 'required');
//        console.log("Yes disability");
//        }
//     else{
//           $('#id_disability_specify').removeAttr('required');
//           $('#id_disability_specify').val("");
//           $('#div_id_disability_specify').hide();
//           console.log("No disability");
//     }
//});
//
//// disability //
// $('document').ready(function(){
//         var disability1 = $("#id_disability option:selected").text()
//               if(disability1=="YES")
//               {
//                   $('#div_id_disability_specify').show();
//                   $( "#id_disability_specify" ).attr('required', 'required');
//                   console.log("Yes disability specify");
//                   }
//               else
//               {
//                   $('#id_disability_specify').removeAttr('required');
//                   $('#id_disability_specify').val("");
//                   $('#div_id_disability_specify').hide();
//                   console.log("No disability specify");
//                   }
//               });
//// soloparent //
//$("input[name='soloparent']").change(function() {
//    $("input:radio[name=soloparent]:checked").val()
//        if ($(this).val()=="YES") {
//        $('#div_id_soloparent_specify').show();
//        $( "#id_soloparent_specify" ).attr('required', 'required');
//        console.log("Yes disability");
//        }
//     else{
//           $('#id_soloparent_specify').removeAttr('required');
//           $('#id_soloparent_specify').val("");
//           $('#div_id_soloparent_specify').hide();
//           console.log("No disability");
//     }
//});
//
//// soloparent //
// $('document').ready(function(){
//         var soloparent1 = $("#id_soloparent option:selected").text()
//               if(soloparent1=="YES")
//               {
//                   $('#div_id_soloparent_specify').show();
//                   $( "#id_soloparent_specify" ).attr('required', 'required');
//                   console.log("Yes disability specify");
//                   }
//               else
//               {
//                   $('#id_soloparent_specify').removeAttr('required');
//                   $('#id_soloparent_specify').val("");
//                   $('#div_id_soloparent_specify').hide();
//                   console.log("No disability specify");
//                   }
//               });
//// educational //
//$("input[name='highest_educ']").on('click',function() {
//    $("input:radio[name=highest_educ]:checked").val()
//        if ($(this).val()!="Secondary") {
//        $('#div_id_educ_program').show();
//        $('#id_educ_program').val("");
//        console.log('This checkbox control is checked');
//        }
//     else{
//
//            $('#div_id_educ_program').hide();
//           console.log('This checkbox control is unchecked');
//     }
//});

//educational //
// $('document').ready(function(){
//         var educ1 = $("input:radio[name=highest_educ]:checked").val()
//               if(educ1!="Secondary")
//               {
//                   $('#div_id_educ_program').show();
//                   $( "#id_educ_program" ).attr('required', 'required');
//                   console.log("Yes disability specify");
//                   }
//               else
//               {
//                   $('#id_educ_program').removeAttr('required');
//                   $('#id_educ_program').val("");
//                   $('#div_id_educ_program').hide();
//                   console.log("No disability specify");
//                   }
//               });

 //Employment Status
//       $("input[name='employment_status']").change(function(){
//               if(($(this).val()=="Temporary") | ($(this).val()=="Contractual") | ($(this).val()=="Casual") | ($(this).val()=="Job Order"))
//               {
//                  $("#div_id_reason_status").show();
//                  //$('#div_id_reason_status').removeAttr('required');
//                  //$('#div_id_reason_status').attr('required', 'required');
//                    $( "#id_reason_status_0" ).attr('required', 'required');
//                   $( "#id_reason_status_1" ).attr('required', 'required');
//                   $( "#id_reason_status_2" ).attr('required', 'required');
//                   $( "#id_reason_status_3" ).attr('required', 'required');
//                   console.write ="No";
//               }
//               else
//               {
//                   $('#id_reason_status_0').removeAttr('required');
//                   $('#id_reason_status_1').removeAttr('required');
//                   $('#id_reason_status_2').removeAttr('required');
//                   $('#id_reason_status_3').removeAttr('required');
//                   $("#div_id_reason_status").hide();
//                   $("#id_reason_status_0" ).prop( "checked", false );
//                   $("#id_reason_status_1" ).prop( "checked", false );
//                   $("#id_reason_status_2" ).prop( "checked", false );
//                   $("#id_reason_status_3" ).prop( "checked", false );
//                   $("#id_reason_status_others").val("");
//                   $("#div_id_reason_status_others").hide();
//               }
//            });
//
//          $("input[name='reason_status']").change(function(){
//               if($(this).val()=="Others")
//               {
//                   $('#div_id_reason_status_others').show();
//                   $( "#id_reason_status_others" ).attr('required', 'required');
//                   }
//               else
//               {
//                   $('#id_reason_status_others').removeAttr('required');
//                   $('#id_reason_status_others').val("");
//                   $('#div_id_reason_status_others').hide();
//                   }
//               });





// WORK INFO //
// Internaltional Training //
/*
$("input[name='attendance_inter_training']").change(function() {
    $("input:radio[name=attendance_inter_training]:checked").val()
        if ($(this).val()=="Yes") {
        $('#div_id_yes_inter_training').show();
        //$('#div_id_no_inter_training :checked').removeAttr('checked');
        $('#div_id_no_inter_training').hide();
        $('#div_id_no_inter_training :checked').removeAttr('checked');
        $('#div_id_no_inter_training_reason').hide();
        $('#id_no_inter_training_reason').val("");
        console.log("bago pumasok sa loop");
        for (var i = 0; i <= 4; i++) {
        $( "#id_yes_inter_training_"+[i] ).attr('required', 'required');
         console.log(i);
        }
        for (var e = 0; e <= 7; e++) {
            $("#id_no_inter_training_reason_"+[e]).removeAttr('required', 'required');
            console.log(e);}}
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_yes_inter_training').hide();
           // $('#id_yes_inter_training_1').removeAttr('required');
            $('#div_id_yes_inter_training :checked').removeAttr('checked');
            for (var q = 0; q <= 4; q++) {
                $("#id_yes_inter_training_"+[q]).removeAttr('required');
                console.log(q);
            }
            for (var r = 0; r <= 7; r++) {
                $( "#id_no_inter_training_"+[r] ).attr('required', 'required');
                console.log(r);
            }
            $('#div_id_no_inter_training').show();
           console.log("No po");
     }
});
*/

$('#id_attendance_inter_training_0').on('click',function() {
        if ($(this).is(':checked')) {
        $('#div_id_yes_inter_training').show();
        //$('#div_id_no_inter_training :checked').removeAttr('checked');
        $('#div_id_no_inter_training').hide();
        $('#div_id_no_inter_training :checked').removeAttr('checked');
        $('#div_id_no_inter_training_reason').hide();
        $('#id_no_inter_training_reason').val("");
        console.log("bago pumasok sa loop");
        for (var i = 0; i <= 4; i++) {
        $( "#id_yes_inter_training_"+[i] ).attr('required', 'required');
         console.log(i);
        }
        for (var e = 0; e <= 7; e++) {
            $("#id_no_inter_training_reason_"+[e]).removeAttr('required', 'required');
            console.log(e);}}
            });
            $('#id_attendance_inter_training_1').on('click',function() {
        if ($(this).is(':checked'))
     {
            //$('#div_id_reason_status').hide();
            $('#div_id_yes_inter_training').hide();
            //$('#div_id_no_inter_training').removeAttr('required');
             $("#div_id_no_inter_training").attr('required', 'required');
            $('#div_id_yes_inter_training :checked').removeAttr('checked');
            for (var q = 0; q <= 4; q++) {
                $("#id_yes_inter_training_"+[q]).removeAttr('required');
                console.log(q);
            }
           /* for (var r = 0; r <= 7; r++) {
                $( "#id_no_inter_training_"+[r] ).attr('required', 'required');
                console.log(r);
            }*/
            $('#div_id_no_inter_training').show();
           console.log("No po");
     }
});

$('#id_no_inter_training_7').on('click',function() {
        if ($(this).is(':checked')) {
        //$('#div_id_reason_status').show();
        $('#div_id_no_inter_training_reason').show();
        $( "#id_no_inter_training_reason" ).attr('required', 'required');
        console.log('This checkbox control is checked');
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_no_inter_training_reason').hide();
            $('#id_no_inter_training_reason').removeAttr('required');
            //document.getElementById("id_no_inter_training_reason").required = false;
            $('#id_no_inter_training_reason').val("");
           console.log('This checkbox control is unchecked');
     }
});

// Local Training //
$("input[name='attendance_local_training']").change(function() {
    $("input:radio[name=attendance_local_training]:checked").val()
        if ($(this).val()=="Yes") {
        //$('#div_id_reason_status').show();
        $('#div_id_yes_local_training').show();
        $('#div_id_no_local_training').hide();
        $('#id_no_local_training_reason').removeAttr('required');
        //document.getElementById("id_no_local_training_reason").required = false;
        console.log("Yes");
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_yes_local_training').hide();
            $('#div_id_no_local_training').show();
            document.getElementById("id_no_local_training_reason").required = true;
            $('#id_yes_local_training').val("");
           console.log("No");
     }
});
$('#id_no_local_training_7').on('click',function() {

        if ($(this).is(':checked')) {
        //$('#div_id_reason_status').show();
        $('#div_id_no_local_training_reason').show();
        document.getElementById("id_no_local_training_reason").required = true;
        console.log('This checkbox control is checked');
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_no_local_training_reason').hide();
            $('#id_no_local_training_reason').removeAttr('required');
            //document.getElementById("id_no_local_training_reason").required = false;
            $('#id_no_local_training_reason').val("");
           console.log('This checkbox control is unchecked');
     }
});

// International Conference //
$("input[name='attendance_inter_confer']").change(function() {
    $("input:radio[name=attendance_inter_confer]:checked").val()
        if ($(this).val()=="Yes") {
        //$('#div_id_reason_status').show();
        $('#div_id_yes_inter_confer').show();
        $('#div_id_no_inter_confer').hide();
        $('#id_no_inter_confer_reason').removeAttr('required');
        //document.getElementById("id_no_inter_confer_reason").required = false;
        console.log("Yes");
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_yes_inter_confer').hide();
            $('#div_id_no_inter_confer').show();
            document.getElementById("id_no_inter_confer_reason").required = true;
            $('#id_yes_inter_confer').val("");
           console.log("No");
     }
});

$('#id_no_inter_confer_7').on('click',function() {

        if ($(this).is(':checked')) {
        //$('#div_id_reason_status').show();
        $('#div_id_no_inter_confer_reason').show();
        document.getElementById("id_no_inter_confer_reason").required = true;
        console.log('This checkbox control is checked');
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_no_inter_confer_reason').hide();
            $('#id_no_inter_confer_reason').removeAttr('required');
            //document.getElementById("id_no_inter_confer_reason").required = false;
            $('#id_no_inter_confer_reason').val("");
           console.log('This checkbox control is unchecked');
     }
});

// Local Conference //

$("input[name='attendance_local_confer']").change(function() {
    $("input:radio[name=attendance_local_confer]:checked").val()
        if ($(this).val()=="Yes") {
        //$('#div_id_reason_status').show();
        $('#div_id_yes_local_confer').show();
        $('#div_id_no_local_confer').hide();
        $('#id_no_local_confer_reason').removeAttr('required');
        //document.getElementById("id_no_local_confer_reason").required = false;
        console.log("Yes");
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_yes_local_confer').hide();
            $('#div_id_no_local_confer').show();
            document.getElementById("id_no_local_confer_reason").required = true;
            $('#id_yes_local_confer').val("");
           console.log("No");
     }
});
$('#id_no_local_confer_7').on('click',function() {
        if ($(this).is(':checked')) {
        //$('#div_id_reason_status').show();
        $('#div_id_no_local_confer_reason').show();
        document.getElementById("id_no_local_confer_reason").required = true;
        console.log('This checkbox control is checked');
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_no_local_confer_reason').hide();
            $('#id_no_local_confer_reason').removeAttr('required');
            //document.getElementById("id_no_local_confer_reason").required = false;
            $('#id_no_local_confer_reason').val("");
           console.log('This checkbox control is unchecked');
     }
});

//Rate Technical //

$("input[name='rate_technical']").on('click',function() {
        if ($(this).is(':checked')) {
        $('#div_id_rate_technical_reason').show();
        }
     else{
            $('#div_id_rate_technical_reason').hide();
            $('#id_rate_technical_reason').val("");
     }
});

//Rate People //

$("input[name='rate_people']").on('click',function() {
        if ($(this).is(':checked')) {
        $('#div_id_rate_people_reason').show();
        }
     else{
            $('#div_id_rate_people_reason').hide();
            $('#id_rate_people_reason').val("");
     }
});
//Rate Transparency //
$("input[name='rate_tranparency']").on('click',function() {
        if ($(this).is(':checked')) {
        $('#div_id_rate_tranparency_reason').show();
        }
     else{
            $('#div_id_rate_tranparency_reason').hide();
            $('#id_rate_tranparency_reason').val("");
     }
});
//Rate GAD //

$("input[name='rate_gad']").on('click',function() {
        if ($(this).is(':checked')) {
        $('#div_id_rate_gad_reason').show();
        }
     else{
            $('#div_id_rate_gad_reason').hide();
            $('#id_rate_gad_reason').val("");
     }
});

// Sexual Harassment //
$("input[name='experience_sexual_harass']").change(function() {
    $("input:radio[name=experience_sexual_harass]:checked").val()
        if ($(this).val()=="Yes") {
        //$('#div_id_reason_status').show();
        $('#div_id_yes_seek_assistance_codi').show();
        $('#div_id_reason_noavail_codi').hide();
        console.log("Yes");
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_yes_seek_assistance_codi').hide();
           console.log("No");
     }
});
$("input[name='yes_seek_assistance_codi']").change(function() {
    $("input:radio[name=yes_seek_assistance_codi]:checked").val()
        if ($(this).val()=="Yes") {
        //$('#div_id_reason_status').show();
        $('#div_id_yes_satisfied').show();
        $('#div_id_satisfied_reason').hide();
        $('#div_id_reason_noavail_codi').hide();
        console.log("Yes");
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_reason_noavail_codi').show();
            $('#div_id_yes_satisfied').hide();
            $('#div_id_satisfied_reason').hide();
           console.log("No");
     }
});

$("input[name='reason_noavail_codi']").change(function() {
    $("input:radio[name=reason_noavail_codi]:checked").val()
        if ($(this).val()=="Others, please identify") {
        //$('#div_id_reason_status').show();
        $('#div_id_other_noavail_reason').show();
        console.log("Yes");
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_other_noavail_reason').hide();
           console.log("No");
     }
});
$("input[name='yes_satisfied']").change(function() {
    $("input:radio[name=yes_satisfied]:checked").val()
        if ($(this).val()=="Yes" |  $(this).val()=="No"){
        //$('#div_id_reason_status').show();
        $('#div_id_satisfied_reason').show();
        console.log("Yes");
     }
});

// Domestic Violence //
$("input[name='experience_domestic_violence']").change(function() {
    $("input:radio[name=experience_domestic_violence]:checked").val()
        if ($(this).val()=="Yes") {
        //$('#div_id_reason_status').show();
        $('#div_id_yes_seek_help').show();
        $('#div_id_yes_towhom').hide();
        console.log("Yes");
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_yes_seek_assistance_codi').hide();
           console.log("No");
     }
});
$("input[name='yes_seek_assistance_codi']").change(function() {
    $("input:radio[name=yes_seek_assistance_codi]:checked").val()
        if ($(this).val()=="Yes") {
        //$('#div_id_reason_status').show();
        $('#div_id_yes_satisfied').show();
        $('#div_id_satisfied_reason').hide();
        $('#div_id_reason_noavail_codi').hide();
        console.log("Yes");
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_reason_noavail_codi').show();
            $('#div_id_yes_satisfied').hide();
            $('#div_id_satisfied_reason').hide();
           console.log("No");
     }
});

$("input[name='reason_noavail_codi']").change(function() {
    $("input:radio[name=reason_noavail_codi]:checked").val()
        if ($(this).val()=="Others, please identify") {
        //$('#div_id_reason_status').show();
        $('#div_id_other_noavail_reason').show();
        console.log("Yes");
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_other_noavail_reason').hide();
           console.log("No");
     }
});
$("input[name='yes_satisfied']").change(function() {
    $("input:radio[name=yes_satisfied]:checked").val()
        if ($(this).val()=="Yes" |  $(this).val()=="No"){
        //$('#div_id_reason_status').show();
        $('#div_id_satisfied_reason').show();
        console.log("Yes");
     }
});
//domestic


$('#id_gad_training_7').on('click',function() {

        if ($(this).is(':checked')) {
        //$('#div_id_reason_status').show();
        $('#div_id_gad_other_training').show();
        console.log('This checkbox control is checked');
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_gad_other_training').hide();
            $('#id_gad_other_training').val("");
           console.log('This checkbox control is unchecked');
     }
});
// International Training //
$('document').ready(function() {
    var wi1 = $("input:radio[name=attendance_inter_training]:checked").val()
        if (wi1 == "Yes")  {
        //$('#div_id_reason_status').show();
        $('#div_id_yes_inter_training').show();
        $( "yes_inter_training" ).attr('required', 'required');
        $('#div_id_no_inter_training').hide();
        $('#div_id_no_inter_training_reason').hide();
        //document.getElementById("yes_inter_training").required = true;

        console.log("Yes");
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_yes_inter_training').hide();
            $('#yes_inter_training').removeAttr('required');
            //document.getElementById("yes_inter_training").required = false;
            $('#div_id_no_inter_training').show();
            //$('#div_id_no_inter_training_reason').hide();
            $('#no_inter_training_reason').removeAttr('required');
            //document.getElementById("no_inter_training_reason").required = false;
           // $('#id_yes_inter_training').val("");
           console.log("No");
     }
});
$('document').ready(function() {
    var nitt1 = $("input:radio[name=no_inter_training]:checked").val()
        if ($('#id_no_inter_training_7').is(":checked"))  {
        //$('#div_id_reason_status').show();
        $('#div_id_no_inter_training_reason').show();
        console.log(nitt1);
        }
     else{
            $('#div_id_no_inter_training_reason').hide();
           console.log(nitt1);
     }
});

// Local Training //
$('document').ready(function() {
    var lt1 = $("input:radio[name=attendance_local_training]:checked").val()
        if (lt1 == "Yes")  {
        //$('#div_id_reason_status').show();
        $('#div_id_yes_local_training').show();
        $( "#yes_local_training" ).attr('required', 'required');
        //document.getElementById("yes_local_training").required = true;
        console.log("Yes");
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_yes_local_training').hide();
            $('#yes_local_training').removeAttr('required');
            //document.getElementById("yes_local_training").required = false;
            $('#div_id_no_local_training').hide();
            $('#div_id_no_local_training_reason').hide();
            $('#no_local_training_reason').removeAttr('required');
            //document.getElementById("no_local_training_reason").required = false;
            $('#id_yes_local_training').val("");
           console.log("No");
     }
});

// International Conference //
$('document').ready(function() {
    var ic1 = $("input:radio[name=attendance_inter_confer]:checked").val()
        if (ic1 == "Yes")  {
        //$('#div_id_reason_status').show();
        $('#div_id_yes_inter_confer').show();
        console.log("Yes");
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_yes_inter_confer').hide();
            $('#div_id_no_inter_confer').hide();
            $('#div_id_no_inter_confer_reason').hide();
            $('#id_yes_inter_confer').val("");
           console.log("No");
     }
});

// Local Conference //
$('document').ready(function() {
    var lc1 = $("input:radio[name=attendance_local_confer]:checked").val()
        if (lc1== "Yes")  {
        //$('#div_id_reason_status').show();
        $('#div_id_yes_local_confer').show();
        console.log("Yes");
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_yes_local_confer').hide();
            $('#div_id_no_local_confer').hide();
            $('#div_id_no_local_confer_reason').hide();
            $('#id_yes_local_confer').val("");
           console.log("No");
     }
});

//Rate TEchnical
$('document').ready(function() {
    if ($("input:radio[name=rate_technical]:checked").val())
       {
        $('#div_id_rate_technical_reason').show();
        console.log("Yes");
        }
     else{
            $('#div_id_rate_technical_reason').hide();
            $('#id_rate_technical_reason').val("");
           console.log("No");
     }
});

//Rate People
$('document').ready(function() {
    if ($("input:radio[name=rate_people]:checked").val())
     {
        $('#div_id_rate_people_reason').show();
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
        }
     else{
            $('#div_id_rate_gad_reason').hide();
            $('#id_rate_gad_reason').val("");
     }
});

//Sexual Experience //
$('document').ready(function() {
    var exh1 = $("input:radio[name=experience_sexual_harass]:checked").val()
        if (exh1 == "Yes")  {
        $('#div_id_yes_seek_assistance_codi').show();
        $('#div_id_yes_satisfied').show();
        }
     else{
            $('#div_id_yes_seek_assistance_codi').hide();
            $('#div_id_yes_satisfied').hide();
            $('#div_id_satisfied_reason').hide();
            $('#div_id_reason_noavail_codi').hide();
            $('#div_id_other_noavail_reason').hide();

     }
});
//Domestic Experience //
$('document').ready(function() {
    var edv1 = $("input:radio[name=experience_domestic_violence]:checked").val()
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
// Is Work Affected //

$('document').ready(function() {
    var iswa1 = $("input:radio[name=iswork_affected]:checked").val()
        if (iswa1 == "Yes")  {
        $('#div_id_yes_reason').show();
        $( "#id_yes_reason" ).attr('required', 'required');
        //document.getElementById("id_yes_reason").required = true;
        }
     else{
            $('#div_id_yes_reason').hide();
            $('#id_yes_reason').removeAttr('required');
            $('#id_yes_reason').val("");
            //document.getElementById("id_yes_reason").required = false;
     }
});
$("input[name='iswork_affected']").change(function() {
    $("input:radio[name=iswork_affected]:checked").val()
        if ($(this).val()=="Yes"){
        //$('#div_id_reason_status').show();
        $('#div_id_yes_reason').show();
        $( "#id_yes_reason" ).attr('required', 'required');
        console.log("Yes");}
        else {
                $('#div_id_yes_reason').hide();
                $('#id_yes_reason').removeAttr('required');
                $('#id_yes_reason').val("");
                //document.getElementById("id_yes_reason").required = false;
        console.log("Yes");
        }
});

$('document').ready(function() {
    var gt1 = $("input:radio[name=gad_training]:checked").val()
        if (gt1 == "Others, please specify")  {
            $('#div_id_gad_other_training').show();
        }
     else{
            $('#div_id_gad_other_training').hide();

     }
});





