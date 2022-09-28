window.onload = function() {



//WORK INFO //
       $("input[name='employment_status']").change(function(){
               if(($(this).val()=="Temporary") | ($(this).val()=="Contractual") | ($(this).val()=="Casual") | ($(this).val()=="Job Order"))
               {
                  $("#div_id_reason_status").show();
                  //$('#div_id_reason_status').removeAttr('required');
                  //$('#div_id_reason_status').attr('required', 'required');
                    $( "#id_reason_status_0" ).attr('required', 'required');
                   $( "#id_reason_status_1" ).attr('required', 'required');
                   $( "#id_reason_status_2" ).attr('required', 'required');
                   $( "#id_reason_status_3" ).attr('required', 'required');
                   console.write ="No";
               }
               else
               {
                   $('#id_reason_status_0').removeAttr('required');
                   $('#id_reason_status_1').removeAttr('required');
                   $('#id_reason_status_2').removeAttr('required');
                   $('#id_reason_status_3').removeAttr('required');
                   $("#div_id_reason_status").hide();
                   $("#id_reason_status_0" ).prop( "checked", false );
                   $("#id_reason_status_1" ).prop( "checked", false );
                   $("#id_reason_status_2" ).prop( "checked", false );
                   $("#id_reason_status_3" ).prop( "checked", false );
                   $("#id_reason_status_others").val("");
                   $("#div_id_reason_status_others").hide();
               }
            });

          $("input[name='reason_status']").change(function(){
               if($(this).val()=="Others")
               {
                   $('#div_id_reason_status_others').show();
                   $( "#id_reason_status_others" ).attr('required', 'required');
                   }
               else
               {
                   $('#id_reason_status_others').removeAttr('required');
                   $('#id_reason_status_others').val("");
                   $('#div_id_reason_status_others').hide();
                   }
               });
//PRACTICES //
//Priviledges_pay
          $('#id_priviledges_pay_16').on('click',function(){
               if ($(this).is(':checked'))
               {
                   $('#div_id_others_privpay').show();
                   $( "#id_others_privpay" ).attr('required', 'required');
                   console.log("Gusto");
                   }
               else
               {
                   $('#id_others_privpay').removeAttr('required');
                   $('#id_others_privpay').val("");
                   $('#div_id_others_privpay').hide();
                   console.log("Ayaw");
                   }
               });
          $('#id_availed_leaved_16').on('click',function(){
               if ($(this).is(':checked'))
               {
                   $('#div_id_others_availeaved').show();
                   $( "#id_others_availeaved" ).attr('required', 'required');
                   console.log("Gusto");
                   }
               else
               {
                   $('#id_others_availeaved').removeAttr('required');
                   $('#id_others_availeaved').val("");
                   $('#div_id_others_availeaved').hide();
                   console.log("Ayaw");
                   }
               });

//Absences//
       $("input[name='number_absences_mo']").change(function(){
       $("input:radio[name=number_absences_mo]:checked").val()
        if ($(this).val() != 0)  {
        $('#div_id_reason_absent_health').show();
        $('#div_id_other_reason_absent_health').show();
                $('#div_id_reason_absent_family').show();
        $('#div_id_other_reason_absent_family').show();
                $('#div_id_reason_absent_office').show();
        $('#div_id_other_reason_absent_office').show();
        console.log("Hello")
        }
     else{
                $('#div_id_reason_absent_health').hide();
        $('#div_id_other_reason_absent_health').hide();
                $('#div_id_reason_absent_family').hide();
        $('#div_id_other_reason_absent_family').hide();
                $('#div_id_reason_absent_office').hide();
        $('#div_id_other_reason_absent_office').hide();
     }
});
//undertime//
       $("input[name='number_undertime_mo']").change(function(){
       $("input:radio[name=number_undertime_mo]:checked").val()
        if ($(this).val() != 0)  {
        $('#div_id_reason_undertime_health').show();
        $('#div_id_other_reason_undertime_health').show();
                $('#div_id_reason_undertime_family').show();
        $('#div_id_other_reason_undertime_family').show();
                $('#div_id_reason_undertime_office').show();
        $('#div_id_other_reason_undertime_office').show();
        console.log("Hello")
        }
     else{
                $('#div_id_reason_undertime_health').hide();
        $('#div_id_other_reason_undertime_health').hide();
                $('#div_id_reason_undertime_family').hide();
        $('#div_id_other_reason_undertime_family').hide();
                $('#div_id_reason_undertime_office').hide();
        $('#div_id_other_reason_undertime_office').hide();
     }
});
//tardiness//
       $("input[name='number_tardines_mo']").change(function(){
       $("input:radio[name=number_tardines_mo]:checked").val()
        if ($(this).val() != 0)  {
        $('#div_id_reason_tardines_health').show();
        $('#div_id_other_reason_tardines_health').show();
                $('#div_id_reason_tardines_family').show();
        $('#div_id_other_reason_tardines_family').show();
                $('#div_id_reason_tardines_office').show();
        $('#div_id_other_reason_tardines_office').show();
        console.log("Hello")
        }
     else{
        $('#div_id_other_reason_tardines_health').hide();
                $('#div_id_reason_tardines_family').hide();
        $('#div_id_other_reason_tardines_family').hide();
                $('#div_id_reason_tardines_office').hide();
        $('#div_id_other_reason_tardines_office').hide();
     }
});
//Facilities //
//Nursing room
         $("input[name='facility_nursing']").change(function(){
               if($(this).val()=="Yes")
               {
                   $('#div_id_facility_nursing_utilized').show();
                   $( "#div_id_facility_nursing_utilized" ).attr('required', 'required');
                   console.log("Yes Facility");
                   }
               else
               {
                   $('#div_id_facility_nursing_utilized').removeAttr('required');
                   $('#div_id_facility_nursing_utilized').val("");
                   $('#div_id_facility_nursing_utilized').hide();
                   $('#div_id_facility_nursing_utilized_satisfied').hide();
                   $('#div_id_facility_nursing_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_nursing_utilized_satisfied_no_reason').hide();
                    $('#div_id_facility_nursing_utilized_no_reason').hide();
                    $('#div_id_facility_nursing_others').hide();
                   console.log("No Facility");
                   }
               });
//Utilized
         $("input[name='facility_nursing_utilized']").change(function(){
               if($(this).val()=="Yes")
               {
                   $('#div_id_facility_nursing_utilized_satisfied').show();
                   $( "#div_id_facility_nursing_utilized_satisfied" ).attr('required', 'required');
                   $('#div_id_facility_nursing_utilized_no_reason').hide();
                   console.log("Yes Satisfied");
                   }
               else if ($(this).val()=="No")
               {
                   $('#div_id_facility_nursing_utilized_satisfied').removeAttr('required');
                   $('#div_id_facility_nursing_utilized_satisfied').val("");
                   $('#div_id_facility_nursing_utilized_satisfied').hide();
                   $('#div_id_facility_nursing_utilized_satisfied_no_reason').hide();
                   $('#div_id_facility_nursing_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_nursing_others').hide();
                   $('#div_id_facility_nursing_utilized_no_reason').show();
                   console.log("No Facility");
                   }
               else if ($(this).val()=="N/A"){
                   $('#div_id_facility_nursing_utilized_satisfied').removeAttr('required');
                   $('#div_id_facility_nursing_utilized_satisfied').val("");
                   $('#div_id_facility_nursing_utilized_satisfied').hide();
                   $('#div_id_facility_nursing_utilized_satisfied_no_reason').hide();
                   $('#div_id_facility_nursing_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_nursing_utilized_no_reason').hide();
                   $('#div_id_facility_nursing_others').hide();
                   console.log("No Facility");
                   }
               });
 //Satisfied
         $("input[name='facility_nursing_utilized_satisfied']").change(function(){
               if($(this).val()=="Yes")
               {
                   $('#div_id_facility_nursing_utilized_satisfied_yes_reason').show();
                   $( "#div_id_facility_nursing_utilized_satisfied_yes_reason" ).attr('required', 'required');
                   $('#div_id_facility_nursing_utilized_satisfied_no_reason').hide();
                   console.log("Yes Satisfied Reason");
                   }
               else if ($(this).val()=="No")
               {
                   $('#div_id_facility_nursing_utilized_satisfied_yes_reason').removeAttr('required');
                   $('#div_id_facility_nursing_utilized_satisfied_yes_reason').val("");
                   $('#div_id_facility_nursing_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_nursing_utilized_satisfied_no_reason').show();
                   $('#div_id_facility_nursing_utilized_no_reason').hide();
                   $('#div_id_facility_nursing_others').hide();
                   console.log("No Facility");
                   }
               });
 //not satisfied others
           $('#id_facility_nursing_utilized_no_reason_3').on('click',function(){
               if ($(this).is(':checked'))
               {
                   $('#div_id_facility_nursing_others').show();
                   $( "#id_facility_nursing_others" ).attr('required', 'required');
                   console.log("Gusto");
                   }
               else
               {
                   $('#id_facility_nursing_others').removeAttr('required');
                   $('#id_facility_nursing_others').val("");
                   $('#div_id_facility_nursing_others').hide();
                   console.log("Ayaw");
                   }
               });

//DAY CARE
         $("input[name='facility_daycare']").change(function(){
               if($(this).val()=="Yes")
               {
                   $('#div_id_facility_daycare_utilized').show();
                   $( "#div_id_facility_daycare_utilized" ).attr('required', 'required');
                   console.log("Yes Facility");
                   }
               else
               {
                   $('#div_id_facility_daycare_utilized').removeAttr('required');
                   $('#div_id_facility_daycare_utilized').val("");
                   $('#div_id_facility_daycare_utilized').hide();
                   $('#div_id_facility_daycare_utilized_satisfied').hide();
                   $('#div_id_facility_daycare_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_daycare_utilized_satisfied_no_reason').hide();
                    $('#div_id_facility_daycare_utilized_no_reason').hide();
                    $('#div_id_facility_daycare_others').hide();
                   console.log("No Facility");
                   }
               });
//Utilized
         $("input[name='facility_daycare_utilized']").change(function(){
               if($(this).val()=="Yes")
               {
                   $('#div_id_facility_daycare_utilized_satisfied').show();
                   $( "#div_id_facility_daycare_utilized_satisfied" ).attr('required', 'required');
                   $('#div_id_facility_daycare_utilized_no_reason').hide();
                   console.log("Yes Satisfied");
                   }
               else if ($(this).val()=="No")
               {
                   $('#div_id_facility_daycare_utilized_satisfied').removeAttr('required');
                   $('#div_id_facility_daycare_utilized_satisfied').val("");
                   $('#div_id_facility_daycare_utilized_satisfied').hide();
                   $('#div_id_facility_daycare_utilized_satisfied_no_reason').hide();
                   $('#div_id_facility_daycare_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_daycare_others').hide();
                   $('#div_id_facility_daycare_utilized_no_reason').show();
                   console.log("No Facility");
                   }
               else if ($(this).val()=="N/A"){
                   $('#div_id_facility_daycare_utilized_satisfied').removeAttr('required');
                   $('#div_id_facility_daycare_utilized_satisfied').val("");
                   $('#div_id_facility_daycare_utilized_satisfied').hide();
                   $('#div_id_facility_daycare_utilized_satisfied_no_reason').hide();
                   $('#div_id_facility_daycare_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_daycare_utilized_no_reason').hide();
                   $('#div_id_facility_daycare_others').hide();
                   console.log("No Facility");
                   }
               });
 //Satisfied
         $("input[name='facility_daycare_utilized_satisfied']").change(function(){
               if($(this).val()=="Yes")
               {
                   $('#div_id_facility_daycare_utilized_satisfied_yes_reason').show();
                   $( "#div_id_facility_daycare_utilized_satisfied_yes_reason" ).attr('required', 'required');
                   $('#div_id_facility_daycare_utilized_satisfied_no_reason').hide();
                   console.log("Yes Satisfied Reason");
                   }
               else if ($(this).val()=="No")
               {
                   $('#div_id_facility_daycare_utilized_satisfied_yes_reason').removeAttr('required');
                   $('#div_id_facility_daycare_utilized_satisfied_yes_reason').val("");
                   $('#div_id_facility_daycare_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_daycare_utilized_satisfied_no_reason').show();
                   $('#div_id_facility_daycare_utilized_no_reason').hide();
                   $('#div_id_facility_daycare_others').hide();
                   console.log("No Facility");
                   }
               });
 //not satisfied others
           $('#id_facility_daycare_utilized_no_reason_3').on('click',function(){
               if ($(this).is(':checked'))
               {
                   $('#div_id_facility_daycare_others').show();
                   $( "#id_facility_daycare_others" ).attr('required', 'required');
                   console.log("Gusto");
                   }
               else
               {
                   $('#id_facility_daycare_others').removeAttr('required');
                   $('#id_facility_daycare_others').val("");
                   $('#div_id_facility_daycare_others').hide();
                   console.log("Ayaw");
                   }
               });

//PRAYER
         $("input[name='facility_prayer']").change(function(){
               if($(this).val()=="Yes")
               {
                   $('#div_id_facility_prayer_utilized').show();
                   $( "#div_id_facility_prayer_utilized" ).attr('required', 'required');
                   console.log("Yes Facility");
                   }
               else
               {
                   $('#div_id_facility_prayer_utilized').removeAttr('required');
                   $('#div_id_facility_prayer_utilized').val("");
                   $('#div_id_facility_prayer_utilized').hide();
                   $('#div_id_facility_prayer_utilized_satisfied').hide();
                   $('#div_id_facility_prayer_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_prayer_utilized_satisfied_no_reason').hide();
                    $('#div_id_facility_prayer_utilized_no_reason').hide();
                    $('#div_id_facility_prayer_others').hide();
                   console.log("No Facility");
                   }
               });
//Utilized
         $("input[name='facility_prayer_utilized']").change(function(){
               if($(this).val()=="Yes")
               {
                   $('#div_id_facility_prayer_utilized_satisfied').show();
                   $( "#div_id_facility_prayer_utilized_satisfied" ).attr('required', 'required');
                   $('#div_id_facility_prayer_utilized_no_reason').hide();
                   console.log("Yes Satisfied");
                   }
               else if ($(this).val()=="No")
               {
                   $('#div_id_facility_prayer_utilized_satisfied').removeAttr('required');
                   $('#div_id_facility_prayer_utilized_satisfied').val("");
                   $('#div_id_facility_prayer_utilized_satisfied').hide();
                   $('#div_id_facility_prayer_utilized_satisfied_no_reason').hide();
                   $('#div_id_facility_prayer_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_prayer_others').hide();
                   $('#div_id_facility_prayer_utilized_no_reason').show();
                   console.log("No Facility");
                   }
               else if ($(this).val()=="N/A"){
                   $('#div_id_facility_prayer_utilized_satisfied').removeAttr('required');
                   $('#div_id_facility_prayer_utilized_satisfied').val("");
                   $('#div_id_facility_prayer_utilized_satisfied').hide();
                   $('#div_id_facility_prayer_utilized_satisfied_no_reason').hide();
                   $('#div_id_facility_prayer_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_prayer_utilized_no_reason').hide();
                   $('#div_id_facility_prayer_others').hide();
                   console.log("No Facility");
                   }
               });
 //Satisfied
         $("input[name='facility_prayer_utilized_satisfied']").change(function(){
               if($(this).val()=="Yes")
               {
                   $('#div_id_facility_prayer_utilized_satisfied_yes_reason').show();
                   $( "#div_id_facility_prayer_utilized_satisfied_yes_reason" ).attr('required', 'required');
                   $('#div_id_facility_prayer_utilized_satisfied_no_reason').hide();
                   console.log("Yes Satisfied Reason");
                   }
               else if ($(this).val()=="No")
               {
                   $('#div_id_facility_prayer_utilized_satisfied_yes_reason').removeAttr('required');
                   $('#div_id_facility_prayer_utilized_satisfied_yes_reason').val("");
                   $('#div_id_facility_prayer_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_prayer_utilized_satisfied_no_reason').show();
                   $('#div_id_facility_prayer_utilized_no_reason').hide();
                   $('#div_id_facility_prayer_others').hide();
                   console.log("No Facility");
                   }
               });
 //not satisfied others
           $('#id_facility_prayer_utilized_no_reason_3').on('click',function(){
               if ($(this).is(':checked'))
               {
                   $('#div_id_facility_prayer_others').show();
                   $( "#id_facility_prayer_others" ).attr('required', 'required');
                   console.log("Gusto");
                   }
               else
               {
                   $('#id_facility_prayer_others').removeAttr('required');
                   $('#id_facility_prayer_others').val("");
                   $('#div_id_facility_prayer_others').hide();
                   console.log("Ayaw");
                   }
               });
//MEDICAL
         $("input[name='facility_medical']").change(function(){
               if($(this).val()=="Yes")
               {
                   $('#div_id_facility_medical_utilized').show();
                   $( "#div_id_facility_medical_utilized" ).attr('required', 'required');
                   console.log("Yes Facility");
                   }
               else
               {
                   $('#div_id_facility_medical_utilized').removeAttr('required');
                   $('#div_id_facility_medical_utilized').val("");
                   $('#div_id_facility_medical_utilized').hide();
                   $('#div_id_facility_medical_utilized_satisfied').hide();
                   $('#div_id_facility_medical_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_medical_utilized_satisfied_no_reason').hide();
                    $('#div_id_facility_medical_utilized_no_reason').hide();
                    $('#div_id_facility_medical_others').hide();
                   console.log("No Facility");
                   }
               });
//Utilized
         $("input[name='facility_medical_utilized']").change(function(){
               if($(this).val()=="Yes")
               {
                   $('#div_id_facility_medical_utilized_satisfied').show();
                   $( "#div_id_facility_medical_utilized_satisfied" ).attr('required', 'required');
                   $('#div_id_facility_medical_utilized_no_reason').hide();
                   console.log("Yes Satisfied");
                   }
               else if ($(this).val()=="No")
               {
                   $('#div_id_facility_medical_utilized_satisfied').removeAttr('required');
                   $('#div_id_facility_medical_utilized_satisfied').val("");
                   $('#div_id_facility_medical_utilized_satisfied').hide();
                   $('#div_id_facility_medical_utilized_satisfied_no_reason').hide();
                   $('#div_id_facility_medical_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_medical_others').hide();
                   $('#div_id_facility_medical_utilized_no_reason').show();
                   console.log("No Facility");
                   }
               else if ($(this).val()=="N/A"){
                   $('#div_id_facility_medical_utilized_satisfied').removeAttr('required');
                   $('#div_id_facility_medical_utilized_satisfied').val("");
                   $('#div_id_facility_medical_utilized_satisfied').hide();
                   $('#div_id_facility_medical_utilized_satisfied_no_reason').hide();
                   $('#div_id_facility_medical_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_medical_utilized_no_reason').hide();
                   $('#div_id_facility_medical_others').hide();
                   console.log("No Facility");
                   }
               });
 //Satisfied
         $("input[name='facility_medical_utilized_satisfied']").change(function(){
               if($(this).val()=="Yes")
               {
                   $('#div_id_facility_medical_utilized_satisfied_yes_reason').show();
                   $( "#div_id_facility_medical_utilized_satisfied_yes_reason" ).attr('required', 'required');
                   $('#div_id_facility_medical_utilized_satisfied_no_reason').hide();
                   console.log("Yes Satisfied Reason");
                   }
               else if ($(this).val()=="No")
               {
                   $('#div_id_facility_medical_utilized_satisfied_yes_reason').removeAttr('required');
                   $('#div_id_facility_medical_utilized_satisfied_yes_reason').val("");
                   $('#div_id_facility_medical_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_medical_utilized_satisfied_no_reason').show();
                   $('#div_id_facility_medical_utilized_no_reason').hide();
                   $('#div_id_facility_medical_others').hide();
                   console.log("No Facility");
                   }
               });
 //not satisfied others
           $('#id_facility_medical_utilized_no_reason_3').on('click',function(){
               if ($(this).is(':checked'))
               {
                   $('#div_id_facility_medical_others').show();
                   $( "#id_facility_medical_others" ).attr('required', 'required');
                   console.log("Gusto");
                   }
               else
               {
                   $('#id_facility_medical_others').removeAttr('required');
                   $('#id_facility_medical_others').val("");
                   $('#div_id_facility_medical_others').hide();
                   console.log("Ayaw");
                   }
               });
//RECREATION
         $("input[name='facility_recreation']").change(function(){
               if($(this).val()=="Yes")
               {
                   $('#div_id_facility_recreation_utilized').show();
                   $( "#div_id_facility_recreation_utilized" ).attr('required', 'required');
                   console.log("Yes Facility");
                   }
               else
               {
                   $('#div_id_facility_recreation_utilized').removeAttr('required');
                   $('#div_id_facility_recreation_utilized').val("");
                   $('#div_id_facility_recreation_utilized').hide();
                   $('#div_id_facility_recreation_utilized_satisfied').hide();
                   $('#div_id_facility_recreation_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_recreation_utilized_satisfied_no_reason').hide();
                    $('#div_id_facility_recreation_utilized_no_reason').hide();
                    $('#div_id_facility_recreation_others').hide();
                   console.log("No Facility");
                   }
               });
//Utilized
         $("input[name='facility_recreation_utilized']").change(function(){
               if($(this).val()=="Yes")
               {
                   $('#div_id_facility_recreation_utilized_satisfied').show();
                   $( "#div_id_facility_recreation_utilized_satisfied" ).attr('required', 'required');
                   $('#div_id_facility_recreation_utilized_no_reason').hide();
                   console.log("Yes Satisfied");
                   }
               else if ($(this).val()=="No")
               {
                   $('#div_id_facility_recreation_utilized_satisfied').removeAttr('required');
                   $('#div_id_facility_recreation_utilized_satisfied').val("");
                   $('#div_id_facility_recreation_utilized_satisfied').hide();
                   $('#div_id_facility_recreation_utilized_satisfied_no_reason').hide();
                   $('#div_id_facility_recreation_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_recreation_others').hide();
                   $('#div_id_facility_recreation_utilized_no_reason').show();
                   console.log("No Facility");
                   }
               else if ($(this).val()=="N/A"){
                   $('#div_id_facility_recreation_utilized_satisfied').removeAttr('required');
                   $('#div_id_facility_recreation_utilized_satisfied').val("");
                   $('#div_id_facility_recreation_utilized_satisfied').hide();
                   $('#div_id_facility_recreation_utilized_satisfied_no_reason').hide();
                   $('#div_id_facility_recreation_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_recreation_utilized_no_reason').hide();
                   $('#div_id_facility_recreation_others').hide();
                   console.log("No Facility");
                   }
               });
 //Satisfied
         $("input[name='facility_recreation_utilized_satisfied']").change(function(){
               if($(this).val()=="Yes")
               {
                   $('#div_id_facility_recreation_utilized_satisfied_yes_reason').show();
                   $( "#div_id_facility_recreation_utilized_satisfied_yes_reason" ).attr('required', 'required');
                   $('#div_id_facility_recreation_utilized_satisfied_no_reason').hide();
                   console.log("Yes Satisfied Reason");
                   }
               else if ($(this).val()=="No")
               {
                   $('#div_id_facility_recreation_utilized_satisfied_yes_reason').removeAttr('required');
                   $('#div_id_facility_recreation_utilized_satisfied_yes_reason').val("");
                   $('#div_id_facility_recreation_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_recreation_utilized_satisfied_no_reason').show();
                   $('#div_id_facility_recreation_utilized_no_reason').hide();
                   $('#div_id_facility_recreation_others').hide();
                   console.log("No Facility");
                   }
               });
 //not satisfied others
           $('#id_facility_recreation_utilized_no_reason_3').on('click',function(){
               if ($(this).is(':checked'))
               {
                   $('#div_id_facility_recreation_others').show();
                   $( "#id_facility_recreation_others" ).attr('required', 'required');
                   console.log("Gusto");
                   }
               else
               {
                   $('#id_facility_recreation_others').removeAttr('required');
                   $('#id_facility_recreation_others').val("");
                   $('#div_id_facility_recreation_others').hide();
                   console.log("Ayaw");
                   }
               });
 //LOANS
 $('#id_loans_availed_9').on('click',function(){
               if ($(this).is(':checked'))
               {
                   $('#div_id_other_loans_availed').show();
                   $( "#id_other_loans_availed" ).attr('required', 'required');
                   console.log("Gusto");
                   }
               else
               {
                   $('#id_other_loans_availed').removeAttr('required');
                   $('#id_other_loans_availed').val("");
                   $('#div_id_other_loans_availed').hide();
                   console.log("Ayaw");
                   }
               });

 $('#id_reason_loans_availed_7').on('click',function(){
               if ($(this).is(':checked'))
               {
                   $('#div_id_other_loans_availed_reason').show();
                   $( "#id_other_loans_availed_reason" ).attr('required', 'required');
                   console.log("Gusto");
                   }
               else
               {
                   $('#id_other_loans_availed_reason').removeAttr('required');
                   $('#id_other_loans_availed_reason').val("");
                   $('#div_id_other_loans_availed_reason').hide();
                   console.log("Ayaw");
                   }
               });
//FINANCIAL ASSISTANCE
        $("input[name='financial_assitance']").change(function(){
               if($(this).val()=="Yes")
               {
                   $('#div_id_yes_identified_financial_assitance').show();
                   $( "#div_id_yes_identified_financial_assitance" ).attr('required', 'required');
                   $('#div_id_been_benificiary_financial_assist').hide();
                   $('#div_id_other_financial_assist').hide();
                   console.log("Yes Financial");
                   }
               else
               {
                   $('#div_id_yes_identified_financial_assitance').removeAttr('required');
                   $('#div_id_yes_identified_financial_assitance').val("");
                   $('#div_id_yes_identified_financial_assitance').hide();
                   $('#div_id_been_benificiary_financial_assist').hide();
                   $('#div_id_other_financial_assist').hide();
                   console.log("No Finanial");
                   }
               });
//loans beneficiary//
$("input[name='yes_identified_financial_assitance']").on('click',function() {
        if ($(this).is(':checked')) {
        $('#div_id_been_benificiary_financial_assist').show();
        }
     else{
            $('#div_id_been_benificiary_financial_assist').hide();
            $('#id_been_benificiary_financial_assist').val("");
            $('#div_id_other_financial_assist').hide();
     }
});

$('#id_yes_identified_financial_assitance_3').on('click',function(){
               if ($(this).is(':checked'))
               {
                   $('#div_id_other_financial_assist').show();
                   $( "#id_other_financial_assist" ).attr('required', 'required');
                   console.log("Gusto");
                   }
               else
               {
                   $('#id_other_financial_assist').removeAttr('required');
                   $('#id_other_financial_assist').val("");
                   $('#div_id_other_financial_assist').hide();
                   console.log("Ayaw");
                   }
               });
 //NEGATIVE STRESS
$("input[name='experience_negative_stress']").change(function(){
         if($(this).val()=="Yes")
               {
                   $('#div_id_causes_negative_stress').show();
                   $( "#div_id_causes_negative_stress" ).attr('required', 'required');
                   $('#div_id_other_causes_stress').hide();
                   $('#div_id_how_manage_stress').hide();
                   $('#div_id_other_how_manage_stress').hide();
                   console.log("Yes Stress");
                   }
               else
               {
                   $('#div_id_causes_negative_stress').removeAttr('required');
                   $('#div_id_causes_negative_stress').val("");
                   $('#div_id_causes_negative_stress').hide();
                   $('#div_id_other_causes_stress').hide();
                   $('#div_id_how_manage_stress').hide();
                   $('#div_id_other_how_manage_stress').hide();
                   console.log("No Stress Change");
                   }
               });
//causes negative stress
$('#id_causes_negative_stress_10').on('click',function(){
               if ($(this).is(':checked'))
               {
                   $('#div_id_other_causes_stress').show();
                   $( "#id_other_causes_stress" ).attr('required', 'required');
                   $('#div_id_how_manage_stress').show();
                   console.log("Gusto");
                   }
               else
               {
                   $('#id_other_causes_stress').removeAttr('required');
                   $('#id_other_causes_stress').val("");
                   $('#div_id_other_causes_stress').hide();
                   $('#div_id_how_manage_stress').hide();
                   console.log("Ayaw");
                   }
               });
//causes negative stress
$('#causes_negative_stress').on('click',function(){
               if ($(this).is(':checked'))
               {
                   $('#div_id_other_causes_stress').show();
                   $( "#id_other_causes_stress" ).attr('required', 'required');
                   $('#div_id_how_manage_stress').show();
                   console.log("Gusto");
                   }
               else
               {
                   $('#id_other_causes_stress').removeAttr('required');
                   $('#id_other_causes_stress').val("");
                   $('#div_id_other_causes_stress').hide();
                   $('#div_id_how_manage_stress').hide();
                   console.log("Ayaw");
                   }
               });
// HOUSEHOLD JS //
       $("input[name='spouse_employed']").change(function(){
               if ($(this).val()=="Yes")
               {
                  $("#div_id_place_work").show();
                  $("#div_id_place_where").show();
                  $("#div_id_source_income_spouse").show();
                  $("#div_id_gross_mothly_salary_spouse").show();
                  $("#div_id_number_childs").show();
                  $("#div_id_ages_childs_household").show();
                  //$('#div_id_place_where').removeAttr('required');

                    $("#id_place_work_0" ).attr('required', 'required');
                    $("#id_place_work_1" ).attr('required', 'required');
                    $("#id_place_work_2" ).attr('required', 'required');
                    $("#id_place_where").attr('required', 'required');
                    $("#id_source_income_spouse_0" ).attr('required', 'required');
                    $("#id_source_income_spouse_1" ).attr('required', 'required');
                    $("#id_source_income_spouse_2" ).attr('required', 'required');
                    $("#id_gross_mothly_salary_spouse_0" ).attr('required', 'required');
                    $("#id_gross_mothly_salary_spouse_1" ).attr('required', 'required');
                    $("#id_gross_mothly_salary_spouse_2" ).attr('required', 'required');
                    $("#id_gross_mothly_salary_spouse_3" ).attr('required', 'required');
                    $("#id_gross_mothly_salary_spouse_4" ).attr('required', 'required');
                    $("#id_gross_mothly_salary_spouse_5" ).attr('required', 'required');
                    $("#id_gross_mothly_salary_spouse_6" ).attr('required', 'required');
                    $("#id_gross_mothly_salary_spouse_7" ).attr('required', 'required');

                    $("#id_number_childs_0" ).attr('required', 'required');
                    $("#id_number_childs_1" ).attr('required', 'required');
                    $("#id_number_childs_2" ).attr('required', 'required');
                    $("#id_number_childs_3" ).attr('required', 'required');
                    $("#id_number_childs_4" ).attr('required', 'required');

                /*    $("#id_ages_childs_household_0" ).attr('required', 'required');
                    $("#id_ages_childs_household_1" ).attr('required', 'required');
                    $("#id_ages_childs_household_2" ).attr('required', 'required');
                    $("#id_ages_childs_household_3" ).attr('required', 'required');
                    $("#id_ages_childs_household_4" ).attr('required', 'required');
                    $("#id_ages_childs_household_5" ).attr('required', 'required'); */
                  console.log("yes");
               }
               else if ($(this).val()=="No")
               {
                    $("#div_id_place_work").hide();
                    $("#div_id_place_where").hide();
                    $("#div_id_source_income_spouse").hide();
                    $("#div_id_gross_mothly_salary_spouse").hide();
                    $("#div_id_number_childs").show();
                    $("#div_id_ages_childs_household").show();

                    $("#id_place_work_0" ).removeAttr('required');
                    $("#id_place_work_1" ).removeAttr('required');
                    $("#id_place_work_2" ).removeAttr('required');
                    $("#id_place_where").removeAttr('required');
                    $("#id_source_income_spouse_0" ).removeAttr('required');
                    $("#id_source_income_spouse_1" ).removeAttr('required');
                    $("#id_source_income_spouse_2" ).removeAttr('required');
                    $("#id_gross_mothly_salary_spouse_0" ).removeAttr('required');
                    $("#id_gross_mothly_salary_spouse_1" ).removeAttr('required');
                    $("#id_gross_mothly_salary_spouse_2" ).removeAttr('required');
                    $("#id_gross_mothly_salary_spouse_3" ).removeAttr('required');
                    $("#id_gross_mothly_salary_spouse_4" ).removeAttr('required');
                    $("#id_gross_mothly_salary_spouse_5" ).removeAttr('required');
                    $("#id_gross_mothly_salary_spouse_6" ).removeAttr('required');
                    $("#id_gross_mothly_salary_spouse_7" ).removeAttr('required');

                    $("#id_number_childs_0" ).attr('required', 'required');
                    $("#id_number_childs_1" ).attr('required', 'required');
                    $("#id_number_childs_2" ).attr('required', 'required');
                    $("#id_number_childs_3" ).attr('required', 'required');
                    $("#id_number_childs_4" ).attr('required', 'required');

                 //   $("#div_id_ages_childs_household" ).attr('required', 'required');
                 $("#id_ages_childs_household_0" ).attr('required', 'required');
                   $("#id_ages_childs_household_1" ).attr('required', 'required');
                    $("#id_ages_childs_household_2" ).attr('required', 'required');
                    $("#id_ages_childs_household_3" ).attr('required', 'required');
                    $("#id_ages_childs_household_4" ).attr('required', 'required');
                    $("#id_ages_childs_household_5" ).attr('required', 'required');

                    $("#id_place_work_0" ).prop( "checked", false );
                    $("#id_place_work_1" ).prop( "checked", false );
                    $("#id_place_work_2" ).prop( "checked", false );
                    $("#id_place_where").val("");
                    $("#id_source_income_spouse_0" ).prop( "checked", false );
                    $("#id_source_income_spouse_1" ).prop( "checked", false );
                    $("#id_source_income_spouse_2" ).prop( "checked", false );
                    $("#id_gross_mothly_salary_spouse_0" ).prop( "checked", false );
                    $("#id_gross_mothly_salary_spouse_1" ).prop( "checked", false );
                    $("#id_gross_mothly_salary_spouse_2" ).prop( "checked", false );
                    $("#id_gross_mothly_salary_spouse_3" ).prop( "checked", false );
                    $("#id_gross_mothly_salary_spouse_4" ).prop( "checked", false );
                    $("#id_gross_mothly_salary_spouse_5" ).prop( "checked", false );
                    $("#id_gross_mothly_salary_spouse_6" ).prop( "checked", false );
                    $("#id_gross_mothly_salary_spouse_7" ).prop( "checked", false );
                    console.log("no");
                  /*  $("#div_id_reason_status").hide();
                    $("#div_id_place_work" ).prop( "checked", false );
                    $("#id_place_where").val("");
                    $("#div_id_source_income_spouse" ).prop( "checked", false );
                    $("#id_reason_status_2" ).prop( "checked", false );
                    $("#id_reason_status_3" ).prop( "checked", false );

                    $("#div_id_reason_status_others").hide(); */
               }
               else if ($(this).val()=="Not Applicable")
               {
                    $("#div_id_place_work").hide();
                    $("#div_id_place_where").hide();
                    $("#div_id_source_income_spouse").hide();
                    $("#div_id_gross_mothly_salary_spouse").hide();
                    $("#div_id_number_childs").hide();
                    $("#div_id_ages_childs_household").hide();

                    $("#id_place_work_0" ).removeAttr('required');
                    $("#id_place_work_1" ).removeAttr('required');
                    $("#id_place_work_2" ).removeAttr('required');
                    $("#id_place_where").removeAttr('required');
                    $("#id_source_income_spouse_0" ).removeAttr('required');
                    $("#id_source_income_spouse_1" ).removeAttr('required');
                    $("#id_source_income_spouse_2" ).removeAttr('required');
                    $("#id_gross_mothly_salary_spouse_0" ).removeAttr('required');
                    $("#id_gross_mothly_salary_spouse_1" ).removeAttr('required');
                    $("#id_gross_mothly_salary_spouse_2" ).removeAttr('required');
                    $("#id_gross_mothly_salary_spouse_3" ).removeAttr('required');
                    $("#id_gross_mothly_salary_spouse_4" ).removeAttr('required');
                    $("#id_gross_mothly_salary_spouse_5" ).removeAttr('required');
                    $("#id_gross_mothly_salary_spouse_6" ).removeAttr('required');
                    $("#id_gross_mothly_salary_spouse_7" ).removeAttr('required');                    $("#id_number_childs_0" ).prop( "checked", false );
                    $("#id_number_childs_1" ).removeAttr('required');
                    $("#id_number_childs_2" ).removeAttr('required');
                    $("#id_number_childs_3" ).removeAttr('required');
                    $("#id_number_childs_4" ).removeAttr('required');

                    $("#id_ages_childs_household_0" ).removeAttr('required');
                    $("#id_ages_childs_household_1" ).removeAttr('required');
                    $("#id_ages_childs_household_2" ).removeAttr('required');
                    $("#id_ages_childs_household_3" ).removeAttr('required');
                    $("#id_ages_childs_household_4" ).removeAttr('required');
                    $("#id_ages_childs_household_5" ).removeAttr('required');

                    $("#id_place_work_0" ).prop( "checked", false );
                    $("#id_place_work_1" ).prop( "checked", false );
                    $("#id_place_work_2" ).prop( "checked", false );
                    $("#id_place_where").val("");
                    $("#id_source_income_spouse_0" ).prop( "checked", false );
                    $("#id_source_income_spouse_1" ).prop( "checked", false );
                    $("#id_source_income_spouse_2" ).prop( "checked", false );
                    $("#id_gross_mothly_salary_spouse_0" ).prop( "checked", false );
                    $("#id_gross_mothly_salary_spouse_1" ).prop( "checked", false );
                    $("#id_gross_mothly_salary_spouse_2" ).prop( "checked", false );
                    $("#id_gross_mothly_salary_spouse_3" ).prop( "checked", false );
                    $("#id_gross_mothly_salary_spouse_4" ).prop( "checked", false );
                    $("#id_gross_mothly_salary_spouse_5" ).prop( "checked", false );
                    $("#id_gross_mothly_salary_spouse_6" ).prop( "checked", false );
                    $("#id_gross_mothly_salary_spouse_7" ).prop( "checked", false );

                    $("#id_number_childs_0" ).prop( "checked", false );
                    $("#id_number_childs_1" ).prop( "checked", false );
                    $("#id_number_childs_2" ).prop( "checked", false );
                    $("#id_number_childs_3" ).prop( "checked", false );
                    $("#id_number_childs_4" ).prop( "checked", false );

                    $("#id_ages_childs_household_0" ).prop( "checked", false );
                    $("#id_ages_childs_household_1" ).prop( "checked", false );
                    $("#id_ages_childs_household_2" ).prop( "checked", false );
                    $("#id_ages_childs_household_3" ).prop( "checked", false );
                    $("#id_ages_childs_household_4" ).prop( "checked", false );
                    $("#id_ages_childs_household_5" ).prop( "checked", false );
                    console.log("not applicable");
               }
                    else {
                  $("#div_id_place_work").hide();
                    $("#div_id_place_where").hide();
                    $("#div_id_source_income_spouse").hide();
                    $("#div_id_gross_mothly_salary_spouse").hide();
                    $("#div_id_number_childs").hide();
                    $("#div_id_ages_childs_household").hide();
                    console.log("No select");
     }
            });

          $("input[name='place_work']").change(function(){
               if(($(this).val()=="Metro Manila") | ($(this).val()=="Province") | ($(this).val()=="Abroad"))
               {
                   $('#div_id_place_where').show();
                   }
               else
               {
                   $('#div_id_place_where').hide();
                   }
               });

           $("input[name='ages_childs_household']").change(function(){
            var ach0 = 0;
            var ach0 = $("input:checkbox[name=ages_childs_household]:checked").val()
                if ((ach0 == 1) | (ach0 == 2) | (ach0 == 3) | (ach0 == 4) | (ach0 == 5) | (ach0 == 6)) {
                $("#id_ages_childs_household_0").removeAttr('required');
                $("#id_ages_childs_household_1").removeAttr('required');
                $("#id_ages_childs_household_2").removeAttr('required');
                $("#id_ages_childs_household_3").removeAttr('required');
                $("#id_ages_childs_household_4").removeAttr('required');
                $("#id_ages_childs_household_5").removeAttr('required');
                }
               else { $("#id_ages_childs_household" ).attr('required', 'required'); }
       /*    //    var ach0 = $("#id_ages_childs_household_0" ).prop( "checked", false )
          if  $("#id_ages_childs_household_0" ).prop( "checked", false ) { $("#id_ages_childs_household_0" ).removeAttr('required'); }
            else if $("#id_ages_childs_household_1" ).prop( "checked", false ) { $("#id_ages_childs_household_1" ).removeAttr('required'); }
            else if $("#id_ages_childs_household_2" ).prop( "checked", false ) { $("#id_ages_childs_household_2" ).removeAttr('required'); }
            else if $("#id_ages_childs_household_3" ).prop( "checked", false ) { $("#id_ages_childs_household_3" ).removeAttr('required'); }
            else if $("#id_ages_childs_household_4" ).prop( "checked", false ) { $("#id_ages_childs_household_4" ).removeAttr('required'); }
            else if $("#id_ages_childs_household_5" ).prop( "checked", false ) { $("#id_ages_childs_household_5" ).removeAttr('required'); }*/
            console.log(ach0);
      });

//HOUSEHOLD JS //

	}

