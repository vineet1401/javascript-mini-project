$(".btn").click(function () {
    className = $(this).attr("class")
    var temp = $(".calculation").get("InnerText");
    $(".calculation").text(temp + 1);
});
