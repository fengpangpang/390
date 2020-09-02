import $ from "./lib/jquery.js";
function fn() {
  $(".min").on("mouseover", function () {
    $(".mask").css({ display: "block" });
    $(".max").css({ display: "block" });

    // min 鼠标移动事件
    $(".min").on("mousemove", function (e) {
      let top = e.pageY - $(".min").offset().top - $(".mask").height() / 2;
      let left = e.pageX - $(".min").offset().left - $(".mask").width() / 2;
      if (top <= 0) {
        top = 0;
      } else if (top >= $(".min").height() - $(".mask").height()) {
        top = $(".min").height() - $(".mask").height();
      }
      if (left <= 0) {
        left = 0;
      } else if (left >= $(".min").width() - $(".mask").width()) {
        left = $(".min").width() - $(".mask").width();
      }
      let bg = $(".max").width() / $(".min").width();
      //   console.log(bg);
      $(".mask").css({ top: top + "px", left: left + "px" });
      $(".max>img").css({ top: bg * -top + "px", left: bg * -left + "px" });
    });
  });

  //鼠标离开 min 隐藏 mask max
  $(".min").on("mouseout", function () {
    $(".mask").css({ display: "none" });
    $(".max").css({ display: "none" });
  });

  //鼠标 进入/离开 切换图片
  $(".img-box>img").hover(
    (e) => {
      e.target.style.borderBottom = "3px solid #999";
      $(".min").css({ background: `url(${e.target.src})` });
      $(".max>img").attr("src", e.target.src);
    },
    (e) => (e.target.style.borderBottom = "3px solid transparent")
  );

  //左右点击按钮
  if ($(".img-box>img").length <= 5) {
    return;
  } else {
    let arr = $(".left-list").children("p");
    arr.on("click", function (e) {
      let ll = Math.round($(".img-box").position().left);
      if (e.target == arr[0]) {
        if (ll >= 0) return;
        let l = `+=${$(".img-box>img").width() + 2}`;
        $(".img-box").css({ left: l });
      } else {
        if (ll <= `${-$(".img-box>img").width() - 2}`) return;
        let r = `-=${$(".img-box>img").width() + 2}`;
        $(".img-box").css({
          left: r,
        });
      }
    });
  }
}
export default fn;
