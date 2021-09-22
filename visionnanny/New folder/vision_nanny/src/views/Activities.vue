<template>
  <section id="home" class="header_area">
    <div id="header_navbar" class="header_navbar sticky">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <router-link to="/">
                <a class="navbar-brand">
                  <img id="logo" src="assets/images/logo-2.svg" alt="Logo" />
                </a>
              </router-link>
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
                  <router-link to="/">
                    <li class="nav-item">
                      <a class="page-scroll">Home</a>
                    </li>
                  </router-link>
                  <li class="nav-item">
                    <a class="page-scroll active" href="#activities"
                      >Activities</a
                    >
                  </li>
                  <router-link to="/score">
                    <li class="nav-item">
                      <a class="page-scroll">Scoring</a>
                    </li>
                  </router-link>
                  <router-link to="/">
                    <li class="nav-item">
                      <a class="page-scroll">Dashboard</a>
                    </li>
                  </router-link>
                  <li class="nav-item">
                    <a @click="logout" role="button" class="page-scroll">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="activities" class="features_area pt-120 pb-130">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section_title text-center pb-25">
            <h4
              class="title wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              Activity Portfolio
            </h4>

          </div>
        </div>
      </div>
      <div class="row ">
                <div class="pb-50 col-lg-4 col-md-6 background">
          <div
            class=" single_features text-center mt-60 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
          >
            <router-link to="/activities/dictionary">
              <img id="img" src="assets/images/dictionary.svg" />
              <h4 class="features_title">Picture Dictionary</h4>
              <p>
                Features simple pictures of objects under various categories. The colors can be customized to the child's preference.
              </p>
            </router-link>
          </div>
        </div>

               <div class="pb-50 col-lg-4 col-md-6 background">
          <div
            class=" single_features text-center mt-60 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
          >
            <router-link to="/activities/complexity">
              <img id="img" src="assets/images/complexity.svg" />
              <h4 class="features_title">Complexity Cards</h4>
              <p>
                Helps in improving visual complexity. The target image is presented in a increasing complexity of background information.
              </p>
            </router-link>
          </div>
        </div>

        <div class="pb-50 col-lg-4 col-md-6 background">
          <div
            class=" single_features text-center mt-60 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
          >
            <router-link to="/activities/salient">
              <img id="img" src="assets/images/salient.svg" />
              <h4 class="features_title">Salient Features</h4>
              <p>
                Based on the work of Dr Roman-Lantzy. Salient features are the defining elements that distinguish one target from another.
              </p>
            </router-link>
          </div>
        </div>

 

        
        <div class="pb-50 col-lg-4 col-md-6 background">
          <div
            class=" single_features text-center mt-60 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
          >
            <router-link to="/activities/fluid">
              <img id="img" src="assets/images/lightbox.svg" />
              <h4 class="features_title">Virtual Lightbox</h4>
              <p>
                A digital alternative to the traditional light boxes. Helps with visual skills as well as visuomotor and visual-perceptual skills.
              </p>
            </router-link>
          </div>
        </div>
        <div class="pb-50 col-lg-4 col-md-6 background">
          <div
            class=" single_features text-center mt-60 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
          >
            <router-link to="/activities/movement">
              <img id="img" src="assets/images/movement.svg" />
              <h4 class="features_title">Need for Movement</h4>
              <p>
                One of the CVI characteristics in which movement helps to see an object. The activity could be used for assessment as well.
              </p>
            </router-link>
          </div>
        </div>
<div class="pb-50 col-lg-4 col-md-6 background">
          <div
            class=" single_features text-center mt-60 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
          >
            <router-link to="/activities/bubble">
              <img id="img" src="assets/images/bubble.svg" />
              <h4 class="features_title">Bubble Words</h4>
              <p>
                Intended for Phase III, this tool reduces visual complexity by highlighting the shape of the words in the preferred color.
              </p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
#img {
  display: inline-block;
  width: 20%;
}
.background {
  /* background-color: rgb(250, 250, 250); */
}
a {
    text-decoration: none;
}
</style>
