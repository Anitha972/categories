<template>
  <div class="nav">
    <div class="search">
      <input type=text v-model="enteredValue"/> 
      <button @click="navigateToCards()" id="button">Search</button>
    </div>  
    <router-link to="/display-categories" class="links">Categories</router-link>
    <router-link to="/material-cards" class="links">Cards</router-link> 
    <img :src="getImage" class="dark" @click="updateTheme()"/>
  </div> 
</template>


<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'NavigationBar',
  data() {
    return {
      enteredValue: '',
    };
  },
  computed: {
    ...mapState(['theme']),
    getImage() {
      if (this.theme === 'dark') {
        return require('../assets/sun.png');
      }
      return require('../assets/moon.png');
    }
  },
  methods: {
    ...mapActions(['setState']),
    // The selected theme of application will be stored in state.
    updateTheme() {
      if (this.theme === 'dark') {
        this.setState({
          stateName: 'theme',
          value: 'light'
        })
      } else {
        this.setState({
          stateName: 'theme',
          value: 'dark'
        })
      }
    },
    navigateToCards() {
      this.setState({
        stateName: 'selectedCard',
        value: this.enteredValue,
      })
      this.$router.push('/material-cards');
    }
  }
}
</script>

<style>
.nav {
  position: fixed;
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: rgb(73, 161, 161);
  padding: 30px;
  top: 0px;
  left: 0px;
  width: 97%;
}
.search {
  padding-right: 250px;
}
input {
  margin-right: 10px;
  padding: 7px 32px;
  border-radius: 5px;
}
button {
  padding: 8px 24px;
  border: none;
  border-radius: 5px;
  background-color: rgb(243, 243, 127);
}
.links {
  font-family: Roboto,Arial,sans-serif;
  text-decoration: none;
  padding-right: 50px;
  font-size: 20px;
  font-weight: 600px;
  color: white;
}
.links:hover {
  color:yellow;
}
.dark {
  width: 30px;
  height: 30px;
}
</style>
