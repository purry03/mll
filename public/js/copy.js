$("td").on("click", function () {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(this).html()).select();
    document.execCommand("copy");
    $temp.remove();
    toastr.info('Copied to clipboard')
})