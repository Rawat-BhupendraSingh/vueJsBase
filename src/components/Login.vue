<template>
<div class="container py-2">
        <div class="row">
            <div class="col-md-12 col-lg-12 col-12 mx-auto py-5">
                <div class=" mx-auto login-wrapper">
                    <div class="card no-border login-card custom-shadow">
                        <div class="card-header text-center px-3 py-3 no-border"> 
                            <h3 class="mb-0">GoCred Login</h3>
                            <p>Welcome! Let's get started !</p>
                            </div>
                            <div class="card-body px-3 py-3">
                                <form v-on:submit.prevent>
                                    <div class="form-group mb-4">
                                        <input type="text" class="form-control shadow" name="username" 
                                        placeholder="User Name" v-bind="email" required>
                                    </div>
                                    <div class="form-group mb-4">
                                        <input type="password" class="form-control shadow" name="password" 
                                        placeholder="Password" v-bind="password"  required>
                                    </div>
                                    <button type="submit" @click="Loginfunction(email,password)" class="w-100 btn btn-primary">Login
                                    </button>
                                    <div class="login-checkbox mb-3">
                                        <span class="clearfix">
                                            <span class="float-left">
                                                <label class="position-relative checkbox-container">
                                                    <input class="mr-2 align-middle" type="checkbox" name="remember" checked="checked">Keep me signed in
                                                    <span class="checkmark position-absolute"></span>
                                                </label>
                                            </span>
                                            <span class="float-right">
                                                <label class="forgot-password">
                                                    <a href="#">Forgot Password?</a>
                                                </label>
                                            </span>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
// import {Login} from './../constant/backend_url.js'
export default {
    
    props:{ 'Loginfunction':Function},
  data() {
    return {
      "email":'',
      "password":''
    }; 
  },
   methods:{
    // login:async function(){
    //     try{
    //   const res= await fetch('https://jsonplaceholder.typicode.com/todos/1',{
    //         // body:JSON.stringify(this.data),
    //         // method:"POST"
    //     })
    //       let data = await res.json();
    //   alert(JSON.stringify(data))
    //     }
    //     catch(err){
    //         alert(err)
    //     }
    },
   };
// };
</script>


<style lang="scss">
@font-face {
    font-family: 'roboto-regular';
    src: url('../assets/fonts/roboto-regular.eot');
    src: url('../assets/fonts/roboto-regular.woff') format('woff'), 
       url('../assets/fonts/roboto-regular.ttf') format('truetype'), 
       url('../assets/fonts/roboto-regular.svg') format('svg'),
       url('../assets/fonts/roboto-regular.woff2')format('woff2');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'roboto-bold';
    src: url('../assets/fonts/roboto-bold.eot');
    src: url('../assets/fonts/roboto-bold.woff') format('woff'), 
       url('../assets/fonts/roboto-bold.ttf') format('truetype'), 
       url('../assets/fonts/roboto-bold.svg') format('svg'),
       url('../assets/fonts/roboto-bold.woff2')format('woff2');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'roboto-medium';
    src: url('../assets/fonts/roboto-medium.eot');
    src: url('../assets/fonts/roboto-medium.woff') format('woff'), 
       url('../assets/fonts/roboto-medium.ttf') format('truetype'), 
       url('../assets/fonts/roboto-medium.svg') format('svg'),
       url('../assets/fonts/roboto-medium.woff2')format('woff2');
    font-weight: normal;
    font-style: normal;
}
h1,h2,h3,h4,h5,h6,p{
    margin: 0;
    padding: 0;
}
.card-header{
    background: #fff;
}
.form-group {
    margin-bottom: 2rem;
}
input.form-control{
    padding:2px 15px;
    border-radius: 6px;
    height: 47px;
    border: 1px solid #EAEAEA;
}
.login-wrapper{
    max-width: 350px;
}
.login-wrapper .card{
    padding: 24px 30px;
    border-radius: 10px;
}
.login-wrapper .btn{
    background-color: #4067F0;
    font-family: 'roboto-regular';
    padding: 8px 4px;
    font-size: 17px;
    border-radius: 8px;
}
.no-border{
    border: none;
}
.custom-shadow{
    box-shadow: 0px 0px 14px 1px rgba(190, 190, 190, 0.3) !important;
}
.checkbox-container {
    cursor: pointer;
    user-select: none;
    color:#4067F0;
    font-size: 11px;
    font-family: 'roboto-regular';
  }
  .checkbox-container .checkmark {
    width: 16px;
    height: 16px;
    background: white;
    left: 0px;
    top: 0px;
    border: 1px solid #4067F0;
    border-radius:4px;
  }
  .checkbox-container input:checked + .checkmark {
    background-color: #4067F0;
    border: 1px solid #4067F0;
  } 
  .checkbox-container input:checked + .checkmark:after {
    content: "";
    position: absolute;
    height: 6px;
    width: 9px;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
.login-wrapper .card-header h3{
    color: #000000;
    font-family: 'roboto-medium';
    font-size: 22px;
}
.login-wrapper .card-header p{
    color: #848484;
    font-family: 'roboto-regular';
    font-size: 13px;
}
.forgot-password a{
    color:#4067F0!important;
    font-size: 11px;
    font-family: 'roboto-regular';
}
.forgot-password a:hover{
    color:#4067F0;
    text-decoration-color: #4067F0;
}
input::placeholder{
    color: #cecece!important;
    font-family: 'roboto-regular';
    font-size: 14px;
    display: block;
}
.reset-card{
    max-width: 20rem;   
}
.reset-card .card{
    padding: 16px;
    border-radius: 10px;
}
.img-thumbnail{
    border:none;
    width:70px;
}
.text-content{
    font-family: 'roboto-medium';
    font-size: 14px;
    color: #727070;
}
.reset-card .card-link{
    font-family: 'roboto-regular';
    font-size: 12px;
    color: #4067F0;
}
.reset-card .card-body{
    padding: 0px 50px;
    margin-bottom:40px;
}
.reset-card .btn{
    padding: 6px;
    background-color: #4067F0;
    font-family: 'roboto-regular';
    font-size: 14px;
}
.shadow {
    box-shadow: 1px 3px 9px 1px rgba(190, 190, 190, 0.3) !important;
}
.login-checkbox {

    padding: 8px 0;
    margin: 0 !important;

}

/* media queries starts here */
@media (max-width:575.98px){
    .login-wrapper .card {
        padding: 12px;
    }
}



</style>