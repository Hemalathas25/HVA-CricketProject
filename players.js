//const play='playerr.json'
const Teams = document.getElementById("Teams-info")
Teams.addEventListener("click", function(event) {
  event.preventDefault();
  //fetch(`https://api.cricapi.com/v1/match_squad?apikey=b17275a2-4770-4799-b626-2f1dc6cc1b13&id=3569487d-0f89-469d-9c4f-f81101246f2e`)
  //fetch(`https://api.cricapi.com/v1/match_squad?apikey=80449b22-bdd2-435d-aaaf-47afd57ca67a&id=78338376-2acb-4f4a-9e39-0f770618906e`) 
  fetch('./players.json')
  .then((res) => {
      return res.json();
      //var a=res.json()
     // console.log(a)
    })
    .then((data) => {
      console.log(data)
      //const Team = data.data.find((team) => team.teamName === "South Africa");
      //const a=JSON.stringify(data.squad);
      let a=data.data[1].players
      console.log(a)
      //if (data.a =="success") {
        var data1 = "";
        a.forEach((player) => {
          data1 += `
        <div id="players">

        <img
          src='${player.playerImg}'
          alt="logo" id="playerImg"
        />

        <h1 class="playername">Name: ${player.name}</h1>
        <p class="role">Role: ${player.role}</p>
        <p class="battingStyle">BattingStyle: ${player.battingStyle}</p>
        <p class="bowlingStyle">BowlingStyle: ${player.bowlingStyle}</p>
        <p class="country">Country: ${player.country}</p>
      </div>`;
        });
        document.querySelector(".display-teams").innerHTML = data1;
      })// else {
       // console.log("no player avaiable");
     // }

    });
  //});
