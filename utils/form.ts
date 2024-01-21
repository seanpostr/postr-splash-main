export function validate(form: any) {  
  var checkboxAdvertiser = document.getElementById("rb_advertiser") as any;
  var checkboxInfluencer = document.getElementById("rb_influencer") as any;
  var checkboxRecruiter = document.getElementById("rb_recruiter") as any;  
  
  if (checkboxAdvertiser.checked || checkboxInfluencer.checked || checkboxRecruiter.checked) {  
    form.subject = '';
    form.message = '';

    (document.getElementById("inquiries") as any).required = false;
    (document.getElementById("message") as any).required = false;
    (document.getElementById("firstName") as any).required = true;
    (document.getElementById("lastName") as any).required = true;
    (document.getElementById("phone") as any).required = true;    

    if (checkboxAdvertiser.checked) {
      (document.getElementById("businessName") as any).required = true;
      (document.getElementById("businessAddress") as any).required = true;      
      (document.getElementById("businessCity") as any).required = true;
      (document.getElementById("sel_state2") as any).required = true;
      (document.getElementById("businessZip") as any).required = true;
    }
    else {
      form.businessName = '';
      form.businessAddress = '';
      form.businessAddress2 = '';
      form.businessCity = '';
      form.sel_state2 = '';
      form.businessZip = '';

      (document.getElementById("businessName") as any).required = false;
      (document.getElementById("businessAddress") as any).required = false;      
      (document.getElementById("businessCity") as any).required = false;
      (document.getElementById("sel_state2") as any).required = false;
      (document.getElementById("businessZip") as any).required = false;
    }

    if (checkboxInfluencer.checked || checkboxRecruiter.checked) {
      (document.getElementById("gender") as any).required = true;
      (document.getElementById("birthday") as any).required = true;
      (document.getElementById("address") as any).required = true;      
      (document.getElementById("city") as any).required = true;
      (document.getElementById("sel_state1") as any).required = true;
      (document.getElementById("zip") as any).required = true;
    }
    else {
      form.gender = '';
      form.birthday = '';
      form.address = '';
      form.address2 = '';
      form.city = '';
      form.sel_state1 = '';
      form.zip = '';

      (document.getElementById("gender") as any).required = false;
      (document.getElementById("birthday") as any).required = false;
      (document.getElementById("address") as any).required = false;      
      (document.getElementById("city") as any).required = false;
      (document.getElementById("sel_state1") as any).required = false;
      (document.getElementById("zip") as any).required = false;
    }

    if (checkboxInfluencer.checked) {
      (document.getElementById("x") as any).required = true;
      (document.getElementById("instagram") as any).required = true;
      (document.getElementById("tiktok") as any).required = true;
      (document.getElementById("threads") as any).required = true;
      (document.getElementById("facebook") as any).required = true;
      (document.getElementById("youtube") as any).required = true;
    }    
  }
  else {    
    form.businessName = '';
    form.businessAddress = '';
    form.businessAddress2 = '';
    form.businessCity = '';
    form.sel_state2 = '';
    form.businessZip = '';
    form.gender = '';
    form.birthday = '';
    form.address = '';
    form.address2 = '';
    form.city = '';
    form.sel_state1 = '';
    form.zip = '';
    form.message2 = '';
    form.updates = false;

    (document.getElementById("inquiries") as any).required = true;
    (document.getElementById("message") as any).required = true;
    (document.getElementById("firstName") as any).required = false;
    (document.getElementById("lastName") as any).required = false;
    (document.getElementById("phone") as any).required = false;   
    (document.getElementById("gender") as any).required = false;
    (document.getElementById("birthday") as any).required = false;
    (document.getElementById("address") as any).required = false;    
    (document.getElementById("city") as any).required = false;
    (document.getElementById("sel_state1") as any).required = false;
    (document.getElementById("zip") as any).required = false;
    (document.getElementById("businessName") as any).required = false;
    (document.getElementById("businessAddress") as any).required = false;    
    (document.getElementById("businessCity") as any).required = false;
    (document.getElementById("sel_state2") as any).required = false;
    (document.getElementById("businessZip") as any).required = false;  
  }
}

