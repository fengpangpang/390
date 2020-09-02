import $ from "./lib/jquery.js";
import { cookie } from "./lib/cookie.js";
import fn from "./big.js";
import { get } from "jquery";
(function () {
  let id = location.search.split("=")[1];
  $.ajax({
    type: "get",
    url: "../php/getitem.php",
    data: {
      id: id,
    },
    dataType: "json",
    success: function (res) {
      // console.log(res);
      let picture = JSON.parse(res.img);
      let str = `
      <div class="main-left">
        <div class="min"  style="background-image: url(${picture[0].four1});">
          <div class="mask"></div>
        </div>
        <div class="max">
          <img src="${picture[0].four1}" alt="" />
        </div>
        <div class="left-list">
          <p class="lf-ls-l" data-bt="l">&lt;</p>
          <p class="lf-ls-r" data-bt="r">&gt;</p>
          <div class="list-main">
            <div class="img-box">
              <img src="${picture[0].four1}" alt="" />
              <img src="${picture[1].four2}" alt="" />
              <img src="${picture[2].four3}" alt="" />
              <img src="${picture[3].four4}" alt="" />
              <img src="${picture[4].four5}" alt="" />
            </div>
          </div>
        </div>
        <ul class="baoyou">
          <li>360商城发货&售后</li>
          <li>满99元包邮</li>
          <li>7天无理由退货</li>
          <li>15天免费换货</li>
        </ul>
      </div>
      <div class="main-right clear_fix">
        <p class="p1">${res.title}</p>
        <p class="p2">${res.red}</p>
        <div class="d1">
          <div class="d2">
            <div class="p3 clear_fix">
              <div class="ss">价格</div>
              <span class="s1">￥${res.price}</span>
              <span class="s2">￥${res.oldPrice}</span>
            </div>
            <div class="p3 clear_fix">
              <div class="ss">领卷</div>
              <span class="s3">满59.00减5.00元</span>
              <span class="s3">满99.00减10.00元</span>
            </div>
            <div class="p4">
              <div class="ss">促销</div>
              <span class="s4">直降</span>
              <span class="s5">立减10.00元</span>
            </div>
          </div>
        </div>
        <div class="p3 clear_fix">
          <div class="ss">分类</div>
          <a href="#" class="aaa1">DFH-S2116</a>
        </div>
        <div class="p3 clear_fix">
          <div class="ss">积分</div>
          <span class="s6"> 购买可获得99积分</span>
        </div>
        <div class="p3 clear_fix">
        <div class="ss">数量</div>
        <input type="number" min="1" value="1" id="nu" />
      </div>
        <div class="bottombt clear_fix">
          <a href="javascript::" class="aaa2">立即购买</a>
          <input type="button" class="aaa3" value="加入购物车"</input>
        </div>
      </div>
      `;
      let str1 = res.data;

      $("#main")
        .append(str)
        .find(".aaa3")
        .on("click", function () {
          addItem(res.id, res.price, $("#nu").val());
        });

      function addItem(id, price, num) {
        let shop = cookie.get("shop");

        let product = {
          id: id,
          price: price,
          num: num,
        };
        console.log(product);
      }

      $(".xxxx").append(str1);
      fn();
    },
  });
})();
