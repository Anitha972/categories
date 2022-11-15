<template>
  <div class="nav">
    <div class="search">
      <input 
        class="input-box"
        type="text"
        v-model="enteredValue" 
        @keyup="collectMatchedValues()" 
        @blur="hideSuggestionsBlock()"
        @focus="()=>{
          this.showSuggestions=true;
        }"
      /> 
       <div class="suggestions-block" v-if="showSuggestions && matchedValues.length">
          <ul>
            <li
             class="suggested-item"
             v-for="(item, index) in matchedValues" :key="index"
             @mousedown="updateInputValue(item)"
            >
              {{item}}
            </li>
          </ul> 
       </div>
      <button @click="navigateToCards()" class="submit-button">Search</button>
    </div>  
    <router-link to="/display-categories" class="links">Categories</router-link>
    <router-link to="/material-cards" class="links">Cards</router-link> 
    <img :src="getImage" class="image" @click="updateTheme()"/>
  </div> 
</template>


<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'NavigationBar',
  data() {
    return {
      enteredValue: '',
      matchedValues: [],
      showSuggestions: false,
    };
  },
  computed: {
    ...mapState(['theme', 'cards']),
    getImage() {
      if (this.theme === 'dark') {
        return require('../assets/sun.png');
      }
      return require('../assets/moon.png');
    }
  },
  methods: {
    ...mapActions(['setState']),
    // The selected theme of the application will be stored in state.
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
    // Fetches all the matched card titles
    collectMatchedValues() {
      this.matchedValues=[];
      if (this.enteredValue) {
        this.matchedValues = this.cards.filter((value)=>value.startsWith(this.enteredValue));
      }
    },
    updateInputValue(item) {
      this.enteredValue = item;
      this.showSuggestions = false;
      this.matchedValues = [];
    },
    hideSuggestionsBlock() {
      this.showSuggestions = false;
    },
    navigateToCards() {
      this.setState({
        stateName: 'selectedCard',
        value: this.enteredValue,
      })
      if (this.cards.includes(this.enteredValue)) {
        this.$router.push('/material-cards');
      }  
    }
  }
}
</script>
