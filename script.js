function changeText() {
    var client = {
      firstName: document.getElementById("fname").value,
      lastName: document.getElementById("lname").value,
      address: document.getElementById("address").value,
      fullName: function() {
        return this.firstName + " " + this.lastName;
      },
      fullAddress: function() {
        return this.address;
      },

    };
    var clientTwo = {
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
      zip: document.getElementById("zip").value,
      lastAddress: function() {
        return this.city + " " + this.state + " " + this.zip;
      },
    };

    document.getElementById("message").innerHTML = (client.fullName()) + "<br> " + client.address + "<br> " + clientTwo.city + "<br> " + clientTwo.state + "<br>" + clientTwo.zip;
  }


  function clearText() {
    document.getElementById("message").innerHTML = ("<br>");
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("zip").value = "";
  }
