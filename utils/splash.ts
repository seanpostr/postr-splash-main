const STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
import { validate } from "./form";  

export function requireSocialLink(element: string) {

  var divSocial = document.getElementById("div_social") as any;
  var socialInputs = divSocial.getElementsByTagName('input');
  var socialExists = false;

  for (let i = 0; i < socialInputs.length; i++) {
    if (socialInputs[i].value != '') {
      socialExists = true;
    }
  }
  
  if (socialExists == false) {
    (document.getElementById("x") as any).required = true;
    (document.getElementById("instagram") as any).required = true;
    (document.getElementById("tiktok") as any).required = true;
    (document.getElementById("threads") as any).required = true;
    (document.getElementById("facebook") as any).required = true;
    (document.getElementById("youtube") as any).required = true;
  }
  else {
    (document.getElementById("x") as any).required = false;
    (document.getElementById("instagram") as any).required = false;
    (document.getElementById("tiktok") as any).required = false;
    (document.getElementById("threads") as any).required = false;
    (document.getElementById("facebook") as any).required = false;
    (document.getElementById("youtube") as any).required = false;
  }
}

export function showAdvertiser(form: any) {  
  var checkboxAdvertiser = document.getElementById("rb_advertiser") as any;
  var checkboxInfluencer = document.getElementById("rb_influencer") as any;
  var checkboxRecruiter = document.getElementById("rb_recruiter") as any;
  var divInquiries = document.getElementById("div_inquiries") as HTMLElement;
  var divInfo = document.getElementById("div_info") as any;
  var divAdvertiser = document.getElementById("div_advertiser") as any;
  var divMore = document.getElementById("div_more") as any;  
  
  if (checkboxAdvertiser.checked === true) {
    divAdvertiser.style.removeProperty("display");    

    if (divInquiries.style.display !== "none") {
      divInquiries.setAttribute("style", "display: none !important");
    }

    if (divInfo.style.display === "none") {
      divInfo.style.removeProperty("display");
    }

    if (divMore.style.display === "none") {
      divMore.style.removeProperty("display");
    }
  } else {
    divAdvertiser.setAttribute("style", "display: none !important");

    if (
      divInquiries.style.display === "none" &&      
      checkboxInfluencer.checked === false &&
      checkboxRecruiter.checked === false
    ) {
      divInquiries.style.removeProperty("display");      
    }

    if (
      divInfo.style.display !== "none" &&
      divMore.style.display !== "none" &&
      checkboxInfluencer.checked === false &&
      checkboxRecruiter.checked === false
    ) {
      divInfo.setAttribute("style", "display: none !important");
      divMore.setAttribute("style", "display: none !important");
    }
  }   
  validate(form);  
}

export function showInfluencer(form: any) {
  var checkboxInfluencer = document.getElementById("rb_influencer") as any;
  var checkboxAdvertiser = document.getElementById("rb_advertiser") as any;
  var checkboxRecruiter = document.getElementById("rb_recruiter") as any;
  var divInquiries = document.getElementById("div_inquiries") as any;
  var divInfo = document.getElementById("div_info") as any;
  var divAddress = document.getElementById("div_address") as any;
  var divGender = document.getElementById("div_gender") as any;
  var divBirthday = document.getElementById("div_birthday") as any;
  var divSocial = document.getElementById("div_social") as any;
  var divMore = document.getElementById("div_more") as any;

  if (checkboxInfluencer.checked === true) {
    divSocial.style.removeProperty("display");

    if (divInquiries.style.display !== "none") {
      divInquiries.setAttribute("style", "display: none !important");
    }

    if (divMore.style.display !== "none") {
      divMore.setAttribute("style", "display: none !important");
    }

    if (divInfo.style.display === "none") {
      divInfo.style.removeProperty("display");
    }

    if (divGender.style.display === "none") {
      divGender.style.removeProperty("display");
    }

    if (divBirthday.style.display === "none") {
      divBirthday.style.removeProperty("display");
    }

    if (divAddress.style.display === "none") {
      divAddress.style.removeProperty("display");
    }

    if (divMore.style.display === "none") {
      divMore.style.removeProperty("display");
    }
  } else {
    divSocial.setAttribute("style", "display: none !important");

    if (
      divInquiries.style.display === "none" &&      
      checkboxAdvertiser.checked === false &&
      checkboxRecruiter.checked === false
    ) {
      divInquiries.style.removeProperty("display");      
    }

    if (
      divInfo.style.display !== "none" &&
      checkboxAdvertiser.checked === false &&
      checkboxRecruiter.checked === false
    ) {
      divInfo.setAttribute("style", "display: none !important");
      divMore.setAttribute("style", "display: none !important");
    }

    if (
      divGender.style.display !== "none" &&
      checkboxRecruiter.checked === false
    ) {
      divGender.setAttribute("style", "display: none !important");
    }

    if (
      divBirthday.style.display !== "none" &&
      checkboxRecruiter.checked === false
    ) {
      divBirthday.setAttribute("style", "display: none !important");
    }

    if (
      divAddress.style.display !== "none" &&
      checkboxRecruiter.checked === false
    ) {
      divAddress.setAttribute("style", "display: none !important");
    }
  }
  validate(form);
}

