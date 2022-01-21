<template>
  <div v-cloak>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Search Flight</h5>
        <div class="row">
          <div class="col">
            <div>
              <label class="form-label"> Origin</label>
              <div class="input-group">
                <span class="input-group-text">
                  <fa-icon icon="plane-departure"
                /></span>

                <select class="form-select">
                  <option value="1">CGK - Jakarta</option>
                  <option value="2">SUB - Surabaya</option>
                  <option value="3">DPS - Denpasar Bali</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col">
            <div>
              <label class="form-label">Destination</label>

              <div class="input-group">
                <span class="input-group-text">
                  <fa-icon icon="plane-arrival"
                /></span>
                <select class="form-select">
                  <option value="1">CGK - Jakarta</option>
                  <option value="2">SUB - Surabaya</option>
                  <option value="3">DPS - Denpasar Bali</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-2">
            <div>
              <label class="form-label">Departure Date</label>

              <v-date-picker
                v-model="departureDate"
                :columns="2"
                transition="slide-h"
                :masks="masks"
                :min-date="new Date()"
                :first-day-of-week="2"
                :attributes="attrs"
              >
                <template #default="{ inputValue, showPopover }">
                  <div class="input-group">
                    <span class="input-group-text">
                      <fa-icon icon="calendar"
                    /></span>
                    <input
                      class="
                        form-control
                        bg-white
                        cursor-pointer
                        user-select-none
                      "
                      readonly
                      :value="inputValue"
                      @click="
                        showPopover({
                          showDelay: 0,
                          hideDelay: 0,
                        })
                      "
                    />
                  </div>
                </template>
              </v-date-picker>
            </div>
          </div>
          <div class="col-2">
            <div>
              <label class="form-label">
                <div class="form-check user-select-none">
                  <input
                    v-model="isRoundtrip"
                    class="form-check-input cursor-pointer"
                    type="checkbox"
                  />
                  <label
                    class="form-check-label cursor-pointer"
                    @click="isRoundtrip = !isRoundtrip"
                  >
                    Return Date
                  </label>
                </div>
              </label>
              <v-date-picker
                v-if="isRoundtrip"
                v-model="returnDate"
                :columns="2"
                transition="slide-h"
                :masks="masks"
                :min-date="departureDate"
                :first-day-of-week="2"
              >
                <template #default="{ inputValue, showPopover }">
                  <div class="input-group">
                    <span class="input-group-text">
                      <fa-icon icon="calendar"
                    /></span>
                    <input
                      class="
                        form-control
                        bg-white
                        cursor-pointer
                        user-select-none
                      "
                      readonly
                      :value="inputValue"
                      @click="
                        showPopover({
                          showDelay: 0,
                          hideDelay: 0,
                        })
                      "
                    />
                  </div>
                </template>

                <template #footer>
                  <div class="">12 Hari Waisak</div>
                </template>
              </v-date-picker>
            </div>
          </div>

          <div class="col">
            <div>
              <label class="form-label">Passenger</label>

              <div class="input-group">
                <span class="input-group-text">
                  <fa-icon icon="user-friends"
                /></span>
                <select class="form-select">
                  <option value="1">CGK - Jakarta</option>
                  <option value="2">SUB - Surabaya</option>
                  <option value="3">DPS - Denpasar Bali</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-2">
          <button class="btn btn-primary float-end" @click="search">
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      departureDate: new Date(),
      returnDate: new Date(),
      modal: null,
      isRoundtrip: false,
      masks: {
        input: "D-MMM-YYYY",
      },
      hariLiburs: [
        {
          description: "Hari Pemuda Pancasila",
          dates: ["2022-01-31"],
        },
        {
          description: "Hari Kejepit Nasional",
          dates: ["2022-2-1"],
        },
      ],
      // Attributes are supplied as an array
    };
  },
  computed: {
    attrs() {
      return this.hariLiburs.map((hari) => ({
        dates: hari.dates,
        bar: "red",
        popover: {
          label: hari.description,
        },
      }));
    },
  },

  mounted() {},
  methods: {
    search() {
      this.$router.push("/flight/oneway");
    },
  },
};
</script>
