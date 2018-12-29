<template>
  <div id="app">
    <Navbar>
    </Navbar>
     <Login :Loginfunction='login'>
    </Login>
  </div>
</template>

<style lang="scss">
</style>

<script>
import {LOGIN_URL,SERVERBASEURL} from './constant/backend_url.js'
export default {
  data() {
    return {
      title: this.$store.state.token
    };
  },
  methods:{
    login:async function(mobileEmail,password){
      try{
            alert('inside');
            let body={
            mobileEmail:this.mobileEmail,
              password:this.password
            }
            alert(JSON.stringify(body))
              const res=await fetch(`${SERVERBASEURL}${LOGIN_URL}`,{
              method: 'POST',
            body: JSON.stringify(body),
            headers:{
                "Content-Type": "application/json",
            }
              })

              let data=await res.json()
              alert(JSON.stringify(data))
              this.$store.state.token=data.token;
      }
      catch(err){
             alert(err)
      }
      
    }
  }
 
};
</script>
