//BEGIN PROFILE--------------------------------------------------------------
$("input[name='reason_status']").change(function(){
    if($(this).val()=="Others")
              {
                  $("#div_id_reason_status_others").show();
                  $("#id_reason_status_others").prop("required", true)
               }
               else
               {
                   $('#id_reason_status_others').val("");
                   $("#id_reason_status_others").prop("required", false)
                   $('#div_id_reason_status_others').hide();
               }
            });

$("#div_id_highest_educ").change(function () {
var selectedSubject = $("#div_id_highest_educ option:selected").val();
    if (selectedSubject=="Secondary"){
        $("#div_id_educ_program").hide();
        $("#id_educ_program").prop("required", false);
        $("#id_educ_program").val("");
    }
    else{
        $("#div_id_educ_program").show();
        $("#id_educ_program").prop("required", true);
    }
});

$(document).ready(function () {
var selectedSubject1 = $("#div_id_highest_educ option:selected").val();
if (selectedSubject1=="Secondary"){
$("#div_id_educ_program").hide();
$("#id_educ_program").val("");
}
else{
$("#div_id_educ_program").show();
}
});


$("#div_id_disability").change(function () {
var selectedDisability = $("#div_id_disability option:selected").val();
if (selectedDisability=="YES"){
$("#div_id_disability_specify").show();
$("#id_disability_specify").prop("required", true);
}
else{
$("#div_id_disability_specify").hide();
$("#id_disability_specify").prop("required", false);
$("#id_disability_specify").val("");
}
});

$(document).ready(function () {
var selectedDisability1 = $("#div_id_disability option:selected").val();
if (selectedDisability1=="YES"){
$("#div_id_disability_specify").show();
}
else{
$("#div_id_disability_specify").hide();
$("#id_disability_specify").val("");
}
});

$("#div_id_indigenous").change(function () {
var selectedIndigenoues = $("#div_id_indigenous option:selected").val();
if (selectedIndigenoues=="YES"){
$("#div_id_indigenous_specify").show();
$("#id_indigenous_specify").prop("required", true);
}
else{
$("#div_id_indigenous_specify").hide();
$("#id_indigenous_specify").prop("required", false);
$("#id_indigenous_specify").val("");
}
});

$(document).ready(function () {
var selectedIndigenoues1 = $("#div_id_indigenous option:selected").val();
if (selectedIndigenoues1=="YES"){
$("#div_id_indigenous_specify").show();
}
else{
$("#div_id_indigenous_specify").hide();
$("#id_indigenous_specify").val("");
}
});

$("#div_id_soloparent").change(function () {
var selectedSolo = $("#div_id_soloparent option:selected").val();
if (selectedSolo=="YES"){
$("#div_id_soloparent_specify").show();
$("#id_soloparent_specify").prop("required", true);
}
else{
$("#div_id_soloparent_specify").hide();
$("#id_soloparent_specify").prop("required", false);
$("#id_soloparent_specify").val("");
}
});

$(document).ready(function () {
var selectedSolo1 = $("#div_id_soloparent option:selected").val();
if (selectedSolo1=="YES"){
$("#div_id_soloparent_specify").show();
}
else{
$("#div_id_soloparent_specify").hide();
$("#id_soloparent_specify").val("");
}
});
//ok
$("#div_id_employment_status").change(function () {
var selectedStatus = $("#div_id_employment_status option:selected").val();
if ((selectedStatus=="Temporary") | (selectedStatus=="Casual") | (selectedStatus=="Contractual") | (selectedStatus=="Job Order")){
$("#div_id_reason_status").show();
$("#id_reason_status").val("");
$("#id_reason_status").prop("required", true);
$("#div_id_reason_status_others").hide();
$("#id_reason_status_others").val("");
}
else{
$("#div_id_reason_status").hide();
$("#id_reason_status").prop("required", false);
$("#id_reason_status").val("");
$("#div_id_reason_status_others").hide();
$("#id_reason_status_others").prop("required", false);
$("#id_reason_status_others").val("");
}
});
$(document).ready(function () {
var selectedStatus = $("#div_id_employment_status option:selected").val();
if ((selectedStatus=="Temporary") | (selectedStatus=="Casual") | (selectedStatus=="Contractual") | (selectedStatus=="Job Order")){
$("#div_id_reason_status").show();
//$("#id_educ_program").val("");
}
else{
$("#div_id_reason_status").hide();
$("#div_id_reason_status_others").hide();
}
});

