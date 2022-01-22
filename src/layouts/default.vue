<template>
	<div>
		<nav-bar />
		<div class="container">
			<router-view />
		</div>
		<side-bar />
	</div>
</template>

<script>
import NavBar from "@/components/layout/NavBar.vue";
import SideBar from "@/components/layout/SideBar.vue";
export default {
	components: { NavBar, SideBar },
	setup() {},
};
</script>


