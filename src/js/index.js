//引入轮播图
import { swiper } from "./banner.js";
//加载jquery
import $ from "./lib/jquery.js";
(function () {
  $.ajax({
    type: "get",
    url: "../php/getproduct.php",
    dataType: "json",
    success: function (res) {
      let temp = "";
      console.log(res);
      res.forEach((elm, i) => {
        // console.log(elm);
        let picture = JSON.parse(elm.picture);
        let xx = 60 * elm.sold + "px";
        let txt = Math.floor(elm.sold * 100) + "%";
        temp += `
        <div class="ms-child">
        <a href="#">
          <img src="${picture[0].src}" alt="" />
        </a>
        <div class="right-box">
          <a href="" class="r-b-a">${elm.title}</a>
          <p class="r-b-p">
            <span class="price">￥${elm.price}</span>
            <span class="oldprice">￥${elm.oldPrice}</span>
          </p>
          <div class="r-b-foot">
            <a href="./product.html?id=${elm.id}" class="r-b-f-a" > 
            马上抢 
            </a>
            <span class="r-b-f-spt">${txt}</span>
            <div class="r-b-f-redbox">
              <i class="r-b-f-redi" style="width:${xx}"></i>
            </div>
          </div>
        </div>
      </div>
        `;
      });
      $(".ms").append(temp);
    },
  });
})();