$(document).ready(function () {
var statusEmpReason = $("#div_id_reason_status option:selected").val();
if (statusEmpReason=="Others"){
$("#div_id_reason_status_others").show();
//$("#id_educ_program").val("");
}
else{
$("#div_id_reason_status_others").hide();
}
});

$("#div_id_reason_status").change(function () {
var statusEmpReason1 = $("#div_id_reason_status option:selected").val();
if (statusEmpReason1=="Others"){
$("#div_id_reason_status_others").show();
$("#id_reason_status_others").prop("required", true);
//$("#id_educ_program").val("");
}
else{
$("#div_id_reason_status_others").hide();
$("#id_reason_status_others").prop("required", false);
$("#id_reason_status_others").val("");
}
});

$('#id_res_region').change(function () {
//$('#id_res_province').prop('disabled', false);
var provinceId = $('#id_res_region').val();
console.log(provinceId);
getProvince();
$('#id_res_city').val("");
});


	$('#id_res_province').on('click',function() {
getCity();
		});

function getProvince() {
$.ajax({
  url: '/static/dist/js/province.json',
  dataType: 'json',
  success:function(result){
    var optionProv;
  var provinces = result;
  var provinceId = $('#id_res_region').val();
optionProv = "<option value=''> </option>"
  $.each(result, function(i,provinces) {
if (provinces.region_code == provinceId)
			optionProv+="<option value='"
			+provinces.id+
			"'>"
			+provinces.name+
			"</option>";
			 });
			 $('#id_res_province').html(optionProv);
}},
)};
function getCity() {
$.ajax({
  url: '/static/dist/js/city.json',
  dataType: 'json',
  success:function(result){
    var optionCity;
  var cities = result;
  var cityID = $('#id_res_province').val();
  optionCity = "<option value=''> </option>";
  $.each(result, function(i,cities) {
        if (cities.province_code == cityID)
			optionCity+="<option value='"
			+cities.id+
			"'>"
			+cities.name+
			"</option>";
			 });
			 $('#id_res_city').html(optionCity);
}},
)};

//END PROFILE--------------------------------------------------------------
//START HOUSEHOLD --------------------------------------------------------
//HOUSEHOLD
$('#div_id_spouse_employed input[type="radio"]').change(function(){
    var spouseEmployed = $(this).val();
    if (spouseEmployed=="Yes"){
        $("#div_id_place_work").show();
        $("#id_place_work").prop("required", true);
        $("#div_id_source_income_spouse").show();
        $("#id_source_income_spouse").prop("required", true);
        $("#div_id_gross_mothly_salary_spouse").show();
         $("input:radio[name=gross_mothly_salary_spouse]:checked").prop("required", true);
        $("#div_id_number_childs").show();
    }
    else if (spouseEmployed=="No"){
        $('input:radio[name=place_work]').prop('required', false);
        $('input:radio[name=place_work]').prop('checked', false);
        $("#div_id_place_work").hide();
        $('input:radio[name=source_income_spouse]').prop('required', false);
        $('input:radio[name=source_income_spouse]').prop('checked', false);
        $("#div_id_source_income_spouse").hide();
        $('input:radio[name=place_where]').prop('required', false);
        $('input:text[name=place_where]').val("");
        $("#div_id_place_where").hide();
        $('input:radio[name=gross_mothly_salary_spouse]').prop('required', false);
        $('input:radio[name=gross_mothly_salary_spouse]').prop('checked', false);
        $("#div_id_gross_mothly_salary_spouse").hide();

        $("#div_id_number_childs").show();
    }
    else if (spouseEmployed=="NA"){
        $('input:radio[name=place_work]').prop('required', false);
        $('input:radio[name=place_work]').prop('checked', false);
        $("#div_id_place_work").hide();
        $('input:radio[name=source_income_spouse]').prop('required', false);
        $('input:radio[name=source_income_spouse]').prop('checked', false);
        $("#div_id_source_income_spouse").hide();
        $('#id_place_where').prop('required', false);
        $('#id_place_where').val("");
        $("#div_id_place_where").hide();
        $('input:radio[name=gross_mothly_salary_spouse]').prop('required', false);
        $('input:radio[name=gross_mothly_salary_spouse]').prop('checked', false);
        $("#div_id_gross_mothly_salary_spouse").hide();
        $('input:radio[name=number_childs]').prop('required', false);
        $('input:radio[name=number_childs]').prop('checked', false);
        $("#div_id_number_childs").hide();

        $("#div_id_ages_childs_household").hide();
        $('input:checkbox[name=ages_childs_household]').prop('checked', false);
        $("#id_ages_childs_household_6").prop("checked", true);
        $("#id_ages_childs_household_6").hide();
    }
});

