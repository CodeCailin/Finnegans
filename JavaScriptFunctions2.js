function passwordLength() {
  
   var password = document.getElementById('password');
    var username = document.getElementById('username');
  
  if (password.value.length == 2 && username.value.length == 2) {
    return true;
  } else if (password.value.length !== 2 && username.value.length == 2) {
    alert("Please input a password nine characters long");
  } else if (password.value.length == 2 && username.value.length !== 2) {
    alert("Please input a username nine characters long");
  } else {
    alert("Please input a username and password");
  }
}



<--Burger menus-->

$("#order").on('click', function(){
    var discount = parseFloat($('#discount > span').text());
    var burger = parseFloat($('select[name="burger"] option:selected').val());
   
    $('#grandTotal > span').html( burger - (discount * burger));
}); 


<--Burger menus-->