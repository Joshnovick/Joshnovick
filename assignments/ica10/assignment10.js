// Fetching JSON file

async function populate() {

    const requestURL = 'assignment.json';
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const companyText = await response.text();
    const company = JSON.parse(companyText);
  
    populateHeader(company);
    populateEmployees(company);
  
}

// Populating Header

function populateHeader(obj) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.companyName;
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = `Website: ${obj.website}`;
    header.appendChild(myPara);
}

// Populating Section

function populateEmployees(obj) {
    const section = document.querySelector('section');
    const employees = obj.employees;
  
    for (const employee of employees) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myPara4 = document.createElement('p');
        const myPara5 = document.createElement('p');
        const myList = document.createElement('ul');
    
        myH2.textContent = employee.firstName;
        myPara1.textContent = `Department: ${employee.department}`;
        myPara2.textContent = `Designation: ${employee.designation}`;
        myPara3.textContent = `Salary: ${employee.salary}`;
        myPara4.textContent = `Raise Eligible: ${employee.raiseEligible}`;
        myPara5.textContent = `Working from Home: ${employee.wfh}`;

        //if (employees["raiseEligible"] = true) {
          //  const raise = Math.round(employee.salary*.10);
           // employee.replace(employee.salary,raise);
       // }
  
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
    
        section.appendChild(myArticle);
    }
}

populate();
