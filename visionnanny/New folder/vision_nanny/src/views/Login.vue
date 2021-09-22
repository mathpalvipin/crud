<template>
  <section
    id="contact"
    class="single_hero d-flex align-items-center"
    style="background-color: black; height:100vh"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div>
          <div class="section_title section_title_2 text-center pb-25">
      
                  <p
                  class="wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  Currently Vision Nanny is in development and the access to activities is restricted to authorized users only. Please contact us if you are interested in becoming an early adopter.
                </p>
            <base-dialog
              :show="!!error"
              title="An error occurred"
              @close="handleError"
              :message="error"
            >
            </base-dialog>
            <base-dialog :show="isLoading" title="Authenticating..." fixed>
              <base-spinner></base-spinner>
            </base-dialog>
            <form
              @submit.prevent="submitForm"
              class="wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.4s"
            >
              <div>
                <div class="single_form">
                  <input
                    style="width:35vw; height:6vh"
                    type="password"
                    id="password"
                    autocomplete="on"
                    placeholder="Enter Password"
                    v-model.trim="password"
                  />

                  <div class="single_form text-center">
                    <base-button>Login</base-button>
                  </div>
                  <router-link to="/">
                    <div class="single_form text-center">
                      <base-button>Back</base-button>
                    </div>
                  </router-link>
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
export default {
  data() {
    return {
      email: "test@visionnanny.com",
      password: "",
      isLoading: false,
      error: null,
    };
  },

  methods: {
    async submitForm() {
      this.isLoading = true;

      const actionPayload = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch("login", actionPayload);

        const redirectUrl = "/" + (this.$route.query.redirect || "activities");
        this.$router.replace(redirectUrl);
          
      } catch {
        this.error =
          "Authentication failed, please check your password and try again";
      }

      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  computed: {
  didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    }
  },
  created() {
    this.$store.dispatch('tryLogin');
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/login');
      } 
    }
  }
}
</script>




<style>
  
</style>

