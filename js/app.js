function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " is-active";
    //timeout is set to load the map correctly inside modal
    setTimeout(function() {
          map.invalidateSize();
    }, 1);
  }



//adding information into a json variable, so i can update the json for updating the cv

var data = [{
  "profile":{
      "desc":"I am a seasoned expert in geo-data management, mapping, spatial analysis, and automation. With proven track record in national and international engineering projects, I excel in precise data collection, insightful mapping, and efficient spatial analysis, utilizing advanced technology and programming skills to automate processes and ensure project success.",
      "address":"Tirana, AL",
      "phone":"+447716083903",
      "email":"florjanvladi@gmail.com",
      "linkedin":"https://www.linkedin.com/in/florjan-vladi-24198953/",
      "facebook":"https://www.facebook.com/florjanvladi",
      "github":"https://github.com/florjanv",
      "stack-overflow":"https://gis.meta.stackexchange.com/users/63649/riflo",
      "linkedin-img":"https://media.licdn.com/dms/image/D4E03AQEvjNJ1_ik4zA/profile-displayphoto-shrink_800_800/0/1684164112729?e=1701907200&v=beta&t=NAEEADDBvCsAK7euNsIA6VKBA7KiNDUWmfRs9pOhkqI",
  },
  "gis":[
      "Arcgis Enterprise/Online/Pro",
      "Autocad Civil/Map 3D",
      "QGIS",
      "SQL",
      "Python Programming",
      "Basics in Front End (JS,CSS,HTML)",
      "MS Office tools",
      "Project Management"
  ],
  "prog_rdbms":[
      "Using PODS standards and ESRI UPDM, I managed the engineering database for two pipeline projects (Trans Adriatic Pipeline and Southampton to London Pipeline).",
      "Excellent Python automation, mostly in the GIS industry. As well as fundamental knowledge of JS, CSS, and HTML (front end). Some sample automation scripts may be found on my GitHub site.",
      "Because of my expertise in Geomatics Engineering and my experience working with various teams, I have developed outstanding skills in making high-quality maps,charts and visualizations for many subjects."
  ],
  "projects":{
      "SLP":{
          "name":"Southampton to London Pipeline Project",
          "location":"United Kingdom",
          "company":"Spiecapag",
          "position":"GIS Engineer",
          "link":"https://www.spiecapag.com/",
          "from":"08-2021",
          "to":"07-2024",
          "desc":"Demonstrated exceptional skills in the design office, by assisting various teams and managing the collected information of a 95km 12inch pipeline. Saving significant costs by daily checks of construction operations, and changing the technology to the ArcGIS Online platform."
      },
      "abkons":{
          "name":"Trans Adriatic Pipeline, Forestry Management Plan, Wind Farm, Photovoltaic Park etc...",
          "location":"Albania",
          "company":"ABKONS",
          "position":"GIS Consultant",
          "link":"https://www.abkons.com/",
          "from":"05-2015",
          "to":"12-2021",
          "desc":"Key expert in the company by providing invaluable insights and expertise in geo-data management, advanced mapping, complex analysis, visualizations, and automation for various projects."
      },
      "TAP":{
          "name":"Trans Adriatic Pipeline (Greece and Albania)",
          "location":"Albania",
          "company":"Spiecapag",
          "position":"GIS Consultant (part-time)",
          "link":"https://www.spiecapag.com/",
          "from":"05-2017",
          "to":"04-2021",
          "desc":"Successfully implemented the GIS technology for managing the pipeline engineering data including design information, As-Built engineering database and metadata."
      },
      "moi":{
          "name":"Sector of Addresses",
          "location":"Albania",
          "company":"Ministry of Internal Affairs",
          "position":"Specialist",
          "link":"https://www.mb.gov.al",
          "from":"07-2011",
          "to":"04-2015",
          "desc":"Specialist in a government institution responsible for managing the National System of Address of Albania. GIS web application developed using ESRI platform and database managed by SQL server."
      },
      "osce":{
          "name":"Albania's Modernisation of Civil Registration System and Addresses",
          "location":"Albania",
          "company":"OSCE",
          "position":"National Expert on Spatial Data Management",
          "link":"https://www.osce.org/presence-in-albania",
          "from":"05-2009",
          "to":"07-2011",
          "desc":"Responsible for creating, reviewing and updating address elements(building footprints, road centerline and entrances) according to national regulations. After 6 months I was promoted to supervisor of a team of four experts."
      }
  }
}];


