
function openTab(evt, tabName) {
  var i, x, tablinks;
  // Hide all tab contents using inline style
  x = document.getElementsByClassName("content-tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  // Remove active class from all tab buttons
  tablinks = document.getElementsByClassName("tab-button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  // Show current tab and mark button as active
  document.getElementById(tabName).style.display = "";
  evt.currentTarget.classList.add("active");
  // Timeout is set to load the map correctly inside modal
  setTimeout(function() {
    if (typeof map !== 'undefined' && map) map.invalidateSize();
  }, 1);
}



//adding information into a json variable, so i can update the json for updating the cv

// Loading function
function showLoader() {
  document.getElementById('loadingOverlay').style.display = 'flex';
}

function hideLoader() {
  document.getElementById('loadingOverlay').style.display = 'none';
}

var data = [{
  "profile":{
      "desc":"As a GIS Engineer at Spiecapag, I bring over a decade of experience in geomatics and GIS to design, manage, and optimize pipeline geospatial data for the Southampton to London Pipeline Project (and Trans Adriatic Pipeline). I collaborate with multidisciplinary teams to ensure data quality and accuracy, while using ArcGIS Online to improve efficiency and reduce operational costs. Python and SQL play a key role in automating workflows and managing geo-data throughout the project lifecycle. Previously, as a GIS Consultant at Abkons, I delivered geospatial analysis, mapping, and automation solutions for major projects including the Trans Adriatic Pipeline, forestry management plans, wind farms, and photovoltaic parks. I was recognized as a key expert, providing valuable insights for complex engineering projects. Outside of work, I enjoy football, coding, and meeting new people.",
      "address":"Aberdeenshire, Scotland",
      "phone":"+447851501715",
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
  const addText1 = document.createTextNode(info.slice(0, 382));
  const addText2 = document.createTextNode(info.slice(382, 820));
  const addText3 = document.createTextNode(info.slice(820));
  addP.appendChild(addText1);
  addP.appendChild(document.createElement("br"));
  addP.appendChild(addText2);
  addP.appendChild(document.createElement("br"));
  addP.appendChild(document.createElement("br"));
  addP.appendChild(addText3);
  elem.appendChild(addP);
};

var gis = data[0]["gis"]
var rdbms = data[0]["prog_rdbms"]
addSkills(gis,rdbms,"gis","rdbms");
function addSkills(gis,rdbms,idGis,idRDBMS){
  var gisCode = "";
  var rdbmsCode ="";

  for (var i=0;i<gis.length;i++){
    gisCode += `<span class="inline-block bg-gray-300 px-3 py-1 rounded text-sm"><i class="fa-solid fa-check-double"></i> ${gis[i]}</span>`;
  }
  for (var i=0;i<rdbms.length;i++){
    rdbmsCode += `<li class="text-sm"><i class="fa-solid fa-angles-right"></i> ${rdbms[i]}</li>`;
  }

  document.getElementById(idGis).innerHTML = gisCode;
  document.getElementById(idRDBMS).innerHTML = rdbmsCode;
};

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

index = 1;
projectHTML += `<ul class="timeline timeline-compact timeline-vertical" >`;
for (var key in projects) {
  if (!projects.hasOwnProperty(key)) continue;
  var obj = projects[key];
  curPosition = obj["position"];
  curComp = obj["company"];
  curDateFrom = obj["from"];
  curDateTo = obj["to"];
  curLink = obj["link"];
  curDesc = obj["desc"];
  curLocation = obj["location"];
  curName = obj["name"];

  if (index == 1) {
    projectHTML += `
    <li class="timelineProject">
        <div class="timeline-start text-end mr-4 ">
          <div class="text-sm lato-light-italic">${curDateTo}</div>
        </div>
        <div class="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" transform="rotate(0)" style="color: var(--color4)">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="timeline-end ml-4">
          <p class="text-m playfair-bold-1">${curPosition} at <a href="${curLink}" target="_blank" class="hover:underline" style="color: var(--color5)">${curComp}</a></p>
          <p class="lato-regular text-sm">${curDesc}</p>
        </div>
      <hr />
    </li>
    `;
  }
  else {
    projectHTML += `
    <li class="timelineProject">
      <hr />
        <div class="timeline-start text-end mr-4 ">
              <div class="text-sm lato-light-italic">${curDateTo}</div>
        </div>
        <div class="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" transform="rotate(0)" style="color: var(--color4)">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="timeline-end ml-4">
          <p class="text-m playfair-bold-1">${curPosition} at <a href="${curLink}" target="_blank" class="hover:underline" style="color: var(--color5)">${curComp}</a></p>
          <p class="lato-regular text-sm">${curDesc}</p>
        </div>
      <hr />
    </li>
    `;
  }
index++;
}
projectHTML += `</ul>`;
document.getElementById("allProjects").innerHTML = projectHTML;
//--------------------------------------------------------------------------------


//modifying the DOM for contacts
addContact()
function addContact(){
  var contactCode = "";
  contactCode = `
      <li class="flex items-center gap-2"><i class="fa-solid fa-location-dot" style="color: var(--color5);"></i> <span>${data[0]["profile"]["address"]}</span></li>
      <li class="flex items-center gap-2"><a href="mailto:${data[0]["profile"]["email"]}" class="hover:underline" style="color: var(--color5);"> <i class="fa-solid fa-at"></i></a> <span>${data[0]["profile"]["email"]}</span></li>
      <li class="flex items-center gap-2"><a href="https://wa.me/${data[0]["profile"]["phone"]}" class="hover:underline" style="color: var(--color5);"><i class="fa-solid fa-square-phone"></i></a> <span>${data[0]["profile"]["phone"]}</span></li>
  `;
  document.getElementById("contact").innerHTML = contactCode;
};



//------------------------map location----------------------

const map = L.map('map').setView([57.504479, -1.784585], 7);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([57.504479, -1.784585]).addTo(map)
    .bindPopup('Hey there!');
