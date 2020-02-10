<template>
    <v-app id="intro">
        <!-- splash screen -->
    <div class="intro-splash" v-show="isActive" @click="isActive = !isActive">
    </div> 
    <div class="intro-logo"> 
         <h1 class="intro-logo-bubble" @click="info=!info" v-show="info">
              Bubble
         </h1>
        <p v-show="info">
         
            <router-link to="/login" class="intro-logo-link">
             acesse >>  
            </router-link> 
           
        </p>
        <p class="intro-logo-info"
          v-show="!info">
           Planeje sua rotina com a Bubble List edite,
           exclua e compartilhe suas atividades a qualquer tempo.
           gerencie o trabalho da sua equipe de maneira prática e visual.
           <br>
           <br>
            <span class="logo-info-voltar" @click="info=!info"> Voltar </span> 
        </p>
        
        

    </div>

    </v-app>
</template>

<script>
export default {
  data: () => ({
    isActive:true,
    info:true
  })
}
</script>



<style scoped>

  @import url('https://fonts.googleapis.com/css?family=Public+Sans:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Amatic+SC&display=swap');

  
/* 
  * {
    font-family: 'Public Sans', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
  } */

  #intro{
      background-color: #50435D;
      background-size: cover;
      overflow: hidden;
  }
  .intro-logo{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position:fixed;
      width: 100%;
      height: 100%;
  }

  .intro-logo-info{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color:white;
      font-family: 'Public Sans', sans-serif;
      font-size: 1.1rem;
      margin: 0px 15px 100px 15px;
  }

  .logo-info-voltar{
    color: white;
    font-family: 'Amatic SC', cursive;
    font-size: 3rem;
    font-weight: normal;
  }

  .intro-logo-bubble{
    color: white;
    font-family: 'Amatic SC', cursive;
    font-size: 7rem;
    font-weight: normal;
    cursor:pointer;

  }


  .intro-logo-link{
    font-family: 'Public Sans', sans-serif;
    color:white;
    font-size: 1.2rem;
    text-decoration: none;
  }


  /* Splash screen */
 
 .intro-splash{
  display:flex;
  position: absolute;
  background-image: url('../assets/splash.svg');
  background-position: center;
  width: 100%;
  height: 100%;
  background-color:white;
  z-index:1;
  animation-name: fade-out;
  animation-direction:normal;
  animation-duration: 2s;
  animation-iteration-count:initial;
  animation-fill-mode: forwards;

} 

 @keyframes fade-out {
  0%   { opacity: 1;}
  25%  { opacity: 1;}
  50%  { opacity: 1;}
  75%  { opacity: 1;}
  100% { opacity: 0;
         } 
}


</style>
