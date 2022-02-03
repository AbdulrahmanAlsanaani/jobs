$(document).ready(function () {

    $("#search-en").on('input', function () {
        var word = $("#search-en").val().toLowerCase();
        var wordEn = $("#filter-type-en").val().toLowerCase();
        var wordAR = $("#filter-type-ar").val().toLowerCase();


        if (wordEn == "city" || wordAR == "المدينة") {
            var wordFilter = $("#filter").val().toLowerCase();
            $(".searech-h").filter(function () {
                if ($(this).find(".job-mame").text().toLowerCase().indexOf(word) > -1 && $(this).find(".city").text().toLowerCase().indexOf(wordFilter) > -1) {
                    $(this).css("display", "block");
                } else {
                    $(this).css("display", "none");
                }

            })
        } else if (wordEn == "company" || wordAR == "الشركة") {
            var wordFilter = $("#filter").val().toLowerCase();
            $(".searech-h").filter(function () {
                if ($(this).find(".job-mame").text().toLowerCase().indexOf(word) > -1 && $(this).find(".com-name").text().toLowerCase().indexOf(wordFilter) > -1) {
                    $(this).css("display", "block");
                } else {
                    $(this).css("display", "none");
                }

            })
        }else{
            $(".searech-h").filter(function () {
                
                if ($(this).find(".job-mame").text().toLowerCase().indexOf(word) > -1) {
                    $(this).css("display", "block");
                } else {
                    $(this).css("display", "none");
                }

            })
        }

    })

    $("#search-ar").on('input', function () {
        var word = $("#search-ar").val().toLowerCase();
        var wordEn = $("#filter-type-en").val().toLowerCase();
        var wordAR = $("#filter-type-ar").val().toLowerCase();


        if (wordEn == "city" || wordAR == "المدينة") {
            var wordFilter = $("#filter").val().toLowerCase();
            $(".searech-h").filter(function () {
                if ($(this).find(".job-mame").text().toLowerCase().indexOf(word) > -1 && $(this).find(".city").text().toLowerCase().indexOf(wordFilter) > -1) {
                    $(this).css("display", "block");
                } else {
                    $(this).css("display", "none");
                }

            })
        } else if (wordEn == "company" || wordAR == "الشركة") {
            var wordFilter = $("#filter").val().toLowerCase();
            $(".searech-h").filter(function () {
                if ($(this).find(".job-mame").text().toLowerCase().indexOf(word) > -1 && $(this).find(".com-name").text().toLowerCase().indexOf(wordFilter) > -1) {
                    $(this).css("display", "block");
                } else {
                    $(this).css("display", "none");
                }

            })
        }else{
            $(".searech-h").filter(function () {
                
                if ($(this).find(".job-mame").text().toLowerCase().indexOf(word) > -1) {
                    $(this).css("display", "block");
                } else {
                    $(this).css("display", "none");
                }

            })
        }


    })

    $("#filter-type-ar").on('change', function () {
        var word = $("#filter-type-ar").val().toLowerCase();

        if (word == "المدينة") {
            $("#filter").empty();
            $("#filter").append('<option selected disabled value="">اختر مدينة</option><option value="حضرموت">حضرموت</option><option value="صنعاء">صنعاء</option><option value="تعز">تعز</option>');
        } else if (word == "الشركة") {
            $("#filter").empty();
            $("#filter").append('<option selected disabled value="">اختر شركة</option><option value="Fast Apps">Fast Apps</option><option value="Best Selution">Best Selution</option><option value="Smart Apps">Smart Apps</option>');
        } else {
            $("#filter").empty();
            $(".searech-h").filter(function () {
                if ($(this).find(".job-mame").text().toLowerCase().indexOf(word) > -1) {
                    $(this).css("display", "block");
                } else {
                    $(this).css("display", "none");
                }
            })
        }

    })

    $("#filter-type-en").on('change', function () {
        var word = $("#filter-type-en").val().toLowerCase();

        if (word == "city") {
            $("#filter").empty();
            $("#filter").append('<option selected disabled value="">choice city</option><option value="Hadramout">Hadramout</option><option value="Sanaa">Sanaa</option><option value="Taze">Taze</option>');
        } else if (word == "company") {
            $("#filter").empty();
            $("#filter").append('<option selected disabled value="">choice company</option><option value="Fast Apps">Fast Apps</option><option value="Best Selution">Best Selution</option><option value="Smart Apps">Smart Apps</option>');
        } else {
            $("#filter").empty();
            $(".searech-h").filter(function () {
                if ($(this).find(".job-mame").text().toLowerCase().indexOf(word) > -1) {
                    $(this).css("display", "block");
                } else {
                    $(this).css("display", "none");
                }
            })
        }

    })


    $("#filter").on('change', function () {
        var word = $("#search-en").val().toLowerCase();
        var wordFilter = $("#filter").val().toLowerCase();
        var wordEn = $("#filter-type-en").val().toLowerCase();
        var wordAR = $("#filter-type-ar").val().toLowerCase();


        if (wordEn == "city" || wordAR == "المدينة") {
            $(".searech-h").filter(function () {
                if ($(this).find(".job-mame").text().toLowerCase().indexOf(word) > -1 && $(this).find(".city").text().toLowerCase().indexOf(wordFilter) > -1) {
                    $(this).css("display", "block");
                } else {
                    $(this).css("display", "none");
                }

            })
        } else if (wordEn == "company" || wordAR == "الشركة") {
            $(".searech-h").filter(function () {
                if ($(this).find(".job-mame").text().toLowerCase().indexOf(word) > -1 && $(this).find(".com-name").text().toLowerCase().indexOf(wordFilter) > -1) {
                    $(this).css("display", "block");
                } else {
                    $(this).css("display", "none");
                }

            })
        }

    })
})