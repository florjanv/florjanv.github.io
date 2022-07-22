const url = ['https://vz09n0.deta.dev/exp/get','https://vz09n0.deta.dev/edu/get','https://vz09n0.deta.dev/skills/get','https://vz09n0.deta.dev/proj/get'];
updateExperience();
updateSkills();
updateEdu();
async function getAPI(url) {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function updateExperience() {
    let exp = await getAPI(url[0]);
    let projects = await getAPI(url[3]);
    let html = '';
    exp.forEach(e => {
        let projHTML='';
        let htmlSegment = `
            <div class="col-md-6 col-sm-6">
                <div class="box">
                    <div class="box-title">
                    <div class="row justify-content-between">
                        <div class="col-md-6 col-sm-6">
                        <h3 class="titleExp">${e.job_position}</h3>
                        </div>
                        <div class="col-md-4 col-sm-4">
                        <p class="text-end date"><small>${e.date_from} - ${e.date_to}</small></p>
                        </div>
                    </div>
                    <div class="row justify-content-between">
                        <div class="col-md-6 col-sm-6">
                        <h4><a href="${e.website}" target="_blank" class="employeExp">${e.employer}</a></h4>
                        </div>
                        <div class="col-md-4 col-sm-4">
                        <p class="text-end location"><i class="fas fa-map-marker-alt"></i><small> Tirana, Albania</small></p>
                        </div>
                    </div>
                    </div>
                    <div class="box-text">
                    <span class="fs-6 fw-bold">Main Projects:</span>
                    `;
        //update projects
        let projHTML2 = "";
        projects.forEach(proj =>{
            if (e.id === proj.exp_id){
                projHTML2 += `
                <li class="list-group-item listItems">
                <div class="d-flex w-100 justify-content-between">
                    <h6>${proj.proj_name}</h6>
                    <small class="text-end date">${proj.date_from} - ${proj.date_to}</small>
                </div>
                </li>`;
            };
        projHTML = '<ul class="list-group list-group-flush">'+projHTML2+'</ul>';

        });
        html += htmlSegment+projHTML+"</div></div></div>";
    });


    //update DOM
    let expRow = document.querySelector('.experienceRow');
    expRow.innerHTML = html;
}

async function updateSkills() {
    let skills = await getAPI(url[2]);
    let html2 = '';
    //sort skills by percentage
    skills = sortArrayOfObjects(skills,'percentage');
    skills.forEach(skill => {
        let htmlSegment = `
        <div class="skill-item mb-4">
            <h3 class="fs-6 thirdColor">${skill.skill_type}</h3>
            <div class="progress" style="height: 5px;">
                <div class="progress-bar" role="progressbar" style="width: ${skill.percentage}%;" aria-valuenow="${skill.percentage}" aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
        </div>`;

        html2 += htmlSegment;
    });
    //update DOM
    let expRow = document.querySelector('.skillColumn');
    expRow.innerHTML = html2;
}

async function updateEdu(){
    let edu = await getAPI(url[1]);
    let html = '';
    edu.forEach(education =>{
        html += `
        <div class="row justify-content-between">
            <div class="col-8">
                <h6><a href="${education.website}" target="_blank" class="link-secondary">${education.ed_type} in ${education.ed_title} - ${education.ed_place}</a></h6>
            </div>
            <div class="col-2">
                <small class="text-end date">${education.date_from} - ${education.date_to}</small>
            </div>
        </div>`;
    });
    let eduRow = document.querySelector('.eduContainer');
    eduRow.innerHTML = html;
}


function sortArrayOfObjects(arrayToSort, key) {
    function compareObjects(a, b) {
        if (a[key] > b[key])
            return -1;
        if (a[key] < b[key])
            return 1;
        return 0;
    }

    return arrayToSort.sort(compareObjects);
}

// Lets create the map

var map = L.map('map').setView([61.3284, -5.3215], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.3284, 1.8181]).addTo(map)
    .bindPopup('Im here.')
    .openPopup();

L.control.scale().addTo(map);
