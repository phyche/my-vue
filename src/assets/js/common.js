/**
 * Created by W on 9/13 0013.
 */

$(function() {

    $('.managerSidebar, .table-scroll').niceScroll({cursorcolor: "#555", cursorborder: '0px',});

    $('body, .el-dialog__wrapper').niceScroll({cursorcolor: "#f5f5f5", cursorborder: '0px',});


})




//页面切换
$(document).on('click', "#navSidebar a", function () {
    $("#mainIframe").attr("src", $(this).attr("href"));
    return false;
})
