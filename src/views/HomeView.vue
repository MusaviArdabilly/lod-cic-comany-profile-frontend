<template>
	<section class="page_slider">
		<div class="flexslider">
			<ul class="slides">
				<li v-if="heroSliders" v-for="(slider, index) in heroSliders" :key="index" class="ds cover-image"
						:style="{
						backgroundImage: `url('${API_BASE_URL}${slider?.image?.data.attributes.url}')`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}">
					<img :src="`${API_BASE_URL}${slider?.image?.data.attributes.url}`" :alt="slider.title">
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-12">
								<div class="intro_layers_wrapper">
									<div class="intro_layers">
										<div class="intro_layer">
											<h6 class="intro_before_featured_word">{{ slider.title }}</h6>
											<h2 class="text-capitalize intro_featured_word">
												{{ slider.description }}
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</section>

	<section class="ds text-sm-left text-center container-px-0 c-gutter-0">
		<div class="d-flex flex-column flex-md-row justify-content-around service-v2 gap-4">
			<div v-for="(item, index) in highlightServices" :key="index"
				class="icon-box service-single with-icon layout2 ds text-center">
        <a class="link-icon" :href="item.url">
          <div v-if="item.icon"
						class="icon-styled  fs-50">
            <!-- <img :src="`https://cms.cic.lodemo.id${item.icon.icon_source.url}`" alt=""> -->
						<i :class="item.icon.class"></i>
          </div>
        </a>
        <a :href="item.url">
          <h6>
            {{ item.title }}
          </h6>
        </a>
        <a class="btn btn-outline-darkgrey" :href="item.url">
          <i class="fas fa-chevron-right"></i>
        </a>
      </div>
		</div>
	</section>

	<section class="ls main-testimonial s-py-xl-160 s-py-lg-130 s-py-md-90 s-py-60">
		<div class="container">
			<div class="row">
				<div class="col-12 text-center">
					<h6 class="special-heading text-center">
						“{{ missionStatement.quote }}”
					</h6>
					<p class="mt-4">
						~ {{ missionStatement.title }} ~
					</p>
					<p><strong>{{ missionStatement.name }},</strong> {{ missionStatement.position }}</p>
				</div>
			</div>
		</div>
	</section>

	<section class="ls  s-py-xl-160 s-py-lg-130 s-py-md-90 s-py-60 text-sm-left text-center container-px-0">
		<div class="cover-image s-cover-right" 
			:style="{
				backgroundImage: `url('${API_BASE_URL}${pageBanner?.image?.data.attributes.url}')`
			}">
			<img :src="`${API_BASE_URL}${pageBanner?.image?.data.attributes.url}`" alt="01">
		</div>

		<div class="container-fluid">
			<div class="row">
				<div class="col-xs-12 col-12 col-lg-6">
					<div class="content-center">
						<h2 class="special-heading text-sm-left text-center">
							<span class="text-capitalize">
								{{ pageBanner?.title }}
							</span>
						</h2>
						<div class="divider-45 hidden-below-lg"></div>
						<div class="divider-30 hidden-above-lg"></div>
						<p>
							{{ pageBanner?.description }}
						</p>
					</div>
				</div>
				<div class="col-xs-12 col-12 col-lg-6">
				</div>
			</div>
		</div>
	</section>

	<section class="s-overlay infinity-section s-py-60 text-center px-3">
		<img :src="`${API_BASE_URL}${infinity?.image?.data.attributes.url}`" alt="">
		<h2>{{ WMS.title }}</h2>
		<div class="container wms-card-container mb-5 p-0">
			<div class="row gap-1">
				<div v-for="(service, index) in WMS.section_6a" :key="index" 
					class="col-6 col-md-3 mb-3">
					<div class="wms-card">
						<img :src="`${API_BASE_URL}${service?.image?.data.attributes.url}`" alt="">
						<h6>{{ service?.title }}</h6>
					</div>
				</div>
			</div>
		</div>
		<h2>{{ eWMS?.title }}</h2>
		<div class="container">
			<p>{{ eWMS?.description }}</p>
			<div class="d-flex flex-wrap flex-md-nowrap justify-content-center ewms-container">
				<div v-for="(item, index) in eWMS.section_7a" :key="index"
					class="ewms-card mx-2 py-4">
					<h5>{{ item.title }}</h5>
					<p>{{ item.description }}</p>
				</div>
			</div>
		</div>
	</section>

	<section class="ls main-testimonial s-py-xl-160 s-py-lg-130 s-py-md-90 s-py-60">
		<div class="container">
			<div class="row">
				<div class="col-12 text-center">
					<h6 class="special-heading text-center">
						“{{ visionStatement.quote }}”
					</h6>
					<p class="mt-4">
						~ {{ visionStatement.title }} ~
					</p>
					<p><strong>{{ visionStatement.name }},</strong> {{ visionStatement.position }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import axios from 'axios';
import { nextTick } from "vue";

export default {
	data() {
		return {
			API_BASE_URL: import.meta.env.VITE_BACKEND_BASE_URL,
			singleSliders: {},
			heroSliders: [],
			highlightServices: [],
			missionStatement: {},
			pageBanner: {},
			infinity: {},
			WMS: {},
			eWMS: {},
			visionStatement: {},
		}
	},
	mounted() {
    this.fetchData();
  },
	methods: {
		async fetchData() {
			try {
				console.log('fetching data')
				const response = await axios.get(`${this.API_BASE_URL}/api/home?populate=deep,10`);
				const data = response.data?.data.attributes;

				if (data) {
          this.heroSliders = data.section_1 || [];
          this.highlightServices = data.section_2 || [];
          this.missionStatement = data.section_3 || {};
          this.pageBanner = data.section_4 || {};
          this.infinity = data.section_5 || {};
          this.WMS = data.section_6 || {};
          this.eWMS = data.section_7 || {};
					this.visionStatement = data.section_8 || {};
        } else {
          console.warn('No data received');
        }
				await nextTick();
				this.initFlexslider();
			} catch (error) {
				console.log(error)
			}
		},
    initFlexslider() {
			setTimeout(() => {
				console.log('Initializing flexslider');
				
				$(".flexslider").flexslider({
					animation: "fade",  // 'fade' animation for slide transition
					pauseOnHover: false,
					useCSS: true,
					controlNav: true,    // Enable control navigation (dots)
					directionNav: true,  // Enable direction navigation (prev/next)
					prevText: "",
					nextText: "",
					smoothHeight: false,
					slideshowSpeed: 5000,	     // Automatic sliding every 7 seconds
					animationSpeed: 600,     // Animation speed for sliding transition
					animationLoop: true,     // Keep the slider in a loop

					// Start function that hides text layers until the slide is active
					start: function (slider) {
						slider.find('.intro_layers').children().css({ visibility: 'hidden' });
						slider.find('.flex-active-slide .intro_layers').children().each(function (index) {
							var self = $(this);
							setTimeout(() => self.addClass("animated scaleAppear"), index * 250);
						});
					},
					
					// When the slide changes, ensure the text reappears
					before: function(slider) {
						slider.find('.intro_layers').children().css({ visibility: 'hidden' });
					},
					
					// After the slide changes, display the text again
					after: function(slider) {
						slider.find('.flex-active-slide .intro_layers').children().each(function (index) {
							var self = $(this);
							setTimeout(() => self.addClass("animated scaleAppear"), index * 250);
						});
					},

					// End function that hides the text layers when the animation ends
					end: function (slider) {
						slider.find('.intro_layers').children().each(function () {
							var self = $(this);
							var animationClass = !self.data('animation') ? 'scaleAppear' : self.data('animation');
							self.removeClass('animated ' + animationClass).css({ visibility: 'hidden' });
						});
					}
				});

			}, 500); // Delay the initialization to ensure the DOM is ready
		},
    updateSliderNav(slider) {
      const current = $('li:has(.flex-active)').index('.flex-control-nav li') + 1;
      const length = $('.slides li').length;
      $('.flex-control-nav li a.flex-active').html(`<span class="span-active">${current}/${length}</span>`);
    }
	}
}
</script>