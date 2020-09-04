import $ from "./lib/jquery.js";
import { cookie } from "./lib/cookie.js";
import shopx from "./shopping.js";

(function () {
  let shop = cookie.get("shop");

  //如果有cookie数据  转换为json对象
  if (shop) {
    shop = JSON.parse(shop);
    let idList = shop.map((elm) => elm.id).join();
    $.ajax({
      type: "get",
      url: "../php/getitems.php",
      data: {
        idList: idList,
      },
      dataType: "json",
      success: function (res) {
        var str = "";
        // console.log(res);
        res.forEach((elm) => {
          let picture = JSON.parse(elm.img);
          let arr = shop.filter((val) => val.id === elm.id);
          str += `
          <div class="twodiv clear_fix">
          <ul class="clear_fix">
            <li>
              <input type="checkbox"  class="ttt" />
            </li>
            <li>
              <img src="${picture[0].four1}" alt="" />
              <a href="javascript::">
           ${elm.title}
              </a>
            </li>
            <li class="price">￥<span>${elm.price}</span></li>
            <li>
              <div>
                <div class="jianyi">-</div>
                <input type="text" value="${arr[0].num}" class="tt" disabled />
                <div class="jiayi">+</div>
              </div>
            </li>
            <li class="qprice">￥<span  class="pr">${elm.price}</span></li>
            <li>
              <button class="btt">删除</button>
            </li>
          </ul>
        </div>`;
        });
        $(".two").append(str);
        shopx();
      },
    });
  }
})();
