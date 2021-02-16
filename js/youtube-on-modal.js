$("#use-case-modal").on('hidden.bs.modal', function(e) {
    $("#use-case-modal iframe").attr("src", $("#use-case-modal iframe").attr("src"));
});

$("#indi-video-modal").on('hidden.bs.modal', function(e) {
    $("#indi-video-modal iframe").attr("src", $("#indi-video-modal iframe").attr("src"));
});

$("#bulk-video-modal").on('hidden.bs.modal', function(e) {
    $("#bulk-video-modal iframe").attr("src", $("#bulk-video-modal iframe").attr("src"));
});

$(".tutvid-modal").on('hidden.bs.modal', function(e) {
    $(".tutvid-modal iframe").attr("src", $(".tutvid-modal iframe").attr("src"));
});