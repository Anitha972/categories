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

<script>
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

<style scoped>
table, th, td {
  font-family: Roboto,Arial,sans-serif;
  border: 1px solid rgb(95, 95, 92);
  border-collapse: collapse;
}
th {
  position: sticky;
  background-color:rgb(139, 206, 133);
  top: 95px;
  padding: 15px;
}
td {
  padding: 5px;
}
.table {
  margin-top: 100px;
}
.dark-mode {
  background-color: black;
  color: white;
}
</style>
