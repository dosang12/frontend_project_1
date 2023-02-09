/* Javascript 샘플 코드 */

var xhr = new XMLHttpRequest();
var url = "http://apis.data.go.kr/B500001/drghtNewInfo/list"; /*URL*/
var queryParams = "?" + encodeURIComponent("serviceKey") + "=" + "8rEO4GGvAt50j%2B%2Fb%2F76L2LAN6mSFS33XGW0VY7fcQ6bbjViMesdAHDqY%2FaYbLhlx6EWslHKL77QpvQG4ldLVIg%3D%3D"; /*Service Key*/
queryParams += "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
queryParams += "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10"); /**/
queryParams += "&" + encodeURIComponent("stDt") + "=" + encodeURIComponent("20230101"); /**/
queryParams += "&" + encodeURIComponent("edDt") + "=" + encodeURIComponent(today); /**/

xhr.open("GET", url + queryParams);
xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    console.log("Status: " + this.status + "nHeaders: " + JSON.stringify(this.getAllResponseHeaders()) + "nBody: " + this.responseText);
  }
};

xhr.send("");
