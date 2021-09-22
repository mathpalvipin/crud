<template>
  <section class="header_area">
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
                  <router-link to="/activities">
                    <li class="nav-item">
                      <a class="page-scroll">Activities</a>
                    </li>
                  </router-link>
                  <li class="nav-item">
                    <a class="page-scroll active">Scoring</a>
                  </li>
                  <router-link to="/dashboard">
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
        <base-dialog
          :show="!!error"
          title="An error occurred"
          @close="handleError"
        >
          <p>{{ error }}</p>
        </base-dialog>
        <base-dialog :show="isLoading" title="Submitting..." fixed>
          <base-spinner></base-spinner>
        </base-dialog>
        <base-dialog :show="sent" title="Sent!" @close="handleSent">
        </base-dialog>
        <div class="container">
          <h4 class="title section_title text-center">Scoring CVI characteristics</h4>
          <ul style="margin-bottom: 50px" class="list-items">
            <li v-for="item in list" :key="item.id" class="menu-item">
              <b>{{ item.id }}. {{ item.characteristic }}</b>
              <div class="selectWrap">
                <select class="select" @change="sum" v-model="item.value">
                  <option
                    v-for="option in item.options"
                    :value="option.value"
                    :key="option.text"
                  >
                    {{ option.text }}
                  </option>
                </select>
              </div>
            </li>
          </ul>
          <h3>Total Score: {{ total }}</h3>
          <h3>Presumed Phase of CVI: {{ phase }}</h3>
        </div>
        <hr />
        <div class="report" id="pdf">
          <br />
          <h3>CVI Score Report</h3>
          <br />
          <form style="margin-left:25%">
            <p>
              <label>Child's Name: </label>
              <input v-model="childName" type="text" />
            </p>
            <br />
            <p>
              <label>Examiner's Name: &nbsp;</label>
              <input v-model="examinerName" type="text" />
            </p>
            <br />
            <p>
              <label>Date: {{ date }}</label>
            </p>
            <br />
          </form>

          <table>
            <tr>
              <th style="width:10%">No.</th>
              <th style="width:50%">Characteristic</th>
              <th style="width:20%">Specific Score</th>
            </tr>
            <tr v-for="item in list" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.characteristic }}</td>
              <td>{{ item.value }}</td>
            </tr>
          </table>

          <br />
          <div>
            <b>Total Score: {{ total }}</b
            ><br /><br />
            <b>Presumed Phase of CVI: {{ phase }}</b>
          </div>
          <!-- <br /><br />
      <button data-html2canvas-ignore="true" @click="emailSubmit" id="submitbutton">Send to email</button> -->
          <br /><br />
          <button data-html2canvas-ignore="true" @click="pdf">
            Save as PDF
          </button>
          <br /><br />
          <button
            data-html2canvas-ignore="true"
            @click="$router.push('activities')"
          >
            Back to activities
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
  data() {
    return {
      date: new Date().toDateString(),
      isLoading: false,
      sent: false,
      error: null,
      childName: "",
      examinerName: "",
      show: false,
      total: 0,
      phase: "Phase I",
      list: [
        {
          id: 1,
          value: 0,
          characteristic: "Colour Preference",
          options: [
            { text: "Single color", value: 0 },
            { text: "Has favourite color", value: 0.25 },
            { text: "Two to three favourite colors", value: 0.5 },
            { text: "More colors – familiar patterns", value: 0.75 },
            { text: "No color or pattern preferences", value: 1 },
          ],
        },
        {
          id: 2,
          value: 0,
          characteristic: "Need for Movement",
          options: [
            { text: "Object in movement / reflective properties", value: 0 },
            {
              text:
                "More consistent localization / brief fixations on movement or reflective properties",
              value: 0.25,
            },
            { text: "Movement to initiate visual attention", value: 0.5 },
            { text: "Movement not required at near", value: 0.75 },
            { text: "Typical responses to moving targets", value: 1 },
          ],
        },
        {
          id: 3,
          value: 0,
          characteristic: "Visual Latency",
          options: [
            { text: "Prolonged periods of visual latency", value: 0 },
            {
              text:
                "Latency slightly decreases after periods of consistent viewing",
              value: 0.25,
            },
            { text: "Only if tired, stressed or over stimulated", value: 0.5 },
            { text: "Latency rarely present", value: 0.75 },
            { text: "Latency resolved", value: 1 },
          ],
        },
        {
          id: 4,
          value: 0,
          characteristic: "Visual Field Preferences",
          options: [
            { text: "Distant field dependency", value: 0 },
            { text: "Shows visual preferences", value: 0.25 },
            { text: "Decreasing with familiar input", value: 0.5 },
            {
              text: "May alternate the use of right and left fields",
              value: 0.75,
            },
            { text: "Visual fields unrestricted", value: 1 },
          ],
        },
        {
          id: 5,
          value: 0,
          characteristic: "Difficulties with Visual Complexities",
          options: [
            {
              text:
                "Respond only in strict environments – no regard for human face",
              value: 0,
            },
            {
              text: "Usually fixates when the environment is controlled",
              value: 0.25,
            },
            {
              text:
                "Tolerates familiar background noise. Regards familiar faces even when voice does not compete",
              value: 0.5,
            },
            {
              text:
                "Complete auditory stimuli tolerated during period of viewing. Might now maintain visual attention on musical toys. Views simple books or symbols. Regards familiar and new faces",
              value: 0.75,
            },
            {
              text:
                "Only the most complex visual environments affect visual response. Views books or other two-dimensional materials. Typical visual / social responses",
              value: 1,
            },
          ],
        },
        {
          id: 6,
          value: 0,
          characteristic: "Light Gazing and Non-purposeful Gaze",
          options: [
            { text: "Light gazing and non-purposeful gaze", value: 0 },
            {
              text:
                "Less attracted to lights, can be redirected to other targets",
              value: 0.25,
            },
            { text: "Light is no longer a detractor", value: 0.5 },
            { text: "N/A", value: 0.75 },
            { text: "N/A", value: 1 },
          ],
        },
        {
          id: 7,
          value: 0,
          characteristic: "Difficulty with Distant Viewing",
          options: [
            { text: "Visually attends in near space only", value: 0 },
            {
              text:
                "Occasional visual attention to familiar or moving targets at 2 – 3 feet",
              value: 0.25,
            },
            { text: "Extends beyond upto 4 to 6 feet", value: 0.5 },
            { text: "10 feet with targets that produce movement", value: 0.75 },
            {
              text:
                "Extends beyond 20 feet, demonstrates memory of visual events",
              value: 1,
            },
          ],
        },
        {
          id: 8,
          value: 0,
          characteristic: "Atypical Visual Reflexes",
          options: [
            {
              text: "No blinks in response to touch and/or visual threat",
              value: 0,
            },
            {
              text: "Blinks in response to touch, but response may be latent",
              value: 0.25,
            },
            { text: "BR to touch consistently present", value: 0.5 },
            {
              text: "Visual threat response consistently present",
              value: 0.75,
            },
            { text: "Visual reflexes present", value: 1 },
          ],
        },
        {
          id: 9,
          value: 0,
          characteristic: "Difficulty with Novelty",
          options: [
            {
              text: "Visual attention to only favorite or known objects",
              value: 0,
            },
            {
              text:
                "Tolerate novel objects that share characteristics of familiar objects",
              value: 0.25,
            },
            {
              text: "Use of known objects to initiate looking sequence",
              value: 0.5,
            },
            {
              text:
                "Selection of objects is less restricted, one or two sessions of warm-up time required",
              value: 0.75,
            },
            { text: "Selection of objects not restricted", value: 1 },
          ],
        },
        {
          id: 10,
          value: 0,
          characteristic: "Absence of Visually Guided Reach",
          options: [
            {
              text:
                "Look and touch occurs as separate functions. Look and touch occurs with large and/or moving objects",
              value: 0,
            },
            {
              text:
                "Look and touch occur with smaller objects that are familiar, lighted or reflective. Look and touch are still separate",
              value: 0.25,
            },
            {
              text:
                "Look and touch occurs with familiar objects / favourite color",
              value: 0.5,
            },
            {
              text:
                "Look and touch occurs in rapid sequence, but not always together",
              value: 0.75,
            },
            { text: "Look and touch occur together consistently", value: 1 },
          ],
        },
      ],
    };
  },

  methods: {
    emailSubmit() {
      this.isLoading = true;

      const scriptURL =
        "https://script.google.com/macros/s/AKfycbwYWzQu-o3_D6MMmIpHMqeDeXzWcJwEWFNyZF5hp_w0C1cMSQF69pngaw-kV2aJOgw9OA/exec";

      var data = new FormData();
      let object = {
        date: this.date,
        c_name: this.childName,
        e_name: this.examinerName,
        c1: this.list[0].value,
        c2: this.list[1].value,
        c3: this.list[2].value,
        c4: this.list[3].value,
        c5: this.list[4].value,
        c6: this.list[5].value,
        c7: this.list[6].value,
        c8: this.list[7].value,
        c9: this.list[8].value,
        c10: this.list[9].value,
        total: this.total,
        phase: this.phase,
      };

      Object.keys(object).forEach((key) => data.append(key, object[key]));

      console.log([...data]);

      fetch(scriptURL, { method: "POST", body: data })
        .then(() => {
          this.isLoading = false;
          this.sent = true;
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
    handleSent() {
      this.sent = false;
    },
    pdf() {
      var element = document.getElementById("pdf");
      var opt = {
        margin: [10, 20, 0, 0],
        filename: this.childName + " - CVI Score Report.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: {
          dpi: 300,
          scale: 4,
          letterRendering: true,
          useCORS: true,
        },
        pagebreak: { mode: ["css"] },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };
      html2pdf()
        .set(opt)
        .from(element)
        .save();
    },
    sum() {
      let arr = [];
      for (let i = 0; i < this.list.length; i++) {
        arr.push(this.list[i].value);
      }
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      this.total = sum;
      this.phaseCal();
    },
    phaseCal() {
      if (this.total <= 3) {
        this.phase = "Phase I";
      } else if (this.total > 3 && this.total <= 7) {
        this.phase = "Phase II";
      } else {
        this.phase = "Phase III";
      }
    },
  },
};
</script>

<style scoped>
form {
  display: table;
  margin-left: 25%;
}
p {
  display: table-row;
}
label {
  display: table-cell;
  text-align: left;
}
input {
  display: table-cell;
}

table {
  border-collapse: collapse;
  width: 50%;
  text-align: left;
  margin-left: 25%;
  margin-top: 0px;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.report {
  position: relative;
  margin-bottom: 100px;
}

.base {
  height: 100vh;
  width: 100vw;
  position: absolute;
}
.base {
  overflow-y: auto;
}

/* .container {
  margin-bottom: 50px;
} */

.list-items {
  list-style: none;
  padding: 0;
  align-items: flex-start;
  margin-top: 40px;
}

.list-items p {
  color: rgb(32, 32, 32);
  font-size: 1em;
}

.menu-item {
  margin: 0 0 30px 0;
  text-align: left;
  margin-left: 10%;
}

.select {
  width: 90%;
  height: 39px;
  -webkit-border-radius: 0px 4px 4px 0px/5px 5px 4px 4px;
  -moz-border-radius: 0px 4px 4px 0px/0px 0px 4px 4px;
  border-radius: 0px 4px 4px 0px/5px 5px 4px 4px;
  background-color: #fff;
  -webkit-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
  border: solid 1px #cbc9c9;
  margin-left: -5px;
  margin-top: 13px;
  padding-left: 10px;
  font-size: 1em;
}
</style>
