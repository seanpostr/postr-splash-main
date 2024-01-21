<template>
  <div class="container-sm pt-0 ps-md-5 pe-md-5 pb-3 overflow-hidden">
    <div class="row">
      <div class="d-flex flex-column pb-3" style="height: 100dvh;">
        <div class="mt-auto d-flex justify-content-center justify-content-sm-start">
          <h1 id="first" class="text-center typewriter typed typed-first"></h1>
        </div>
        <div class="d-flex justify-content-center mt-2">
          <h1 id="second" class="text-center typewriter typed-second"></h1>
        </div>
        <div id="third" class="d-flex justify-content-center justify-content-sm-end overflow-hidden" style="opacity: 0">
          <img title="hero-logo" class="text-center hero-logo" src="/images/png/Postr_Logo_Flat.png" />
        </div>
        <div ID="fourth" class="mt-auto" style="opacity: 0">  
          <h2 class="text-center mb-5">Coming Soon</h2>        
          <div class="row d-flex pt-3 pb-3 ps-1 pe-1 countdown">
            <div class="col d-flex flex-column p-0">
              <div class="row m-0">
                <div class="col">
                  <h1 id="months" class="text-center">00</h1>
                </div>
                <div class="col-1 p-0">
                  <h1>:</h1>
                </div>
              </div> 
              <div class="row m-0">   
                <div class="col-11 d-flex justify-content-center">        
                  <span>Months</span>
                </div>
              </div>
            </div>
            <div class="col d-flex flex-column p-0">
              <div class="row m-0">
                <div class="col">
                  <h1 id="days" class="text-center">00</h1>
                </div>
                <div class="col-1 p-0">
                  <h1>:</h1>
                </div>
              </div> 
              <div class="row m-0">   
                <div class="col-11 d-flex justify-content-center">        
                  <span>Days</span>
                </div>
              </div>
            </div>
            <div class="col d-flex flex-column p-0">
              <div class="row m-0">
                <div class="col">
                  <h1 id="hours" class="text-center">00</h1>
                </div>
                <div class="col-1 p-0">
                  <h1 class="">:</h1>
                </div>
              </div> 
              <div class="row m-0">   
                <div class="col-11 d-flex justify-content-center">        
                  <span>Hours</span>
                </div>
              </div>
            </div>
            <div class="col d-flex flex-column p-0">
              <div class="row m-0">
                <div class="col">
                  <h1 id="minutes" class="text-center">00</h1>
                </div>
                <div class="col-1 p-0">
                  <h1>:</h1>
                </div>
              </div> 
              <div class="row m-0">   
                <div class="col-11 d-flex justify-content-center">        
                  <span>Minutes</span>
                </div>
              </div>
            </div>
            <div class="col d-flex flex-column p-0">
              <div class="row m-0">
                <div class="col-11">
                  <h1 id="seconds" class="text-center">00</h1>
                </div>
              </div> 
              <div class="row m-0">   
                <div class="col-11 d-flex justify-content-center">        
                  <span>Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <form id="form" @submit.prevent="submit" class="col application pt-4 pb-4" autocomplete="off">
        <div class="row">
          <div class="col text-center text-break">
            <h1 style="color: #69778d">Pre-Register below to be apart of an all new experience</h1>
            <p>(limited access)</p>
          </div>
        </div>
        <div class="row gap-2 pt-4 pb-5">
          <div class="col text-center">
            <h5>Select all that apply</h5> 
          </div>   
          <div class="d-flex flex-column flex-sm-row flex-wrap flex-md-nowrap gap-2 justify-content-center">
            <div>
              <input
                id="rb_advertiser"
                name="rb_advertiser"
                type="checkbox"
                class="accounts"
                v-model="form.advertiser" 
                @click="showAdvertiser(form)"
              />
              <label for="rb_advertiser" class="d-flex justify-content-center">Advertiser</label>
            </div>
            <div>
              <input
                id="rb_influencer"
                name="rb_influencer"
                type="checkbox"
                class="accounts"
                v-model="form.influencer" 
                @click="showInfluencer(form)"
              />
              <label for="rb_influencer" class="d-flex justify-content-center">Influencer</label>
            </div>
            <div>
              <input
                id="rb_recruiter"
                name="rb_recruiter"
                type="checkbox"
                class="accounts"
                v-model="form.recruiter" 
                @click="showRecruiter(form)"
              />
              <label for="rb_recruiter" class="d-flex justify-content-center">Recruiter</label>
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-center mb-4">
          <div class="col d-flex flex-column gap-3" style="max-width: 350px">
            <h5>What is your email?</h5>
            <div class="textOnInput">
              <label>Email Address</label>
              <input
                id="email"
                name="em_email"
                type="email"
                class="form-control" 
                v-model="form.email" 
                required                             
              />
            </div>
          </div>
        </div>
        <div
          id="div_info"
          class="row d-flex justify-content-center"
          style="display: none !important"
        >
          <div class="col d-flex flex-column gap-4" style="max-width: 350px">
            <div class="col d-flex flex-column gap-3">
              <h5>What is your first name?</h5>
              <div class="textOnInput">
                <label>First Name</label>
                <input
                  id="firstName"
                  name="tb_firstName"
                  type="text"
                  class="form-control"
                  v-model="form.firstName"                  
                />
              </div>
            </div>
            <div class="col d-flex flex-column gap-3">
              <h5>What is your last name?</h5>
              <div class="textOnInput">
                <label>Last Name</label>
                <input
                  id="lastName"
                  name="tb_lastName"
                  type="text"
                  class="form-control"
                  v-model="form.lastName"                  
                />
              </div>
            </div>
            <div
              id="div_gender"
              class="col d-flex flex-column gap-3"
              style="display: none !important"
            >
              <h5>What is your gender?</h5>
              <div class="textOnInput">
                <label>Gender</label>
                <select id="gender" name="sel_gender" class="form-control" v-model="form.gender">
                  <option value="" disabled selected>Select gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
              </div>
            </div>
            <div
              id="div_birthday"
              class="col d-flex flex-column gap-3"
              style="display: none !important"
            >
              <h5>What is your birthday?</h5>
              <div class="textOnInput">
                <label>Birthday</label>
                <input
                id="birthday"
                  name="tb_birthday"
                  type="date"
                  class="form-control"
                  v-model="form.birthday"
                />
              </div>
            </div>            
            <div class="col d-flex flex-column gap-3">
              <h5>What is your phone number?</h5>
              <div class="textOnInput">
                <label>Phone Number</label>
                <input
                  id="phone"
                  name="tel_phoneNumber"
                  type="tel"
                  class="form-control"
                  v-model="form.phone"
                />
              </div>
            </div>
            <div
              id="div_address"
              class="col d-flex flex-column gap-3"
              style="display: none !important"
            >
              <h5>What is your address?</h5>
              <div class="textOnInput">
                <label>Address</label>
                <input
                  id="address"
                  name="tb_yourAddress"
                  type="text"
                  class="form-control"
                  v-model="form.address"
                />
              </div>
              <div class="textOnInput">
                <label>Address2</label>
                <input
                  id="address2"
                  name="tb_yourAddress2"
                  type="text"
                  class="form-control" 
                  v-model="form.address2"
                />
              </div>
              <div class="textOnInput">
                <label>City</label>
                <input
                  id="city"
                  name="tb_yourCity"
                  type="text"
                  class="form-control"
                  v-model="form.city"
                />
              </div>
              <div class="row gy-3">
                <div class="col-auto">
                  <div class="textOnInput">
                    <label>State</label>
                    <select                      
                      name="sel_yourState"
                      id="sel_state1"
                      class="form-control"
                      v-model="form.state"
                    ></select>
                  </div>
                </div>
                <div class="col">
                  <div class="textOnInput">
                    <label>Zip</label>
                    <input
                      id="zip"
                      name="tb_yourZip"
                      type="text"
                      class="form-control"
                      v-model="form.zip"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="div_social" class="row d-flex justify-content-center mt-4" style="display: none !important">
          <div class="col d-flex flex-column gap-3" style="max-width: 350px">
            <h5>Enter your social links</h5>
            <p style="margin-top: -.75rem; line-height: .5rem; color: #6d798b; font-size: 14px;">(Enter at least 1)</p>
            <div class="textOnInput">
              <label>X</label>
              <input id="x" type="text" class="form-control pr-35" v-model="form.x" @change="requireSocialLink('x')"/>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                />
              </svg>
            </div>
            <div class="textOnInput">
              <label>Instagram</label>
              <input id="instagram" type="text" class="form-control pr-35" v-model="form.instagram" @change="requireSocialLink('x')"/>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </div>
            <div class="textOnInput">
              <label>Tiktok</label>
              <input id="tiktok" type="text" class="form-control pr-35" v-model="form.tiktok" @change="requireSocialLink('x')"/>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                />
              </svg>
            </div>
            <div class="textOnInput">
              <label>Threads</label>
              <input id="threads" type="text" class="form-control pr-35" v-model="form.threads" @change="requireSocialLink('x')"/>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z"
                />
              </svg>
            </div>
            <div class="textOnInput">
              <label>Facebook</label>
              <input id="facebook" type="text" class="form-control pr-35" v-model="form.facebook" @change="requireSocialLink('x')"/>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
            </div>
            <div class="textOnInput">
              <label>Youtube</label>
              <input id="youtube" type="text" class="form-control pr-35" v-model="form.youtube" @change="requireSocialLink('x')"/>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div id="div_advertiser" class="row d-flex justify-content-center mt-4" style="display: none !important">
          <div class="col d-flex flex-column gap-3" style="max-width: 350px">
            <h5>What is the name of your business?</h5>
            <div class="textOnInput">
              <label>Business Name</label>
              <input
                id="businessName"
                name="tb_businessName"
                type="text"
                class="form-control"
                v-model="form.businessName"
              />
            </div>
            <h5>What is the address of your business?</h5>
            <div class="textOnInput">
              <label>Address</label>
              <input
                id="businessAddress"
                name="tb_businessAddress"
                type="text"
                class="form-control"
                v-model="form.businessAddress"
              />
            </div>
            <div class="textOnInput">
              <label>Address2</label>
              <input 
                id="businessAddress2"
                name="tb_businessAddress2"
                type="text"
                class="form-control"
                v-model="form.businessAddress2"
              />
            </div>
            <div class="textOnInput">
              <label>City</label>
              <input
                id="businessCity"
                name="tb_businessCity"
                type="text"
                class="form-control"
                v-model="form.businessCity"
              />
            </div>
            <div class="row gy-3">
              <div class="col-auto">
                <div class="textOnInput">
                  <label>State</label>
                  <select
                    name="sel_businessState"
                    id="sel_state2"
                    class="form-control"
                    v-model="form.businessState"
                  ></select>
                </div>
              </div>
              <div class="col">
                <div class="textOnInput">
                  <label>Zip</label>
                  <input
                    id="businessZip"
                    name="tb_businessZip"
                    type="text"
                    class="form-control"
                    v-model="form.businessZip"
                  />
                </div>
              </div>
            </div>
            <h5>What is the website of your business?</h5>
            <div class="textOnInput">
              <label>Business Website</label>
              <input
                name="tb_businessWebsite"
                type="text"
                class="form-control pr-35"
                v-model="form.businessWebsite"
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                />
              </svg>
            </div>
          </div>
          <div class="row d-flex justify-content-center mt-3">
            <div class="col d-flex flex-column gap-3" style="max-width: 350px">
              <h5>Enter your business social links</h5>
              <div class="textOnInput">
                <label>X</label>
                <input type="text" class="form-control pr-35" v-model="form.businessX"/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  />
                </svg>
              </div>
              <div class="textOnInput">
                <label>Instagram</label>
                <input type="text" class="form-control pr-35" v-model="form.businessInstagram"/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </div>
              <div class="textOnInput">
                <label>Tiktok</label>
                <input type="text" class="form-control pr-35" v-model="form.businessTiktok"/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                  />
                </svg>
              </div>
              <div class="textOnInput">
                <label>Threads</label>
                <input type="text" class="form-control pr-35" v-model="form.businessThreads"/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z"
                  />
                </svg>
              </div>
              <div class="textOnInput">
                <label>Facebook</label>
                <input type="text" class="form-control pr-35" v-model="form.businessFacebook"/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  />
                </svg>
              </div>
              <div class="textOnInput">
                <label>Youtube</label>
                <input type="text" class="form-control pr-35" v-model="form.businessYoutube"/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path
                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div id="div_inquiries" class="row d-flex justify-content-center">
          <div class="col d-flex flex-column gap-3" style="max-width: 350px">
            <h5>General Inquiries</h5>
            <div class="textOnInput">
              <label>Subject</label>
              <input
                id="inquiries"
                name="tb_subject"
                type="text"
                class="form-control"
                v-model="form.subject"  
                required              
              />
            </div>
            <div class="textOnInput">
              <label>Message</label>
              <textarea
                id="message"
                class="form-control"
                style="height: 250px; resize: none; padding: 5px !important"
                v-model="form.message" 
                required               
              ></textarea>
            </div>
          </div>
        </div>
        <div id="div_more" class="row d-flex justify-content-center mt-4" style="display: none !important">
          <div class="col d-flex flex-column gap-3" style="max-width: 350px">
            <h5>Is there anything else we should know?</h5>
            <div id="div_message" class="textOnInput">
              <label>Message</label>
              <textarea class="form-control" style="height: 150px; resize: none; padding: 5px !important" v-model="form.message2"></textarea>
            </div>
            <div id="div_updates" class="d-flex text-center gap-2">
              <input id="cb_updates" name="cb_updates" type="checkbox" v-model="form.updates"/>
              <label for="cb_updates" style="color: #6d798b">Yes, send me updates on Postr</label>
            </div>            
          </div>
        </div>
        <div class="row d-flex justify-content-center mt-4">
          <div class="col d-flex flex-column gap-3" style="max-width: 350px">
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
    <div class="row mt-4">
      <div class="col d-flex justify-content-center justify-content-sm-start">
        <img class="footer-logo" src="/images/png/Postr_Logo_Flat.png" />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-start">
        <p class="text-white">postr.com</p>
      </div>
      <div class="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end text-white">
        <p class="text-white text-end">Miami, FL</p>          
      </div>
    </div>
    <div class="row"> 
      <div class="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-start">
        <p style="font-size: 0.6rem; font-weight: 200; color: rgb(194, 194, 194)" class="mt-3">
          &copy; 2023 Postr. All Rights Reserved.
        </p>
      </div>
      <div class="col-12 col-sm-6 d-flex gap-1 justify-content-center justify-content-sm-end footer-svg">        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path
            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
          />
        </svg> 
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { updateCountdown } from "~/utils/timer";

onMounted(() => {
  let intervalId: NodeJS.Timeout;
  intervalId = setInterval(() => {
    if (!updateCountdown()) {
      if (intervalId) clearInterval(intervalId);
    }
  }, 1000);    

  typeWriter();
  populateStates();   
});

</script>

<script lang="ts">
export default {
  data() {
    return {
      form: {
        advertiser: false,
        influencer: false,
        recruiter: false,
        email: '',
        firstName: '',
        lastName: '',
        gender: '',
        birthday: '',
        phone: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        x: '',
        instagram: '',
        tiktok: '',
        threads: '',
        facebook: '',
        youtube: '',
        businessName: '',
        businessAddress: '',
        businessAddress2: '',
        businessCity: '',
        businessState: '',
        businessZip: '',
        businessWebsite: '',
        businessX: '',
        businessInstagram: '',
        businessTiktok: '',
        businessThreads: '',
        businessFacebook: '',
        businessYoutube: '',
        subject: '',
        message: '',
        message2: '',
        updates: false,
      },
    }
  },
  methods: {
    async submit() {          
      submit(this.form);
      
    },
  }
}
</script>