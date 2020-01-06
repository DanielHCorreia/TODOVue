<template>
  <v-app id="login">
    <v-form  v-model="valid">
      <v-container style="d-flex justify-center align-center">
        <v-row>
          <v-col cols="8" xs="4" style="margin: 0 auto; margin-top: 50%" v-if="naoLogado">
            <v-card :elevation="10" id="form">
              <p class="text-center">Acesse com seu email</p>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              <div class="d-flex flex-row-reverse">
                <v-btn rounded small right @click="naoLogado = !naoLogado">Ir</v-btn>
              </div>
            </v-card>
          </v-col>

          <v-col cols="8" xs="4" style="margin: 0 auto; margin-top: 50%" v-else>
            <v-card :elevation="10" id="form">
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
              <small class="mt-4">Não é cadastrado? Clique aqui.</small>
              <div class="d-flex flex-row-reverse">
                <v-btn rounded small right @click="naoLogado = !naoLogado">Ir</v-btn>
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
  #login {
    background-color: blueviolet;
  }

  #form {
    background-color: white;
    padding: 10px;
  }

  .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: purple;
  }

  .theme--light.v-btn {
    color: white;
  }
</style>
