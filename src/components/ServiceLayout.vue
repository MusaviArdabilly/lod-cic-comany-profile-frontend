<template>

  <section class="ls ms text-sm-left text-center s-pt-xl-160 s-pt-lg-130 s-pt-md-90 s-pt-60 s-pb-xl-280 s-pb-lg-250 s-pb-md-90 s-pb-60 c-gutter-60">
		<div class="container">
			<div class="row">
				<div class="col-12 col-xl-10 offset-xl-1">
					<div class="divider-60 hidden-below-lg"></div>
					<div class="divider-30 hidden-above-lg"></div>
					<h2 class="special-heading text-sm-left text-center">
						<span class="text-capitalize">
							{{ service.data?.title }}
						</span>
					</h2>
					<div class="divider-25"></div>
					<p>
						{{ service.data?.description }}
					</p>
					<div class="divider-30 hidden-above-lg"></div>
          <div v-if="service.mode_service?.data.attributes.name === '2' || service.mode_service?.data.attributes.name === '3'" class="">
            <div class="divider-30 hidden-above-lg"></div>
  
            <div v-if="service.mode_service?.data.attributes.name === '2'"
              v-for="list in service.data?.list" class="mb-3">
              <p class="font-weight-bold mb-1">
                {{ list.title }}
              </p>
              <ul class="list-styled mt-1">
                <li v-for="(item, index) in list.items" :key="index">
                  {{ item.title }}
                </li>
              </ul>
            </div>
  
            <div v-if="service.mode_service?.data.attributes.name === '3'"
              v-for="list in service.data?.list" class="mb-3">
              <p class="font-weight-bold mb-1">
                {{ list.title }}
              </p>
              <ul class="list-styled mt-1">
                <li v-for="(item, index) in list.items" :key="index">
                  <p class="mb-2">
                    {{ item.title }}
                  </p>
                  <p class="font-weight-normal">
                    <small>
                      {{ item.detail }}
                    </small>
                  </p>
                </li>
              </ul>
            </div>
          </div>
				</div>
				
				<div class="col-12 col-xl-10 offset-xl-1 mt-4">
					<p>{{ service.data?.footer }}</p>
				</div>

				<div v-if="service.data?.brocure?.url" class="text-center mx-auto mt-5">
					<a :href="apiBaseUrl + `${service.data?.brocure.url}`" target="_blank"
						class="btn btn-outline-secondary mx-auto">Download Brochure</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
  export default {
    props: {
      service: {
        type: Object,
        required: true
      },
      apiBaseUrl: {
        type: String,
        required: true
      }
    },
  }
</script>