<template>
  <v-sheet
    height="100%"
    class="overflow-hidden"
    style="position: relative;"
  >
    
<v-toolbar 
     
      scroll-target="#scrolling-techniques" dense height="60px">
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-toolbar-title class="title" >{{nome}} List</v-toolbar-title>

</v-toolbar>
   

    <v-navigation-drawer
      v-model="drawer"
      app
      left
    >
    
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{nome}}</v-list-item-title> 
        </v-list-item-content>
        <v-icon @click="drawer = !drawer"> mdi-close </v-icon>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense class="menu">

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>


<script>
export default {
    data () {
      return {
        nome:"Fulano",
        drawer: null,
        items: [
          { title: 'Meus dados', icon: 'mdi-account' },
          { title: 'Privacidade', icon: 'mdi-lock' },
          { title: 'Calendário', icon: 'mdi-calendar-month' },
        ],
      }
    },
  }
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css?family=Amatic+SC&display=swap');

.title{
  margin-left: 8vh;
  font-family: 'Amatic SC', cursive !important;
}

.v-application--is-ltr .v-toolbar__content>.v-btn.v-btn--icon:first-child+.v-toolbar__title, .v-application--is-ltr .v-toolbar__extension>.v-btn.v-btn--icon:first-child+.v-toolbar__title {
     padding-left: 0px;
}

.menu{
  margin-top:10vh;
}

.v-application .headline, .v-application .title {
     line-height: 6rem;
     font-family: 'Amatic SC'!important;
     font-weight: bold;
     font-size:1.5rem !important;
     letter-spacing: 0.3025em!important;
}

.v-sheet {
    border-radius: 1px;
    height: 50px!important;
    position:inherit;
}
</style>