<template>
  
  <section class="page_title ds s-parallax s-pb-xl-80  s-pb-lg-100  s-pb-md-90 s-pt-md-190 s-pt-180 s-pb-60">
		<div class="container">
			<div class="row">
				<div class="col-md-12 text-center">
					<h1>About Us</h1>
				</div>
			</div>
		</div>
	</section>

	<section class="my-5 p-5">
		<div class="container">
			<div class="row">
				<div class="col-12 text-center">
					<h1 class="">
						{{ section1.title }}
					</h1>
					<p v-for="(item, index) in section1.section_1a" :key="index">
						{{ item.description }}
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="my-5 py-5">
		<div class="container">
			<div class="row">
				<div class="col-12 text-center">
					<h1 class="mb-4">
						{{ section2.title }}
					</h1>
					<h5 class="m-0" style="background: linear-gradient(to right, #de2027, #ffd200);
					-webkit-text-fill-color: transparent;
					-webkit-background-clip: text;">
						{{ section2?.section_2a?.map(item => item.name).join(' . ') }}
					</h5>
				</div>
			</div>
		</div>
	</section>
	
	<section class="my-5 py-5">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h2 class="special-heading text-center">
						<span class="text-capitalize">
							{{ section3.title }}
						</span>
					</h2>
					<div class="divider-line bg-maincolor text-center"></div>
					<div class="fw-divider-space divider-25"></div>
					<p v-for="(item, index) in section3.section_3a" :key="index">
						{{ item.description }}
					</p>
					<div class="divider-35 hidden-below-lg"></div>
					<div class="divider-30 hidden-above-lg"></div>
				</div>
			</div>
			<div v-if="section3.section_3b"
				class="row">
				<div class="col-lg-4 col-md-6">
					<div class="pricing-plan box-shadow rounded">
						<img :src="API_BASE_URL + `${section3?.section_3b[0]?.image.data[0].attributes.url}`" alt="ISO Accreditation">
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="pricing-plan plan-featured box-shadow rounded">
						<img :src="API_BASE_URL + `${section3?.section_3b[0]?.image.data[1].attributes.url}`" alt="ISO Accreditation">
					</div>
				</div>
				<div class="col-lg-4 col-md-6 mx-sm-auto">
					<div class="pricing-plan box-shadow rounded">
						<img :src="API_BASE_URL + `${section3?.section_3b[0]?.image.data[2].attributes.url}`" alt="ISO Accreditation">
					</div>
				</div>
			</div>
			<div class="mt--30"></div>
		</div>
	</section>

	<section class="my-5 py-5">
		<div class="container">
			<div class="row">
				<div v-if="section4.image"
					class="col-12">
					<h2 class="special-heading">
						<span class="text-capitalize">
							{{ section4.title }}
						</span>
					</h2>
					<div class="divider-45 hidden-below-lg"></div>
					<div class="divider-30 hidden-above-lg"></div>
					<img :src="API_BASE_URL + `${section4.image.data.attributes.url}`" alt="" class="w-100">
				</div>
			</div>
			<div v-if="section4.section_4a"
				class="row">
				<div class="col-12">
					<div class="row isotope-wrapper" style="position: relative; height: 600px;">
						<div v-for="(item, index) in section4.section_4a" :key="index"
							class="col-xl-3 col-6  ">
							<a href="#">
								<div class="ls p-3 text-center rounded">
									<img :src="API_BASE_URL + `${item.image.data.attributes.url}`" alt="">
									<h6>{{ item.name }}</h6>
									<p>{{ item.address }}</p>
								</div>
							</a>
						</div>
					</div>
					<div class="mt--30"></div>
				</div>
			</div>
		</div>
	</section>

	<section class="my-5 py-5">
		<div v-if="section5.image"
			class="container text-center">
			<img :src="API_BASE_URL + `${section5.image.data.attributes.url}`" alt="">
		</div>
		<h2 class="text-center">{{ section6.title }}</h2>
		<div class="row">
			<div class="container">
				<p class="text-center">{{ section6.description }}</p>
				<div class="d-flex flex-wrap flex-md-nowrap justify-content-center ewms-container">
					<div v-for="(item, index) in section6.section_6a" :key="index"
						class="border-top border-secondary mx-2 py-4 text-center" style="width: 160px;">
						<h1>{{ item.no }}</h1>
						<p class="font-weight-bold">{{ item.name }}</p>
					</div>
				</div>
				<div v-if="section6.brocure"
					class="text-center">
					<a :href="API_BASE_URL + `${section6.brocure.data.attributes.url}`" target="_blank"
						class="btn btn-outline-secondary mx-auto">Download Brocure</a>
				</div>
			</div>
		</div>
	</section>

	<!-- <section v-if="section7" 
		class="ls ms portfolio text-center s-pt-xl-160 s-pt-lg-130 s-pt-md-90 s-pt-60 s-pb-xl-280 s-pb-lg-250 s-pb-md-90 s-pb-60"
		style="min-height: max-content; height: 1320px; overflow: scroll;"
		>
		<div class="container py-5">
			<h2 class="text-center">{{ section7.title }}</h2>
			<div class="row">
				<div class="col-12">
					<div class="row isotope-wrapper masonry-layout c-mb-30" data-filters=".gallery-filters" style="position: relative; height: 829.968px;">
						<div v-if="section7.section_7a" v-for="(item, index) in section7.section_7a" :key="index"
							class="col-xl-4 col-sm-6 business news" style="height: 250px;">
							<div class="vertical-item item-gallery content-absolute text-center ds">
								<div class="item-media card" style="transform: perspective(325px) translateZ(0px) rotateX(0deg) rotateY(0deg); transition: 0.2s linear; z-index: 1;">
									<img :src="API_BASE_URL + `${item.image.url}`" alt="img">
									<h6 style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%);">
										{{ item.title }}
									</h6>
								</div>
								<div class="item-content item-text-hover">
									<p>{{ item.description }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section> -->

	<section class="ds container-px-xl-0 py-5">
		<h2 class="text-center">{{ section8.title }}</h2>
		<p class="text-center">{{ section8.description }}</p>
		<div class="container">
			<div class="d-flex flex-column align-items-center border-top mx-auto mb-5 py-3">
				<h1 class="my-2">{{ localStaffStrength }}%</h1>
				<p>{{ section8.percentage_title }}</p>
				<p class="font-weight-bold">{{ section8.sub_description }}</p>
			</div>
		</div>
		<div ref="statsSection" class="container-fluid">
			<div class="row">
				<div class="col-12">
					<div class="step-gorizontal">
						<div class="step">
							<div class="step-number">
								<h3>
									{{ managerial }}
								</h3>
							</div>
							<h6>
								Managerial
							</h6>
						</div>
						<div class="step">
							<div class="step-number">
								<h3>
									{{ highlySkilled }}
								</h3>
							</div>
							<h6>
								Highly Skilled
							</h6>
						</div>
						<div class="step">
							<div class="step-number">
								<h3>
									{{ skilled }}
								</h3>
							</div>
							<h6>
								Skilled
							</h6>
						</div>
						<div class="step">
							<div class="step-number">
								<h3>
									{{ lowSkilled }}
								</h3>
							</div>
							<h6>
								Low Skilled
							</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="d-flex flex-column align-items-center mx-auto my-5 py-3">
				<p>{{ section10.description_1 }}</p>
				<h1 class="my-2">{{ section10.percentage }}</h1>
				<p class="text-center">{{ section10.description_2 }}</p>
			</div>
		</div>
	</section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
			API_BASE_URL: import.meta.env.VITE_BACKEND_BASE_URL,
			localStaffStrength: 0,
			managerial: 0,
			highlySkilled: 0,
			skilled: 0,
			lowSkilled: 0,
			targetLocalStaffStrength: 0,
			targetManagerial: 0,
			targetHighlySkilled: 0,
			targetSkilled: 0,
			targetLowSkilled: 0,
			observer: null,
			section1: {},
			section2: {},
			section3: {},
			section4: {},
			section5: {},
			section6: {},
			section7: {},
			section8: {},
			section9: {},
			section10: {}
    };
  },
  mounted() {
		this.fetchData();
    this.observeSection();
  },
  methods: {
		async fetchData() {
			try {
				const response = await axios.get(`${this.API_BASE_URL}/api/about?populate=deep,10`);
				const data = response.data.data.attributes;

				if (data) {
					this.section1 = data.section_1;
					this.section2 = data.section_2;
					this.section3 = data.section_3;
					this.section4 = data.section_4;
					this.section5 = data.section_5;
					this.section6 = data.section_6;
					this.section7 = data.section_7;
					this.section8 = data.section_8;
					this.section9 = data.section_9;
					this.section10 = data.section_10;

					this.targetLocalStaffStrength = this.section8.percentage;
					this.targetManagerial = this.section9.section_9a[0].number;
					this.targetHighlySkilled = this.section9.section_9a[1].number;
					this.targetSkilled = this.section9.section_9a[2].number;
					this.targetLowSkilled = this.section9.section_9a[3].number;
				} else {
					console.warn('data not available')
				}
			} catch (error) {
				console.warn(error);
			}
		},
    observeSection() {
      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            this.startCounter(this.targetLocalStaffStrength, "localStaffStrength");
            this.startCounter(this.targetManagerial, "managerial");
            this.startCounter(this.targetHighlySkilled, "highlySkilled");
            this.startCounter(this.targetSkilled, "skilled");
            this.startCounter(this.targetLowSkilled, "lowSkilled");
            this.observer.disconnect(); // Stop observing after first trigger
          }
        },
        { threshold: 0.5 } // Triggers when 50% of the section is visible
      );
      this.observer.observe(this.$refs.statsSection);
    },
    startCounter(target, countVar) {
      let start = 0;
      let step = target / 100; // Controls speed
      let interval = setInterval(() => {
        start += step;
        if (start >= target) {
          this[countVar] = target;
          clearInterval(interval);
        } else {
          this[countVar] = Math.floor(start);
        }
      }, 20); // Updates every 20ms for smooth effect
    },
  },
};
</script>