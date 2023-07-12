function addwork_experienceField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("work_experienceField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter Here")
    // newNode.setAttribute('rows',3);
    let work_experienceOb = document.getElementById("work_experience");
    let work_experienceAddButtonOb = document.getElementById("work_experience_button");
    work_experienceOb.insertBefore(newNode, work_experienceAddButtonOb);

}
function addacademic_qualificationField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("academic_qualificationField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter Here")
    // newNode.setAttribute('rows',3);
    let academic_qualificationOb = document.getElementById("academic_qualification");
    let academic_qualificationAddButtonOb = document.getElementById("academic_qualification_button");
    academic_qualificationOb.insertBefore(newNode, academic_qualificationAddButtonOb);
}
function add_education()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("educationField");
    newNode.classList.add("mt-2");   
    newNode.setAttribute("placeholder","Enter Here")
    // newNode.setAttribute("rows",3);
    let educationOb = document.getElementById("education");
    let educationOb_button = document.getElementById("education_button");
    educationOb.insertBefore(newNode,educationOb_button);
}
function add_skills()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter Here");
    let skillsOb = document.getElementById("skills");
    let skillsObButton = document.getElementById("skills_button");
    skillsOb.insertBefore(newNode,skillsObButton);
}
function add_projects()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("projectField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter Here");
    let projectOb = document.getElementById("projects");
    let projectButtonob = document.getElementById("projectbutton");
    projectOb.insertBefore(newNode,projectButtonob);
}
// Generate Resume
function generateresume()
{
    document.getElementById("resume_form1").style.display="none";
    document.getElementById("resume_form2").style.display="none";
    // document.getElementById("resume_template1").style.display = "block";
    document.getElementById("template_buttons").style.display="block";
}
function form1hide()
{
    let numberlength = document.getElementById("contactField").value;
    let length1 = numberlength.length; 
    let gmail_character = document.getElementById("gmailField").value;
    if (length1 == "10")
    {
        if (gmail_character.includes("@") && gmail_character.includes("."))
        {
            document.getElementById("resume_form1").style.display="none";
            document.getElementById("resume_form2").style.display="block";
        }
        else
        {
            alert("Please Check Your Entered Email!!!")
        }
    }
    else
    {
        alert("Please Check your Entered Contact Number!!!");
    }
}
// Print Resume
function printresume1()
{
    document.getElementsByClassName("hide1")[0].style.display="none";
    window.print();
}
function printresume2()
{
    document.getElementsByClassName("hide2")[0].style.display="none";
    window.print();
}
function printresume3()
{
    document.getElementsByClassName("hide3")[0].style.display="none";
    window.print();
}
function printresume4()
{
    document.getElementsByClassName("hide4")[0].style.display="none";
    window.print();
}
function template1()
{
    // For Name : 
    let firstnameField = document.getElementById("firstnameField").value;
    let lastnameField = document.getElementById("lastnameField").value;
    let nameT1 = document.getElementById("nameT1")
    nameT1.innerHTML = firstnameField + " " +lastnameField;
    // For Contact Info : 
    document.getElementById("contactT1").innerHTML = document.getElementById("contactField").value;
    // Address
    document.getElementById("addressT1").innerHTML = document.getElementById("addressField").value;
    // LinkdIn
    document.getElementById("linkT1").innerHTML = document.getElementById("linkedinField").value;
    // Gmail
    document.getElementById("gmailT1").innerHTML = document.getElementById("gmailField").value;
    // Objective
    document.getElementById("objectiveT1").innerHTML = document.getElementById("objectiveField").value;
    // Work Experience
    let work_experiences = document.getElementsByClassName("work_experienceField");
    let str = "";
    for (let i of work_experiences)
    {
        str = str + `<li> ${i.value} </li>`;
    }
    document.getElementById("work_experienceT1").innerHTML = str;
    let academic_qualifications = document.getElementsByClassName("academic_qualificationField");
    let str1 = "";
    for (var i of academic_qualifications)
    {
        str1 = str1 + `<li> ${i.value} </li>`;
    }
    document.getElementById("academic_qualificationT1").innerHTML = str1;
    let educations = document.getElementsByClassName("educationField");
    let str2 = "";
    for (var i of educations)
    {
        str2 = str2 + `<li> ${i.value} </li>`;
    }
    document.getElementById("educationT1").innerHTML = str2;
    let skills_element = document.getElementsByClassName("skillField");
    let str3 = "";
    for (var i of skills_element)
    {
        str3 = str3 + `<li> ${i.value} </li>`;
    }
    document.getElementById("skillsT1").innerHTML = str3;
    let projects_element = document.getElementsByClassName("projectField");
    let str4 = "";
    for (var i of projects_element)
    {
        str4 = str4 + `<li> ${i.value} </li>`;
    }
    document.getElementById("projectT1").innerHTML = str4;
    document.getElementById("resume_form1").style.display="none";
    document.getElementById("resume_form2").style.display="none";
    document.getElementById("resume_template1").style.display = "block";
    document.getElementById("navbar1").style.display="none";
    document.getElementById("footer").style.display="none";
    document.getElementById("heading").style.display="none";
    document.getElementById("template_buttons").style.display="none";
}
function template2()
{
    document.getElementById("nameT2").innerHTML = document.getElementById("firstnameField").value + " " + document.getElementById("lastnameField").value
    document.getElementById("objectiveT2").innerHTML = document.getElementById("objectiveField").value
    let work_experiences = document.getElementsByClassName("work_experienceField");
    let str1 = "";
    for (var i of work_experiences )
    {
        str1 = str1 + `<li> ${i.value} </li>`;
    }
    document.getElementById("work_experienceT2").innerHTML = str1;
    let educations = document.getElementsByClassName("educationField");
    let str2 = "";
    console.log(educations)
    for (i in educations)
    {
        if (educations[i].value)
        {
            str2 = str2 + `<li> ${educations[i].value} </li>`;
        }
    }
    document.getElementById("educationT2").innerHTML = str2;
    let academic_qualifications = document.getElementsByClassName("academic_qualificationField");
    let str3 = "";
    for (var i of academic_qualifications)
    {
        str3 = str3 + `<li> ${i.value} </li>`
    }
    document.getElementById("academic_qualificationT2").innerHTML = str3;
    // Setting the profile picture
    let image = document.getElementById("profile_picture").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    // Set the image to the template
    reader.onloadend = function() {
        document.getElementById("profile_image").src = reader.result;
    };
    document.getElementById("gmailT2").innerHTML = document.getElementById("gmailField").value
    document.getElementById("fbT2").innerHTML = document.getElementById("facebookField").value;
    document.getElementById("insT2").innerHTML = document.getElementById("instagramField").value;
    document.getElementById("linkT2").innerHTML = document.getElementById("linkedinField").value;
    document.getElementById("contactT2").innerHTML = document.getElementById("contactField").value;
    document.getElementById("addressT2").innerHTML = document.getElementById("addressField").value;
    let skills_variable = document.getElementsByClassName("skillField");
    let str4 = "";
    for (var i of skills_variable)
    {
        str4 = str4 + `<li> ${i.value} </li>`
    }
    document.getElementById("skillsT2").innerHTML = str4;
    let projects_values = document.getElementsByClassName("projectField");
    let str5 = "";
    for (var i of projects_values)
    {
        str5 = str5 + `<li> ${i.value} </li>`
    }
    document.getElementById("projectsT2").innerHTML = str5;
    document.getElementById("resume_form1").style.display="none";
    document.getElementById("resume_form2").style.display="none";
    document.getElementById("resume_template2").style.display = "block";
    document.getElementById("navbar1").style.display="none";
    document.getElementById("footer").style.display="none";
    document.getElementById("heading").style.display="none";
    document.getElementById("template_buttons").style.display="none";
}
function template3()
{
    document.getElementById("nameT3").innerHTML = document.getElementById("firstnameField").value + " " + document.getElementById("lastnameField").value
    document.getElementById("phoneT3").innerHTML = document.getElementById("contactField").value
    document.getElementById("addressT3").innerHTML = document.getElementById("addressField").value
    document.getElementById("gmailT3").innerHTML = document.getElementById("gmailField").value
    document.getElementById("objectiveT3").innerHTML = `<p> ${document.getElementById("objectiveField").value} </p>`
    // Skills
    let skill_variable_3 = document.getElementsByClassName("skillField")
    let str1 = ""
    for (var i of skill_variable_3)
    {
        str1 = str1 + `<li> ${i.value} </li>` 
    }
    document.getElementById("skillsT3").innerHTML = str1
    // Projects
    let projects_T3 = document.getElementsByClassName("projectField")
    let str2 = ""
    for (var i of projects_T3)
    {
        str2 = str2 + `<li> ${i.value} </li>`
    }
    document.getElementById("projectsT3").innerHTML = str2
    // Links
    document.getElementById("facebookT3").innerHTML = document.getElementById("facebookField").value
    document.getElementById("linkedinT3").innerHTML = document.getElementById("linkedinField").value
    document.getElementById("twitterT3").innerHTML = document.getElementById("twitterField").value
    // Work Experience
    let work_experiences_T3 = document.getElementsByClassName("work_experienceField")
    let str3 = ""
    for (var i of work_experiences_T3)
    {
        str3 = str3 + `<li> ${i.value} </li>`
    }
    document.getElementById("work_experienceT3").innerHTML = str3
    // Academic Qualification
    let academic_qualifications_T3 = document.getElementsByClassName("academic_qualificationField")
    let str4 = ""
    for (var i of academic_qualifications_T3)
    {
        str4 = str4 + `<li> ${i.value} </li>`
    }
    document.getElementById("academic_qualificationT3").innerHTML = str4
    // Educations
    let education_valuesT3 = document.getElementsByClassName("educationField")
    let str5 = ""
    for (var i of education_valuesT3)
    {
        str5 = str5 + `<li> ${i.value} </li>`
    }
    document.getElementById("educationT3").innerHTML = str5
    document.getElementById("resume_template_3").style.display = "block"
    document.getElementById("footer").style.display = "none"
    document.getElementById("navbar1").style.display = "none"
    document.getElementById("heading").style.display = "none"
    document.getElementById("template_buttons").style.display = "none"
}
function template4()
{
    // // Setting the profile picture
    // let image = document.getElementById("profile_picture").files[0];
    // let reader = new FileReader();
    // reader.readAsDataURL(image);
    // // Set the image to the template
    // reader.onloadend = function() {
    //     document.getElementById("image_T4").src = reader.result;
    // };
    document.getElementById("firstnameT4").innerHTML = document.getElementById("firstnameField").value
    document.getElementById("lastnameT4").innerHTML = document.getElementById("lastnameField").value
    document.getElementById("objectiveT4").innerHTML = document.getElementById("objectiveField").value
    document.getElementById("addressT4").innerHTML = document.getElementById("addressField").value
    document.getElementById("phoneT4").innerHTML = document.getElementById("contactField").value
    document.getElementById("gmailT4").innerHTML = document.getElementById("gmailField").value
    document.getElementById("facebookT4").innerHTML = document.getElementById("facebookField").value
    document.getElementById("twitterT4").innerHTML = document.getElementById("twitterField").value
    document.getElementById("linkedinT4").innerHTML = document.getElementById("linkedinField").value
    let work_experiencesT4 = document.getElementsByClassName("work_experienceField")
    let str1 = ""
    for (var i of work_experiencesT4)
    {
        str1 = str1 + `<li> ${i.value} </li>`
    }
    document.getElementById("work_experienceT4").innerHTML = str1
    let education_valuesT4 = document.getElementsByClassName("educationField")
    let str2 = ""
    for (var i of education_valuesT4)
    {
        str2 = str2 + `<li> ${i.value} </li>`
    }
    document.getElementById("educationT4").innerHTML = str2
    let skill_variable_4 = document.getElementsByClassName("skillField")
    let str3 = ""
    for (var i of skill_variable_4)
    {
        str3 = str3 + `<li> ${i.value} </li>`
    }
    document.getElementById("skillsT4").innerHTML = str3
    let projects_T4 = document.getElementsByClassName("projectField")
    let str4 = ""
    for (var i of projects_T4)
    {
        str4 = str4 + `<li> ${i.value} </li>`
    }
    document.getElementById("projectT4").innerHTML = str4
    document.getElementById("resume_template_4").style.display = "block"
    document.getElementById("heading").style.display = "none"
    document.getElementById("footer").style.display = "none"
    document.getElementById("navbar1").style.display = "none"
    document.getElementById("template_buttons").style.display = "none"
}
