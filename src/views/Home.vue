<template>


  <div class="main-content">

   
    <div class="main-content__body">

  <div class="container">
    <!-- <header class="jumbotron"> -->
      <!-- <h3>{{c>ontent}}</h3 -->
      <div id="app">
        
        <!-- <apexchart type="pie" width="380" :options="chartOptions" :series="series"></apexchart> -->
        <!-- <vue-easy-pie-chart :percent="30"></vue-easy-pie-chart> -->
        <h5 align="center">API ACCESS</h5>
    <Plotly v-if="loaded"
    :data="pageViewsByCategoryData"
    :layout="layout"
    :display-mode-bar="false" />
      
      </div>
    <!-- </header> -->
  </div>
    </div>
    </div>
</template>
//  <script src='//cdnjs.cloudflare.com/ajax/libs/vue/2.1.10/vue.min.js'></script>
//     <script src='//unpkg.com/vue-chartjs@2.6.0/dist/vue-chartjs.full.min.js'></script>
//     <script src='//cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.js'></script>
//     <script src='//unpkg.com/hchs-vue-charts@1.2.8'></script>
//     <script >'use strict';

//       Vue.use(VueCharts);
//       var app = new Vue({
//         el: '#app',
//         data: function data() {
//           return {
//             dataentry: null,
//             datalabel: null,
//             labels: ['React', 'Vanilla JS', 'JQuery', 'VueJS'],
//             dataset: [5, 10, 15, 25]
//           };
//         },
//         methods: {
//           addData: function addData() {
//             this.dataset.push(this.dataentry);
//             this.labels.push(this.datalabel);
//             this.datalabel = '';
//             this.dataentry = '';
//           }
//         }
//       });
//     </script>
<script>
import UserService from '../services/user.service';
import VueEasyPieChart from 'vue-easy-pie-chart'
import 'vue-easy-pie-chart/dist/vue-easy-pie-chart.css'
import { Plotly } from 'vue-plotly'
  export default {
    name: 'home',
    components: { Plotly },
    data() {
        return {
            loaded: false, 
            pageViewsByCategoryData: null,
            layout: {
                autosize: false, 
                width:500,
                barmode:'stack'
            }
        }
    },
    async created() {
      UserService.getPiedata().then(
        response=>{
          this.pageViewsByCategoryData = [
            {
                values: [],
                labels: [], 
                type: 'pie'
            }
        ];

        for(let cat in response.data) {
            this.pageViewsByCategoryData[0].labels.push(cat);
            this.pageViewsByCategoryData[0].values.push(response.data[cat]);
        }
        }
      )
        // let resp = await fetch("https://api.jsonbin.io/b/5e2b4f673d75894195de48ff/1");
        // let data = await resp.json();
        // let pageViewsByCategory = data.pageViewsByCategory;
        
        // setup data for line chart

        // setup data for pie chart
        

        // this.visitorsData = [
        //     { 
        //         x: [], 
        //         y: [],
        //         name:'New Users',
        //         type:'bar'
        //     },
        //     { 
        //         x: [], 
        //         y: [],
        //         name:'Old Users',
        //         type:'bar'
        //     }
        // ]

        // setup data for stacked bar
      

        this.loaded = true;
    }
}
// export default {
//   name: 'Home',
//   components:{ VueEasyPieChart },
//   data() {
//     return {
//       content: ''
      
//     };
//   },
//   mounted() {
//     UserService.getPublicContent().then(
//       response => {
//         this.content = response.data;
//       },
//       error => {
//         this.content =
//           (error.response && error.response.data) ||
//           error.message ||
//           error.toString();
//       }
//     );
//   }
// };

</script>
