function f1(){
    tmp1 = jQuery("#op1").val()
    tmp2 = jQuery("#op2").val()
    tmp = Number(tmp1)
    tmp = Number(tmp2)
    jQuery("#finalR").html("Result: " + tmp1 + " + " + tmp2 + " = " + (tmp1 + tmp2))
    $("#history").append(`<span class='addClass'>" ${tmp1}  " + "  ${tmp2} = ${(tmp1 + tmp2)} <span> <br>`)
}


function f2(){
    tmp1 = jQuery("#op1").val()
    tmp2 = jQuery("#op2").val()
    tmp = Number(tmp1)
    tmp = Number(tmp2)
    jQuery("#finalR").html("Result: " + tmp1 + " - " + tmp2 + " = " + (tmp1 - tmp2))
    $("#history").append(`<span class='subClass'>" ${tmp1}  " - "  ${tmp2} = ${(tmp1 - tmp2)} <span> <br>`)
}

function f3(){
    tmp1 = jQuery("#op1").val()
    tmp2 = jQuery("#op2").val()
    tmp = Number(tmp1)
    tmp = Number(tmp2)
    jQuery("#finalR").html("Result: " + tmp1 + " * " + tmp2 + " = " + (tmp1 * tmp2))
    $("#history").append(`<span class='multClass'>" ${tmp1}  " * "  ${tmp2} = ${(tmp1 * tmp2)} <span> <br>`)
}

function f4(){
    tmp1 = jQuery("#op1").val()
    tmp2 = jQuery("#op2").val()
    tmp = Number(tmp1)
    tmp = Number(tmp2)
    jQuery("#finalR").html("Result: " + tmp1 + " / " + tmp2 + " = " + (tmp1 / tmp2))
    $("#history").append(`<span class='divClass'>" ${tmp1}  " / "  ${tmp2} = ${(tmp1 / tmp2)} <span> <br>`)
}



function setup(){
    console.log("setup() got called")
    jQuery("#add").click(f1)
    jQuery("#sub").click(f1)
    jQuery("#mult").click(f1)
    jQuery("#div").click(f1)
}

$(document).ready(setup)