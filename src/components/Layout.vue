<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  
  <div class="preloader">
		<div class="preloader_image"></div>
	</div>

	<div id="canvas">
		<div id="box_wrapper">

			<div class="header_absolute">
				<!--eof topline-->
				<!-- header with two Bootstrap columns - left for logo and right for navigation -->
				<header class="page_header_side header_slide header-special header_side_right ds s-overlay">

					<div class="scrollbar-macosx">
						<div class="side_header_inner">
							<p class="text-right mb-0 close-wrapper"><a href="javascript:void(0)">×</a></p>

							<div class="widget widget_recent_posts">

								<h3 class="widget-title">Our news</h3>
								<ul class="list-unstyled">
									<li class="media">
										<article class="vertical-item  post type-post status-publish format-standard has-post-thumbnail">
											<div class="item-content">
												<div class="entry-header">
													<div class="entry-meta">
														<div class="byline">
															<span class="date">
																<a href="blog-%40%40type.html" rel="bookmark">
																	<time class="published entry-date" datetime="2019-04-09T12:23:09+00:00">20.03.2019</time>
																</a>
															</span>
															<span class="author vcard">
																<a class="url fn n" href="blog-%40%40type.html" rel="author"><span>by</span> Admin</a>
															</span>
														</div>
													</div>
													<h4 class="entry-title">
														<a href="blog-single-%40%40type.html" rel="bookmark">
															Adipisicing elit sed do eiusmod
														</a>
													</h4>

													<!-- .entry-meta -->
												</div>
												<!-- .entry-header -->
											</div><!-- .item-content -->
										</article>
									</li>
									<li class="media">
										<article class="vertical-item  post type-post status-publish format-standard has-post-thumbnail">
											<div class="item-content">
												<div class="entry-header">
													<div class="entry-meta">
														<div class="byline">
															<span class="date">
																<a href="blog-%40%40type.html" rel="bookmark">
																	<time class="published entry-date" datetime="2019-04-09T12:23:09+00:00">20.03.2019</time>
																</a>
															</span>
															<span class="author vcard">
																<a class="url fn n" href="blog-%40%40type.html" rel="author"><span>by</span> Admin</a>
															</span>
														</div>
													</div>
													<h4 class="entry-title">
														<a href="blog-single-%40%40type.html" rel="bookmark">
															Adipisicing elit sed do eiusmod
														</a>
													</h4>

													<!-- .entry-meta -->
												</div>
												<!-- .entry-header -->
											</div><!-- .item-content -->
										</article>
									</li>
									<li class="media">
										<article class="vertical-item  post type-post status-publish format-standard has-post-thumbnail">
											<div class="item-content">
												<div class="entry-header">
													<div class="entry-meta">
														<div class="byline">
															<span class="date">
																<a href="blog-%40%40type.html" rel="bookmark">
																	<time class="published entry-date" datetime="2019-04-09T12:23:09+00:00">20.03.2019</time>
																</a>
															</span>
															<span class="author vcard">
																<a class="url fn n" href="blog-%40%40type.html" rel="author"><span>by</span> Admin</a>
															</span>
														</div>
													</div>
													<h4 class="entry-title">
														<a href="blog-single-%40%40type.html" rel="bookmark">
															Adipisicing elit sed do eiusmod
														</a>
													</h4>

													<!-- .entry-meta -->
												</div>
												<!-- .entry-header -->
											</div><!-- .item-content -->
										</article>
									</li>

								</ul>
							</div>
							<div class="widget widget_about">
								<h3 class="widget-title">About</h3>
								<p>
									Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde.
								</p>
							</div>
							<div class="widget widget_mailchimp">
								<h3 class="widget-title">Newsletter</h3>

								<form class="signup" action="https://html.modernwebtemplates.com/">
									<label for="mailchimp_email88d">
										<span class="screen-reader-text">Subscribe:</span>
									</label>
									<input id="mailchimp_email88d" name="email" type="email" class="form-control mailchimp_email has-placeholder" placeholder="Email">
									<button type="submit" class="search-submit">
										<span class="screen-reader-text">Subscribe</span>
									</button>
									<div class="response"></div>
								</form>
							</div>
							<div class="widget widget_social_icons">
								<a href="#" class="fab fa-facebook-f rounded-icon bg-icon fs-16" title="facebook"></a>
								<a href="#" class="fab fa-twitter rounded-icon bg-icon fs-16" title="telegram"></a>
								<a href="#" class="fab fa-linkedin-in rounded-icon bg-icon fs-16" title="linkedin"></a>
								<a href="#" class="fab fa-instagram rounded-icon bg-icon fs-16" title="instagram"></a>
							</div>
						</div>
					</div>
				</header>

				<header class="page_header header-1 ds bg-transparent s-py-xl-20 s-py-10 ">

					<div class="container-fluid">

						<div class="row d-flex align-items-center justify-content-center">
							<div class="col-xl-3 col-md-4 col-12 text-center">
                <a href="/" class="logo">
                  <img src="/assets/images/logo.png" alt="" style="width: 160px;">
                </a>
                <!-- <router-link to="/" class="logo">
                  <img src="/assets/images/cic-logo-white.png" alt="" style="width: 160px;">
                </router-link> -->
							</div>
							<div class="col-xl-9 col-1 text-right">
								<!-- main nav start -->
								<nav class="top-nav">
									<ul class="nav sf-menu">

										<li class="active">
											<RouterLink to="/about-us">About Us</RouterLink>
                      <!-- <a href="/about-us">About Us</a> -->
										</li>

										<li class="active">
											<a href="#">Solution & Services</a>
											<ul>
												<li>
													<RouterLink to="/services/collection-and-transportation">Collection & Transportation</RouterLink>
													<!-- <a href="/services/collection-and-transportation">Collection & Transportation</a> -->
												</li>
												<li>
													<RouterLink to="/services/laboratory">Laboratory Services</RouterLink>
													<!-- <a href="service-laboratory.html">Laboratory Services</a> -->
												</li>
												<li>
													<RouterLink to="/services/water-waste-treatment">Water Waste Treatment</RouterLink>
													<!-- <a href="service-incineration.html">Oil Spill Remidiation</a> -->
												</li>
												<li>
													<RouterLink to="/services/oily-waste-recovery">Oily Waste Recovery</RouterLink>
													<!-- <a href="service-oily-waste.html">Collection & Transportation</a> -->
												</li>
												<li>
													<RouterLink to="/services/incineration-treatment">Incineration Treatment</RouterLink>
													<!-- <a href="service-oily-waste.html">Waste Water Treatment</a> -->
												</li>
												<li>
													<RouterLink to="/services/oil-and-gas">Oil & Gass Services</RouterLink>
													<!-- <a href="service-oily-waste.html">Incineration Treatment</a> -->
												</li>
												<li>
													<RouterLink to="/services/cic-mercury-treatment-system">CIC Mercury Treatment System</RouterLink>
													<!-- <a href="service-oily-waste.html">Oil & Gass Services</a> -->
												</li>
												<li>
													<RouterLink to="/services/thermomecanical-cutting-cleaner">TCC</RouterLink>
													<!-- <a href="service-oily-waste.html">CIC Mercury Treatment System</a> -->
												</li>
												<li>
													<RouterLink to="/services/oil-spill-remediation">Oil Spill Remediation</RouterLink>
													<!-- <a href="service-oily-waste.html">TCC</a> -->
												</li>
												<li>
													<RouterLink to="/services/engineering-solution-for-crane-services">Engineering Solution for Crane Services</RouterLink>
													<!-- <a href="service-oily-waste.html">Engineering Solution for Crane Services</a> -->
												</li>
												<li>
													<RouterLink to="/services/equipment-rental">Equipment Rental</RouterLink>
													<!-- <a href="service-oily-waste.html">Engineering Solution for Crane Services</a> -->
												</li>
												<li>
													<RouterLink to="/services/marine">Marine Services</RouterLink>
													<!-- <a href="service-oily-waste.html">CIC Organic Compost</a> -->
												</li>
												<li>
													<RouterLink to="/services/vapor-blasting">Vapor Blasting</RouterLink>
													<!-- <a href="service-oily-waste.html">Equipment Rental</a> -->
												</li>
												<li>
													<RouterLink to="/services/industrial-cleaning-and-mechanical">Industrial Cleaning & Mechanical Services</RouterLink>
													<!-- <a href="service-oily-waste.html">Marine Services</a> -->
												</li>
											</ul>
										</li>

										<li class="active">
											<RouterLink to="/careers">Careers</RouterLink>
											<!-- <a href="/careers">Careers</a> -->
										</li>

										<li class="active">
											<RouterLink to="/contact-us">Contact Us</RouterLink>
											<!-- <a href="/contact-us">Contact Us</a> -->
										</li>
										<!-- eof pages -->
                  </ul>
								</nav>
								<!-- eof main nav -->
							</div>
						</div>

					</div>
					<!-- header toggler -->
					<span class="toggle_menu"><span>menu</span></span>
				</header>
			</div>

      <RouterView></RouterView>

			<footer class="page_footer  text-center c-gutter-100 text-sm-left  ds">
				<div class="container">
					<div class="row justify-content-center">

						<div class="col-lg-4 col-md-6 order-1 order-lg-1  animate" data-animation="fadeInUp">
							<div class="fw-divider-space divider-xl-160 divider-lg-130 divider-md-90 divider-60"></div>
							<a href="index.html" class="logo">
								<img src="/assets/images/cic-logo-white.png" alt="" style="width: 160px;">
							</a>
							<p>
								Local incorporated company  specializing in hydrocarbon and hazardous Waste Management Services (WMS) to oil and gas industry in Brunei Darussalam.
							</p>
							<a href="#" class="fab fa-facebook-f rounded-icon bg-icon fs-16" title="facebook"></a>
							<a href="#" class="fab fa-twitter rounded-icon bg-icon fs-16" title="telegram"></a>
							<a href="#" class="fab fa-linkedin-in rounded-icon bg-icon fs-16" title="linkedin"></a>
							<a href="#" class="fab fa-instagram rounded-icon bg-icon fs-16" title="instagram"></a>
							<div class="fw-divider-space divider-xl-160 divider-lg-130 divider-md-60 divider-30"></div>
						</div>

						<div class="col-lg-4 col-md-6 order-2 order-lg-3 animate" data-animation="fadeInUp">
							<div class="fw-divider-space divider-xl-160 divider-lg-130 divider-md-90"></div>
							<div class="widget widget_icons_list">
								<ul>
									<li class="icon-inline ">
										<div class="icon-styled icon-top  bordered round fs-16">
											<i class="fas fa-phone"></i>
										</div>
										<p>+673 3330266 / 0267</p>
									</li>
									<li class="icon-inline">
										<div class="icon-styled icon-top bordered round  fs-16">
											<i class="fas fa-envelope"></i>


										</div>
										<!-- <p><a href="#"><span class="__cf_email__" data-cfemail="bbd5daddcfdafbdec3dad6cbd7de95d8d4d6">[email&#160;protected]</span></a></p> -->
										<p>cicenquiry@cicgrp.com</p>
									</li>
									<li class="icon-inline">
										<div class="icon-styled icon-top bordered round  fs-16">
											<i class="fas fa-map-marker-alt"></i>
										</div>
										<p>
											CIC Environmental Services <br>
											Lot 5169, Simpang 144, Jalan Maulana <br>
											Kuala Belait, KA1531, Brunei Darussalam <br>
										</p>
									</li>
									<li class="icon-inline">
										<div class="icon-styled icon-top bordered round  fs-16">
											<i class="fas fa-clock"></i>
										</div>
										<p>
											Mo-Fri: 07.30am - 4.30pm<br>
											Sat-Sun: Off<br>
										</p>
									</li>
								</ul>
							</div>
							<div class="fw-divider-space divider-xl-160 divider-lg-130 divider-md-60 divider-30"></div>
						</div>
					</div>
				</div>

			</footer>

		</div>
	</div>
</template>