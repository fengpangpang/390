import $ from "./lib/jquery.js";
$(function () {
  let reg = {
    username: /^[A-z]\w{5,15}$/,
    password: /^.{6,16}$/,
  };
  $(".inbox>input").each(function (index, elm) {
    if ($(elm).attr("id") === "checkpass") return;
    $(elm).on("input", function () {
      if (reg[$(elm).attr("id")].test($(elm).val())) {
        $(elm).css({
          border: "1px solid green",
        });
        $(this).attr("data-pass", true);
      } else {
        $(elm).css({
          border: "1px solid red",
        });
        $(this).attr("data-pass", false);
      }
    });
    check();
  });

  $("#checkpass").on("input", function () {
    if ($(this).val() === $("#password").val()) {
      $(this).css({
        border: "1px solid green",
      });
      $(this).attr("data-pass", true);
    } else {
      $(this).css({
        border: "1px solid red",
      });
      $(this).attr("data-pass", false);
    }
    check();
  });
  /*   if ($("#gx").attr("checked")) {
    console.log("a");
  } else if ($("#gx").attr("checked", false)) {
    console.log("ss");
  } */
  function check() {
    if ($("[data-pass=true]").length == 3) {
      $(".inbt").removeAttr("disabled");
    } else {
      $(".inbt").attr("disabled", "disabled");
    }
  }
});
