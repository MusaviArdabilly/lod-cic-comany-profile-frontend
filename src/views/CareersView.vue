<template>

  <section class="ls careers s-pt-xl-160 s-pt-lg-130 s-pt-md-90 s-pt-60 s-pb-xl-160 s-pb-lg-130 s-pb-md-90 s-pb-60">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-12">
					<h2 class="special-heading">
						<span class="text-capitalize">
							{{ section1.title }}
						</span>
					</h2>
					<div class="divider-45 hidden-below-lg"></div>
					<div class="divider-30 hidden-above-lg"></div>
					<p class="font-weight-bold">
						{{ section1.name }}
					</p>
					<p>
						{{ section1.description }}
					</p>
          <div class="col-lg-6 col-12"></div>
        </div>
			</div>
		</div>
	</section>

	<section class="ls s-pt-xl-160 s-pt-lg-130 s-pt-md-90 s-pt-60 s-pb-xl-160 s-pb-lg-130 s-pb-md-90 s-pb-60" style="height: 1080px;">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-10 col-xl-8">
					<h3 class="text-center mb-5">{{ section2.title }}</h3>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<div class="row portfolio isotope-wrapper masonry-layout c-gutter-30 c-mb-30" data-filters=".gallery-filters" style="position: relative; height: 717.844px;">
						<div v-if="section2.section_2a" v-for="(item, index) in section2.section_2a" :key="index"
							class="col-xl-4 col-sm-6 business news" >
							<div class="vertical-item item-gallery content-absolute text-center ds">
								<div class="item-media" style="transform: perspective(325px) translateZ(0px) rotateX(0deg) rotateY(0deg); transition: 0.2s linear; z-index: 1;">
									<img :src="API_BASE_URL + `${item.image.data.attributes.url}`" alt="img">
									<h6 style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%);">
										{{ item.title }}
									</h6>
								</div>
								<div class="item-content">
									<p>{{ item.description }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mt--30"></div>
		</div>
	</section>
	
	<section class="ls ms s-pt-xl-160 s-pb-xl-280 s-pt-lg-130 s-pb-lg-250 s-py-md-90 s-py-60">
		<div class="container">
			<div class="row">
				<div class="col-12 col-xl-8 offset-xl-2 contact-us animate animated scaleAppear" data-animation="scaleAppear">
					<div class="form-wrapper ls rounded">
						<form @submit.prevent="submitForm">
							<div class="row c-mb-20">
								<div class="col-12 form-title text-center form-builder-item">
									<div class="header title">
										<h4>CV Submission</h4>
									</div>
								</div>
							</div>
							<div class="row c-mb-10 c-gutter-10">
								<div class="col-lg-6">
									<div class="form-group has-placeholder">
										<label for="name335x5553">Full Name <span class="required">*</span></label>
										<i class="fas fa-user"></i>
										<input v-model="form.name" type="text" aria-required="true" size="30" value="" name="name" id="name335x5553" class="form-control" placeholder="Full Name">
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form-group has-placeholder">
										<label for="email333">Email address<span class="required">*</span></label>
										<i class="fas fa-envelope"></i>
										<input v-model="form.email" type="email" aria-required="true" size="30" value="" name="email" id="email333" class="form-control" placeholder="Email">
									</div>
								</div>
							</div>
							<div class="row c-mb-10 c-gutter-10">
								<div class="col-lg-6">
									<div class="form-group has-placeholder">
										<label for="name3355553">Phone Number <span class="required">*</span></label>
										<i class="fas fa-phone"></i>
										<input v-model="form.phoneNumber" type="text" aria-required="true" size="30" value="" name="name" id="name3355553" class="form-control" placeholder="Phone Number">
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form-group has-placeholder">
										<label for="name3355d553">Subject <span class="required">*</span></label>
										<i class="fas fa-arrow-down"></i>
										<select v-model="form.subject" name="menu-position" class="wpcf7-form-control wpcf7-select wpcf7-validates-as-required" aria-required="true" aria-invalid="false">
											<option selected value="Legal, Risk & Quality Dept. (LRQ)">Legal, Risk &amp; Quality Dept. (LRQ)</option>
											<option value="Integrated Facilities Dept. (IFD)">Integrated Facilities Dept. (IFD)</option>
											<option value="Information Communication Technology Dept. (ICT)">Information Communication Technology Dept. (ICT)</option>
											<option value="Corporate Services Dept. (CSD)">Corporate Services Dept. (CSD)</option>
											<option value="Operation & Maintenance dept. (OMD)">Operation &amp; Maintenance dept. (OMD)</option>
											<option value="Heatlh, Safety, Security & Environment Dept. (HSSE)">Heatlh, Safety, Security &amp; Environment Dept. (HSSE)</option>
											<option value="Supply Chain Management Dept. (SCM)">Supply Chain Management Dept. (SCM)</option>
											<option value="Laboratory Services (LAB)">Laboratory Services (LAB)</option>
											<option value="Logistic & Shipment Services Dept. (LSS)">Logistic &amp; Shipment Services Dept. (LSS)</option>
											<option value="Sales & Business Development Dept. (SBD)">Sales &amp; Business Development Dept. (SBD)</option>
											<option value="Human Resources Dept. (HR)">Human Resources Dept. (HR)</option>
										</select>
									</div>
								</div>
							</div>
							<div class="row c-mb-10 c-gutter-10">
								<div class="col-sm-12">
									<div class="form-group has-placeholder">
										<label for="message335553">Additional Information</label>
										<i class="fas fa-edit"></i>
										<textarea v-model="form.addOns" aria-required="true" rows="8" cols="45" name="message" id="message335553" class="form-control" placeholder="Additional Information"></textarea>
									</div>
								</div>
							</div>
							<div class="row c-mb-10 c-gutter-10">
								<div class="col-sm-12">
									<div class="form-group has-placeholder">
										<label for="file">CV</label>
										<input type="file" class="form-control" @change="handleFileUpload"></input>
										<p v-if="error" class="text-red-500">{{ error }}</p>
									</div>
								</div>
							</div>
							<div class="row c-mb-10 c-gutter-10">
								<div class="col-sm-12 mb-0 mt-50 text-center">
									<div class="form-group ">
										<button class="btn btn-gradient big-btn" type="submit">Submit Application</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>

</template>

<script>
import axios from 'axios';
import { errorMessages } from 'vue/compiler-sfc';

export default {
  data() {
    return {
			API_BASE_URL: import.meta.env.VITE_BACKEND_BASE_URL,
      error: null,
      maxSize: 10 * 1024 * 1024,
			section1: {},
			section2: {},
			form: {
				name: '',
				email: '',
				phoneNumber: '',
				subject: 'Legal, Risk & Quality Dept. (LRQ)',
				cv: '',
				addOns: ''
			}
    };
  },
	mounted() {
		this.fetchData();
	},
  methods: {
		async fetchData() {
			const response = await axios.get(`${this.API_BASE_URL}/api/career?populate=deep,10`);
			const data = response.data.data.attributes;

			if (data) {
				this.section1 = data.section_1;
				this.section2 = data.section_2;
			} else {
				console.warn('No data available')
			}
		},
    handleFileUpload(event) {
      this.error = null;
      const file = event.target.files[0];

      if (file) {
        if (file.size > this.maxSize) {
          this.error = "File too big, use smaller than 10MB";
          event.target.value = ""; 
          return;
        }
				this.form.cv = file;
      }
    },
		async submitForm() {
			try {
				const formData = {
					data: {
						name: this.form.name,
						email: this.form.email,
						phone: this.form.phoneNumber,
						position: this.form.subject,
						additional_information: this.form.addOns
					}
				}
				
				const formResponse = await axios.post(`${this.API_BASE_URL}/api/cv-submissions`, formData);
				const submissionId = formResponse.data.data.id;

				if (this.form.cv) {
					const fileData = new FormData();
					fileData.append('ref', 'api::cv-submission.cv-submission');
					fileData.append('refId', submissionId);
					fileData.append('field', 'file');
					fileData.append('files', this.form.cv);

					await axios.post(`${this.API_BASE_URL}/api/upload`, fileData)
				}
			} catch (error) {
				console.log(error)
				this.error = errorMessages
			}
		}
  },
};
</script>