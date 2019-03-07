var checkWin = 0

$(".zone").on("mouseenter", function (event) {
    $(event.target).css("background-color", "green");
});

$(".zone").on("mouseleave", function (event) {
    $(event.target).css("background-color", "white");
});

$(".zone").on("click", function (event) {
    $(event.target).addClass("green")
    $(event.target).off("mouseleave");
    checkWin = 0;
    $(".zone").each(function () {
        if ($(this).hasClass("green")) {
            checkWin++;
        }
    })

    if (checkWin === 4) {
        console.log("congrats");
    }
});
