function updateTime() {
  let harareElement = document.querySelector("#harare");
  if (harareElement) {
    let harareDateElement = harareElement.querySelector(".date");
    let harareTimeElement = harareElement.querySelector(".time");
    let harareTime = moment().tz("Africa/Harare");

    harareDateElement.innerHTML = harareTime.format("MMMM Do YYYY");
    harareTimeElement.innerHTML = harareTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let sidneyElement = document.querySelector("#sidney");
  console.log({ sidneyElement });
  if (sidneyElement) {
    let sidneyDateElement = sidneyElement.querySelector(".date");
    let sidneyTimeElement = sidneyElement.querySelector(".time");
    let sidneyTime = moment().tz("Australia/Sydney");
    console.log({ sidneyTime });

    sidneyDateElement.innerHTML = sidneyTime.format("MMMM Do YYYY");
    sidneyTimeElement.innerHTML = sidneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let shanghaiElement = document.querySelector("#shanghai");
  if (shanghaiElement) {
    let shanghaiDateElement = shanghaiElement.querySelector(".date");
    let shanghaiTimeElement = shanghaiElement.querySelector(".time");
    let shanghaiTime = moment().tz("Asia/Shanghai");

    shanghaiDateElement.innerHTML = shanghaiTime.format("MMMM Do YYYY");
    shanghaiTimeElement.innerHTML = shanghaiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let lagosElement = document.querySelector("#lagos");
  if (lagosElement) {
    let lagosDateElement = lagosElement.querySelector(".date");
    let lagosTimeElement = lagosElement.querySelector(".time");
    let lagosTime = moment().tz("Africa/Lagos");

    lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
    lagosTimeElement.innerHTML = lagosTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);
