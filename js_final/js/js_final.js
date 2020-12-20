function billingFunction(){
  var sh1= document.getElementById("shippingName").value;
  var sh2= document.getElementById("shippingZip").value;
  if(document.getElementById("same").checked)
  {
    document.getElementById("billingName").value=sh1;
    document.getElementById("billingZip").value=sh2;
  }
  else {
    {
      document.getElementById("billingName").value='';
      document.getElementById("billingZip").value='';
    }
  }
}
