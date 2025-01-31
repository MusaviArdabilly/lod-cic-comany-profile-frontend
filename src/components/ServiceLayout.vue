<template>

  <section class="ls ms text-sm-left text-center s-pt-xl-160 s-pt-lg-130 s-pt-md-90 s-pt-60 s-pb-xl-280 s-pb-lg-250 s-pb-md-90 s-pb-60 c-gutter-60">
		<div class="container">
			<div class="row">
				<div class="col-12 col-xl-10 offset-xl-1">
					<!-- <img class="rounded" :src="service.data?.image" alt=""> -->
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
          <!-- <div class="divider-60 hidden-below-lg"></div> -->
				</div>
        <div v-if="service.mode === 2 || service.mode === 3" class="col-lg-6 col-12 col-xl-5 offset-xl-1">
          <img class="rounded" src="/assets/images/services/service-single2.jpg" alt="">
        </div>
        <div v-if="service.mode === 2 || service.mode === 3" class="col-lg-6 col-12 col-xl-5">
          <div class="divider-30 hidden-above-lg"></div>

          <div v-if="service.mode === 2"
            v-for="list in service.data?.list" class="mb-3">
            <p class="font-weight-bold mb-1">
              {{ list.title }}
            </p>
            <ul class="list-styled mt-1">
              <li v-for="(item, index) in list.items" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>

          <div v-if="service.mode === 3"
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
				
				<div class="col-12 col-xl-10 offset-xl-1 mt-4">
					<p>{{ service.data?.footer }}</p>
				</div>

				<div class="text-center mx-auto mt-5">
					<a :href="service.data?.brocure" target="_blank"
						class="btn btn-outline-secondary mx-auto">Download Brocure</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
  export default {
    props: {
      mode: {
        type: Number,
        required: true
      },
      service: {
        type: Object,
        required: true
      }
    },
  }
</script>