$('document').ready(function() {
    var rs3 = $("input:radio[name=reason_status]:checked").val()
        if (rs3 == "Others")  {
        //$('#div_id_reason_status').show();
        $('#div_id_reason_status_others').show();
        //console.log(rs3);
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_reason_status_others').hide();
            $('#id_reason_status_others').val("");
           // console.log("sorry");
     }
});

$('document').ready(function() {
 var es3456 = $("input:radio[name=employment_status]:checked").val()
               if((es3456=="Temporary") | (es3456=="Contractual") | (es3456=="Casual") | (es3456=="Job Order"))
               {
                  $("#div_id_reason_status").show();
               }
               else
               {
                   $("#div_id_reason_status").hide();
                   $( "#id_reason_status_0" ).prop( "checked", false );
                   $( "#id_reason_status_1" ).prop( "checked", false );
                   $( "#id_reason_status_2" ).prop( "checked", false );
                   $( "#id_reason_status_3" ).prop( "checked", false );
                   $('#id_reason_status_others').val("");
                   $('#div_id_reason_status_others').hide();
               }
            });

$('document').ready(function() {
    var se012 = $("input:radio[name=spouse_employed]:checked").val()
        if (se012 == "Yes")  {
                  $("#div_id_place_work").show();
                  $("#div_id_place_where").show();
                  $("#div_id_source_income_spouse").show();
                  $("#div_id_gross_mothly_salary_spouse").show();
                  $("#div_id_number_childs").show();
                  $("#div_id_ages_childs_household").show();
        console.log(se012);
        }
     else if (se012 == "No") {
                    $("#div_id_place_work").hide();
                    $("#div_id_place_where").hide();
                    $("#div_id_source_income_spouse").hide();
                    $("#div_id_gross_mothly_salary_spouse").hide();
                    $("#div_id_number_childs").show();
                    $("#div_id_ages_childs_household").show();
          console.log(se012);
     }
     else if (se012 == "Not Applicable") {
                    $("#div_id_place_work").hide();
                    $("#div_id_place_where").hide();
                    $("#div_id_source_income_spouse").hide();
                    $("#div_id_gross_mothly_salary_spouse").hide();
                    $("#div_id_number_childs").hide();
                    $("#div_id_ages_childs_household").hide();
                    console.log(se012);
                    }
     else {
                  $("#div_id_place_work").hide();
                    $("#div_id_place_where").hide();
                    $("#div_id_source_income_spouse").hide();
                    $("#div_id_gross_mothly_salary_spouse").hide();
                    $("#div_id_number_childs").hide();
                    $("#div_id_ages_childs_household").hide();
                    console.log("No select");
     }
});

