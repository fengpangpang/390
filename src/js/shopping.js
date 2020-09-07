import $ from "./lib/jquery.js";
import { cookie } from "./lib/cookie.js";

function shopx() {
  he();
  removebtn();
  $(".jianyi").on("click", clickHdanler);
  $(".jiayi").on("click", clickHdanler);

  function clickHdanler(e) {
    let n;
    if ($(e.target).html() === "-") {
      n = $(e.target).next().val();
      if (n <= 1) {
        return;
      } else {
        n--;
      }
      $(e.target).next().val(n);
    } else if ($(e.target).html() === "+") {
      n = $(e.target).prev().val();
      if (n >= 999) {
        return;
      } else {
        n++;
      }
      $(e.target).prev().val(n);
    }
    let zj = $(this).parent().parent().prev().children().html() * n;
    $(this).parent().parent().next().children().html(zj);
    he();
  }

  function he() {
    console.log();
    let a = $(".pr");
    // console.log(a);
    let nn = 0;
    $(a).each((i, val) => {
      nn += Number($(val).html());
    });
    $("#heji").html(nn);
  }
}

let removebtn = function () {
  $(".btt").on("click", function () {
    $(this).parents(".twodiv").remove();
  });

  var shop = cookie.get("shop");
  shop = JSON.parse(shop);
  console.log(shop);
  $(".btt").on("click", function () {
    let i = $(this);
    let index = $(".btn").index(this);
    // let num = shop.forEach((val) => {
    //   //   console.log(val.id,);
    //   if (val.id == i.attr("class")) {
    //     return shop.indexOf(val);
    //   }
    // });
  });
  //   let removeCookie = function () {
  //     let shop = cookie.get("shop");
  //     shop = JSON.parse(shop);
  //     $(".ttt").each((i, elm) => {
  //       // elm.on('click', function() {
  //       $(elm).on("click", function () {
  //         if ($(this).prop("checked") == true) {
  //           let index = $(this)
  //             .parents(".order-list")
  //             .attr("class")
  //             .split(" ")[1]
  //             .charAt(1);
  //           $(`.delBtn${index}`).on("click", function () {
  //             if ($(elm).prop("checked") == true) {
  //               $(`.box${index}`).remove();
  //               $(`.box1${index}`).remove();
  //               let num = shop.forEach((val, i) => {
  //                 if (index == val.id) {
  //                   return shop.indexOf(val);
  //                 }
  //               });
  //               shop.splice(num, 1);
  //               let str = JSON.stringify(shop);
  //               cookie.set("shop", str, 1);
  //               yuan();
  //             }
  //           });
  //         }
  //       });
  //     });
  //   };
};

export default shopx;
