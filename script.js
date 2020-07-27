 

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
$(document).ready(function() {

    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    $("html, body").animate({ scrollTop: 0 }, "slow");




    $('#firstFloorBtn').click(function() {
        $('#firstFloor').show()
        $('#secondFloor').hide()
        $('#thirdFloor').hide()
        $('#fourthFloor').hide()
        $('#fifthFloor').hide()
        $('#shop').hide()
    })

    $('#secondFloorBtn').click(function() {

        $('#secondFloor').show()
        $('#firstFloor').hide()
        $('#thirdFloor').hide()
        $('#fourthFloor').hide()
        $('#fifthFloor').hide()
        $('#shop').hide()
    })

    $('#thirdFloorBtn').click(function() {
        $('#thirdFloor').show()
        $('#secondFloor').hide()
        $('#firstFloor').hide()

        $('#fourthFloor').hide()
        $('#fifthFloor').hide()
        $('#shop').hide()
    })


    $('#fourthFloorBtn').click(function() {
        $('#fourthFloor').show()
        $('#secondFloor').hide()
        $('#firstFloor').hide()
        $('#thirdFloor').hide()

        $('#fifthFloor').hide()
        $('#shop').hide()
    })

    $('#fifthFloorBtn').click(function() {
        $('#fifthFloor').show()
        $('#secondFloor').hide()
        $('#firstFloor').hide()
        $('#thirdFloor').hide()
        $('#fourthFloor').hide()

        $('#shop').hide()
    })

    $('#shopBtn').click(function() {
        $('#shop').show()

        $('#secondFloor').hide()
        $('#firstFloor').hide()
        $('#thirdFloor').hide()
        $('#fourthFloor').hide()
        $('#fifthFloor').hide()
    })




    setTimeout(function() {
        document.getElementsByClassName('preloader')[0].style.transform = 'translateX(200%)'; 
    }, 2000)

    
    document.getElementById('Electricity').style.display = "block";
    
});