// WORK INFO //
// International Training //
$('document').ready(function() {
    var wi1 = $("input:radio[name=attendance_inter_training]:checked").val()
        if (wi1 == "Yes")  {
        //$('#div_id_reason_status').show();
        $('#div_id_yes_inter_training').show();
        console.log("Yes");
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_yes_inter_training').hide();
            $('#div_id_no_inter_training').hide();
            $('#div_id_no_inter_training_reason').hide();
            $('#id_yes_inter_training').val("");
           console.log("No");
     }
});

// Local Training //
$('document').ready(function() {
    var lt1 = $("input:radio[name=attendance_local_training]:checked").val()
        if (lt1 == "Yes")  {
        //$('#div_id_reason_status').show();
        $('#div_id_yes_local_training').show();
        console.log("Yes");
        }
     else{
            //$('#div_id_reason_status').hide();
            $('#div_id_yes_local_training').hide();
            $('#div_id_no_local_training').hide();
            $('#div_id_no_local_training_reason').hide();
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
    var rt1 = $("input:radio[name=rate_technical]:checked").val()
        if (rt1 == "Yes")  {
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
    var rp1 = $("input:radio[name=rate_people]:checked").val()
        if (rp1 == "Yes")  {
        $('#div_id_rate_people_reason').show();
        }
     else{
            $('#div_id_rate_people_reason').hide();
            $('#id_rate_people_reason').val("");
     }
});
//Rate Transparency //
$('document').ready(function() {
    var rt2 = $("input:radio[name=rate_tranparency]:checked").val()
        if (rt2 == "Yes")  {
        $('#div_id_rate_tranparency_reason').show();
        }
     else{
            $('#div_id_rate_tranparency_reason').hide();
            $('#id_rate_tranparency_reason').val("");
     }
});
//Rate gad //
$('document').ready(function() {
    var rg1 = $("input:radio[name=rate_gad]:checked").val()
        if (rg1 == "Yes")  {
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
    var exh1 = $("input:radio[name=iswork_affected]:checked").val()
        if (exh1 == "Yes")  {
        $('#div_id_yes_reason').show();
        }
     else{
            $('#div_id_yes_reason').hide();
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


//WORK INFO //

//PRACTICES//
//Privileges with pay
$('document').ready(function() {
    var pp1 = $("input:radio[name=priviledges_pay]:checked").val()
        if (pp1 == "Others")  {
            $('#div_id_others_privpay').show();
        }
     else{
            $('#div_id_others_privpay').hide();

     }
});
$('document').ready(function() {
    var pp1 = $("input:radio[name=availed_leaved]:checked").val()
        if (pp1 == "Others")  {
            $('#div_id_others_availeaved').show();
        }
     else{
            $('#div_id_others_availeaved').hide();

     }
});

//absences//
$('document').ready(function() {
    var nam1 = $("input:radio[name=number_absences_mo]:checked").val()
        if (nam1 == 0)  {
            $('#div_id_reason_absent_health').show();
            $('#div_id_other_reason_absent_health').show();
            $('#div_id_reason_absent_family').show();
            $('#div_id_other_reason_absent_family').show();
            $('#div_id_reason_absent_office').show();
            $('#div_id_other_reason_absent_office').show();
            console.log("HideTago");
        }
         else{
            $('#div_id_reason_absent_health').hide();
            $('#div_id_other_reason_absent_health').hide();
            $('#div_id_reason_absent_family').hide();
            $('#div_id_other_reason_absent_family').hide();
            $('#div_id_reason_absent_office').hide();
            $('#div_id_other_reason_absent_office').hide();
            console.log("Show");
     }
});
//tardiness//
$('document').ready(function() {
    var ntm1 = $("input:radio[name=number_tardines_mo]:checked").val()
        if (ntm1 == 0)  {
            $('#div_id_reason_tardines_health').show();
            $('#div_id_other_reason_tardines_health').show();
            $('#div_id_reason_tardines_family').show();
            $('#div_id_other_reason_tardines_family').show();
            $('#div_id_reason_tardines_office').show();
            $('#div_id_other_reason_tardines_office').show();
            console.log("HideTago");
        }
         else{
            $('#div_id_reason_tardines_health').hide();
            $('#div_id_other_reason_tardines_health').hide();
            $('#div_id_reason_tardines_family').hide();
            $('#div_id_other_reason_tardines_family').hide();
            $('#div_id_reason_tardines_office').hide();
            $('#div_id_other_reason_tardines_office').hide();
            console.log("Show");
     }
});
//undertime//
$('document').ready(function() {
    var num1 = $("input:radio[name=number_undertime_mo]:checked").val()
        if (num1 == 0)  {
            $('#div_id_reason_undertime_health').show();
            $('#div_id_other_reason_undertime_health').show();
            $('#div_id_reason_undertime_family').show();
            $('#div_id_other_reason_undertime_family').show();
            $('#div_id_reason_undertime_office').show();
            $('#div_id_other_reason_undertime_office').show();
            console.log("HideTago");
        }
         else{
            $('#div_id_reason_undertime_health').hide();
            $('#div_id_other_reason_undertime_health').hide();
            $('#div_id_reason_undertime_family').hide();
            $('#div_id_other_reason_undertime_family').hide();
            $('#div_id_reason_undertime_office').hide();
            $('#div_id_other_reason_undertime_office').hide();
            console.log("Show");
     }
});
//nursing room
$('document').ready(function() {
    var fn1 = $("input:radio[name=facility_nursing]:checked").val()
               if(fn1=="Yes")
               {
                   $('#div_id_facility_nursing_utilized').show();
                   $( "#div_id_facility_nursing_utilized" ).attr('required', 'required');
                   console.log("Yes Facility");
                   }
               else
               {
                   $('#div_id_facility_nursing_utilized').removeAttr('required');
                   $('#div_id_facility_nursing_utilized').val("");
                   $('#div_id_facility_nursing_utilized').hide();
                   $('#div_id_facility_nursing_utilized_satisfied').hide();
                   $('#div_id_facility_nursing_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_nursing_utilized_satisfied_no_reason').hide();
                    $('#div_id_facility_nursing_utilized_no_reason').hide();
                    $('#div_id_facility_nursing_others').hide();
                   console.log("No Facility");
                   }
               });
$('document').ready(function() {
        var fnu1 = $("input:radio[name=facility_nursing_utilized]:checked").val()
               if(fnu1=="Yes")
               {
                   $('#div_id_facility_nursing_utilized_satisfied').show();
                   $( "#div_id_facility_nursing_utilized_satisfied" ).attr('required', 'required');
                   console.log("Yes FacilityUtilized");
                   }
               else
               {
                   $('#div_id_facility_nursing_utilized_satisfied').removeAttr('required');
                   $('#div_id_facility_nursing_utilized_satisfied').val("");
                   $('#div_id_facility_nursing_utilized_satisfied').hide();
                   $('#div_id_facility_nursing_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_nursing_utilized_satisfied_no_reason').hide();
                    $('#div_id_facility_nursing_utilized_no_reason').hide();
                    $('#div_id_facility_nursing_others').hide();
                   console.log("No Facility");
                   }
               });
//DAYCARE
$('document').ready(function() {
    var fd1 = $("input:radio[name=facility_daycare]:checked").val()
               if(fd1=="Yes")
               {
                   $('#div_id_facility_daycare_utilized').show();
                   $( "#div_id_facility_daycare_utilized" ).attr('required', 'required');
                   console.log("Yes Facility");
                   }
               else
               {
                   $('#div_id_facility_daycare_utilized').removeAttr('required');
                   $('#div_id_facility_daycare_utilized').val("");
                   $('#div_id_facility_daycare_utilized').hide();
                   $('#div_id_facility_daycare_utilized_satisfied').hide();
                   $('#div_id_facility_daycare_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_daycare_utilized_satisfied_no_reason').hide();
                    $('#div_id_facility_daycare_utilized_no_reason').hide();
                    $('#div_id_facility_daycare_others').hide();
                   console.log("No Facility");
                   }
               });
$('document').ready(function() {
        var fdu1 = $("input:radio[name=facility_daycare_utilized]:checked").val()
               if(fdu1=="Yes")
               {
                   $('#div_id_facility_daycare_utilized_satisfied').show();
                   $( "#div_id_facility_daycare_utilized_satisfied" ).attr('required', 'required');
                   console.log("Yes FacilityUtilized");
                   }
               else
               {
                   $('#div_id_facility_daycare_utilized_satisfied').removeAttr('required');
                   $('#div_id_facility_daycare_utilized_satisfied').val("");
                   $('#div_id_facility_daycare_utilized_satisfied').hide();
                   $('#div_id_facility_daycare_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_daycare_utilized_satisfied_no_reason').hide();
                    $('#div_id_facility_daycare_utilized_no_reason').hide();
                    $('#div_id_facility_daycare_others').hide();
                   console.log("No Facility");
                   }
               });
//PRAYER
$('document').ready(function() {
    var fp1 = $("input:radio[name=facility_prayer]:checked").val()
               if(fp1=="Yes")
               {
                   $('#div_id_facility_prayer_utilized').show();
                   $( "#div_id_facility_prayer_utilized" ).attr('required', 'required');
                   console.log("Yes Facility");
                   }
               else
               {
                   $('#div_id_facility_prayer_utilized').removeAttr('required');
                   $('#div_id_facility_prayer_utilized').val("");
                   $('#div_id_facility_prayer_utilized').hide();
                   $('#div_id_facility_prayer_utilized_satisfied').hide();
                   $('#div_id_facility_prayer_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_prayer_utilized_satisfied_no_reason').hide();
                    $('#div_id_facility_prayer_utilized_no_reason').hide();
                    $('#div_id_facility_prayer_others').hide();
                   console.log("No Facility");
                   }
               });
$('document').ready(function() {
        var fpu1 = $("input:radio[name=facility_prayer_utilized]:checked").val()
               if(fpu1=="Yes")
               {
                   $('#div_id_facility_prayer_utilized_satisfied').show();
                   $( "#div_id_facility_prayer_utilized_satisfied" ).attr('required', 'required');
                   console.log("Yes FacilityUtilized");
                   }
               else
               {
                   $('#div_id_facility_prayer_utilized_satisfied').removeAttr('required');
                   $('#div_id_facility_prayer_utilized_satisfied').val("");
                   $('#div_id_facility_prayer_utilized_satisfied').hide();
                   $('#div_id_facility_prayer_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_prayer_utilized_satisfied_no_reason').hide();
                    $('#div_id_facility_prayer_utilized_no_reason').hide();
                    $('#div_id_facility_prayer_others').hide();
                   console.log("No Facility");
                   }
               });
//MEDICAL
$('document').ready(function() {
    var fm1 = $("input:radio[name=facility_medical]:checked").val()
               if(fm1=="Yes")
               {
                   $('#div_id_facility_medical_utilized').show();
                   $( "#div_id_facility_medical_utilized" ).attr('required', 'required');
                   console.log("Yes Facility");
                   }
               else
               {
                   $('#div_id_facility_medical_utilized').removeAttr('required');
                   $('#div_id_facility_medical_utilized').val("");
                   $('#div_id_facility_medical_utilized').hide();
                   $('#div_id_facility_medical_utilized_satisfied').hide();
                   $('#div_id_facility_medical_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_medical_utilized_satisfied_no_reason').hide();
                    $('#div_id_facility_medical_utilized_no_reason').hide();
                    $('#div_id_facility_medical_others').hide();
                   console.log("No Facility");
                   }
               });
$('document').ready(function() {
        var fmu1 = $("input:radio[name=facility_medical_utilized]:checked").val()
               if(fmu1=="Yes")
               {
                   $('#div_id_facility_medical_utilized_satisfied').show();
                   $( "#div_id_facility_medical_utilized_satisfied" ).attr('required', 'required');
                   console.log("Yes FacilityUtilized");
                   }
               else
               {
                   $('#div_id_facility_medical_utilized_satisfied').removeAttr('required');
                   $('#div_id_facility_medical_utilized_satisfied').val("");
                   $('#div_id_facility_medical_utilized_satisfied').hide();
                   $('#div_id_facility_medical_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_medical_utilized_satisfied_no_reason').hide();
                    $('#div_id_facility_medical_utilized_no_reason').hide();
                    $('#div_id_facility_medical_others').hide();
                   console.log("No Facility");
                   }
               });
//RECREATION
$('document').ready(function() {
    var fr1 = $("input:radio[name=facility_recreation]:checked").val()
               if(fr1=="Yes")
               {
                   $('#div_id_facility_recreation_utilized').show();
                   $( "#div_id_facility_recreation_utilized" ).attr('required', 'required');
                   console.log("Yes Facility");
                   }
               else
               {
                   $('#div_id_facility_recreation_utilized').removeAttr('required');
                   $('#div_id_facility_recreation_utilized').val("");
                   $('#div_id_facility_recreation_utilized').hide();
                   $('#div_id_facility_recreation_utilized_satisfied').hide();
                   $('#div_id_facility_recreation_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_recreation_utilized_satisfied_no_reason').hide();
                    $('#div_id_facility_recreation_utilized_no_reason').hide();
                    $('#div_id_facility_recreation_others').hide();
                   console.log("No Facility");
                   }
               });
$('document').ready(function() {
        var fmu1 = $("input:radio[name=facility_recreation_utilized]:checked").val()
               if(fmu1=="Yes")
               {
                   $('#div_id_facility_recreation_utilized_satisfied').show();
                   $( "#div_id_facility_recreation_utilized_satisfied" ).attr('required', 'required');
                   console.log("Yes FacilityUtilized");
                   }
               else
               {
                   $('#div_id_facility_recreation_utilized_satisfied').removeAttr('required');
                   $('#div_id_facility_recreation_utilized_satisfied').val("");
                   $('#div_id_facility_recreation_utilized_satisfied').hide();
                   $('#div_id_facility_recreation_utilized_satisfied_yes_reason').hide();
                   $('#div_id_facility_recreation_utilized_satisfied_no_reason').hide();
                    $('#div_id_facility_recreation_utilized_no_reason').hide();
                    $('#div_id_facility_recreation_others').hide();
                   console.log("No Facility");
                   }
               });
//LOANS
$('document').ready(function() {
        var loan1 = $("input:radio[name=loans_availed]:checked").val()
               if(loan1=="Others")
               {
                   $('#div_id_other_loans_availed').show();
                   $( "#div_id_other_loans_availed" ).attr('required', 'required');
                   console.log("Yes FacilityUtilized");
                   }
               else
               {
                   $('#div_id_other_loans_availed').removeAttr('required');
                   $('#id_other_loans_availed').val("");
                   $('#div_id_other_loans_availed').hide();
                   console.log("No Facility");
                   }
               });
 //loan reason
 $('document').ready(function() {
        var loan1 = $("input:radio[name=reason_loans_availed]:checked").val()
               if(loan1=="Others")
               {
                   $('#div_id_other_loans_availed_reason').show();
                   $( "#div_id_other_loans_availed_reason" ).attr('required', 'required');
                   console.log("Yes FacilityUtilized");
                   }
               else
               {
                   $('#div_id_other_loans_availed_reason').removeAttr('required');
                   $('#id_other_loans_availed_reason').val("");
                   $('#div_id_other_loans_availed_reason').hide();
                   console.log("No Facility");
                   }
               });
//FINANCIAL ASSISTANCE
 $('document').ready(function(){
         var fin1 = $("input:radio[name=financial_assitance]:checked").val()
               if(fin1=="Yes")
               {
                   $('#div_id_yes_identified_financial_assitance').show();
                   $( "#div_id_yes_identified_financial_assitance" ).attr('required', 'required');
                   $('#div_id_been_benificiary_financial_assist').hide();
                   $('#div_id_other_financial_assist').hide();
                   console.log("Yes Financial");
                   }
               else
               {
                   $('#div_id_yes_identified_financial_assitance').removeAttr('required');
                   $('#div_id_yes_identified_financial_assitance').val("");
                   $('#div_id_yes_identified_financial_assitance').hide();
                   $('#div_id_been_benificiary_financial_assist').hide();
                   $('#div_id_other_financial_assist').hide();
                   console.log("No Financial_ready");
                   }
               });
 //NEGATIVE STRESS
 $('document').ready(function(){
         var ens1 = $("input:radio[name=experience_negative_stress]:checked").val()
               if(ens1=="Yes")
               {
                   $('#div_id_causes_negative_stress').show();
                   $( "#div_id_causes_negative_stress" ).attr('required', 'required');
                   $('#div_id_other_causes_stress').hide();
                   $('#div_id_how_manage_stress').hide();
                   $('#div_id_other_how_manage_stress').hide();
                   console.log("Yes Stress");
                   }
               else
               {
                   $('#div_id_causes_negative_stress').removeAttr('required');
                   $('#div_id_causes_negative_stress').val("");
                   $('#div_id_causes_negative_stress').hide();
                   $('#div_id_other_causes_stress').hide();
                   $('#div_id_how_manage_stress').hide();
                   $('#div_id_other_how_manage_stress').hide();
                   console.log("No Stress ready");
                   }
               });

  $('document').ready(function(){
         var cns1 = $("input:radio[name=causes_negative_stress]:checked").val()
               if(cns1=="Others")
               {
                   $('#div_id_other_causes_stress').show();
                   $( "#div_id_other_causes_stress" ).attr('required', 'required');
                   console.log("Yes Stress");
                   }
               else
               {
                   $('#div_id_other_causes_stress').removeAttr('required');
                   $('#div_id_other_causes_stress').val("");
                   $('#div_id_other_causes_stress').hide();
                   console.log("No Stress ready");
                   }
               });