export function submit(form: any){
    // Create the new request 
    var xhr = new XMLHttpRequest();
    var url = 'https://api.hsforms.com/submissions/v3/integration/submit/44653336/caf9a469-6d58-4093-8422-69362697b62c'

    var contactType = null;
    var message = null;
    var updates = "No";
    var gender = null;

    if (form.advertiser == true) {
      contactType = "Advertiser";      
    }

    if (form.influencer == true) {
      contactType = contactType + ";Influencer";
    }

    if (form.recruiter == true) {
      contactType = contactType + ";Recruiter";
    }

    if (contactType == null) {
      message = form.message;
    }
    else {
      message = form.message2;
    }

    if (form.updates == true) {
      updates = "Yes";
    }

    if (form.gender == "1") {
      gender = "Male";
    }
    else if (form.gender == "2") {
      gender = "Female";
    }
    
    // Example request JSON:
    var data = {
      "fields": [
            {
            "objectTypeId": "0-1",
              "name": "contact_type",
              "value": `${contactType}`
            },
            {
            "objectTypeId": "0-1",
              "name": "email",
              "value": `${form.email}`
            },
            {
            "objectTypeId": "0-1",
              "name": "inquiry",
              "value": `${form.subject}`
            }, 
            {
            "objectTypeId": "0-1",
              "name": "message",
              "value": `${message}`
            },            
            {
            "objectTypeId": "0-1",
              "name": "firstname",
              "value": `${form.firstName}`
            },
            {
            "objectTypeId": "0-1",
              "name": "lastname",
              "value": `${form.lastName}`
            },
            {
            "objectTypeId": "0-1",
              "name": "gender",
              "value": `${gender}`
            },
            {
            "objectTypeId": "0-1",
              "name": "birthday",
              "value": `${form.birthday}`
            },
            {
            "objectTypeId": "0-1",
              "name": "phone",
              "value": `${form.phone}`
            },
            {
            "objectTypeId": "0-1",
              "name": "address",
              "value": `${form.address}`
            },            {
            "objectTypeId": "0-1",
              "name": "address2",
              "value": `${form.address2}`
            },
            {
            "objectTypeId": "0-1",
              "name": "city",
              "value": `${form.city}`
            },
            {
            "objectTypeId": "0-1",
              "name": "state",
              "value": `${form.state}`
            },
            {
            "objectTypeId": "0-1",
              "name": "zip",
              "value": `${form.zip}`
            },
            {
            "objectTypeId": "0-1",
              "name": "x",
              "value": `${form.x}`
            },
            {
            "objectTypeId": "0-1",
              "name": "instagram",
              "value": `${form.instagram}`
            },
            {
            "objectTypeId": "0-1",
              "name": "tiktok",
              "value": `${form.tiktok}`
            },
            {
            "objectTypeId": "0-1",
              "name": "threads",
              "value": `${form.threads}`
            },
            {
            "objectTypeId": "0-1",
              "name": "facebook",
              "value": `${form.facebook}`
            },
            {
            "objectTypeId": "0-2",
              "name": "name",
              "value": `${form.businessName}`
            },
            {
            "objectTypeId": "0-2",
              "name": "address",
              "value": `${form.businessAddress}`
            },
            {
            "objectTypeId": "0-2",
              "name": "address2",
              "value": `${form.businessAddress2}`
            },            
            {
            "objectTypeId": "0-2",
              "name": "city",
              "value": `${form.businessCity}`
            },
            {
            "objectTypeId": "0-2",
              "name": "state",
              "value": `${form.businessState}`
            },
            {
            "objectTypeId": "0-2",
              "name": "zip",
              "value": `${form.businessZip}`
            },
            {
            "objectTypeId": "0-2",
              "name": "x",
              "value": `${form.businessX}`
            },
            {
            "objectTypeId": "0-2",
              "name": "instagram",
              "value": `${form.businessInstagram}`
            },
            {
            "objectTypeId": "0-2",
              "name": "tiktok",
              "value": `${form.businessTiktok}`
            },
            {
            "objectTypeId": "0-2",
              "name": "threads",
              "value": `${form.businessThreads}`
            },
            {
            "objectTypeId": "0-2",
              "name": "facebook",
              "value": `${form.businessFacebook}`
            },
            {
            "objectTypeId": "0-2",
              "name": "youtube",
              "value": `${form.businessYoutube}`
            },
            {
            "objectTypeId": "0-1",
              "name": "updates",
              "value": `${updates}`
            }              
      ]
    };
      
    var final_data = JSON.stringify(data)

    xhr.open('POST', url);
    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) { 
            alert(xhr.responseText); // Returns a 200 response if the submission is successful.
            window.location.reload();
        } else if (xhr.readyState == 4 && xhr.status == 400){ 
            alert(xhr.responseText); // Returns a 400 error the submission is rejected.          
        } else if (xhr.readyState == 4 && xhr.status == 403){ 
            alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.           
        } else if (xhr.readyState == 4 && xhr.status == 404){ 
            alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found     
        }
       }

    // Sends the request 
    
    xhr.send(final_data)   
}