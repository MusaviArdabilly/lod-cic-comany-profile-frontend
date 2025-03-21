<template>
  <ServiceLayout
    :service="data" >
  </ServiceLayout>
</template>

<script>
  import ServiceLayout from '@/components/ServiceLayout.vue';
  
  import axios from 'axios';

  export default {
    components: { ServiceLayout },
    data() {
      return {
        data: {}
      } 
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          const servicePath = this.$route.params.serviceName;
          const BASE_URL = 'https://cms.cic.lodemo.id';
          const response = await axios.get(`${BASE_URL}/api/service-2s?pLevel&filters[path][$contains]=${servicePath}`);
  
          const data = response.data.data[0];

          console.log('data', data)
  
          if (data) {
            this.data = data;
          } else (
            console.warn('No data available')
          )
        } catch (error) {
          console.warn(error)
        }
      }
    }
  }
</script>