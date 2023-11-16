const pointstable = document.getElementById("Pointstable-info");
match.addEventListener("click", function(event){
  event.preventDefault();
  fetch('./points.json')
  .then((res) => {
    return res.json()
  })
})
.then((data3) => {
  console.log(data3);
  const list=data3.data.points
  console.log(list);
  var data2 = "";
  list.forEach((points) => {
    data2 +=`
    <div class="pointstable">
    <table>
            <tr><th>Teams</th>
            <th>mat</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NR</th>
            <th>Pts</th>
            <th>NRR</th>
        </tr>
        </table>
      </div>
    `;
  });
  document.querySelector(".display-points").innerHTML =data2;
})
