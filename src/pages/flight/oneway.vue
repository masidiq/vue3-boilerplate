<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Airline</th>
          <th>Origin</th>
          <th>Destination</th>
          <th>Duration</th>
          <th>Class</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in departureFlight" :key="item.Id">
          <td>
            {{ item.AirlineName }} <br />
            {{ item.Number }}
          </td>
          <td>
            {{ item.Origin }} <br />
            {{ item.DepartTime }}
          </td>
          <td>
            {{ item.Destination }} <br />
            {{ item.ArriveTime }}
          </td>

          <td>{{ item.Duration }}</td>
          <td>{{ item.Fare }}</td>
          <td>
            <button class="btn btn-primary" @click="select(item.Id)">
              Select
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  data() {
    return {
      schedules: null,
      modalHarga: null,
    };
  },
  computed: {
    departureFlight() {
      if (!this.schedules) {
        return [];
      }

      return this.schedules[0].Flights;
    },
  },

  mounted() {
    this.search();
  },

  methods: {
    async search() {
      const response = await this.$axios.$get("/dummy/oneway.json");
      this.schedules = response.data.Schedules;
    },
    select(id) {
      const query = {
        flightId: id,
      };
      this.$router.push({
        path: "/flight/booking",
        query,
      });
    },
  },
};
</script>