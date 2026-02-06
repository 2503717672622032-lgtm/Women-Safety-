function makeCall() {
    let num = document.getElementById("number").value;

    if (num === "" || isNaN(num)) {
        alert("Please enter a valid emergency number!");
        return;
    }

    document.getElementById("status").innerText = "Sending SOS alert...";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                let message =
                    "🚨 WOMEN SAFETY SOS ALERT 🚨\n" +
                    "I am UNSAFE and need immediate help.\n" +
                    "My current location:\n" +
                    "https://www.google.com/maps?q=" + lat + "," + lon;

               
                window.location.href =
                    "sms:" + num + "?body=" + encodeURIComponent(message);


                setTimeout(function () {
                    window.location.href = "tel:" + num;
                }, 2000);

                document.getElementById("status").innerText =
                    "SOS message sent and calling...";
            },
            function () {
                document.getElementById("status").innerText =
                    "Location access denied!";
            }
        );
    } else {
        alert("Geolocation not supported!");
    }
}
