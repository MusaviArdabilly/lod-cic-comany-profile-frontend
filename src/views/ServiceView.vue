<template>
  <ServiceLayout
    :service="data" >
  </ServiceLayout>
</template>

<script>
  import ServiceLayout from '@/components/ServiceLayout.vue';

  // import { services } from '@/mocks/service';
  import axios from 'axios';

  export default {
    components: { ServiceLayout },
    data() {
      return {
        data: {}
      } 
    },
    mounted() {
      // this.bindData();
      this.fetchData();
    },
    watch: {
      // '$route.params.serviceName': 'bindData'
    },
    methods: {
      // bindData() {
      //   const selectedService = services.find(item => item.path === this.$route.params.serviceName);
      //   this.data = {...selectedService}
      // }
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