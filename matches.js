//fetch match details
const match = document.getElementById("Matches-info");
match.addEventListener("click", function (event) {
  event.preventDefault();
//fetch(`https://api.cricapi.com/v1/series_info?apikey=c5c9b279-acf6-4fa0-8cc6-66536fa86b69&id=bd830e89-3420-4df5-854d-82cfab3e1e04`)
fetch('./matches.json')
    .then((res) => {
       return res.json()
      //var a=res.json()
      //console.log(a)
    })
    .then((data3) => { 
      console.log(data3);
      const list=data3.data.matchList;
      console.log(list);
     //if (list.matchType === "ICC Cricket World Cup 2023")
        var data2 = "";
        list.forEach((match1) => {
          if (match1.teams[0] || match1.teams[1] === "New Zealand"){

          
          data2 += `
        <div class="match">
        <h2 class="name">Name: ${match1.name}</h2>
        <p class="status">Status: ${match1.status}</p>
        <p class="venue">Venue: ${match1.venue}</p>
        <p class="date">Date: ${match1.date}</p>
        <p class="dateTime">DateTime: ${match1.datetimeGMT}</p>
        <p class="teams">Teams: ${match1.teams}</p>
      </div>
      `;
        }
        });
        document.querySelector(".display-Matches").innerHTML = data2;
        })
       // else{
           // console.log("error")
       // }
      });
