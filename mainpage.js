$(document).ready(function () {
  $(".home_button").click(function () {
    $(".home").stop().slideDown(0);
    $(".notice").stop().slideUp(0);
    $(".code").stop().slideUp(0);
  });
  $(".notice_button").click(function () {
    $(".home").stop().slideUp(0);
    $(".notice").stop().slideDown(0);
    $(".code").stop().slideUp(0);
  });
  $(".code_button").click(function () {
    $(".home").stop().slideUp(0);
    $(".notice").stop().slideUp(0);
    $(".code").stop().slideDown(0);
  });

  $(".login,.go_login,.code_server>span").click(function () {
    $(".login_pop").stop().slideDown(0);
  });
  $(".back").click(function () {
    $(".login_pop").stop().slideUp(0);
  });
});
