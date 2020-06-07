$(document).ready(function() {
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






});