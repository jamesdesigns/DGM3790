<template>
  <div id="app">  
  <v-layout row>
      <v-flex xs12>
      <v-card>
        <v-toolbar color="light-blue" dark>
          <v-toolbar-title>Custom Components</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
  
        <v-list two-line subheader>
          <v-subheader inset><app-header></app-header></v-subheader>
          <v-divider inset></v-divider>
         <div class="container">
            <span class="details"><app-server-details></app-server-details></span>
          </div>

      <v-list-tile
            class="table"
            v-for="item in items"
            :key="item.title"
            avatar
            @click="next"
          >

            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title><app-servers>Status: </app-servers> </v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="blue lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider inset></v-divider>

          <v-subheader inset><app-footer></app-footer></v-subheader>

          <v-list-tile
            v-for="item in items2"
            :key="item.title"
            avatar
            @click="next"
          >
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="white lighten-1" @click="next">info</v-icon>
              </v-btn>
            </v-list-tile-action>

          </v-list-tile>
        </v-list>

      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>
<script>
import Header from './components/Header'
import Servers from './components/Servers'
import ServerDetails from './components/ServerDetails'
import Footer from './components/Footer'

export default {
  name: 'app',

data () {
      return {
        items: [
          { icon: 'desktop_windows', iconClass: 'lighten-1 blue--text', title: 'Server #1', subtitle: 'Update' },
          { icon: 'desktop_windows', iconClass: 'lighten-1 blue--text', title: 'Server #2', subtitle: 'Update' },
          { icon: 'desktop_windows', iconClass: 'lighten-1 blue--text', title: 'Server #3', subtitle: 'Update' },
          { icon: 'desktop_windows', iconClass: 'lighten-1 blue--text', title: 'Server #4', subtitle: 'Update' },
          { icon: 'desktop_windows', iconClass: 'lighten-1 blue--text', title: 'Server #5', subtitle: 'Update' }
        ]
      }
    },
  methods: {
        next() {
         // this.status = "Server now updating...";
      }
    },

  components: {
    'app-header': Header,
    'app-servers': Servers,
    'app-server-details': ServerDetails,
    'app-footer': Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left:5%;
  margin-right:5%;
}

ul { 
  margin-top:20px;
  width: 50%;
  float: left;
}
li {
    padding: 1%;
    list-style-type: none;
}
p {
    padding-top: 2%;
    float:left;
}
.table {
  width: 50%;
}
.container {
  display: block;
  width:50%;
  float:right;
}
.details {
  float:right;
  padding-right:35%;
}


</style>
