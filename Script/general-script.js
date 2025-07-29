$("#invalidAcc").css("display", "none");

//For Navigation
$("#homeNav").on("click", ()=>{
    window.location.href="../netflix.com/ph-en.php";
});

$("#signIn").on("click", ()=>{
    window.location.href="../netflix.com/login.php";
});

//AJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX!!

$('#centerform').submit((event)=>{
    event.preventDefault();
    if($('#email').val() == "" || $('#password').val() == ""){
        $("#invalidAcc").css("display", "inline");
    }

    else{
        $("#invalidAcc").css("display", "inline");
        
        $.ajax({
            type: "POST",
            url: "../Database/getFreeAccount.php",
            data: {email: $("#email").val(), password: $("#password").val()},
            success: (response)=>{
                console.log(response);
            }
        });
    }
});