//modifying the DOM for skills
addParagraph(data[0]["profile"]["desc"],"mainDescription");

function addParagraph(info,idToUpdate) {
  const elem = document.getElementById(idToUpdate);
  const addP = document.createElement("p");
  const addText = document.createTextNode(info);
  addP.appendChild(addText);
  elem.appendChild(addP);
};

var gis = data[0]["gis"]
var rdbms = data[0]["prog_rdbms"]
addSkills(gis,rdbms,"gis","rdbms");
function addSkills(gis,rdbms,idGis,idRDBMS){
  var gisCode = "";
  var rdbmsCode ="";

  for (var i=0;i<gis.length;i++){
    gisCode += `<span class="tag is-light" style="background-color: var(--color2);"> <i class="fa-solid fa-check"> </i> ${gis[i]} </span>`;
  }
  for (var i=0;i<rdbms.length;i++){
    rdbmsCode += `<li style="font-size: 14px;"> <i class="fa-solid fa-circle fa-2xs"></i> ${rdbms[i]}</li>`;
  }

  document.getElementById(idGis).innerHTML = gisCode;
  document.getElementById(idRDBMS).innerHTML = rdbmsCode;
};

//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//modifying the DOM for projects
var projects = data[0]["projects"];
var projectHTML = "";
var curPosition ="";
var curComp ="";
var curDateFrom ="";
var curDateTo ="";
var curLink ="";
var curDesc ="";
var curLocation ="";
var curName ="";

for (var key in projects) {
  // skip loop if the property is from prototype
  if (!projects.hasOwnProperty(key)) continue;

  var obj = projects[key];
  for (var prop in obj) {
      // skip loop if the property is from prototype
      if (!obj.hasOwnProperty(prop)) continue;
      curPosition = obj["position"];
      curComp = obj["company"];
      curDateFrom =obj["from"];
      curDateTo=obj["to"];
      curLink=obj["link"];
      curDesc=obj["desc"];
      curLocation=obj["location"];
      curName=obj["name"];
      // your code
  }
  projectHTML += `
        <header class="timeline-header">
          <span class="tag is-primary">${curDateTo}</span>
        </header>
        <div class="timeline-item is-primary">
          <div class="timeline-marker is-primary"></div>
          <div class="timeline-content">
            <p class="heading">${curDateFrom} - ${curDateTo}    <i class="fa-solid fa-location-dot"></i> ${curLocation}</p>
            <p>${curPosition} at  <a href="${curLink}" target="_blank">${curComp}</a> </p>
            <p><strong>${curName}</strong></p>
            <p>${curDesc}</p>
          </div>
        </div>
  `;
}
document.getElementById("timeline").innerHTML = projectHTML;





//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------

//modifying the DOM for contacts
addContact()
function addContact(){
  var contactCode = "";
  contactCode = `
      <li><i class="fa-solid fa-location-dot"></i> ${data[0]["profile"]["address"]}</li>
      <li><a href="mailto:${data[0]["profile"]["email"]}"> <i class="fa-solid fa-at"></i> </a> ${data[0]["profile"]["email"]}</li>
      <li><a href="https://wa.me/${data[0]["profile"]["phone"]}"><i class="fa-solid fa-square-phone"></i></a> ${data[0]["profile"]["phone"]}</li>
  `;
  document.getElementById("contact").innerHTML = contactCode;
};



//------------------------map location----------------------

const map = L.map('map').setView([41.3281, 19.8180], 7);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([41.3281, 19.8180]).addTo(map)
    .bindPopup('I live here.');
