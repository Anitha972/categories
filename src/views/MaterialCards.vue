<template>
    <div class="cards">
        <div v-for="(item, index) in cardsData" :key="index">
            <div 
               class="card" 
               :id="[selectedCard==item.title?'highlight':'']"
               :class="[theme==='dark'?'dark-mode':'']"
            >
                <p 
                  class="header" 
                  :class="[selectedCard==item.title?'highlight-header':'']"
                >
                    {{ item.title }}
                </p>
                <p class="description">{{ item.body }}</p>
                <button class="delete-button" @click="deleteCard(index)">
                    Delete
                </button>
            </div>       
        </div>
    </div>    
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'MaterialCards',
  computed: {
    ...mapState(['selectedCard', 'theme', 'cards']),
  },
  data() {
    return {
        cardsData: [
            {
                title: 'v-text',
                body: 'Updates the element text content.',
            },
            {
                title: 'v-html',
                body: 'Updates the element innerHTML.',
            },
            {
                title: 'v-show',
                body: 'Toggle the elements visibility based on the truthy-ness of the expression value.',
            },
        ],
    };
  },
  methods: {
    ...mapActions(['setState']),
    // Remove the deleted card from the array and filter the updated list.
    deleteCard(index) {
        this.cardsData.splice(index, 1);
        const cardsTitle = [];
        for(let item of this.cardsData) {
            cardsTitle.push(item.title);
        }
        this.setState({
          stateName: 'cards',
          value: cardsTitle
        })
    }
  },
}
</script>
