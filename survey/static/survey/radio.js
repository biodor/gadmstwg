<script>
$(document).ready(function(){
    $('#id_reason_status_3').change(function() {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;

    if (valueSelected === "Others"){
        $('#div_id_reason_status_others').hide();
        }else {
        $('#div_id_reason_status_others').show();
        }
        });
});

</script>

    <script>
        $(document).ready(function() {
           document.getElementById("id_reason_status_3").innerHTML
            $("#id_reason_status_3").click(function() {
                $("#div_id_reason_status_others").hide();
                });
        });
     </script>