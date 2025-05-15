<template>
  <ServiceLayout
    :service="data" >
    :apiBaseUrl="API_BASE_URL"
  </ServiceLayout>
</template>

<script>
  import ServiceLayout from '@/components/ServiceLayout.vue';

  import axios from 'axios';

  export default {
    components: { ServiceLayout },
    data() {
      return {
			  API_BASE_URL: import.meta.env.VITE_BACKEND_BASE_URL,
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
          const response = await axios.get(`${this.API_BASE_URL}/api/services?filters[path][$contains]=${servicePath}&populate=deep,10`);
  
          const data = response.data.data[0].attributes;

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