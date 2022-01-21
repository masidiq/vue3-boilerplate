function index() {
  return import(/* webpackChunkName: "index" */ '@/pages/index.vue')
}
function flight_booking() {
  return import(
    /* webpackChunkName: "flight-booking" */ '@/pages/flight/booking.vue'
  )
}
function flight_oneway() {
  return import(
    /* webpackChunkName: "flight-oneway" */ '@/pages/flight/oneway.vue'
  )
}

export default [
  {
    name: 'index',
    path: '/',
    component: index,
  },
  {
    name: 'flight-booking',
    path: '/flight/booking',
    component: flight_booking,
    meta: {
      title: 'Booking Flight',
    },
  },
  {
    name: 'flight-oneway',
    path: '/flight/oneway',
    component: flight_oneway,
    meta: {
      title: 'Flight One Way',
    },
  },
]
