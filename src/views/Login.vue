<template>
  <v-app id="login">
    <v-form  v-model="valid">
      <v-container style="d-flex justify-center align-center">
        
          <v-col cols="12" xs="6" class="login-box" v-if="!naoLogado">
            <v-card :elevation="10" class="login-box-form">
              <p class="text-center">Acesse com seu email</p>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                autofocus
                color="#50435D"
              ></v-text-field>
              <div class="d-flex flex-row-reverse">
                <v-btn rounded small @click="naoLogado = !naoLogado">
                  <router-link to="/cadastro" class="link-cadastro"> Ir </router-link>
                </v-btn>
                 
              </div>
            </v-card>
          </v-col>

          <v-col cols="8" xs="4" class="login-box" v-else>
            <v-card :elevation="10" class="login-box-form">
              <p class="text-center">Entrar na conta</p>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                color="#50435D"
              ></v-text-field>
              <v-text-field
                v-model="senha"
                :append-icon="mostrar ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="senhaRule"
                :type="mostrar ? 'text' : 'password'"
                name="senha"
                label="Senha"
                required
                color="#50435D"
                @click:append="mostrar = !mostrar"
              ></v-text-field>
              <div class="d-flex flex-row-reverse">
                <v-btn rounded small @click="naoLogado = !naoLogado">Ir</v-btn>
              </div>
            </v-card>
          </v-col>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
/*  setTimeout(function() { console.log("setTimeout: Ja passou 1 segundo!");
                      this.isActive= false }, 5000);  */
export default {
  data: () => ({
    senha: '',
    email:'',
    valid:'',
    naoLogado: false,
    emailRules: [
      v => !!v || 'Digite seu e-mail',
      v => /.+@+.+/.test(v) || 'E-mail deve ser válido'
    ],
    senhaRule: [
      v => !!v || 'Digite sua senha'
    ]
  
  })
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Public+Sans:400,700&display=swap');

  

  * {
    font-family: 'Public Sans', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
  }

  

  #login {
    background-color: #50435D;
    background-image: url('../assets/Celular_Android_–_12.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: bottom;
  }

  .login-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 30vh;
  }

  .login-box-form {
    background-color: white;
    padding: 10px;
  }

  .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: #50435D;
  }

  .theme--light.v-btn {
    color: white;
  }

  .link-cadastro{
    color:white;
    font-size: .75rem;
    text-decoration: none;
  }
</style>
