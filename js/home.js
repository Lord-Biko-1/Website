const faqSection=document.getElementById("FAQ");
const sectionToBeActive=document.getElementById("hid");
const form=document.querySelector("#Form-logIn");
const input=document.querySelectorAll("input");
const coversec=document.querySelector(".coverSec");
const BtnSubmit=document.querySelector(".BtnSubmit");
const successResponsd=document.querySelector(".succeded");
const failedRespond=document.querySelector(".failed");
const cover=document.querySelector(".wholePage");
const homePageBtn=document.querySelector("#homeBtn");
const reloadPageBtn=document.querySelector("#refresh");
let flagForValidation=false;
const googleSheetUrl='https://script.google.com/macros/s/AKfycbyaVmEL5SQ8YjQ-Ih4Yh9S3iqcKo-7aZ4RFdNOf2fzZll9iZmzsK_ORS7gkrgplwYrVeQ/exec';

faqSection.addEventListener("click",(e)=>{

        e.preventDefault();
        console.log("fuc");
        sectionToBeActive.classList.toggle("hid");
    });
form.addEventListener("submit",(e)=>{
        BtnSubmit.disabled = true;
        e.preventDefault();

        const Name=form['form-name'].value;
        const Email=form["form-email"].value;
        const Subject=form['form-Subject'].value;
        const Text=form['form-text'].value;
        const phone=form['form-Phone'].value;
        let d=Date(Date.now());
        const date =d.toString();
        let requestBody=  new  FormData();
        requestBody.append("date",date);
        requestBody.append("name",Name);
        requestBody.append("email",Email);
        requestBody.append("phone",phone);
        requestBody.append("subject",Subject);
        requestBody.append("text",Text);

        fetch(googleSheetUrl,{method:'Post',body:requestBody})
            .then(Response=>{
                successResponsd.classList.remove("hid");
                BtnSubmit.disabled = false;
            })
            .catch(error=>{
                failedRespond.classList.remove("hid");
                BtnSubmit.disabled = true;
            })
        
    
    });
    
cover.addEventListener("click",(e)=>{
    e.preventDefault()
    cover.classList.add("hid");
});
homePageBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href="/home.html";
});
reloadPageBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.reload();
});

// Example starter JavaScript for disabling form submissions if there are invalid fields







