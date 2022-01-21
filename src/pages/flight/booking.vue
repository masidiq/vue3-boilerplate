<route>
{  
	"meta": { 
		"title": "Booking Flight"
  }
}
</route>

<template>
	<div class="mb-5">
		<h3>Booking Flight</h3>
		<div class="text-muted">Fill in details</div>
		<div class="row">
			<div class="col-8">
				<div class="card mt-2 mb-4">
					<div class="card-body">
						Logged in As Sidiq<br />
						Company SITE ADMINISTRATOR
					</div>
				</div>
				<contact-form />
				<passenger-form />
				<button class="btn btn-primary btn-lg mt-3 float-end">Continue</button>
			</div>
			<div class="col">
				<flight-summary />
			</div>
		</div>
	</div>
</template>
<script>
import ContactForm from "@/components/flight/form/ContactForm.vue";
import PassengerForm from "@/components/flight/form/PassengerForm.vue";
import FlightSummary from "@/components/flight/form/FlightSummary.vue";
export default {
	components: { ContactForm, PassengerForm, FlightSummary },
};
</script>