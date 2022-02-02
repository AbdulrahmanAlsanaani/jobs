$(document).ready( ()=>{
    $(".ar").hide();
    $(".ra-ads").addClass("d-none d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none");
    $("#arabec-btn").click(()=>{
        $("#filter").empty();
        $(".ar-ads").removeClass("d-block d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block d-none d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none");
        $(".en-ads").removeClass("d-block d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block d-none d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none");
        $(".ar").show();
        $(".en").hide();
        $(".ar-ads").addClass("d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block");
        $(".en-ads").addClass("d-none d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none");
        
       $("body").css("direction","rtl")
    });

    $("#englesh-btn").click(()=>{
        $("#filter").empty();
        $(".ar-ads").removeClass("d-block d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block d-none d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none");
        $(".en-ads").removeClass("d-block d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block d-none d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none");
        $(".en").show();
        $(".ar").hide();
        $(".en-ads").addClass("d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block");
        $(".ar-ads").addClass("d-none d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none");
        
        $("body").css("direction","ltr")
    });
}
);