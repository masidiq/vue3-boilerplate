<template>
	<div>
		<flight-search-form />
	</div>
</template>

<script>
import FlightSearchForm from "@/components/flight/FlightSearchForm.vue";
export default {
	meta: {
		layout: "booking-layout",
	},
	components: { FlightSearchForm },
};
</script>