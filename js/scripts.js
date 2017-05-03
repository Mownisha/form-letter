$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var address1Input = $("input#address1").val();
    var address2Input= $("input#address2").val();
    var address3Input = $("input#address3").val();

    $(".name").text(nameInput);
    $(".address1").text(address1Input);
    $(".address2").text(address2Input);
    $(".address3").text(address3Input);

    $("#letter").show();

    event.preventDefault();
  });
});
