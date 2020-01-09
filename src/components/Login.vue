<template>
  <v-app id="login">
    <v-form  v-model="valid">
      <v-container style="d-flex justify-center align-center">
        <v-row>
          <v-col cols="8" xs="4" class="login-box" v-if="naoLogado">
            <v-card :elevation="10" class="login-box-form">
              <p class="text-center">Acesse com seu email</p>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              <div class="d-flex flex-row-reverse">
                <v-btn rounded small @click="naoLogado = !naoLogado">Ir</v-btn>
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
              ></v-text-field>
              <v-text-field
                v-model="senha"
                :append-icon="mostrar ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="senhaRule"
                :type="mostrar ? 'text' : 'password'"
                name="senha"
                label="Senha"
                required
                @click:append="mostrar = !mostrar"
              ></v-text-field>
              <div class="d-flex flex-row-reverse">
                <v-btn rounded small @click="naoLogado = !naoLogado">Ir</v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    mostrar: false,
    senha: '',
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
    background-repeat: no-repeat;
  }

  .login-box {
    margin: 0 auto;
    margin-top: 50%;
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

</style>
