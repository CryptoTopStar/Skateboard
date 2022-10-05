import $ from 'jquery'

$(document).ready(function() {
    $(".list").click(function() {
        $(".menubar").toggleClass("wid_25");
    });
    $(".close").click(function() {
        $(".hidden_model").hide();
        $(".content").hide()
    })
    $(".board").click(function() {
        $(".hidden_model").show();
        $(".content").hide()
        $(".label").hide()
        $("#board").show()
        $("#card_board").show()
    })
    $(".wheel").click(function() {
        $(".hidden_model").show();
        $(".content").hide()
        $(".label").hide()
        $("#wheel").show()
        $("#card_wheel").show()
    })
    $(".truck").click(function() {
        $(".hidden_model").show();
        $(".content").hide()
        $(".label").hide()
        $("#truck").show()
        $("#card_truck").show()
    })
    $(".hardware").click(function() {
        $(".hidden_model").show();
        $(".content").hide()
        $(".label").hide()
        $("#hardware").show()
        $("#card_hardware").show()
    })
    $(".griptape").click(function() {
        $(".hidden_model").show();
        $(".content").hide()
        $(".label").hide()
        $("#griptape").show()
        $("#card_griptape").show()
    })
})