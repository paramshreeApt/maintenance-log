$('#firstFloorBtn').click(function() {
    $('#firstFloor').show()
    $('#secondFloor').hide()
    $('#thirdFloor').hide()
    $('#fourthFloor').hide()
    $('#fifthFloor').hide()
})

$('#secondFloorBtn').click(function() {

    $('#secondFloor').show()
    $('#firstFloor').hide()
    $('#thirdFloor').hide()
    $('#fourthFloor').hide()
    $('#fifthFloor').hide()
})

$('#thirdFloorBtn').click(function() {

    $('#secondFloor').hide()
    $('#firstFloor').hide()
    $('#thirdFloor').show()
    $('#fourthFloor').hide()
    $('#fifthFloor').hide()
})


$('#fourthFloorBtn').click(function() {

    $('#secondFloor').hide()
    $('#firstFloor').hide()
    $('#thirdFloor').hide()
    $('#fourthFloor').show()
    $('#fifthFloor').hide()
})

$('#fifthFloorBtn').click(function() {

    $('#secondFloor').hide()
    $('#firstFloor').hide()
    $('#thirdFloor').hide()
    $('#fourthFloor').hide()
    $('#fifthFloor').show()
})