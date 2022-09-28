window.onload = function() {
//Leave priviledges
    $(document).ready(function () {
    $('#id_priviledges_pay_16').ready(function() {
        if ($('#id_priviledges_pay_16').is(':checked')) {
        $("#id_others_privpay").prop("required", true);
              $("#div_id_others_privpay").show();
        }
        else {
        $("#id_others_privpay").prop("required", false);
        $("#div_id_others_privpay").hide();
        $("#id_others_privpay").val("");
        }
});
});

$('#id_priviledges_pay_16').on('click',function() {
        if ($(this).is(':checked')) {
              $("#id_others_privpay").prop("required", true);
              $("#div_id_others_privpay").show();
        }
        else {
        $("#id_others_privpay").prop("required", false);
        $("#div_id_others_privpay").hide();
        $("#id_others_privpay").val("");
        }
});
//   $(document).ready(function () {
//    var dippay1 = $("input:radio[name=availed_leaved ]:checked").val()
//    if (dippay1 == "Others"){
//              $("#div_id_others_availeaved").show();
//        }
//        else {
//        $("#div_id_others_availeaved").hide();
//        $("#id_others_availeaved").val("");
//        }
//});
    $(document).ready(function () {
    $('#id_availed_leaved_16').ready(function() {
        if ($('#id_availed_leaved_16').is(':checked')) {
              $("#id_others_availeaved").prop("required", true);
              $("#div_id_others_availeaved").show();

        }
        else {
        $("#id_others_availeaved").prop("required", false);
        $("#div_id_others_availeaved").hide();
        $("#id_others_availeaved").val("");
        }
});
});

$('#id_availed_leaved_16').on('click',function() {
        if ($(this).is(':checked')) {
        $("#id_others_availeaved").prop("required", true);
              $("#div_id_others_availeaved").show();
        }
        else {
        $("#id_others_availeaved").prop("required", false);
        $("#div_id_others_availeaved").hide();
        $("#id_others_availeaved").val("");
        }
});

///Absences
$('input[type=radio][name=number_absences_mo]').on('change', function() {
    var dina = $(this).val()
        if (dina == "0" ) {
        $('input:checked[name=reason_absent_health]').prop('required', false);
        $('input:checked[name=reason_absent_health]').prop('checked', false);
        $("#id_other_reason_absent_health").prop("required", false);
        $("#div_id_reason_absent_health").hide();
        $("#div_id_other_reason_absent_health").hide();
        $("#div_id_other_reason_absent_health").val("");
        $("#id_reason_absent_health_3").prop("checked", true);
        $("#id_reason_absent_health_3").hide();


        $('input:checked[name=reason_absent_family]').prop('required', false);
        $('input:checked[name=reason_absent_family]').prop('checked', false);
        $("#id_other_reason_absent_family").prop("required", false);
        $("#div_id_reason_absent_family").hide();
        $("#div_id_other_reason_absent_family").hide();
        $("#div_id_other_reason_absent_family").val("");
        $("#id_reason_absent_family_4").prop("checked", true);
        $("#id_reason_absent_family_4").hide();

        $('input:checked[name=reason_absent_office]').prop('required', false);
        $('input:checked[name=reason_absent_office]').prop('checked', false);
        $("#id_other_reason_absent_office").prop("required", false);
        $("#div_id_reason_absent_office").hide();
        $("#div_id_other_reason_absent_office").hide();
        $("#id_other_reason_absent_office").val("");
        $("#id_reason_absent_office_3").prop("checked", true);
        $("#id_reason_absent_office_3").hide();
        }
        else {
        $("#div_id_reason_absent_health").show();
        $("#div_id_reason_absent_family").show();
        $("#div_id_reason_absent_office").show();
        }
});
   $(document).ready(function () {
            $("#id_reason_absent_office_3").prop("checked", true);
           $("#id_reason_absent_family_4").prop("checked", true);
           $("#id_reason_absent_health_3").prop("checked", true);
            $("#id_reason_absent_office_3").hide();
           $("#id_reason_absent_family_4").hide();
           $("#id_reason_absent_health_3").hide();

    var dina1 = $("input:radio[name=number_absences_mo]:checked").val()
    if (dina1 == "0" ){
        $('input:checked[name=reason_absent_health]').prop('required', false);
        $('input:checked[name=reason_absent_health]').prop('checked', false);
        $("#id_other_reason_absent_health").prop("required", false);
        $("#div_id_reason_absent_health").hide();
        $("#div_id_other_reason_absent_health").hide();
        $("#div_id_other_reason_absent_health").val("");
        $("#id_reason_absent_health_3").prop("checked", true);

        $('input:checked[name=reason_absent_family]').prop('required', false);
        $('input:checked[name=reason_absent_family]').prop('checked', false);
        $("#id_other_reason_absent_family").prop("required", false);
        $("#div_id_reason_absent_family").hide();
        $("#div_id_other_reason_absent_family").hide();
        $("#div_id_other_reason_absent_family").val("");
        $("#id_reason_absent_family_4").prop("checked", true);

        $('input:checked[name=reason_absent_office]').prop('required', false);
        $('input:checked[name=reason_absent_office]').prop('checked', false);
        $("#id_other_reason_absent_office").prop("required", false);
        $("#div_id_reason_absent_office").hide();
        $("#div_id_other_reason_absent_office").hide();
        $("#id_other_reason_absent_office").val("");
        $("#id_reason_absent_office_3").prop("checked", true);
        }
        else {
        $("#div_id_reason_absent_health").show();
        $("#div_id_reason_absent_family").show();
        $("#div_id_reason_absent_office").show();
        }
});
//absent health
    $(document).ready(function () {
    $('#id_reason_absent_health_2').ready(function() {
        if ($('#id_reason_absent_health_2').is(':checked')) {
              $("#div_id_other_reason_absent_health").show();
              $("#id_other_reason_absent_health").prop("required", true);
        }
        else {
        $("#id_other_reason_absent_health").prop("required", false);
        $("#div_id_other_reason_absent_health").hide();
        $("#id_other_reason_absent_health").val("");
        }
});
});

$('#id_reason_absent_health_2').on('click',function() {
        if ($(this).is(':checked')) {
              $("#div_id_other_reason_absent_health").show();
              $("#id_other_reason_absent_health").prop("required", true);
        }
        else {
        $("#id_other_reason_absent_health").prop("required", false);
        $("#div_id_other_reason_absent_health").hide();
        $("#id_other_reason_absent_health").val("");
        }
});
//Absent family
    $(document).ready(function () {
    $('#id_reason_absent_family_3').ready(function() {
        if ($('#id_reason_absent_family_3').is(':checked')) {
              $("#div_id_other_reason_absent_family").show();
              $("#id_other_reason_absent_family").prop("required", true);
        }
        else {
        $("#id_other_reason_absent_family").prop("required", false);
        $("#div_id_other_reason_absent_family").hide();
        $("#id_other_reason_absent_family").val("");
        }
});
});

$('#id_reason_absent_family_3').on('click',function() {
        console.log($(this).val());
        if ($(this).is(':checked')) {
              $("#div_id_other_reason_absent_family").show();
              $("#id_other_reason_absent_family").prop("required", true);
        }
        else {
        $("#id_other_reason_absent_family").prop("required", false);
        $("#div_id_other_reason_absent_family").hide();
        $("#id_other_reason_absent_family").val("");
        }
});
//Absent office
    $(document).ready(function () {
    $('#id_reason_absent_office_2').ready(function() {
        if ($('#id_reason_absent_office_2').is(':checked')) {
              $("#div_id_other_reason_absent_office").show();
              $("#id_other_reason_absent_office").prop("required", true);
        }
        else {
        $("#id_other_reason_absent_office").prop("required", false);
        $("#div_id_other_reason_absent_office").hide();
        $("#id_other_reason_absent_office").val("");
        }
});
});

$('#id_reason_absent_office_2').on('click',function() {
        if ($(this).is(':checked')) {
              $("#div_id_other_reason_absent_office").show();
              $("#id_other_reason_absent_office").prop("required", true);
        }
        else {
        $("#id_other_reason_absent_office").prop("required", false);
        $("#div_id_other_reason_absent_office").hide();
        $("#id_other_reason_absent_office").val("");
        }
});

///Tardiness
$('input[type=radio][name=number_tardines_mo]').on('change', function() {
    var dint = $(this).val()
        if (dint == "0" ) {
        $('input:checked[name=reason_tardines_health]').prop('required', false);
        $('input:checked[name=reason_tardines_health]').prop('checked', false);
        $("#id_other_reason_tardines_health").prop("required", false);
        $("#div_id_reason_tardines_health").hide();
        $("#div_id_other_reason_tardines_health").hide();
        $("#div_id_other_reason_tardines_health").val("");
        $("#id_reason_tardines_health_3").prop("checked", true);

        $('input:checked[name=reason_tardines_family]').prop('required', false);
        $('input:checked[name=reason_tardines_family]').prop('checked', false);
        $("#id_other_reason_tardines_family").prop("required", false);
        $("#div_id_reason_tardines_family").hide();
        $("#div_id_other_reason_tardines_family").hide();
        $("#div_id_other_reason_tardines_family").val("");
        $("#id_reason_tardines_family_4").prop("checked", true);

        $('input:checked[name=reason_tardines_office]').prop('required', false);
        $('input:checked[name=reason_tardines_office]').prop('checked', false);
        $("#id_other_reason_tardines_office").prop("required", false);
        $("#div_id_reason_tardines_office").hide();
        $("#div_id_other_reason_tardines_office").hide();
        $("#id_other_reason_tardines_office").val("");
        $("#id_reason_tardines_office_3").prop("checked", true);        }
        else {
        $("#div_id_reason_tardines_health").show();
        $("#div_id_reason_tardines_family").show();
        $("#div_id_reason_tardines_office").show();
        }
});
   $(document).ready(function () {
               $("#id_reason_tardines_office_3").prop("checked", true);
           $("#id_reason_tardines_family_4").prop("checked", true);
           $("#id_reason_tardines_health_3").prop("checked", true);
            $("#id_reason_tardines_office_3").hide();
           $("#id_reason_tardines_family_4").hide();
           $("#id_reason_tardines_health_3").hide();
    var dint1 = $("input:radio[name=number_tardines_mo]:checked").val()
    if (dint1 == "0" ){
        $('input:checked[name=reason_tardines_health]').prop('required', false);
        $('input:checked[name=reason_tardines_health]').prop('checked', false);
        $("#id_other_reason_tardines_health").prop("required", false);
        $("#div_id_reason_tardines_health").hide();
        $("#div_id_other_reason_tardines_health").hide();
        $("#div_id_other_reason_tardines_health").val("");
        $("#id_reason_tardines_health_3").prop("checked", true);

        $('input:checked[name=reason_tardines_family]').prop('required', false);
        $('input:checked[name=reason_tardines_family]').prop('checked', false);
        $("#id_other_reason_tardines_family").prop("required", false);
        $("#div_id_reason_tardines_family").hide();
        $("#div_id_other_reason_tardines_family").hide();
        $("#div_id_other_reason_tardines_family").val("");
        $("#id_reason_tardines_family_4").prop("checked", true);

        $('input:checked[name=reason_tardines_office]').prop('required', false);
        $('input:checked[name=reason_tardines_office]').prop('checked', false);
        $("#id_other_reason_tardines_office").prop("required", false);
        $("#div_id_reason_tardines_office").hide();
        $("#div_id_other_reason_tardines_office").hide();
        $("#id_other_reason_tardines_office").val("");
        $("#id_reason_tardines_office_3").prop("checked", true);        }
        else {
        $("#div_id_reason_tardines_health").show();
        $("#div_id_reason_tardines_family").show();
        $("#div_id_reason_tardines_office").show();
        }
});
//////////////////////////////////////////////////////////////////////////////////
//tardines health
    $(document).ready(function () {
    $('#id_reason_tardines_health_2').ready(function() {
        if ($('#id_reason_tardines_health_2').is(':checked')) {
              $("#div_id_other_reason_tardines_health").show();
              $("#id_other_reason_tardines_health").prop("required", true);
        }
        else {
        $("#id_other_reason_tardines_health").prop("required", false);
        $("#div_id_other_reason_tardines_health").hide();
        $("#id_other_reason_tardines_health").val("");
        }
});
});

$('#id_reason_tardines_health_2').on('click',function() {
        if ($(this).is(':checked')) {
              $("#div_id_other_reason_tardines_health").show();
              $("#id_other_reason_tardines_health").prop("required", true);
        }
        else {
        $("#id_other_reason_tardines_health").prop("required", false);
        $("#div_id_other_reason_tardines_health").hide();
        $("#id_other_reason_tardines_health").val("");
        }
});
// Tardines family
    $(document).ready(function () {
    $('#id_reason_tardines_family_3').ready(function() {
        if ($('#id_reason_tardines_family_3').is(':checked')) {
              $("#div_id_other_reason_tardines_family").show();
              $("#id_other_reason_tardines_family").prop("required", true);
        }
        else {
        $("#id_other_reason_tardines_family").prop("required", false);
        $("#div_id_other_reason_tardines_family").hide();
        $("#id_other_reason_tardines_family").val("");
        }
});
});

$('#id_reason_tardines_family_3').on('click',function() {
        console.log($(this).val());
        if ($(this).is(':checked')) {
              $("#div_id_other_reason_tardines_family").show();
              $("#id_other_reason_tardines_family").prop("required", true);
        }
        else {
        $("#id_other_reason_tardines_family").prop("required", false);
        $("#div_id_other_reason_tardines_family").hide();
        $("#id_other_reason_tardines_family").val("");
        }
});
//tardines office
    $(document).ready(function () {
    $('#id_reason_tardines_office_2').ready(function() {
        if ($('#id_reason_tardines_office_2').is(':checked')) {
              $("#div_id_other_reason_tardines_office").show();
              $("#id_other_reason_tardines_office").prop("required", true);
        }
        else {
        $("#id_other_reason_tardines_office").prop("required", false);
        $("#div_id_other_reason_tardines_office").hide();
        $("#id_other_reason_tardines_office").val("");
        }
});
});

$('#id_reason_tardines_office_2').on('click',function() {
        if ($(this).is(':checked')) {
              $("#div_id_other_reason_tardines_office").show();
              $("#id_other_reason_tardines_office").prop("required", true);
        }
        else {
        $("#id_other_reason_tardines_office").prop("required", false);
        $("#div_id_other_reason_tardines_office").hide();
        $("#id_other_reason_tardines_office").val("");
        }
});



///Undertime
$('input[type=radio][name=number_undertime_mo]').on('change', function() {
    var dinu = $(this).val()
        if (dinu == "0" ) {
        $('input:checked[name=reason_undertime_health]').prop('required', false);
        $('input:checked[name=reason_undertime_health]').prop('checked', false);
        $("#id_other_reason_undertime_health").prop("required", false);
        $("#div_id_reason_undertime_health").hide();
        $("#div_id_other_reason_undertime_health").hide();
        $("#div_id_other_reason_undertime_health").val("");
        $("#id_reason_undertime_health_3").prop("checked", true);

        $('input:checked[name=reason_undertime_family]').prop('required', false);
        $('input:checked[name=reason_undertime_family]').prop('checked', false);
        $("#id_other_reason_undertime_family").prop("required", false);
        $("#div_id_reason_undertime_family").hide();
        $("#div_id_other_reason_undertime_family").hide();
        $("#div_id_other_reason_undertime_family").val("");
        $("#id_reason_undertime_family_4").prop("checked", true);

        $('input:checked[name=reason_undertime_office]').prop('required', false);
        $('input:checked[name=reason_undertime_office]').prop('checked', false);
        $("#id_other_reason_undertime_office").prop("required", false);
        $("#div_id_reason_undertime_office").hide();
        $("#div_id_other_reason_undertime_office").hide();
        $("#id_other_reason_undertime_office").val("");
        $("#id_reason_undertime_office_3").prop("checked", true);        }
        else {
        $("#div_id_reason_undertime_health").show();
        $("#div_id_reason_undertime_family").show();
        $("#div_id_reason_undertime_office").show();
        }
});
   $(document).ready(function () {
                  $("#id_reason_undertime_office_3").prop("checked", true);
           $("#id_reason_undertime_family_4").prop("checked", true);
           $("#id_reason_undertime_health_3").prop("checked", true);
            $("#id_reason_undertime_office_3").hide();
           $("#id_reason_undertime_family_4").hide();
           $("#id_reason_undertime_health_3").hide();
    var dinu1 = $("input:radio[name=number_undertime_mo]:checked").val()
    if (dinu1 == "0" ){
        $('input:checked[name=reason_undertime_health]').prop('required', false);
        $('input:checked[name=reason_undertime_health]').prop('checked', false);
        $("#id_other_reason_undertime_health").prop("required", false);
        $("#div_id_reason_undertime_health").hide();
        $("#div_id_other_reason_undertime_health").hide();
        $("#div_id_other_reason_undertime_health").val("");
        $("#id_reason_undertime_health_3").prop("checked", true);

        $('input:checked[name=reason_undertime_family]').prop('required', false);
        $('input:checked[name=reason_undertime_family]').prop('checked', false);
        $("#id_other_reason_undertime_family").prop("required", false);
        $("#div_id_reason_undertime_family").hide();
        $("#div_id_other_reason_undertime_family").hide();
        $("#div_id_other_reason_undertime_family").val("");
        $("#id_reason_undertime_family_4").prop("checked", true);

        $('input:checked[name=reason_undertime_office]').prop('required', false);
        $('input:checked[name=reason_undertime_office]').prop('checked', false);
        $("#id_other_reason_undertime_office").prop("required", false);
        $("#div_id_reason_undertime_office").hide();
        $("#div_id_other_reason_undertime_office").hide();
        $("#id_other_reason_undertime_office").val("");
        $("#id_reason_undertime_office_3").prop("checked", true);        }
        else {
        $("#div_id_reason_undertime_health").show();
        $("#div_id_reason_undertime_family").show();
        $("#div_id_reason_undertime_office").show();
        }
});
//////////////////////////////////////////////////////////////////////////////////////////undertime
//undertime health
$(document).ready(function () {
    $('#id_reason_undertime_health_2').ready(function() {
        if ($('#id_reason_undertime_health_2').is(':checked')) {
              $("#div_id_other_reason_undertime_health").show();
        }
        else {
        $("#id_other_reason_undertime_health").prop("required", false);
        $("#div_id_other_reason_undertime_health").hide();
        $("#id_other_reason_undertime_health").val("");
        }
});
});
$('#id_reason_undertime_health_2').on('click',function() {
        if ($(this).is(':checked')) {
              $("#div_id_other_reason_undertime_health").show();
              $("#id_other_reason_undertime_health").prop("required", true);
        }
        else {
        $("#id_other_reason_undertime_health").prop("required", false);
        $("#div_id_other_reason_undertime_health").hide();
        $("#id_other_reason_undertime_health").val("");
        }
});
// undertime family
    $(document).ready(function () {
    $('#id_reason_undertime_family_3').ready(function() {
        if ($('#id_reason_undertime_family_3').is(':checked')) {
        $("#id_other_reason_undertime_family").prop("required", true);
              $("#div_id_other_reason_undertime_family").show();
        }
        else {
        $("#id_other_reason_undertime_family").prop("required", false);
        $("#div_id_other_reason_undertime_family").hide();
        $("#id_other_reason_undertime_family").val("");
        }
});
});

$('#id_reason_undertime_family_3').on('click',function() {
        console.log($(this).val());
        if ($(this).is(':checked')) {
              $("#div_id_other_reason_undertime_family").show();
              $("#id_other_reason_undertime_family").prop("required", true);
        }
        else {
        $("#id_other_reason_undertime_family").prop("required", false);
        $("#div_id_other_reason_undertime_family").hide();
        $("#id_other_reason_undertime_family").val("");
        }
});
//undertime office
    $(document).ready(function () {
    $('#id_reason_undertime_office_2').ready(function() {
        if ($('#id_reason_undertime_office_2').is(':checked')) {
              $("#div_id_other_reason_undertime_office").show();
              $("#id_other_reason_undertime_office").prop("required", true);
        }
        else {
        $("#id_other_reason_undertime_office").prop("required", false);
        $("#div_id_other_reason_undertime_office").hide();
        $("#id_other_reason_undertime_office").val("");
        }
});
});

$('#id_reason_undertime_office_2').on('click',function() {
        if ($(this).is(':checked')) {
              $("#div_id_other_reason_undertime_office").show();
              $("#id_other_reason_undertime_office").prop("required", true);
        }
        else {
        $("#id_other_reason_undertime_office").prop("required", false);
        $("#div_id_other_reason_undertime_office").hide();
        $("#id_other_reason_undertime_office").val("");
        }
});


//GAD Related facilities
//Nursing Room
$('input[type=radio][name=facility_nursing]').on('change', function() {
    var difn = $(this).val()
        if (difn == "Yes" ) {
        $("#div_id_facility_nursing_utilized").show();
        $('input[type=radio][name=facility_nursing_utilized]').prop("required", true);
        }
        else {
        $('input[type=radio][name=facility_nursing_utilized]').prop("required", false);
        $('input[type=radio][name=facility_nursing_utilized]').prop("checked", false);
        $("#div_id_facility_nursing_utilized").hide();

        $('input[type=radio][name=facility_nursing_utilized_satisfied').prop("required", false);
        $('input[type=radio][name=facility_nursing_utilized_satisfied').prop("checked", false);
        $("#div_id_facility_nursing_utilized_satisfied").hide();

        $("#id_facility_nursing_utilized_satisfied_yes_reason").prop("required", false);
        $("#id_facility_nursing_utilized_satisfied_yes_reason").prop("checked", false);
        $("#div_id_facility_nursing_utilized_satisfied_yes_reason").hide();

        $("#id_facility_nursing_utilized_satisfied_no_reason").prop("required", false);
        $("#id_facility_nursing_utilized_satisfied_no_reason").prop("checked", false);
        $("#div_id_facility_nursing_utilized_satisfied_no_reason").hide();

        $("#id_facility_nursing_utilized_no_reason").prop("required", false);
        $("#div_id_facility_nursing_utilized_no_reason").hide();
        $("#id_facility_nursing_utilized_no_reason").val("");

        $("#id_facility_nursing_others").prop("required", false);
        $("#div_id_facility_nursing_others").hide();
        $("#div_id_facility_nursing_others").val("");
        }
});

   $(document).ready(function () {
    var difn1 = $("input:radio[name=facility_nursing]:checked").val();
    if (difn1 == "Yes" ){
        $("#div_id_facility_nursing_utilized").show();
        console.log(difn1 + "Nursing Yes");
        }
        else {
        $('input[type=radio][name=facility_nursing_utilized]').prop("required", false);
        $('input[type=radio][name=facility_nursing_utilized]').prop("checked", false);
        $("#div_id_facility_nursing_utilized").hide();

        $('input[type=radio][name=facility_nursing_utilized_satisfied').prop("required", false);
        $('input[type=radio][name=facility_nursing_utilized_satisfied').prop("checked", false);
        $("#div_id_facility_nursing_utilized_satisfied").hide();

        $("#id_facility_nursing_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_nursing_utilized_satisfied_yes_reason").hide();
        $("#id_facility_nursing_utilized_satisfied_yes_reason").val("");

        $("#id_facility_nursing_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_nursing_utilized_satisfied_no_reason").hide();
        $("#id_facility_nursing_utilized_satisfied_no_reason").val("");

        $("#id_facility_nursing_utilized_no_reason").prop("required", false);
        $("#div_id_facility_nursing_utilized_no_reason").hide();
        $("#id_facility_nursing_utilized_no_reason").val("");

        $("#id_facility_nursing_others").prop("required", false);
        $("#div_id_facility_nursing_others").hide();
        $("#div_id_facility_nursing_others").val("");

        console.log(difn1 + " Nursing");
        }
});
//nursing utilized
$('input[type=radio][name=facility_nursing_utilized]').on('change', function() {
    var difnu = $(this).val()
        if (difnu == "Yes" ) {
        $("#div_id_facility_nursing_utilized_satisfied").show();
        $("input:checked[name='facility_nursing_utilized_no_reason']").prop("checked", false);
        $("input:checked[name='facility_nursing_utilized_no_reason']").prop("required", false);
        $("#div_id_facility_nursing_utilized_no_reason").hide();
        $("#id_facility_nursing_utilized_others").prop("checked", false);
        $("#div_id_facility_nursing_others").hide();
        $("#div_id_facility_nursing_others").prop("required", false);
        $("#id_facility_nursing_others").val("");
            console.log("Check Yes" + difnu);
        }
        else if  (difnu == "No" ) {
        $("input:radio[name='facility_nursing_utilized_satisfied']").prop("required", false);
         $("input:radio[name='facility_nursing_utilized_satisfied']").prop("checked", false);
        $("#div_id_facility_nursing_utilized_satisfied").hide();
        $("#div_id_facility_nursing_utilized_no_reason").show();
        $("id_facility_nursing_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_nursing_utilized_satisfied_yes_reason").hide();
        $("#id_facility_nursing_utilized_satisfied_yes_reason").val("");
        $("id_facility_nursing_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_nursing_utilized_satisfied_no_reason").hide();
        $("#id_facility_nursing_utilized_satisfied_yes_reason").val("");
        console.log("Check No" + difnu);
        }
        else{
        $("input:radio[name='facility_nursing_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_nursing_utilized_satisfied").hide();
        $("id_facility_nursing_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_nursing_utilized_no_reason").hide();
        }
});
   $(document).ready(function () {
    var difnu1 = $("input:radio[name=facility_nursing_utilized]:checked").val()
    if (difnu1 == "Yes" ){
        $("input:radio[name='facility_nursing_utilized_satisfied']").prop("required", true);
        $("#div_id_facility_nursing_utilized_satisfied").show();
        $("#div_id_facility_nursing_utilized_no_reason").hide();
//        $("id_facility_nursing_utilized_satisfied_yes_reason").prop("required", false);
//        $("#div_id_facility_nursing_utilized_satisfied_yes_reason").hide();
//        $("#id_facility_nursing_utilized_satisfied_yes_reason").val("");
//
//        $("id_facility_nursing_utilized_satisfied_no_reason").prop("required", false);
//        $("#div_id_facility_nursing_utilized_satisfied_no_reason").hide();
//        $("#id_facility_nursing_utilized_satisfied_no_reason").val("");
        }
        else if (difnu1 == "No" ){
        $("#div_id_facility_nursing_utilized_no_reason").show();
        $("#id_facility_nursing_utilized_satisfied_no_reason").prop("required", true);

        $("input:radio[name='facility_nursing_utilized_satisfied']").prop("required", false);
        $("input:radio[name='facility_nursing_utilized_satisfied']").prop("checked", false);
        $("#div_id_facility_nursing_utilized_satisfied").hide();

        $("#id_facility_nursing_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_nursing_utilized_satisfied_yes_reason").hide();
        $("#id_facility_nursing_utilized_satisfied_yes_reason").val("");

        $("#id_facility_nursing_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_nursing_utilized_satisfied_no_reason").hide();
        $("#id_facility_nursing_utilized_satisfied_no_reason").val("");
        console.log(difnu1 + " anona");
        }
        else{
        $("#input:radio[name='facility_nursing_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_nursing_utilized_satisfied").hide();
        $("#id_facility_nursing_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_nursing_utilized_no_reason").hide();
        }
});
//nursing utilized satisfied
//$('input[type=radio][name=facility_nursing_utilized_satisfied]').on('change', function() {
//    var difnus = $(this).val()
//        if (difnus == "Yes" ) {
//        $("#div_id_facility_nursing_utilized_satisfied_yes_reason").show();
//        $("id_facility_nursing_utilized_satisfied_yes_reason").prop("required", true);
//        $("id_facility_nursing_utilized_satisfied_no_reason").prop("required", false);
//        $("#div_id_facility_nursing_utilized_satisfied_no_reason").hide();
//        $("#id_facility_nursing_utilized_satisfied_no_reason").val("");
//        $("#id_facility_nursing_others").prop("required", false);
//         console.log("Check div_id_facility_nursing_utilized_satisfied");
//        }
//        else if  (difnus == "No" ) {
//        $("#div_id_facility_nursing_utilized_satisfied_no_reason").show();
//        $("id_facility_nursing_utilized_satisfied_no_reason").prop("required", true);
//        $("id_facility_nursing_utilized_satisfied_yes_reason").prop("required", false);
//        $("#div_id_facility_nursing_utilized_satisfied_yes_reason").hide();
//        $("#id_facility_nursing_utilized_satisfied_yes_reason").val("");
//        $("#id_facility_nursing_others").prop("required", false);
//       console.log("Uncheck div_id_facility_nursing_utilized_satisfied");
//        }
//        else{
//        $("id_facility_nursing_utilized_satisfied_yes_reason").prop("required", false);
//        $("#div_id_facility_nursing_utilized_satisfied_yes_reason").hide();
//        $("#id_facility_nursing_utilized_satisfied_yes_reason").val("");
//        $("id_facility_nursing_utilized_satisfied_no_reason").prop("required", false);
//        $("#div_id_facility_nursing_utilized_satisfied_no_reason").hide();
//        $("#id_facility_nursing_utilized_satisfied_yes_reason").val("");
//        console.log("Else");
//        }
//});


$(document).ready(function () {
    var facset1 = $("input:radio[name=facility_nursing_utilized_satisfied]:checked").val()
    if (facset1 == "Yes"){
                $("#id_facility_nursing_utilized_satisfied_yes_reason").prop("required", true);
        $("#div_id_facility_nursing_utilized_satisfied_yes_reason").show();

        $('#id_facility_nursing_utilized_satisfied_no_reason').prop("required", false);
        $("#div_id_facility_nursing_utilized_satisfied_no_reason").hide();
        //$("#id_facility_nursing_utilized_satisfied_no_reason").val("");
        console.log("hello");
        }
        else {
            $("#id_facility_nursing_utilized_satisfied_no_reason").prop("required", true);
        $("#div_id_facility_nursing_utilized_satisfied_no_reason").show();

        $("#id_facility_nursing_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_nursing_utilized_satisfied_yes_reason").hide();
       // $("#id_facility_nursing_utilized_satisfied_yes_reason").val("");
        console.log("hi");
        }
});
$("input[name=facility_nursing_utilized_satisfied]").change(function () {
    if ($('#id_facility_nursing_utilized_satisfied_0').is(":checked")) {
                $("#id_facility_nursing_utilized_satisfied_yes_reason").prop("required", true);
        $("#div_id_facility_nursing_utilized_satisfied_yes_reason").show();

        $('#id_facility_nursing_utilized_satisfied_no_reason').prop("required", false);
        $("#div_id_facility_nursing_utilized_satisfied_no_reason").hide();
        $("#id_facility_nursing_utilized_satisfied_no_reason").val("");
        console.log("hello" + $(this).val());
    } else {
            $("#id_facility_nursing_utilized_satisfied_no_reason").prop("required", true);
        $("#div_id_facility_nursing_utilized_satisfied_no_reason").show();

        $("#id_facility_nursing_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_nursing_utilized_satisfied_yes_reason").hide();
        $("#id_facility_nursing_utilized_satisfied_yes_reason").val("");
        console.log("hi" + $(this).val());
    }
});


//   $(document).ready(function () {
//    var difnus1 = $("input:radio[name=facility_nursing_utilized_satisfied]:checked").val()
//    if (difnus1 == "Yes" ){
//        $("#div_id_facility_nursing_utilized_satisfied_yes_reason").show();
//        $("id_facility_nursing_utilized_satisfied_yes_reason").prop("required", true);
//        $("id_facility_nursing_utilized_satisfied_no_reason").prop("required", false);
//        $("#div_id_facility_nursing_utilized_satisfied_no_reason").hide();
//        $("#id_facility_nursing_utilized_satisfied_no_reason").val("");
//        $("#id_facility_nursing_others").prop("required", false);
//         console.log("Check div_id_facility_nursing_utilized_satisfied");
//        }
//        else {//if  (difnus1 == "No" ) {
//        $("#div_id_facility_nursing_utilized_satisfied_no_reason").show();
//        $("id_facility_nursing_utilized_satisfied_no_reason").prop("required", true);
//        $("id_facility_nursing_utilized_satisfied_yes_reason").prop("required", false);
//        $("#div_id_facility_nursing_utilized_satisfied_yes_reason").hide();
//        $("#id_facility_nursing_utilized_satisfied_yes_reason").val("");
//        $("#id_facility_nursing_others").prop("required", false);
//       console.log("Uncheck div_id_facility_nursing_utilized_satisfied");
//        }
////        else{
////        $("id_facility_nursing_utilized_satisfied_yes_reason").prop("required", false);
////        $("#div_id_facility_nursing_utilized_satisfied_yes_reason").hide();
////        $("#id_facility_nursing_utilized_satisfied_yes_reason").val("");
////        $("id_facility_nursing_utilized_satisfied_no_reason").prop("required", false);
////        $("#div_id_facility_nursing_utilized_satisfied_no_reason").hide();
////        $("#id_facility_nursing_utilized_satisfied_yes_reason").val("");
////        console.log("Else");
////        }
//});
//nursing others
$(document).ready(function () {
    $('#id_facility_nursing_utilized_no_reason_3').ready(function() {
        if ($('#id_facility_nursing_utilized_no_reason_3').is(':checked')) {
              $("#div_id_facility_nursing_others").show();
              $("#id_facility_nursing_others").prop("required", true);
        }
        else {
        $("id_facility_nursing_others").prop("required", false);
        $("#div_id_facility_nursing_others").hide();
        $("#id_facility_nursing_others").val("");
        }
});
});

$('#id_facility_nursing_utilized_no_reason_3').on('change', function() {
        var fnunr = $(this).is(':checked');
        if (fnunr == true) {
              $("#div_id_facility_nursing_others").show();
              $("#id_facility_nursing_others").prop("required", true);
              }
              else {
              $("#div_id_facility_nursing_others").hide();
              $("#id_facility_nursing_others").prop("required", false);
              console.log($(this).is(':checked'));
        }
});
/////////////////////////////////////////////////////Day care//////////////////////////////////////////////
////GAD Related facilities
//////Day care
////$('input[type=radio][name=facility_daycare]').on('change', function() {
////    var difdy = $(this).val()
////        if (difdy == "Yes" ) {
////        $("#div_id_facility_daycare_utilized").show();
////        }
////        else {
////        $("#div_id_facility_daycare_utilized").hide();
////        $("#div_id_facility_daycare_utilized_satisfied").hide();
////        $("#div_id_facility_daycare_utilized_satisfied_yes_reason").hide();
////        $("#div_id_facility_daycare_utilized_satisfied_no_reason").hide();
////        $("#div_id_facility_daycare_utilized_no_reason").hide();
////        $("#div_id_facility_daycare_others").hide();
////        }
////});
////   $(document).ready(function () {
////    var difdy1 = $("input:radio[name=facility_daycare]:checked").val()
////    if (difdy1 == "Yes" ){
////        $("#div_id_facility_daycare_utilized").show();
////        }
////        else {
////        $("#div_id_facility_daycare_utilized").hide();
////        $("#div_id_facility_daycare_utilized_satisfied").hide();
////        $("#div_id_facility_daycare_utilized_satisfied_yes_reason").hide();
////        $("#div_id_facility_daycare_utilized_satisfied_no_reason").hide();
////        $("#div_id_facility_daycare_utilized_no_reason").hide();
////        $("#div_id_facility_daycare_others").hide();
////        }
////});
//////daycare utilized
////$('input[type=radio][name=facility_daycare_utilized]').on('change', function() {
////    var difdyu = $(this).val()
////        if (difdyu == "Yes" ) {
////        $("#div_id_facility_daycare_utilized_satisfied").show();
////        $("#div_id_facility_daycare_utilized_no_reason").hide();
////        $("input:checked[name='facility_daycare_utilized_no_reason']").prop("checked", false);
////        $("#div_id_facility_daycare_others").hide();
////        $("#id_facility_daycare_others").val("");
////            console.log("Check Yes" + difnu);
////        }
////        else if  (difdyu == "No" ) {
////        $("#div_id_facility_daycare_utilized_satisfied").hide();
////       // $("#facility_nursing_utilized_satisfied").attr(checked, false);
////       $("input:radio[name='facility_daycare_utilized_satisfied']").prop("checked", false);
////        $("#div_id_facility_daycare_utilized_no_reason").show();
////
////        $("#div_id_facility_daycare_utilized_satisfied_yes_reason").hide();
////        $("#id_facility_daycare_utilized_satisfied_yes_reason").val("");
////        $("#div_id_facility_daycare_utilized_satisfied_no_reason").hide();
////        $("#id_facility_daycare_utilized_satisfied_yes_reason").val("");
////        console.log("Check No" + difnu);
////        }
////        else{
////        $("#div_id_facility_daycare_utilized_satisfied").hide();
////        $("#div_id_facility_daycare_utilized_no_reason").hide();
////        }
////});
////   $(document).ready(function () {
////    var difdyu1 = $("input:radio[name=facility_daycare_utilized]:checked").val()
////    if (difdyu1 == "Yes" ){
////        $("#div_id_facility_daycare_utilized_satisfied").show();
////        }
////        else if (difdyu1 == "No" ){
////        $("#div_id_facility_daycare_utilized_satisfied").hide();
////        $("#div_id_facility_daycare_utilized_no_reason").show();
////
////        $("#div_id_facility_daycare_utilized_satisfied_yes_reason").hide();
////        $("#id_facility_daycare_utilized_satisfied_yes_reason").val("");
////        $("#div_id_facility_daycare_utilized_satisfied_no_reason").hide();
////        $("#id_facility_daycare_utilized_satisfied_yes_reason").val("");
////        }
////        else{
////        $("#div_id_facility_daycare_utilized_satisfied").hide();
////        $("#div_id_facility_daycare_utilized_no_reason").hide();
////        }
////});
//////daycare utilized satisfied
////$('input[type=radio][name=facility_daycare_utilized_satisfied]').on('change', function() {
////    var difdyus = $(this).val()
////        if (difdyus == "Yes" ) {
////        $("#div_id_facility_daycare_utilized_satisfied_yes_reason").show();
////        $("#id_facility_daycare_utilized_satisfied_no_reason").val("");
////        $("#div_id_facility_daycare_utilized_satisfied_no_reason").hide();
////          //  console.log("Check div_id_facility_nursing_utilized_satisfied");
////        }
////        else if  (difdyus == "No" ) {
////        $("#id_facility_daycare_utilized_satisfied_yes_reason").val("");
////        $("#div_id_facility_daycare_utilized_satisfied_yes_reason").hide();
////        $("#div_id_facility_daycare_utilized_satisfied_no_reason").show();
////       // console.log("Uncheck div_id_facility_nursing_utilized_satisfied");
////        }
////        else{
////        $("#div_id_facility_daycare_utilized_satisfied_yes_reason").hide();
////        $("#id_facility_daycare_utilized_satisfied_yes_reason").val("");
////        $("#div_id_facility_daycare_utilized_satisfied_no_reason").hide();
////        $("#id_facility_daycare_utilized_satisfied_yes_reason").val("");
////        }
////});
////   $(document).ready(function () {
////    var difdyus1 = $("input:radio[name=facility_daycare_utilized]:checked").val()
////    if (difdyus1 == "Yes" ){
////        $("#div_id_facility_daycare_utilized_satisfied").show();
////        //console.log("Check div_id_facility_nursing_utilized_satisfied");
////        }
////        else if (difdyus1 == "No" ){
////        $("#div_id_facility_daycare_utilized_satisfied").hide();
////        $("#div_id_facility_daycare_utilized_no_reason").show();
////       // console.log("Uncheck div_id_facility_nursing_utilized_satisfied");
////        }
////        else{
////        $("#div_id_facility_daycare_utilized_satisfied").hide();
////        $("#div_id_facility_daycare_utilized_no_reason").hide();
////        }
////});
//////daycare others
////    $(document).ready(function () {
////    $('#id_facility_daycare_utilized_no_reason_3').ready(function() {
////        if ($('#id_facility_daycare_utilized_no_reason_3').is(':checked')) {
////              $("#div_id_facility_daycare_others").show();
////        }
////        else {
////        $("#div_id_facility_daycare_others").hide();
////        $("#id_facility_daycare_others").val("");
////        }
////});
////});
////
////$('#id_facility_daycare_utilized_no_reason_3').on('click',function() {
////        console.log($(this).val());
////        if ($(this).is(':checked')) {
////              $("#div_id_facility_daycare_others").show();
////        }
////        else {
////        $("#div_id_facility_daycare_others").hide();
////        $("#id_facility_daycare_others").val("");
////        }
////});
$('input[type=radio][name=facility_daycare]').on('change', function() {
    var difn = $(this).val()
        if (difn == "Yes" ) {
        $("#div_id_facility_daycare_utilized").show();
        }
        else {
        $('input[type=radio][name=facility_daycare_utilized]').prop("required", false);
        $("#div_id_facility_daycare_utilized").hide();
        $('input[type=radio][name=facility_daycare_utilized_satisfied').prop("required", false);
        $("#div_id_facility_daycare_utilized_satisfied").hide();
        $("#id_facility_daycare_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_daycare_utilized_satisfied_yes_reason").hide();
        $("#id_facility_daycare_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_daycare_utilized_satisfied_no_reason").hide();
        $("#id_facility_daycare_utilized_no_reason").prop("required", false);
        $("#div_id_facility_daycare_utilized_no_reason").hide();
        $("#id_facility_daycare_others").prop("required", false);
        $("#div_id_facility_daycare_others").hide();
        }
});
   $(document).ready(function () {
    var difdc1 = $("input:radio[name=facility_daycare]:checked").val()
    if (difdc1 == "Yes" ){
        $("#div_id_facility_daycare_utilized").show();
        }
        else {
        $('input[type=radio][name=facility_daycare_utilized]').prop("required", false);
        $("#div_id_facility_daycare_utilized").hide();
        $('input[type=radio][name=facility_daycare_utilized_satisfied').prop("required", false);
        $("#div_id_facility_daycare_utilized_satisfied").hide();
        $("#id_facility_daycare_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_daycare_utilized_satisfied_yes_reason").hide();
        $("#id_facility_daycare_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_daycare_utilized_satisfied_no_reason").hide();
        $("#id_facility_daycare_utilized_no_reason").prop("required", false);
        $("#div_id_facility_daycare_utilized_no_reason").hide();
        $("#id_facility_daycare_others").prop("required", false);
        $("#div_id_facility_daycare_others").hide();
        }
});
//daycare utilized
$('input[type=radio][name=facility_daycare_utilized]').on('change', function() {
    var difnu = $(this).val()
        if (difnu == "Yes" ) {
        $("#div_id_facility_daycare_utilized_satisfied").show();
        $("input:checked[name='facility_daycare_utilized_no_reason']").prop("checked", false);
        $("input:checked[name='facility_daycare_utilized_no_reason']").prop("required", false);
        $("#div_id_facility_daycare_utilized_no_reason").hide();
        $("#id_facility_daycare_utilized_others").prop("checked", false);
        $("#div_id_facility_daycare_others").hide();
        $("#id_facility_daycare_others").val("");
            console.log("Check Yes" + difnu);
        }
        else if  (difnu == "No" ) {
        $("input:radio[name='facility_daycare_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_daycare_utilized_satisfied").hide();
        $("#div_id_facility_daycare_utilized_no_reason").show();
        $("id_facility_daycare_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_daycare_utilized_satisfied_yes_reason").hide();
        $("#id_facility_daycare_utilized_satisfied_yes_reason").val("");
        $("id_facility_daycare_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_daycare_utilized_satisfied_no_reason").hide();
        $("#id_facility_daycare_utilized_satisfied_yes_reason").val("");
        console.log("Check No" + difnu);
        }
        else{
        $("input:radio[name='facility_daycare_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_daycare_utilized_satisfied").hide();
        $("id_facility_daycare_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_daycare_utilized_no_reason").hide();
        }
});
   $(document).ready(function () {
    var difnu1 = $("input:radio[name=facility_daycare_utilized]:checked").val()
    if (difnu1 == "Yes" ){
        $("#div_id_facility_daycare_utilized_satisfied").show();
        }
        else if (difnu1 == "No" ){
        $("input:radio[name='facility_daycare_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_daycare_utilized_satisfied").hide();
        $("#div_id_facility_daycare_utilized_no_reason").show();
        $("id_facility_daycare_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_daycare_utilized_satisfied_yes_reason").hide();
        $("#id_facility_daycare_utilized_satisfied_yes_reason").val("");
        $("id_facility_daycare_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_daycare_utilized_satisfied_no_reason").hide();
        $("#id_facility_daycare_utilized_satisfied_yes_reason").val("");
        }
        else{
        $("input:radio[name='facility_daycare_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_daycare_utilized_satisfied").hide();
        $("id_facility_daycare_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_daycare_utilized_no_reason").hide();
        }
});
//daycare utilized satisfied
$('input[type=radio][name=facility_daycare_utilized_satisfied]').on('change', function() {
    var difnus = $(this).val()
        if (difnus == "Yes" ) {
        $("#div_id_facility_daycare_utilized_satisfied_yes_reason").show();
        $("#id_facility_daycare_utilized_satisfied_no_reason").val("");
        $("id_facility_daycare_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_daycare_utilized_satisfied_no_reason").hide();
          //  console.log("Check div_id_facility_daycare_utilized_satisfied");
        }
        else if  (difnus == "No" ) {
        $("#id_facility_daycare_utilized_satisfied_yes_reason").val("");
        $("id_facility_daycare_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_daycare_utilized_satisfied_yes_reason").hide();
        $("#div_id_facility_daycare_utilized_satisfied_no_reason").show();
       // console.log("Uncheck div_id_facility_daycare_utilized_satisfied");
        }
        else{
        $("id_facility_daycare_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_daycare_utilized_satisfied_yes_reason").hide();
        $("#id_facility_daycare_utilized_satisfied_yes_reason").val("");
        $("id_facility_daycare_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_daycare_utilized_satisfied_no_reason").hide();
        $("#id_facility_daycare_utilized_satisfied_yes_reason").val("");
        }
});
   $(document).ready(function () {
    var difnu1 = $("input:radio[name=facility_daycare_utilized]:checked").val()
    if (difnu1 == "Yes" ){
        $("#div_id_facility_daycare_utilized_satisfied").show();
        //console.log("Check div_id_facility_daycare_utilized_satisfied");
        }
        else if (difnu1 == "No" ){
        $("input:radio[name='facility_daycare_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_daycare_utilized_satisfied").hide();
        $("#div_id_facility_daycare_utilized_no_reason").show();
       // console.log("Uncheck div_id_facility_daycare_utilized_satisfied");
        }
        else{
        $("input:radio[name='facility_daycare_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_daycare_utilized_satisfied").hide();
        $("id_facility_daycare_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_daycare_utilized_no_reason").hide();
        }
});
//daycare others
    $(document).ready(function () {
    $('#id_facility_daycare_utilized_no_reason_3').ready(function() {
        if ($('#id_facility_daycare_utilized_no_reason_3').is(':checked')) {
              $("#div_id_facility_daycare_others").show();
        }
        else {
        $("id_facility_daycare_others").prop("required", false);
        $("#div_id_facility_daycare_others").hide();
        $("#id_facility_daycare_others").val("");
        }
});
});

$('#id_facility_daycare_utilized_no_reason_3').on('click',function() {
        console.log($(this).val());
        if ($(this).is(':checked')) {
              $("#div_id_facility_daycare_others").show();
        }
        else {
        $("id_facility_daycare_others").prop("required", false);
        $("#div_id_facility_daycare_others").hide();
        $("#id_facility_daycare_others").val("");
        }
});

/////////////////////////////////////////////////////prayer//////////////////////////////////////////////
////GAD Related facilities
////prayer
////$('input[type=radio][name=facility_prayer]').on('change', function() {
////    var difpray = $(this).val()
////        if (difpray == "Yes" ) {
////        $("#div_id_facility_prayer_utilized").show();
////        }
////        else {
////        $("#div_id_facility_prayer_utilized").hide();
////        $("#div_id_facility_prayer_utilized_satisfied").hide();
////        $("#div_id_facility_prayer_utilized_satisfied_yes_reason").hide();
////        $("#div_id_facility_prayer_utilized_satisfied_no_reason").hide();
////        $("#div_id_facility_prayer_utilized_no_reason").hide();
////        $("#div_id_facility_prayer_others").hide();
////        }
////});
////   $(document).ready(function () {
////    var difpray1 = $("input:radio[name=facility_prayer]:checked").val()
////    if (difpray1 == "Yes" ){
////        $("#div_id_facility_prayer_utilized").show();
////        }
////        else {
////        $("#div_id_facility_prayer_utilized").hide();
////        $("#div_id_facility_prayer_utilized_satisfied").hide();
////        $("#div_id_facility_prayer_utilized_satisfied_yes_reason").hide();
////        $("#div_id_facility_prayer_utilized_satisfied_no_reason").hide();
////        $("#div_id_facility_prayer_utilized_no_reason").hide();
////        $("#div_id_facility_prayer_others").hide();
////        }
////});
//////prayer utilized
////$('input[type=radio][name=facility_prayer_utilized]').on('change', function() {
////    var difprayu = $(this).val()
////        if (difprayu == "Yes" ) {
////        $("#div_id_facility_prayer_utilized_satisfied").show();
////        $("#div_id_facility_prayer_utilized_no_reason").hide();
////        $("input:checked[name='facility_prayer_utilized_no_reason']").prop("checked", false);
////        $("#div_id_facility_prayer_others").hide();
////        $("#id_facility_prayer_others").val("");
////            console.log("Check Yes" + difnu);
////        }
////        else if  (difprayu == "No" ) {
////        $("#div_id_facility_prayer_utilized_satisfied").hide();
////       // $("#facility_nursing_utilized_satisfied").attr(checked, false);
////       $("input:radio[name='facility_prayer_utilized_satisfied']").prop("checked", false);
////        $("#div_id_facility_prayer_utilized_no_reason").show();
////
////        $("#div_id_facility_prayer_utilized_satisfied_yes_reason").hide();
////        $("#id_facility_prayer_utilized_satisfied_yes_reason").val("");
////        $("#div_id_facility_prayer_utilized_satisfied_no_reason").hide();
////        $("#id_facility_prayer_utilized_satisfied_yes_reason").val("");
////        console.log("Check No" + difnu);
////        }
////        else{
////        $("#div_id_facility_prayer_utilized_satisfied").hide();
////        $("#div_id_facility_prayer_utilized_no_reason").hide();
////        }
////});
////   $(document).ready(function () {
////    var difprayu1 = $("input:radio[name=facility_prayer_utilized]:checked").val()
////    if (difprayu1 == "Yes" ){
////        $("#div_id_facility_prayer_utilized_satisfied").show();
////        }
////        else if (difprayu1 == "No" ){
////        $("#div_id_facility_prayer_utilized_satisfied").hide();
////        $("#div_id_facility_prayer_utilized_no_reason").show();
////
////        $("#div_id_facility_prayer_utilized_satisfied_yes_reason").hide();
////        $("#id_facility_prayer_utilized_satisfied_yes_reason").val("");
////        $("#div_id_facility_prayer_utilized_satisfied_no_reason").hide();
////        $("#id_facility_prayer_utilized_satisfied_yes_reason").val("");
////        }
////        else{
////        $("#div_id_facility_prayer_utilized_satisfied").hide();
////        $("#div_id_facility_prayer_utilized_no_reason").hide();
////        }
////});
//////prayer utilized satisfied
////$('input[type=radio][name=facility_prayer_utilized_satisfied]').on('change', function() {
////    var difprayus = $(this).val()
////        if (difprayus == "Yes" ) {
////        $("#div_id_facility_prayer_utilized_satisfied_yes_reason").show();
////        $("#id_facility_prayer_utilized_satisfied_no_reason").val("");
////        $("#div_id_facility_prayer_utilized_satisfied_no_reason").hide();
////          //  console.log("Check div_id_facility_nursing_utilized_satisfied");
////        }
////        else if  (difprayus == "No" ) {
////        $("#id_facility_prayer_utilized_satisfied_yes_reason").val("");
////        $("#div_id_facility_prayer_utilized_satisfied_yes_reason").hide();
////        $("#div_id_facility_prayer_utilized_satisfied_no_reason").show();
////       // console.log("Uncheck div_id_facility_nursing_utilized_satisfied");
////        }
////        else{
////        $("#div_id_facility_prayer_utilized_satisfied_yes_reason").hide();
////        $("#id_facility_prayer_utilized_satisfied_yes_reason").val("");
////        $("#div_id_facility_prayer_utilized_satisfied_no_reason").hide();
////        $("#id_facility_prayer_utilized_satisfied_yes_reason").val("");
////        }
////});
////   $(document).ready(function () {
////    var difprayus1 = $("input:radio[name=facility_prayer_utilized]:checked").val()
////    if (difprayus1 == "Yes" ){
////        $("#div_id_facility_prayer_utilized_satisfied").show();
////        //console.log("Check div_id_facility_nursing_utilized_satisfied");
////        }
////        else if (difprayus1 == "No" ){
////        $("#div_id_facility_prayer_utilized_satisfied").hide();
////        $("#div_id_facility_prayer_utilized_no_reason").show();
////       // console.log("Uncheck div_id_facility_nursing_utilized_satisfied");
////        }
////        else{
////        $("#div_id_facility_prayer_utilized_satisfied").hide();
////        $("#div_id_facility_prayer_utilized_no_reason").hide();
////        }
////});
//////prayer others
////    $(document).ready(function () {
////    $('#id_facility_prayer_utilized_no_reason_3').ready(function() {
////        if ($('#id_facility_prayer_utilized_no_reason_3').is(':checked')) {
////              $("#div_id_facility_prayer_others").show();
////        }
////        else {
////        $("#div_id_facility_prayer_others").hide();
////        $("#id_facility_prayer_others").val("");
////        }
////});
////});
////
////$('#id_facility_prayer_utilized_no_reason_3').on('click',function() {
////        console.log($(this).val());
////        if ($(this).is(':checked')) {
////              $("#div_id_facility_prayer_others").show();
////        }
////        else {
////        $("#div_id_facility_prayer_others").hide();
////        $("#id_facility_prayer_others").val("");
////        }
////});
$('input[type=radio][name=facility_prayer]').on('change', function() {
    var difn = $(this).val()
        if (difn == "Yes" ) {
        $("#div_id_facility_prayer_utilized").show();
        }
        else {
        $('input[type=radio][name=facility_prayer_utilized]').prop("required", false);
        $("#div_id_facility_prayer_utilized").hide();
        $('input[type=radio][name=facility_prayer_utilized_satisfied').prop("required", false);
        $("#div_id_facility_prayer_utilized_satisfied").hide();
        $("#id_facility_prayer_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_prayer_utilized_satisfied_yes_reason").hide();
        $("#id_facility_prayer_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_prayer_utilized_satisfied_no_reason").hide();
        $("#id_facility_prayer_utilized_no_reason").prop("required", false);
        $("#div_id_facility_prayer_utilized_no_reason").hide();
        $("#id_facility_prayer_others").prop("required", false);
        $("#div_id_facility_prayer_others").hide();
        }
});
   $(document).ready(function () {
    var difpr1 = $("input:radio[name=facility_prayer]:checked").val()
    if (difpr1 == "Yes" ){
        $("#div_id_facility_prayer_utilized").show();
        }
        else {
        $('input[type=radio][name=facility_prayer_utilized]').prop("required", false);
        $("#div_id_facility_prayer_utilized").hide();
        $('input[type=radio][name=facility_prayer_utilized_satisfied').prop("required", false);
        $("#div_id_facility_prayer_utilized_satisfied").hide();
        $("#id_facility_prayer_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_prayer_utilized_satisfied_yes_reason").hide();
        $("#id_facility_prayer_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_prayer_utilized_satisfied_no_reason").hide();
        $("#id_facility_prayer_utilized_no_reason").prop("required", false);
        $("#div_id_facility_prayer_utilized_no_reason").hide();
        $("#id_facility_prayer_others").prop("required", false);
        $("#div_id_facility_prayer_others").hide();
        }
});
//prayer utilized
$('input[type=radio][name=facility_prayer_utilized]').on('change', function() {
    var difnu = $(this).val()
        if (difnu == "Yes" ) {
        $("#div_id_facility_prayer_utilized_satisfied").show();
        $("input:checked[name='facility_prayer_utilized_no_reason']").prop("checked", false);
        $("input:checked[name='facility_prayer_utilized_no_reason']").prop("required", false);
        $("#div_id_facility_prayer_utilized_no_reason").hide();
        $("#id_facility_prayer_utilized_others").prop("checked", false);
        $("#div_id_facility_prayer_others").hide();
        $("#id_facility_prayer_others").val("");
            console.log("Check Yes" + difnu);
        }
        else if  (difnu == "No" ) {
        $("input:radio[name='facility_prayer_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_prayer_utilized_satisfied").hide();
        $("#div_id_facility_prayer_utilized_no_reason").show();
        $("id_facility_prayer_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_prayer_utilized_satisfied_yes_reason").hide();
        $("#id_facility_prayer_utilized_satisfied_yes_reason").val("");
        $("id_facility_prayer_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_prayer_utilized_satisfied_no_reason").hide();
        $("#id_facility_prayer_utilized_satisfied_yes_reason").val("");
        console.log("Check No" + difnu);
        }
        else{
        $("input:radio[name='facility_prayer_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_prayer_utilized_satisfied").hide();
        $("id_facility_prayer_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_prayer_utilized_no_reason").hide();
        }
});
   $(document).ready(function () {
    var difnu1 = $("input:radio[name=facility_prayer_utilized]:checked").val()
    if (difnu1 == "Yes" ){
        $("#div_id_facility_prayer_utilized_satisfied").show();
        }
        else if (difnu1 == "No" ){
        $("input:radio[name='facility_prayer_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_prayer_utilized_satisfied").hide();
        $("#div_id_facility_prayer_utilized_no_reason").show();
        $("id_facility_prayer_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_prayer_utilized_satisfied_yes_reason").hide();
        $("#id_facility_prayer_utilized_satisfied_yes_reason").val("");
        $("id_facility_prayer_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_prayer_utilized_satisfied_no_reason").hide();
        $("#id_facility_prayer_utilized_satisfied_yes_reason").val("");
        }
        else{
        $("input:radio[name='facility_prayer_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_prayer_utilized_satisfied").hide();
        $("id_facility_prayer_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_prayer_utilized_no_reason").hide();
        }
});
//prayer utilized satisfied
$('input[type=radio][name=facility_prayer_utilized_satisfied]').on('change', function() {
    var difnus = $(this).val()
        if (difnus == "Yes" ) {
        $("#div_id_facility_prayer_utilized_satisfied_yes_reason").show();
        $("#id_facility_prayer_utilized_satisfied_no_reason").val("");
        $("id_facility_prayer_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_prayer_utilized_satisfied_no_reason").hide();
          //  console.log("Check div_id_facility_prayer_utilized_satisfied");
        }
        else if  (difnus == "No" ) {
        $("#id_facility_prayer_utilized_satisfied_yes_reason").val("");
        $("id_facility_prayer_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_prayer_utilized_satisfied_yes_reason").hide();
        $("#div_id_facility_prayer_utilized_satisfied_no_reason").show();
       // console.log("Uncheck div_id_facility_prayer_utilized_satisfied");
        }
        else{
        $("id_facility_prayer_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_prayer_utilized_satisfied_yes_reason").hide();
        $("#id_facility_prayer_utilized_satisfied_yes_reason").val("");
        $("id_facility_prayer_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_prayer_utilized_satisfied_no_reason").hide();
        $("#id_facility_prayer_utilized_satisfied_yes_reason").val("");
        }
});
   $(document).ready(function () {
    var difnu1 = $("input:radio[name=facility_prayer_utilized]:checked").val()
    if (difnu1 == "Yes" ){
        $("#div_id_facility_prayer_utilized_satisfied").show();
        //console.log("Check div_id_facility_prayer_utilized_satisfied");
        }
        else if (difnu1 == "No" ){
        $("input:radio[name='facility_prayer_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_prayer_utilized_satisfied").hide();
        $("#div_id_facility_prayer_utilized_no_reason").show();
       // console.log("Uncheck div_id_facility_prayer_utilized_satisfied");
        }
        else{
        $("input:radio[name='facility_prayer_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_prayer_utilized_satisfied").hide();
        $("id_facility_prayer_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_prayer_utilized_no_reason").hide();
        }
});
//prayer others
    $(document).ready(function () {
    $('#id_facility_prayer_utilized_no_reason_3').ready(function() {
        if ($('#id_facility_prayer_utilized_no_reason_3').is(':checked')) {
              $("#div_id_facility_prayer_others").show();
        }
        else {
        $("id_facility_prayer_others").prop("required", false);
        $("#div_id_facility_prayer_others").hide();
        $("#id_facility_prayer_others").val("");
        }
});
});

$('#id_facility_prayer_utilized_no_reason_3').on('click',function() {
        console.log($(this).val());
        if ($(this).is(':checked')) {
              $("#div_id_facility_prayer_others").show();
        }
        else {
        $("id_facility_prayer_others").prop("required", false);
        $("#div_id_facility_prayer_others").hide();
        $("#id_facility_prayer_others").val("");
        }
});
///////////////////////////////////////////////////medical//////////////////////////////////////////////
//GAD Related facilities
//medical
$('input[type=radio][name=facility_medical]').on('change', function() {
    var difn = $(this).val()
        if (difn == "Yes" ) {
        $("#div_id_facility_medical_utilized").show();
        }
        else {
        $('input[type=radio][name=facility_medical_utilized]').prop("required", false);
        $("#div_id_facility_medical_utilized").hide();
        $('input[type=radio][name=facility_medical_utilized_satisfied').prop("required", false);
        $("#div_id_facility_medical_utilized_satisfied").hide();
        $("#id_facility_medical_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_medical_utilized_satisfied_yes_reason").hide();
        $("#id_facility_medical_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_medical_utilized_satisfied_no_reason").hide();
        $("#id_facility_medical_utilized_no_reason").prop("required", false);
        $("#div_id_facility_medical_utilized_no_reason").hide();
        $("#id_facility_medical_others").prop("required", false);
        $("#div_id_facility_medical_others").hide();
        }
});
   $(document).ready(function () {
    var difmed1 = $("input:radio[name=facility_medical]:checked").val()
    if (difmed1 == "Yes" ){
        $("#div_id_facility_medical_utilized").show();
        }
        else {
        $('input[type=radio][name=facility_medical_utilized]').prop("required", false);
        $("#div_id_facility_medical_utilized").hide();
        $('input[type=radio][name=facility_medical_utilized_satisfied').prop("required", false);
        $("#div_id_facility_medical_utilized_satisfied").hide();
        $("#id_facility_medical_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_medical_utilized_satisfied_yes_reason").hide();
        $("#id_facility_medical_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_medical_utilized_satisfied_no_reason").hide();
        $("#id_facility_medical_utilized_no_reason").prop("required", false);
        $("#div_id_facility_medical_utilized_no_reason").hide();
        $("#id_facility_medical_others").prop("required", false);
        $("#div_id_facility_medical_others").hide();
        }
});
//medical utilized
$('input[type=radio][name=facility_medical_utilized]').on('change', function() {
    var difnu = $(this).val()
        if (difnu == "Yes" ) {
        $("#div_id_facility_medical_utilized_satisfied").show();
        $("input:checked[name='facility_medical_utilized_no_reason']").prop("checked", false);
        $("input:checked[name='facility_medical_utilized_no_reason']").prop("required", false);
        $("#div_id_facility_medical_utilized_no_reason").hide();
        $("#id_facility_medical_utilized_others").prop("checked", false);
        $("#div_id_facility_medical_others").hide();
        $("#id_facility_medical_others").val("");
            console.log("Check Yes" + difnu);
        }
        else if  (difnu == "No" ) {
        $("input:radio[name='facility_medical_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_medical_utilized_satisfied").hide();
        $("#div_id_facility_medical_utilized_no_reason").show();
        $("id_facility_medical_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_medical_utilized_satisfied_yes_reason").hide();
        $("#id_facility_medical_utilized_satisfied_yes_reason").val("");
        $("id_facility_medical_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_medical_utilized_satisfied_no_reason").hide();
        $("#id_facility_medical_utilized_satisfied_yes_reason").val("");
        console.log("Check No" + difnu);
        }
        else{
        $("input:radio[name='facility_medical_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_medical_utilized_satisfied").hide();
        $("id_facility_medical_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_medical_utilized_no_reason").hide();
        }
});
   $(document).ready(function () {
    var difnu1 = $("input:radio[name=facility_medical_utilized]:checked").val()
    if (difnu1 == "Yes" ){
        $("#div_id_facility_medical_utilized_satisfied").show();
        }
        else if (difnu1 == "No" ){
        $("input:radio[name='facility_medical_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_medical_utilized_satisfied").hide();
        $("#div_id_facility_medical_utilized_no_reason").show();
        $("id_facility_medical_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_medical_utilized_satisfied_yes_reason").hide();
        $("#id_facility_medical_utilized_satisfied_yes_reason").val("");
        $("id_facility_medical_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_medical_utilized_satisfied_no_reason").hide();
        $("#id_facility_medical_utilized_satisfied_yes_reason").val("");
        }
        else{
        $("input:radio[name='facility_medical_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_medical_utilized_satisfied").hide();
        $("id_facility_medical_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_medical_utilized_no_reason").hide();
        }
});
//medical utilized satisfied
$('input[type=radio][name=facility_medical_utilized_satisfied]').on('change', function() {
    var difnus = $(this).val()
        if (difnus == "Yes" ) {
        $("#div_id_facility_medical_utilized_satisfied_yes_reason").show();
        $("#id_facility_medical_utilized_satisfied_no_reason").val("");
        $("id_facility_medical_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_medical_utilized_satisfied_no_reason").hide();
          //  console.log("Check div_id_facility_medical_utilized_satisfied");
        }
        else if  (difnus == "No" ) {
        $("#id_facility_medical_utilized_satisfied_yes_reason").val("");
        $("id_facility_medical_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_medical_utilized_satisfied_yes_reason").hide();
        $("#div_id_facility_medical_utilized_satisfied_no_reason").show();
       // console.log("Uncheck div_id_facility_medical_utilized_satisfied");
        }
        else{
        $("id_facility_medical_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_medical_utilized_satisfied_yes_reason").hide();
        $("#id_facility_medical_utilized_satisfied_yes_reason").val("");
        $("id_facility_medical_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_medical_utilized_satisfied_no_reason").hide();
        $("#id_facility_medical_utilized_satisfied_yes_reason").val("");
        }
});
   $(document).ready(function () {
    var difnu1 = $("input:radio[name=facility_medical_utilized]:checked").val()
    if (difnu1 == "Yes" ){
        $("#div_id_facility_medical_utilized_satisfied").show();
        //console.log("Check div_id_facility_medical_utilized_satisfied");
        }
        else if (difnu1 == "No" ){
        $("input:radio[name='facility_medical_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_medical_utilized_satisfied").hide();
        $("#div_id_facility_medical_utilized_no_reason").show();
       // console.log("Uncheck div_id_facility_medical_utilized_satisfied");
        }
        else{
        $("input:radio[name='facility_medical_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_medical_utilized_satisfied").hide();
        $("id_facility_medical_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_medical_utilized_no_reason").hide();
        }
});
//medical others
    $(document).ready(function () {
    $('#id_facility_medical_utilized_no_reason_3').ready(function() {
        if ($('#id_facility_medical_utilized_no_reason_3').is(':checked')) {
              $("#div_id_facility_medical_others").show();
        }
        else {
        $("id_facility_medical_others").prop("required", false);
        $("#div_id_facility_medical_others").hide();
        $("#id_facility_medical_others").val("");
        }
});
});

$('#id_facility_medical_utilized_no_reason_3').on('click',function() {
        console.log($(this).val());
        if ($(this).is(':checked')) {
              $("#div_id_facility_medical_others").show();
        }
        else {
        $("id_facility_medical_others").prop("required", false);
        $("#div_id_facility_medical_others").hide();
        $("#id_facility_medical_others").val("");
        }
});
/////////////////////////////////////////////////////recreation//////////////////////////////////////////////
////GAD Related facilities
//////recreation
////$('input[type=radio][name=facility_recreation]').on('change', function() {
////    var difrec = $(this).val()
////        if (difrec == "Yes" ) {
////        $("#div_id_facility_recreation_utilized").show();
////        }
////        else {
////        $("#div_id_facility_recreation_utilized").hide();
////        $("#div_id_facility_recreation_utilized_satisfied").hide();
////        $("#div_id_facility_recreation_utilized_satisfied_yes_reason").hide();
////        $("#div_id_facility_recreation_utilized_satisfied_no_reason").hide();
////        $("#div_id_facility_recreation_utilized_no_reason").hide();
////        $("#div_id_facility_recreation_others").hide();
////        }
////});
////   $(document).ready(function () {
////    var difrec1 = $("input:radio[name=facility_recreation]:checked").val()
////    if (difrec1 == "Yes" ){
////        $("#div_id_facility_recreation_utilized").show();
////        }
////        else {
////        $("#div_id_facility_recreation_utilized").hide();
////        $("#div_id_facility_recreation_utilized_satisfied").hide();
////        $("#div_id_facility_recreation_utilized_satisfied_yes_reason").hide();
////        $("#div_id_facility_recreation_utilized_satisfied_no_reason").hide();
////        $("#div_id_facility_recreation_utilized_no_reason").hide();
////        $("#div_id_facility_recreation_others").hide();
////        }
////});
//////recreation utilized
////$('input[type=radio][name=facility_recreation_utilized]').on('change', function() {
////    var difrecu = $(this).val()
////        if (difrecu == "Yes" ) {
////        $("#div_id_facility_recreation_utilized_satisfied").show();
////        $("#div_id_facility_recreation_utilized_no_reason").hide();
////        $("input:checked[name='facility_recreation_utilized_no_reason']").prop("checked", false);
////        $("#div_id_facility_recreation_others").hide();
////        $("#id_facility_recreation_others").val("");
////            console.log("Check Yes" + difnu);
////        }
////        else if  (difrecu == "No" ) {
////        $("#div_id_facility_recreation_utilized_satisfied").hide();
////       // $("#facility_nursing_utilized_satisfied").attr(checked, false);
////       $("input:radio[name='facility_recreation_utilized_satisfied']").prop("checked", false);
////        $("#div_id_facility_recreation_utilized_no_reason").show();
////
////        $("#div_id_facility_recreation_utilized_satisfied_yes_reason").hide();
////        $("#id_facility_recreation_utilized_satisfied_yes_reason").val("");
////        $("#div_id_facility_recreation_utilized_satisfied_no_reason").hide();
////        $("#id_facility_recreation_utilized_satisfied_yes_reason").val("");
////        console.log("Check No" + difnu);
////        }
////        else{
////        $("#div_id_facility_recreation_utilized_satisfied").hide();
////        $("#div_id_facility_recreation_utilized_no_reason").hide();
////        }
////});
////   $(document).ready(function () {
////    var difrecu1 = $("input:radio[name=facility_recreation_utilized]:checked").val()
////    if (difrecu1 == "Yes" ){
////        $("#div_id_facility_recreation_utilized_satisfied").show();
////        }
////        else if (difrecu1 == "No" ){
////        $("#div_id_facility_recreation_utilized_satisfied").hide();
////        $("#div_id_facility_recreation_utilized_no_reason").show();
////
////        $("#div_id_facility_recreation_utilized_satisfied_yes_reason").hide();
////        $("#id_facility_recreation_utilized_satisfied_yes_reason").val("");
////        $("#div_id_facility_recreation_utilized_satisfied_no_reason").hide();
////        $("#id_facility_recreation_utilized_satisfied_yes_reason").val("");
////        }
////        else{
////        $("#div_id_facility_recreation_utilized_satisfied").hide();
////        $("#div_id_facility_recreation_utilized_no_reason").hide();
////        }
////});
//////recreation utilized satisfied
////$('input[type=radio][name=facility_recreation_utilized_satisfied]').on('change', function() {
////    var difrecus = $(this).val()
////        if (difrecus == "Yes" ) {
////        $("#div_id_facility_recreation_utilized_satisfied_yes_reason").show();
////        $("#id_facility_recreation_utilized_satisfied_no_reason").val("");
////        $("#div_id_facility_recreation_utilized_satisfied_no_reason").hide();
////          //  console.log("Check div_id_facility_nursing_utilized_satisfied");
////        }
////        else if  (difrecus == "No" ) {
////        $("#id_facility_recreation_utilized_satisfied_yes_reason").val("");
////        $("#div_id_facility_recreation_utilized_satisfied_yes_reason").hide();
////        $("#div_id_facility_recreation_utilized_satisfied_no_reason").show();
////       // console.log("Uncheck div_id_facility_nursing_utilized_satisfied");
////        }
////        else{
////        $("#div_id_facility_recreation_utilized_satisfied_yes_reason").hide();
////        $("#id_facility_recreation_utilized_satisfied_yes_reason").val("");
////        $("#div_id_facility_recreation_utilized_satisfied_no_reason").hide();
////        $("#id_facility_recreation_utilized_satisfied_yes_reason").val("");
////        }
////});
////   $(document).ready(function () {
////    var difrecus1 = $("input:radio[name=facility_recreation_utilized]:checked").val()
////    if (difrecus1 == "Yes" ){
////        $("#div_id_facility_recreation_utilized_satisfied").show();
////        //console.log("Check div_id_facility_nursing_utilized_satisfied");
////        }
////        else if (difrecus1 == "No" ){
////        $("#div_id_facility_recreation_utilized_satisfied").hide();
////        $("#div_id_facility_recreation_utilized_no_reason").show();
////       // console.log("Uncheck div_id_facility_nursing_utilized_satisfied");
////        }
////        else{
////        $("#div_id_facility_recreation_utilized_satisfied").hide();
////        $("#div_id_facility_recreation_utilized_no_reason").hide();
////        }
////});
//////recreation others
////    $(document).ready(function () {
////    $('#id_facility_recreation_utilized_no_reason_3').ready(function() {
////        if ($('#id_facility_recreation_utilized_no_reason_3').is(':checked')) {
////              $("#div_id_facility_recreation_others").show();
////        }
////        else {
////        $("#div_id_facility_recreation_others").hide();
////        $("#id_facility_recreation_others").val("");
////        }
////});
////});
////
////$('#id_facility_recreation_utilized_no_reason_3').on('click',function() {
////        console.log($(this).val());
////        if ($(this).is(':checked')) {
////              $("#div_id_facility_recreation_others").show();
////        }
////        else {
////        $("#div_id_facility_recreation_others").hide();
////        $("#id_facility_recreation_others").val("");
////        }
////});
$('input[type=radio][name=facility_recreation]').on('change', function() {
    var difn = $(this).val()
        if (difn == "Yes" ) {
        $("#div_id_facility_recreation_utilized").show();
        }
        else {
        $('input[type=radio][name=facility_recreation_utilized]').prop("required", false);
        $("#div_id_facility_recreation_utilized").hide();
        $('input[type=radio][name=facility_recreation_utilized_satisfied').prop("required", false);
        $("#div_id_facility_recreation_utilized_satisfied").hide();
        $("#id_facility_recreation_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_recreation_utilized_satisfied_yes_reason").hide();
        $("#id_facility_recreation_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_recreation_utilized_satisfied_no_reason").hide();
        $("#id_facility_recreation_utilized_no_reason").prop("required", false);
        $("#div_id_facility_recreation_utilized_no_reason").hide();
        $("#id_facility_recreation_others").prop("required", false);
        $("#div_id_facility_recreation_others").hide();
        }
});
   $(document).ready(function () {
    var difrec1 = $("input:radio[name=facility_recreation]:checked").val()
    if (difrec1 == "Yes" ){
        $("#div_id_facility_recreation_utilized").show();
        }
        else {
        $('input[type=radio][name=facility_recreation_utilized]').prop("required", false);
        $("#div_id_facility_recreation_utilized").hide();
        $('input[type=radio][name=facility_recreation_utilized_satisfied').prop("required", false);
        $("#div_id_facility_recreation_utilized_satisfied").hide();
        $("#id_facility_recreation_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_recreation_utilized_satisfied_yes_reason").hide();
        $("#id_facility_recreation_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_recreation_utilized_satisfied_no_reason").hide();
        $("#id_facility_recreation_utilized_no_reason").prop("required", false);
        $("#div_id_facility_recreation_utilized_no_reason").hide();
        $("#id_facility_recreation_others").prop("required", false);
        $("#div_id_facility_recreation_others").hide();
        }
});
//recreation utilized
$('input[type=radio][name=facility_recreation_utilized]').on('change', function() {
    var difnu = $(this).val()
        if (difnu == "Yes" ) {
        $("#div_id_facility_recreation_utilized_satisfied").show();
        $("input:checked[name='facility_recreation_utilized_no_reason']").prop("checked", false);
        $("input:checked[name='facility_recreation_utilized_no_reason']").prop("required", false);
        $("#div_id_facility_recreation_utilized_no_reason").hide();
        $("#id_facility_recreation_utilized_others").prop("checked", false);
        $("#div_id_facility_recreation_others").hide();
        $("#id_facility_recreation_others").val("");
            console.log("Check Yes" + difnu);
        }
        else if  (difnu == "No" ) {
        $("input:radio[name='facility_recreation_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_recreation_utilized_satisfied").hide();
        $("#div_id_facility_recreation_utilized_no_reason").show();
        $("id_facility_recreation_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_recreation_utilized_satisfied_yes_reason").hide();
        $("#id_facility_recreation_utilized_satisfied_yes_reason").val("");
        $("id_facility_recreation_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_recreation_utilized_satisfied_no_reason").hide();
        $("#id_facility_recreation_utilized_satisfied_yes_reason").val("");
        console.log("Check No" + difnu);
        }
        else{
        $("input:radio[name='facility_recreation_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_recreation_utilized_satisfied").hide();
        $("id_facility_recreation_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_recreation_utilized_no_reason").hide();
        }
});
   $(document).ready(function () {
    var difnu1 = $("input:radio[name=facility_recreation_utilized]:checked").val()
    if (difnu1 == "Yes" ){
        $("#div_id_facility_recreation_utilized_satisfied").show();
        }
        else if (difnu1 == "No" ){
        $("input:radio[name='facility_recreation_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_recreation_utilized_satisfied").hide();
        $("#div_id_facility_recreation_utilized_no_reason").show();
        $("id_facility_recreation_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_recreation_utilized_satisfied_yes_reason").hide();
        $("#id_facility_recreation_utilized_satisfied_yes_reason").val("");
        $("id_facility_recreation_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_recreation_utilized_satisfied_no_reason").hide();
        $("#id_facility_recreation_utilized_satisfied_yes_reason").val("");
        }
        else{
        $("input:radio[name='facility_recreation_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_recreation_utilized_satisfied").hide();
        $("id_facility_recreation_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_recreation_utilized_no_reason").hide();
        }
});
//recreation utilized satisfied
$('input[type=radio][name=facility_recreation_utilized_satisfied]').on('change', function() {
    var difnus = $(this).val()
        if (difnus == "Yes" ) {
        $("#div_id_facility_recreation_utilized_satisfied_yes_reason").show();
        $("#id_facility_recreation_utilized_satisfied_no_reason").val("");
        $("id_facility_recreation_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_recreation_utilized_satisfied_no_reason").hide();
          //  console.log("Check div_id_facility_recreation_utilized_satisfied");
        }
        else if  (difnus == "No" ) {
        $("#id_facility_recreation_utilized_satisfied_yes_reason").val("");
        $("id_facility_recreation_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_recreation_utilized_satisfied_yes_reason").hide();
        $("#div_id_facility_recreation_utilized_satisfied_no_reason").show();
       // console.log("Uncheck div_id_facility_recreation_utilized_satisfied");
        }
        else{
        $("id_facility_recreation_utilized_satisfied_yes_reason").prop("required", false);
        $("#div_id_facility_recreation_utilized_satisfied_yes_reason").hide();
        $("#id_facility_recreation_utilized_satisfied_yes_reason").val("");
        $("id_facility_recreation_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_recreation_utilized_satisfied_no_reason").hide();
        $("#id_facility_recreation_utilized_satisfied_yes_reason").val("");
        }
});
   $(document).ready(function () {
    var difnu1 = $("input:radio[name=facility_recreation_utilized]:checked").val()
    if (difnu1 == "Yes" ){
        $("#div_id_facility_recreation_utilized_satisfied").show();
        //console.log("Check div_id_facility_recreation_utilized_satisfied");
        }
        else if (difnu1 == "No" ){
        $("input:radio[name='facility_recreation_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_recreation_utilized_satisfied").hide();
        $("#div_id_facility_recreation_utilized_no_reason").show();
       // console.log("Uncheck div_id_facility_recreation_utilized_satisfied");
        }
        else{
        $("input:radio[name='facility_recreation_utilized_satisfied']").prop("required", false);
        $("#div_id_facility_recreation_utilized_satisfied").hide();
        $("id_facility_recreation_utilized_satisfied_no_reason").prop("required", false);
        $("#div_id_facility_recreation_utilized_no_reason").hide();
        }
});
//recreation others
    $(document).ready(function () {
    $('#id_facility_recreation_utilized_no_reason_3').ready(function() {
        if ($('#id_facility_recreation_utilized_no_reason_3').is(':checked')) {
              $("#div_id_facility_recreation_others").show();
        }
        else {
        $("id_facility_recreation_others").prop("required", false);
        $("#div_id_facility_recreation_others").hide();
        $("#id_facility_recreation_others").val("");
        }
});
});

$('#id_facility_recreation_utilized_no_reason_3').on('click',function() {
        console.log($(this).val());
        if ($(this).is(':checked')) {
              $("#div_id_facility_recreation_others").show();
        }
        else {
        $("id_facility_recreation_others").prop("required", false);
        $("#div_id_facility_recreation_others").hide();
        $("#id_facility_recreation_others").val("");
        }
});
///////////////////////////////Finances and Loans//////////////////////////
/////loans
$('#div_id_loans_availed input[type="checked"]').change(function(){
    var dila = $(this).val();
        if (dila !="None")  {
        $("#div_id_other_loans_availed").show();
         $('#id_loans_availed_8').prop('checked', false)
        }
        else {
        $("id_other_loans_availed").prop("required", false);
        $("#div_id_other_loans_availed").hide();
        $("#id_other_loans_availed").val("");
        }
});
//   $(document).ready(function () {
//    var dila1 = $("input:radio[name=loans_availed]:checked").val()
//    if (dila1 == "Others"){
//              $("#div_id_other_loans_availed").show();
//        }
//        else if (dila1 == "None"){
//            $('input[type=checked][name=reasons_loans_availed]').prop("required", false);
//            $("#div_id_reason_loans_availed").hide();
//            $("#id_other_loans_availed_reason").prop("required", false);
//            $("#div_id_other_loans_availed_reason").hide();
//        }
//        else {
//            $("#div_id_reason_loans_availed").show();
//            $("#id_other_loans_availed_reason").prop("required", false);
//            $("#div_id_other_loans_availed_reason").hide();
//            $("#id_other_loans_availed").prop("required", false);
//             $("#div_id_other_loans_availed").hide();
//            $("#id_other_loans_availed").val("");
//        }
//});
$(document).ready(function () {
    $('#id_loans_availed_9').ready(function() {
        if ($('#id_loans_availed_9').is(':checked')) {
              $("#div_id_other_loans_availed").show();
        }
        else {
        $("#id_other_loans_availed").prop("required", false);
        $("#div_id_other_loans_availed").hide();
        $("#id_other_loans_availed").val("");
        }
    });
});
$('#id_loans_availed_9').on('click',function() {
        console.log($(this).val());
        if ($(this).is(':checked')) {
        $("#div_id_other_loans_availed").show();
        }
        else {
        $('input[type=checked][name=reasons_loans_availed]').prop("required", false);
        $("#div_id_reason_loans_availed").hide();
        $("#id_other_loans_availed").prop("required", false);
        $("#div_id_other_loans_availed").hide();
        $("#id_other_loans_availed").val("");
        }
});

$(document).ready(function () {
    $('#id_loans_availed_8').ready(function() {
        if ($('#id_loans_availed_8').is(':checked')) {
            $("#div_id_reason_loans_availed").show();
            $("#div_id_other_loans_availed_reason").show();
        }
        else {
            $('input[type=checked][name=reasons_loans_availed]').prop("required", false);
            $("#div_id_reason_loans_availed").hide();
            $("#id_other_loans_availed_reason").prop("required", false);
            $("#div_id_other_loans_availed_reason").hide();
        }
    });
});

$('#id_loans_availed_8').on('click',function() {
        if ($(this).is(':checked')) {
             $('#id_loans_availed_0').prop('checked', false)
     $('#id_loans_availed_1').prop('checked', false)
     $('#id_loans_availed_2').prop('checked', false)
     $('#id_loans_availed_3').prop('checked', false)
     $('#id_loans_availed_4').prop('checked', false)
     $('#id_loans_availed_5').prop('checked', false)
     $('#id_loans_availed_6').prop('checked', false)
     $('#id_loans_availed_7').prop('checked', false)
    $('#id_loans_availed_9').prop('checked', false)
     $("#div_id_other_loans_availed").hide();
     $("#id_other_loans_availed").val("");
        }

     else {
            $('input[type=checked][name=reasons_loans_availed]').prop("required", false);
            $("#div_id_reason_loans_availed").hide();
            $("#id_other_loans_availed_reason").prop("required", false);
            $("#div_id_other_loans_availed_reason").hide();
        }
});

$('#id_reason_loans_availed_7').on('click',function() {
        if ($(this).is(':checked')) {
              $("#div_id_other_loans_availed_reason").show();
        }

        else {
        $("#id_other_loans_availed_reason").prop("required", false);
        $("#div_id_other_loans_availed_reason").hide();
        $("#id_other_loans_availed_reason").val("");
        }
});

$(document).ready(function () {
    $('#id_loans_availed_8').ready(function() {
        if ($('#id_loans_availed_8').is(':checked')) {
            $("#div_id_reason_loans_availed").show();
            $("#div_id_other_loans_availed_reason").show();
        }
        else {
            $('input[type=checked][name=reasons_loans_availed]').prop("required", false);
            $("#div_id_reason_loans_availed").hide();
            $("#id_other_loans_availed_reason").prop("required", false);
            $("#div_id_other_loans_availed_reason").hide();
        }
    });
});
////////////////////////financial//////////////////
$('input[type=radio][name=financial_assitance]').on('change', function() {
    var difa = $(this).val()
        if (difa == "Yes" ) {
        $("#div_id_yes_identified_financial_assitance").show();
        $("#div_id_been_benificiary_financial_assist").show();
        }
        else if (difa == "No" ) {
        $('input[type=checked][name=yes_identified_financial_assitance]').prop("required", false);
        $("input:checked[name='yes_identified_financial_assitance']").prop("checked", false);
        $("#div_id_yes_identified_financial_assitance").hide();
        $('input[type=radio][name=been_benificiary_financial_assist]').prop("required", false);
        $("input:radio[name='been_benificiary_financial_assist']").prop("checked", false);
        $("#div_id_been_benificiary_financial_assist").hide();
         $("#id_other_financial_assist").prop("required", false);
        $("#div_id_other_financial_assist").hide();
        $("#id_other_financial_assist").val("");
        }
        else {
        $('input[type=checked][name=yes_identified_financial_assitance]').prop("required", false);
        $("#div_id_yes_identified_financial_assitance").hide();
        $('input[type=radio][name=been_benificiary_financial_assist]').prop("required", false);
        $("#div_id_been_benificiary_financial_assist").hide();
        $("#id_other_financial_assist").prop("required", false);
        $("#div_id_other_financial_assist").hide();
        $("#id_other_financial_assist").val("");
        }
});
   $(document).ready(function () {
    var difa1 = $("input:radio[name=financial_assitance]:checked").val()
    if (difa1 == "Yes" ){
            $("#div_id_yes_identified_financial_assitance").show();
            $("#div_id_been_benificiary_financial_assist").show();
        }
                else if (difa1 == "No" ) {
                $('input[type=checked][name=yes_identified_financial_assitance]').prop("required", false);
                $("input:radio[name='yes_identified_financial_assitance']").prop("checked", false);
        $("#div_id_yes_identified_financial_assitance").hide();
        $('input[type=radio][name=been_benificiary_financial_assist]').prop("required", false);
        $("input:radio[name='been_benificiary_financial_assist']").prop("checked", false);
        $("#div_id_been_benificiary_financial_assist").hide();
        }
        else {
         $('input[type=checked][name=yes_identified_financial_assitance]').prop("required", false);
        $("input:checked[name='yes_identified_financial_assitance']").prop("checked", false);
        $("#div_id_yes_identified_financial_assitance").hide();
        $('input[type=radio][name=been_benificiary_financial_assist]').prop("required", false);
        $("input:radio[name='been_benificiary_financial_assist']").prop("checked", false);
        $("#div_id_been_benificiary_financial_assist").hide();
        $("#id_other_financial_assist").prop("required", false);
        $("#div_id_other_financial_assist").hide();
        $("#id_other_financial_assist").val("");
        }
});
//financial others
    $(document).ready(function () {
    $('#id_yes_identified_financial_assitance_3').ready(function() {
        if ($('#id_yes_identified_financial_assitance_3').is(':checked')) {
              $("#div_id_other_financial_assist").show();
        }
        else {
        $("#id_other_financial_assist").prop("required", false);
        $("#div_id_other_financial_assist").hide();
        $("#id_other_financial_assist").val("");
        }
});
});

$('#id_yes_identified_financial_assitance_3').on('click',function() {
        console.log($(this).val());
        if ($(this).is(':checked')) {
              $("#div_id_other_financial_assist").show();
        }
        else {
        $("#id_other_financial_assist").prop("required", false);
        $("#div_id_other_financial_assist").hide();
        $("#id_other_financial_assist").val("");
        }
});

////////////////////////// stress sickness mental health ////////////////
// stress
$('input[type=radio][name=experience_negative_stress]').on('change', function() {
    var diens = $(this).val()
        if (diens == "Yes" ) {
        $("#div_id_causes_negative_stress").show();
        $("#div_id_how_manage_stress").show();
        }
        else {
         $("#id_other_causes_stress").prop("required", false);
        $("#id_other_causes_stress").val("");
        $("#div_id_other_causes_stress").hide();
        $("#id_other_how_manage_stress").prop("required", false);
        $("#id_other_how_manage_stress").val("");
        $("#div_id_other_how_manage_stress").hide();
        $('input[type=checked][name=causes_negative_stress]').prop("required", false);
        $("input:checked[name='causes_negative_stress']").prop("checked", false);
        $("#div_id_causes_negative_stress").hide();
        $('input[type=checked][name=how_manage_stress]').prop("required", false);
        $("input:checked[name='how_manage_stress']").prop("checked", false);
        $("#div_id_how_manage_stress").hide();
        }
});
   $(document).ready(function () {
    var diens1 = $("input:radio[name=facility_recreation]:checked").val()
    if (diens1 == "Yes" ){
                $("#div_id_causes_negative_stress").show();
        $("#div_id_how_manage_stress").show();
        }
        else {
        $("#id_other_causes_stress").prop("required", false);
        $("#id_other_causes_stress").val("");
        $("#div_id_other_causes_stress").hide();
        $("#id_other_how_manage_stress").prop("required", false);
        $("#id_other_how_manage_stress").val("");
        $("#div_id_other_how_manage_stress").hide();
        $('input[type=checked][name=causes_negative_stress]').prop("required", false);
        $("input:checked[name='causes_negative_stress']").prop("checked", false);
        $("#div_id_causes_negative_stress").hide();
        $('input[type=checked][name=how_manage_stress]').prop("required", false);
        $("input:checked[name='how_manage_stress']").prop("checked", false);
        $("#div_id_how_manage_stress").hide();
        }
});

//others causes negative stress
    $(document).ready(function () {
    $('#id_causes_negative_stress_10').ready(function() {
        if ($('#id_causes_negative_stress_10').is(':checked')) {
              $("#div_id_other_causes_stress").show();
        }
        else {
        $("#id_other_causes_stress").prop("required", false);
        $("#div_id_other_causes_stress").hide();
        $("#id_other_causes_stress").val("");
        }
});
});

$('#id_causes_negative_stress_10').on('click',function() {
        console.log($(this).val());
        if ($(this).is(':checked')) {
              $("#div_id_other_causes_stress").show();
        }
        else {
        $("#id_other_causes_stress").prop("required", false);
        $("#div_id_other_causes_stress").hide();
        $("#id_other_causes_stress").val("");
        }
});
//others howto manage negative stress
    $(document).ready(function () {
    $('#id_how_manage_stress_11').ready(function() {
        if ($('#id_how_manage_stress_11').is(':checked')) {
              $("#div_id_other_how_manage_stress").show();
        }
        else {
        $("#id_other_how_manage_stress").prop("required", false);
        $("#div_id_other_how_manage_stress").hide();
        $("#id_other_how_manage_stress").val("");
        }
});
});

$('#id_how_manage_stress_11').on('click',function() {
        console.log($(this).val());
        if ($(this).is(':checked')) {
              $("#div_id_other_how_manage_stress").show();
        }
        else {
        $("#id_other_how_manage_stress").prop("required", false);
        $("#div_id_other_how_manage_stress").hide();
        $("#id_other_how_manage_stress").val("");
        }
});

//sickness lifestyle
    $(document).ready(function () {
    $('#id_sickness_lifestyle_7').ready(function() {
        if ($('#id_sickness_lifestyle_7').is(':checked')) {
              $("#div_id_other_sick_lifestyle").show();
        }
        else {
        $("#id_other_sick_lifestyle").prop("required", false);
        $("#div_id_other_sick_lifestyle").hide();
        $("#id_other_sick_lifestyle").val("");
        }
});
});

$('#id_sickness_lifestyle_7').on('click',function() {
        console.log($(this).val());
        if ($(this).is(':checked')) {
              $("#div_id_other_sick_lifestyle").show();
        }
        else {
        $("#id_other_sick_lifestyle").prop("required", false);
        $("#div_id_other_sick_lifestyle").hide();
        $("#id_other_sick_lifestyle").val("");
        }
});
//sickness genetic
    $(document).ready(function () {
    $('#id_sickness_genetic_4').ready(function() {
        if ($('#id_sickness_genetic_4').is(':checked')) {
              $("#div_id_other_sick_genetic").show();
        }
        else {
        $("#id_other_sick_genetic").prop("required", false);
        $("#div_id_other_sick_genetic").hide();
        $("#id_other_sick_genetic").val("");
        }
});
});

$('#id_sickness_genetic_4').on('click',function() {
        console.log($(this).val());
        if ($(this).is(':checked')) {
              $("#div_id_other_sick_genetic").show();
        }
        else {
        $("#id_other_sick_genetic").prop("required", false);
        $("#div_id_other_sick_genetic").hide();
        $("#id_other_sick_genetic").val("");
        }
});
//sickness workrelated
    $(document).ready(function () {
    $('#id_sickness_workrelated_7').ready(function() {
        if ($('#id_sickness_workrelated_7').is(':checked')) {
              $("#div_id_other_sick_workrelated").show();
        }
        else {
        $("#id_other_sick_workrelated").prop("required", false);
        $("#div_id_other_sick_workrelated").hide();
        $("#id_other_sick_workrelated").val("");
        }
});
});

$('#id_sickness_workrelated_7').on('click',function() {
        console.log($(this).val());
        if ($(this).is(':checked')) {
              $("#div_id_other_sick_workrelated").show();
        }
        else {
        $("#id_other_sick_workrelated").prop("required", false);
        $("#div_id_other_sick_workrelated").hide();
        $("#id_other_sick_workrelated").val("");
        }
});

// mentalhealth
$('input[type=radio][name=mental_health]').on('change', function() {
    var dimh = $(this).val()
        if (dimh == "Yes" ) {
        $("#div_id_seek_professional").show();
        }
        else {
        $("#id_no_seek_professional").prop("required", false);
        $("#id_no_seek_professional").val("");
        $("#div_id_no_seek_professional").hide();
        $("#id_no_seek_professional_nomedication").prop("required", false);
        $("#div_id_no_seek_professional_nomedication").hide();
        $("#id_no_seek_professional_nomedication").val("");
        $('input[type=radio][name=seek_professional]').prop("required", false);
        $("input:radio[name='seek_professional']").prop("checked", false);
        $("#div_id_seek_professional").hide();
        $('input[type=radio][name=yes_seek_professional]').prop("required", false);
        $("input:checked[name='yes_seek_professional']").prop("checked", false);
        $("#div_id_yes_seek_professional").hide();
        }
});
   $(document).ready(function () {
    var diens1 = $("input:radio[name=mental_health]:checked").val()
    if (diens1 == "Yes" ){
        $("#div_id_seek_professional").show();
        }
        else {
        $("#id_no_seek_professional").prop("required", false);
        $("#id_no_seek_professional").val("");
        $("#div_id_no_seek_professional").hide();
        $("#id_no_seek_professional_nomedication").prop("required", false);
        $("#div_id_no_seek_professional_nomedication").hide();
        $("#id_no_seek_professional_nomedication").val("");
        $('input[type=radio][name=seek_professional]').prop("required", false);
        $("input:radio[name='seek_professional']").prop("checked", false);
        $("#div_id_seek_professional").hide();
        $('input[type=radio][name=yes_seek_professional]').prop("required", false);
        $("input:checked[name='yes_seek_professional']").prop("checked", false);
        $("#div_id_yes_seek_professional").hide();
        }
});

$('input[type=radio][name=mental_health]').on('change', function() {
    var dimh = $(this).val()
        if (dimh == "Yes" ) {
        $("#div_id_seek_professional").show();
        }
        else {
        $("#id_no_seek_professional").prop("required", false);
        $("#id_no_seek_professional").val("");
        $("#div_id_no_seek_professional").hide();
        $("#id_no_seek_professional_nomedication").prop("required", false);
        $("#div_id_no_seek_professional_nomedication").hide();
        $("#id_no_seek_professional_nomedication").val("");
        $('input[type=radio][name=seek_professional]').prop("required", false);
        $("input:radio[name='seek_professional']").prop("checked", false);
        $("#div_id_seek_professional").hide();
        $('input[type=radio][name=yes_seek_professional]').prop("required", false);
        $("input:checked[name='yes_seek_professional']").prop("checked", false);
        $("#div_id_yes_seek_professional").hide();
        }
});
   $(document).ready(function () {
    var diens1 = $("input:radio[name=mental_health]:checked").val()
    if (diens1 == "Yes" ){
        $("#div_id_seek_professional").show();
        }
        else {
        $("#id_no_seek_professional").prop("required", false);
        $("#id_no_seek_professional").val("");
        $("#div_id_no_seek_professional").hide();
        $("#id_no_seek_professional_nomedication").prop("required", false);
        $("#div_id_no_seek_professional_nomedication").hide();
        $("#id_no_seek_professional_nomedication").val("");
        $('input[type=radio][name=seek_professional]').prop("required", false);
        $("input:radio[name='seek_professional']").prop("checked", false);
        $("#div_id_seek_professional").hide();
        $('input[type=radio][name=yes_seek_professional]').prop("required", false);
        $("input:checked[name='yes_seek_professional']").prop("checked", false);
        $("#div_id_yes_seek_professional").hide();
        }
});

//mentalhealth seek professional
$('input[type=radio][name=seek_professional]').on('change', function() {
    var disp = $(this).val()
        if (disp == "Yes" ) {
        $("#div_id_yes_seek_professional").show();
        $("#id_no_seek_professional").prop("required", false);
        $("#div_id_no_seek_professional").hide();
        $("#id_no_seek_professional_nomedication").val("");
        }
        else if (disp == "No" ) {
        $("#div_id_no_seek_professional").show();
        $("#id_no_seek_professional").val("");
        $("#id_no_seek_professional_nomedication").prop("required", false);
        $("#div_id_no_seek_professional_nomedication").hide();
        $("#id_no_seek_professional_nomedication").val("");
        $('input[type=radio][name=yes_seek_professional]').prop("required", false);
        $("input:radio[name='yes_seek_professional']").prop("checked", false);
        $("#div_id_yes_seek_professional").hide();
        }
        else {
        $("#id_no_seek_professional_nomedication").prop("required", false);
        $("#div_id_no_seek_professional_nomedication").hide();
        $("#id_no_seek_professional_nomedication").val("");
        $('input[type=radio][name=yes_seek_professional]').prop("required", false);
        $("input:radio[name='yes_seek_professional']").prop("checked", false);
        $("#div_id_yes_seek_professional").hide();
        }
});
   $(document).ready(function () {
    var disp1 = $("input:radio[name=seek_professional]:checked").val()
    if (disp1 == "Yes" ){
        $("#div_id_yes_seek_professional").show();
        }
    else if (disp1 == "No" ) {
        $("#div_id_no_seek_professional").show();
        $("#id_no_seek_professional").val("");
        $("#id_no_seek_professional_nomedication").prop("required", false);
        $("#div_id_no_seek_professional_nomedication").hide();
        $("#id_no_seek_professional_nomedication").val("");
         $('input[type=radio][name=yes_seek_professional]').prop("required", false);
        $("input:radio[name='yes_seek_professional']").prop("checked", false);
        $("#div_id_yes_seek_professional").hide();
        }
    else {
        $("#id_no_seek_professional_nomedication").prop("required", false);
        $("#div_id_no_seek_professional_nomedication").hide();
        $("#id_no_seek_professional_nomedication").val("");
        $('input[type=radio][name=yes_seek_professional]').prop("required", false);
        $("input:checked[name='yes_seek_professional']").prop("checked", false);
        $("#div_id_yes_seek_professional").hide();
        }
});
//mentalhealth no taking medication/attending counselling
$('input[type=radio][name=yes_seek_professional]').on('change', function() {
    var diysp = $(this).val()
    if (diysp == "No" ) {
        $("#div_id_no_seek_professional_nomedication").show();
        }
        else {
        $("#id_no_seek_professional_nomedication").prop("required", false);
        $("#div_id_no_seek_professional_nomedication").hide();
        $("#id_no_seek_professional_nomedication").val("");
        }
});
   $(document).ready(function () {
    var diysp1 = $("input:radio[name=yes_seek_professional]:checked").val()
    if (diysp1 == "No" ) {
        $("#div_id_no_seek_professional_nomedication").show();
        }
    else {
        $("#id_no_seek_professional_nomedication").prop("required", false);
        $("#div_id_no_seek_professional_nomedication").hide();
        $("#id_no_seek_professional_nomedication").val("");
        }
});
}

