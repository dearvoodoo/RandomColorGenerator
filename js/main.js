﻿function GetColor() {
    return Math.floor(Math.random()*16777215).toString(16);
};

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

function NewColor() {
    randomColor = GetColor();
    $(".rd-background").css("background-color", "#"+randomColor)
    $("#hex_code").text("#"+randomColor)
    $("#rgb_code").text(w3color(randomColor).toRgbString())
    $("#hsl_code").text(w3color(randomColor).toHslString())
    $("#hwb_code").text(w3color(randomColor).toHwbString())
    $("#cmyk_code").text(w3color(randomColor).toCmykString())
    $("#ncol_code").text(w3color(randomColor).toNcolString())
};


$(document).ready(function() {
    NewColor()
});