import $ from "./lib/jquery.js";
$(function () {
  let reg = {
    username: /^[A-z]\w{5,15}$/,
    password: /^.{6,16}$/,
  };
  $(".inbox>input").each(function (index, elm) {
    $(elm).on("input", function () {
      if (reg[$(elm).attr("name")].test($(elm).val())) {
        $(elm).css({
          border: "1px solid green",
        });
      } else {
        $(elm).css({
          border: "1px solid red",
        });
      }
    });
  });
});
