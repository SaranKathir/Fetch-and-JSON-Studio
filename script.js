window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
       // console.log(response.json());
       response.json().then(function(json){
    //console.log(json[0]);
       let total=document.getElementById("totalno");
       total.innerHTML="Total no of astronauts:" +`${json.length}`;
      // console.log(json.length);
        const div=document.getElementById("container");
     
        let htmlstring = '';
        for(let i=0;i<json.length;i++){
        htmlstring += `
        
        <div class ="astronaut">
       
       <h3>${json[i].firstName} ${json[i].lastName}</h3>
       <ul>
            <li>HoursInSpace:${json[i].hoursInSpace}</li>
            <li>Active:${json[i].active}</li>
            <li>Skills:${json[i].skills}</li>
        </ul>
        <img class="avatar" src="${json[i].picture}"></img>
        </div>
       
                    `;
        }
        div.innerHTML = htmlstring;

       })
    })
 });// TODO: add code here