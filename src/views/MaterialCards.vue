<template>
    <div class="cards">
        <div v-for="(item, index) in cardsData" :key="index">
            <div 
               v-if="item.display" 
               class="card" 
               :class="[selectedCard==item.title?'highlight':'']"
               :id="[theme==='dark'?'dark-mode':'']"
            >
                <p 
                  class="header" 
                  :class="[selectedCard==item.title?'highlight-header':'']"
                >
                    {{ item.title }}
                </p>
                <p class="body">{{ item.body }}</p>
                <button class="button" @click="deleteCard(item)">
                    Delete
                </button>
            </div>       
        </div>
    </div>    
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'MaterialCards',
  computed: {
    ...mapState(['selectedCard', 'theme']),
  },
  data() {
    return {
        cardsData: [
            {
                title: 'v-text',
                body: 'Updates the element text content.',
                display: true,
            },
            {
                title: 'v-html',
                body: 'Updates the element innerHTML.',
                display: true,
            },
            {
                title: 'v-show',
                body: 'Toggle the elements visibility based on the truthy-ness of the expression value.',
                display: true,
            },
        ],
    };
  },
  methods: {
    deleteCard(item) {
        item.display = false;
    }
  }
}
</script>

<style>
.cards {
    font-family: Georgia, serif;
    margin-top: 100px;
    margin-left: 20px;
}
.card {
    width: 70%;
    height: 180px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border: 2px rgb(192, 188, 188) solid;
    margin-bottom: 30px;
}
.header {
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid rgb(192, 188, 188);
    padding-left: 30px;
    font-size: 20px;
    font-weight: 600px;
}
.body {
    padding-left: 30px;
    padding-top: 20px;
    font-size: 16px;
}
.button {
    background-color:rgb(133, 133, 185);
    padding: 12px 30px;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    border: none;
    margin-left: 30px;
    margin-top: 40px;
}
.highlight {
    border: 3px solid red;
}
.highlight-header {
    border-bottom: 3px solid red;
}
p {
    margin: 0px;
}
#dark-mode {
  background-color: black;
  color: white;
}
</style>