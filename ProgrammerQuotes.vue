<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <h1>Programmer Quotes:</h1>
        <blockquote>
          {{ status }} 
        </blockquote>
        <button @click="changeQuote">Next Quote</button>
          <footer>

          </footer>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      status: 'Someone who solves a problem you did not know you had in a way you do not understand.'
    }
  },
  methods: {
    changeQuote() {
      var quotes = [
        'Deleted code is debugged code.',
        'Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.',
        'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
        'Being a good programmer is 3% talent 97% not being distracted by the internet',
        'It works on my machine.'
      ]
      var randomNumber = Math.floor(Math.random() * (quotes.length));

        if (randomNumber <= 4 && randomNumber >= 0) {
          this.status = quotes[randomNumber];
      }
      else {
        quotes[randomNumber];
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 200%;
  margin-bottom: 50px;
}
h2 {
    margin-top: 50px;
    font-size: 200%;
    margin-bottom: 50px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
blockquote {
  width: 525px;
  padding: 50px;
  border-radius: 25px;
  background-color: #cceeff;
  font-size: 135%;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

button {
  margin-top: 20px;
  padding: 10px 25px;
  background-color: #DCDCDC;
  border-radius: 10px;
}

button:hover {
  background-color:cornflowerblue;
  color: #fff;
  font-weight: 800;
}

button:focus {outline:0;}

span {
  padding: 60px;
  border-radius: 25px;
  background-color: #cceeff;
  font-size: 235%;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
