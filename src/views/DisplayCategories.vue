<template>
  <div :class="[theme==='dark'?'dark-mode table':'table']">
    <Spinner v-if="!tableData.length"/>
    <table v-else>
      <tr>
        <th v-for="(item, index) in tableHeadings" :key="index">
          {{ item }}
        </th> 
      </tr> 
      <tr v-for="(obj, index) in tableData" :key="index">
        <td v-for="(item, index) in tableHeadings" :key="index">
          {{ obj[item] }}
        </td>
      </tr>  
    </table> 
  </div>
</template>

<script>9
import { mapState, mapActions } from 'vuex';
import Spinner from '../components/Spinner.vue';

export default {
  name: 'DisplayCategories',
  components: {
    Spinner,
  },
  computed: {
    ...mapState(['tableHeadings', 'tableData', 'theme']),
  },
  methods: {
    ...mapActions(['getCategories']),
    async getDetails() {
      await this.getCategories();
    },
  },
  created() {
    this.getDetails();
  }
}
</script>