export function showRecruiter(form: any) {
  var checkboxRecruiter = document.getElementById("rb_recruiter") as any;
  var checkboxAdvertiser = document.getElementById("rb_advertiser") as any;
  var checkboxInfluencer = document.getElementById("rb_influencer") as any;
  var divInquiries = document.getElementById("div_inquiries") as any;
  var divInfo = document.getElementById("div_info") as any;
  var divAddress = document.getElementById("div_address") as any;
  var divGender = document.getElementById("div_gender") as any;
  var divBirthday = document.getElementById("div_birthday") as any;
  var divMore = document.getElementById("div_more") as any;

  if (checkboxRecruiter.checked === true) {
    if (divInquiries.style.display !== "none") {
      divInquiries.setAttribute("style", "display: none !important");
    }

    if (divMore.style.display !== "none") {
      divMore.setAttribute("style", "display: none !important");
    }

    if (divInfo.style.display === "none") {
      divInfo.style.removeProperty("display");
    }

    if (divGender.style.display === "none") {
      divGender.style.removeProperty("display");
    }

    if (divBirthday.style.display === "none") {
      divBirthday.style.removeProperty("display");
    }

    if (divAddress.style.display === "none") {
      divAddress.style.removeProperty("display");
    }

    if (divMore.style.display === "none") {
      divMore.style.removeProperty("display");
    }
  } else {
    if (
      divInquiries.style.display === "none" &&      
      checkboxAdvertiser.checked === false &&
      checkboxInfluencer.checked === false
    ) {
      divInquiries.style.removeProperty("display");      
    }

    if (
      divInfo.style.display !== "none" &&
      checkboxAdvertiser.checked === false &&
      checkboxInfluencer.checked === false
    ) {
      divInfo.setAttribute("style", "display: none !important");
      divMore.setAttribute("style", "display: none !important");
    }

    if (
      divGender.style.display !== "none" &&
      checkboxInfluencer.checked === false
    ) {
      divGender.setAttribute("style", "display: none !important");
    }

    if (
      divBirthday.style.display !== "none" &&
      checkboxInfluencer.checked === false
    ) {
      divBirthday.setAttribute("style", "display: none !important");
    }

    if (
      divAddress.style.display !== "none" &&
      checkboxInfluencer.checked === false
    ) {
      divAddress.setAttribute("style", "display: none !important");
    }
  }
  validate(form);
}

export function populateStates() {
  var state1 = document.getElementById("sel_state1") as any;
  var state2 = document.getElementById("sel_state2") as any;

  state1.options[0] = new Option("Select state");
  state1.options[0].disabled = true;
  state2.options[0] = new Option("Select state");
  state2.options[0].disabled = true;

  for (var i = 0; i < STATES.length; i++) {
    state1.options[i + 1] = new Option(STATES[i]);
    state2.options[i + 1] = new Option(STATES[i]);
  }
}