$('#div_id_number_childs input[type="radio"]').change(function(){
    var numberChilds = $(this).val();
    if (numberChilds != "None"){
        $('#div_id_ages_childs_household').show();
    }
    else {
        $("#div_id_ages_childs_household").hide();
        $('input:checkbox[name=ages_childs_household]').prop('required', false);
        $('input:checkbox[name=ages_childs_household]').prop('checked', false);
        $("#id_ages_childs_household_6").prop("checked", true);
        $("#id_ages_childs_household_6").hide();
    }
    });

    $(document).ready(function () {
        var numberChilds1 = $("input:radio[name=number_childs]:checked").val()
    if (numberChilds1 != "None"){
        $('#div_id_ages_childs_household').show();
        $("#id_ages_childs_household_6").prop("checked", false);
        $("#id_ages_childs_household_6").hide();
    }
    else
    {
        $("#div_id_ages_childs_household").hide();
        $('input:checkbox[name=ages_childs_household]').prop('checked', false);
        $("#id_ages_childs_household_6").prop("checked", true);
        $("#id_ages_childs_household_6").hide();
    }
});

$(document).ready(function () {
    var spouseEmployed1 = $("input:radio[name=spouse_employed]:checked").val()
    if (spouseEmployed1=="Yes"){
        $("#div_id_place_work").show();
        $("#id_place_work").prop("required", true);
        $("#div_id_source_income").show();
        $("#id_source_income").prop("required", true);
        $("#div_id_gross_mothly_salary_spouse").show();
        $("#id_gross_mothly_salary_spouse").prop("required", true);
        $("#div_id_number_childs").show();
        $("#div_id_number_childs").prop("required", true);
        $("#div_id_ages_childs_household").show();
        $("#id_ages_childs_household_6").hide();
    }
    else if (spouseEmployed1=="No"){
        $("#div_id_place_work").hide();
        $('#div_id_place_work').prop('required', false);
        $("#div_id_source_income").hide();
        $("#div_id_place_where").hide();
        $("#div_id_source_income_spouse").hide();
        $("#div_id_gross_mothly_salary_spouse").hide();
        $("#div_id_number_childs").show();
    }
    else if (spouseEmployed1=="NA"){
        $("#div_id_place_work").hide();
        $("#div_id_source_income").hide();
        $("#div_id_place_where").hide();
        $("#div_id_source_income_spouse").hide();
        $("#div_id_gross_mothly_salary_spouse").hide();
        $("#div_id_number_childs").hide();
        $("#div_id_ages_childs_household").hide();
        $("#id_ages_childs_household_6").hide();
    }
});

   $('#div_id_place_work input[type="radio"]').click(function(){
    var spouseplacework = $(this).val();
    if ((spouseplacework=="Metro Manila") | (spouseplacework=="Province") | (spouseplacework=="Abroad")){
        $("#div_id_place_where").show();
    }
    else{
        $("#div_id_place_where").hide();
    }
});

$(document).ready(function () {
    var spouseplacework1 = $("input:radio[name=place_work]:checked").val()
    if (((spouseplacework1=="Metro Manila") | (spouseplacework1=="Province")) | (spouseplacework1=="Abroad")){
        $("#div_id_place_where").show();
    }
    else {
        $("#div_id_place_where").hide();
        $("#id_place_where").val("");
    }
});

//END HOUSEHOLD -------------------------------------------------------------------------------------
