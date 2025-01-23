<template>
  <ServiceLayout
    :mode="mode"
    :service="data" >
  </ServiceLayout>
</template>

<script>
  import ServiceLayout from '@/components/ServiceLayout.vue';

  import { services } from '@/mocks/service';
  import axios from 'axios';

  export default {
    components: { ServiceLayout },
    data() {
      return {
        mode: 0,
        data: {}
      } 
    },
    mounted() {
      this.bindData();
    },
    watch: {
      '$route.params.serviceName': 'bindData'
    },
    methods: {
      bindData() {
        const selectedService = services.find(item => item.path === this.$route.params.serviceName);
        this.data = {...selectedService}
      }
    }
  }
</script>