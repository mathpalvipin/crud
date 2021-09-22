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

  <section class="features_area pt-120 pb-130">
    <h4
      class=" section_title text-center title"
    >
      Frequently Asked Questions
    </h4>
    <div
      class="accordion"
      id="accordion"
      role="tablist"
      aria-multiselectable="true"
    >
      <div class="card">
        <div class="card-header p-0" role="tab" id="headingOne">
          <h5 class="mb-0">
            <a
              class="collapsed link-dark text-decoration-none d-block p-3"
              data-toggle="collapse"
              href="#collapseOne"
              role="button"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Q1
            </a>
          </h5>
        </div>
        <!-- /.card-header -->
        <div
          id="collapseOne"
          class="collapse"
          role="tabpanel"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="card-body">
            A1
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.collapse -->
      </div>
      <!-- /.card -->
      <div class="card">
        <div class="card-header p-0" role="tab" id="headingTwo">
          <h5 class="mb-0">
            <a
              class="collapsed link-dark text-decoration-none d-block p-3"
              data-toggle="collapse"
              href="#collapseTwo"
              role="button"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Q2
            </a>
          </h5>
        </div>
        <!-- /.card-header -->
        <div
          id="collapseTwo"
          class="collapse"
          role="tabpanel"
          aria-labelledby="headingTwo"
          data-parent="#accordion"
        >
          <div class="card-body">
            A2
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.collapse -->
      </div>
      <!-- /.card -->
      <div class="card">
        <div class="card-header p-0" role="tab" id="headingThree">
          <h5 class="mb-0">
            <a
              class="collapsed link-dark text-decoration-none d-block p-3"
              data-toggle="collapse"
              href="#collapseThree"
              role="button"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Q3
            </a>
          </h5>
        </div>
        <!-- /.card-header -->
        <div
          id="collapseThree"
          class="collapse"
          role="tabpanel"
          aria-labelledby="headingThree"
          data-parent="#accordion"
        >
          <div class="card-body">
            A3
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.collapse -->
      </div>
      <!-- /.card -->
      <div class="card">
        <div class="card-header p-0" role="tab" id="headingFour">
          <h5 class="mb-0">
            <a
              class="collapsed link-dark text-decoration-none d-block p-3"
              data-toggle="collapse"
              href="#collapseFour"
              role="button"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Q4
            </a>
          </h5>
        </div>
        <!-- /.card-header -->
        <div
          id="collapseFour"
          class="collapse"
          role="tabpanel"
          aria-labelledby="headingFour"
          data-parent="#accordion"
        >
          <div class="card-body">
            A4
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.collapse -->
      </div>
      <!-- /.card -->
      <div class="card">
        <div class="card-header p-0" role="tab" id="headingFive">
          <h5 class="mb-0">
            <a
              class="collapsed link-dark text-decoration-none d-block p-3"
              data-toggle="collapse"
              href="#collapseFive"
              role="button"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Q5
            </a>
          </h5>
        </div>
        <!-- /.card-header -->
        <div
          id="collapseFive"
          class="collapse"
          role="tabpanel"
          aria-labelledby="headingFive"
          data-parent="#accordion"
        >
          <div class="card-body">
            A5
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.collapse -->
      </div>
      <!-- /.card -->
      <div class="card">
        <div class="card-header p-0" role="tab" id="headingThree">
          <h5 class="mb-0">
            <a
              class="collapsed link-dark text-decoration-none d-block p-3"
              data-toggle="collapse"
              href="#collapseSix"
              role="button"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Q6
            </a>
          </h5>
        </div>
        <!-- /.card-header -->
        <div
          id="collapseSix"
          class="collapse"
          role="tabpanel"
          aria-labelledby="headingSix"
          data-parent="#accordion"
        >
          <div class="card-body">
            A6
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.collapse -->
      </div>
      <!-- /.card -->
    </div>
    <!-- /#accordion -->
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  margin-top: 10px;
}

.accordion {
  margin: 3% 5% 5% 5%;
}

#accordion .card-header a[data-toggle="collapse"]::after {
  float: right;
  padding: 0.75rem;
  content: "";
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='%23333' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z'/></svg>"); /* Chevron up */
  background-repeat: no-repeat;
  background-size: 1.25rem;
}
#accordion .card-header a[data-toggle="collapse"].collapsed::after {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='%23333' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z'/></svg>"); /* Chevron down */
}
</style>
