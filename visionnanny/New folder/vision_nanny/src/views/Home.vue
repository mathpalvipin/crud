<template>
<div id="loadOverlay" style="background-color:#fff; position:absolute; top:0px; left:0px; width:100%; height:100%; z-index:2000;"></div>
  <section id="home" class="header_area home">
    <div id="header_navbar" class="header_navbar">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="#">
                <img id="logo" src="assets/images/logo.svg" alt="Logo" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul id="nav" class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="page-scroll active" href="#home">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#cvi">CVI</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#about">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#services">Features</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#team">Team</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#contact">Contact</a>
                  </li>
                  <router-link to="/activities">
                    <li class="nav-item">
                      <a class="page-scroll">
                        Activities
                      </a>
                    </li>
                  </router-link>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="header_hero">
      <div
        class="single_hero bg_cover d-flex align-items-center"
        style="background-image: url(assets/images/first_image.jpg)"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
              <div class="hero_content text-center">
                <h2
                  class="hero_title wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  Making the brain see<br />
                  what the eyes see
                </h2>
                <p
                  class="wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.5s"
                >
                  An AI-driven platform providing personalized assessment and
                  intervention solutions for the children with
                  Cortical&nbsp;Visual&nbsp;Impairment (CVI)
                </p>
                <a
                  href="#cvi"
                  class="main-btn wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.8s"
                  >Explore</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="cvi" class="features_area pt-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section_title text-center pb-25">
            <h4
              class="title wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              What's CVI?
            </h4>
            <div class="mt-10 row justify-content-center">
            <p
              class="wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.4s"
            >
              Visual impairment is often associated with only ocular (eye) disorders. However, vision is actually what the brain perceives from the information sent by the eyes. 
            </p>
              <div
                class="single_features text-center mt-10 wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <img height="95vh" src="assets/images/cvi.svg" />
              </div>
            </div>

            <p
              class="wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.6s"
            >
              CVI stands for Cortical/Cerebral Visual Impairment. It is caused by damage to the
              visual pathways or visual processing areas of the brain. Those with CVI often have healthy eyes, but have difficulties in processing what those eyes are seeing.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-7">
          <div
            class="single_features text-center mt-30 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
          >
            <img width="20%" src="assets/images/40.svg" />
            <h4 class="features_title">36 Million Children</h4>
            <p>
              Globally, 90 million children and adolescents live with vision loss, about 40% of which is due to CVI. It is a leading cause of pediatric visual impairment.

            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-7">
          <div
            class="single_features text-center mt-30 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.4s"
          >
            <img width="20%" src="assets/images/alert.svg" />
            <h4 class="features_title">A Growing Problem</h4>
            <p>
              As the survival rate of babies with prematurity and neurological complications improves worldwide, it also leaves more children with the risk of CVI.

            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-7">
          <div
            class="single_features text-center mt-30 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.6s"
          >
            <img width="20%" src="assets/images/neuro.svg" />
            <h4 class="features_title">Neuroplasticity = Hope</h4>
            <p>
              CVI cannot be treated with medicines, surgeries, or glasses. It
              can only be improved by working on neuroplasticity through early intervention.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="pt-130">
    <div class="about_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="about_content pt-120 pb-130">
              <div class="section_title pb">
                <h4
                  class="title wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  About Vision&nbsp;Nanny
                </h4>
                <p
                  class="wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.4s"
                >
                  The assessment and intervention needs of a child with CVI is
                  very different from a child with ocular impairment. Each child
                  with CVI has unique needs and characteristics, mostly
                  depending upon the level of visual functioning. But
                  unfortunately, due to lack of awareness and resources, many of
                  the intervention sessions happen to follow a one-size-fits-all
                  approach. Thus, most children miss the precious opportunity to effectively develop visual skills while their neuroplasticity is still maximal.
                </p>
                <p
                  class="wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.6s"
                >
                  Vision Nanny (VN) aims to ensure that every child with CVI has access to personalized intervention by equipping special educators and parents with a suite of CVI-specific assessment tools and interactive vision stimulation activities. They can be used at both clinical settings and at home. Besides increasing the 'vision time', VN also gives helpful suggestions and plans on how to maximize incidental learning throughout the day. Further, the progress of the child is continously monitored and the intervention plan is customized accordingly. VN can be run on any device with a large enough screen and a browser — tablets, laptops, PCs, smart TVs, etc. 
                </p>
              </div>
              <!-- <router-link to="/faq">
                <a
                  class="main-btn wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.7s"
                  >FAQ</a
                >
              </router-link> -->
            </div>
          </div>
        </div>
      </div>
      <div
        class="about_image bg_cover wow fadeInLeft"
        data-wow-duration="1.3s"
        data-wow-delay="0.2s"
        style="background-image: url(assets/images/about.jpg)"
      >
        <div class="image_content">
          <!-- <h4 class="experience"><span>5</span> Years of Experience</h4> -->
          <h4 style="white-space: nowrap; padding:10px" class="experience">
            Child-Centered<br />
            Intervention<br /><br />
            Anytime, <br />Anywhere!
          </h4>
        </div>
      </div>
    </div>
  </section>

  <section id="services" class="features_area pt-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section_title text-center pb-25">
            <h4
              class="title wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              Why she's awesome
            </h4>
            <p
              class="wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.4s"
            >
              Vision Nanny is not just another vision therapy app! Each activity and tool is continually crafted after much research and months of deliberation with the experts.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div
            class="single_features text-center mt-60 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
          >
            <img width="20%" src="assets/images/customize.svg" />
            <h4 class="features_title">Customizable</h4>
            <p>
              All the activities can be fully customized
              according to the child's unique needs, preferences, and behavior.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div
            class="single_features text-center mt-60 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.3s"
          >
            <img width="20%" src="assets/images/devices.svg" />
            <h4 class="features_title">Device Agnostic</h4>
            <p>
              As a web app, VN can be used on any tablet, laptop, or Smart TV.
              It can also be installed on the home screen.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div
            class="single_features text-center mt-60 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.4s"
          >
            <img width="20%" src="assets/images/chart.svg" />
            <h4 class="features_title">Progress Monitoring</h4>
            <p>
              Based on the interactions of the child with the activities, VN automatically tracks the  progress and reports it regularly.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div
            class="single_features text-center mt-60 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
          >
            <img width="20%" src="assets/images/artificial.svg" />
            <h4 class="features_title">Behavior Analysis</h4>
            <p>
             With Machine Learning, the engagement of the child is studied and the activities are tuned accordingly.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div
            class="single_features text-center mt-60 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.3s"
          >
            <img width="20%" src="assets/images/community.svg" />
            <h4 class="features_title">Community</h4>
            <p>
               VN also aims to build an active community that fosters awareness and actionable discussions about CVI.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div
            class="single_features text-center mt-60 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.4s"
          >
            <img width="20%" src="assets/images/culture.svg" />
            <h4 class="features_title">Culturally Inclusive</h4>
            <p>
              Content relevant to the local culture and context are used in the activities to maximize the child's involvement.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="team" class="team_area   pt-120">
    <div class="about_area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section_title text-center pb-25 pt-120 ">
              <h4
                class="title wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                Meet the Team
              </h4>
              <p
                class="wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              
               >
                Both Prathyusha and Vivian are engineers, currently serving as social innovation fellows under the BIRAC-SPARSH program. They also actively volunteer for children with visual impairment and advocate for their rights and inclusion. 
              </p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center team_active pb-130">
          <div class="col-lg-4 col-md-8 col-sm-10">
            <div
              class="single_team mt-30 wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              <img src="assets/images/team-1.jpg" alt="team" />
              <div class="team_content">
                <h4 class="team_name">
                  <a
                    href="https://www.linkedin.com/in/prathyusha-potharaju-11a0897a"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Prathyusha Potharaju</a
                  >
                </h4>
                <p><b>Head of Product & Research</b></p>
                <p>prathyusha@visionnanny.com</p>
                <ul class="social">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/prathyusha-potharaju-11a0897a"
                      target="_blank"
                      rel="noopener noreferrer"
                      ><i class="lni lni-linkedin-original"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-8 col-sm-10">
            <div
              class="single_team mt-30 wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.3s"
            >
              <img
                src="assets/images/team-2.jpg"
                alt="team"
              />
              <div class="team_content">
                <h4 class="team_name">
                  <a
                    href="https://www.linkedin.com/in/vivisilas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Vivian Manohar</a
                  >
                </h4>
                <p><b>Head of Design & Engineering</b></p>
                <p>vivian@visionnanny.com</p>
                <ul class="social">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/vivisilas/"
                      target="_blank"
                      rel="noopener noreferrer"
                      ><i class="lni lni-linkedin-original"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="partners" class="features_area pt-120 pb-130">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section_title text-center pb-25">
            <h4
              class="title wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              Partners
            </h4>
            <p
              class="wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.4s"
            >
              We are working together with these amazing organizations to make sure millions of children with CVI can have a better everyday life and a promising future.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-7">
          <div
            class="single_features text-center mt-30 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
          >
            <img width="30%" src="assets/images/birac.png" />

            <h4 class="features_title">
              <a
                style="color:#e84e4e"
                href="https://www.birac.nic.in/"
                target="_blank"
                rel="noopener noreferrer"
                >BIRAC</a
              >
            </h4>
            <p>
              Set up by the Dept. of Biotechnology (DBT), Govt. of India, BIRAC
              has awarded seed funding for this endeavor.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-7">
          <div
            class="single_features text-center mt-30 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.4s"
          >
            <img width="30%" src="assets/images/ikp.png" />

            <h4 class="features_title">
              <a
                style="color:#e84e4e"
                href="https://www.ikpknowledgepark.com/"
                target="_blank"
                rel="noopener noreferrer"
                >IKP Knowledge Park</a
              >
            </h4>
            <p>
              A premier Science Park and Incubator in India, IKP provides
              administrative and product development support.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-7">
          <div
            class="single_features text-center mt-30 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.6s"
          >
            <img width="30%" src="assets/images/lvpei.png" />
            <h4 class="features_title">
              <a
                style="color:#e84e4e"
                href="https://www.lvpei.org/"
                target="_blank"
                rel="noopener noreferrer"
                >LV Prasad Eye Institute</a
              >
            </h4>
            <p>
              A WHO collaborating Centre for Prevention of Blindness, LVPEI
              provides clinical and research mentorship.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    id="contact"
    class="contact_area bg_cover pt-120 pb-130"
    style="background-image: url(assets/images/contact_bg.jpg)"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section_title section_title_2 text-center pb-25">
            <h4
              class="title wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              Contact Us
            </h4>
            <base-dialog
              :show="!!error"
              title="Oops..."
              @close="handleError"
              :message="error"
            >
            </base-dialog>
            <base-dialog :show="isLoading" title="Submitting...">
              <base-spinner></base-spinner>
            </base-dialog>
            <div v-if="submitted" class="thanks">
              <p>
                Thanks for reaching out! We will get in touch with you shortly.
              </p>
            </div>
            <div v-else class="container">
              <p
                class="wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                Interested in becoming an early adopter of Vision&nbsp;Nanny?
                <br />We would love to hear from you!
              </p>
            </div>
          </div>
        </div>
        <form
          name="submit-to-google-sheet"
          v-on:submit.prevent="onSubmit"
          class="wow fadeInUp"
          data-wow-duration="1.3s"
          data-wow-delay="0.4s"
        >
          <div class="row">
            <div class="col-lg-6">
              <div class="single_form">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  required
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="single_form">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  required
                />
              </div>
            </div>
            <div class="col-lg-12">
              <div class="single_form">
                <textarea
                  placeholder="Message"
                  name="message"
                  id="message"
                  required
                ></textarea>
              </div>
            </div>
            <p class="form-message"></p>
            <div class="col-lg-12">
              <div class="single_form text-center">
                <button class="main-btn" type="submit">SUBMIT</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>

  <footer id="footer" class="footer_area">
    <div class="container">
      <div
        class="footer_wrapper text-center d-lg-flex align-items-center justify-content-between"
      >
        <div text-center d-lg-flex align-items-center justify-content-center>
          <router-link to="/privacy">
            <p class="credit">Privacy Policy</p>
          </router-link>
          <router-link to="/terms">
            <p style="padding-left:50px" class="credit">Terms & Conditions</p>
          </router-link>
        </div>
        <p style="padding-right:2%" class="credit">
          © Vision Nanny
        </p>
      </div>
    </div>
  </footer>

  <a href="#" class="back-to-top"><i class="lni lni-chevron-up"></i></a>
</template>

<script>
export default {
  name: "Feedback",
  data() {
    return {
      isLoading: false,
      error: null,
      submitted: false,
    };
  },
  created() {
    // this.$store.dispatch('tryLogin');
    console.log("url is " + window.location.href);
  },
  methods: {
    onSubmit() {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbwC76BdqiX81ZSZnh_60ftYd7EFS5HqMxGlJVQehmkP7fDtTyi4nIXORDMdDnl6/exec";
      const form = document.forms["submit-to-google-sheet"];

      var sendingData = new FormData(form);
      this.isLoading = true;

      fetch(scriptURL, { method: "POST", body: sendingData })
        .then(() => {
          this.isLoading = false;
          this.submitted = true;
        })
        .catch(() => {
          this.isLoading = false;
          this.error =
            "Failed to submit. Please check your internet connection and try later.";
        });
    },
    handleError() {
      this.error = null;
    },
    submitanother() {
      this.submitted = false;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

</style>
