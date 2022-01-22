<template>
	<div
		class="offcanvas offcanvas-start"
		tabindex="-1"
		id="offcanvasExample"
		aria-labelledby="offcanvasExampleLabel"
	>
		<div class="offcanvas-header">
			<h5 class="offcanvas-title" id="offcanvasExampleLabel">
				<img class="bi me-2" height="32" role="img" src="/opsigo-new.png" />
			</h5>
			<button
				type="button"
				class="btn-close text-reset"
				data-bs-dismiss="offcanvas"
				aria-label="Close"
			></button>
		</div>
		<div class="offcanvas-body">
			<ul class="navbar-nav">
				<li class="nav-item active">
					<a class="nav-link" href="#"
						>Home <span class="sr-only">(current)</span></a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Features</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Pricing</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				</li>
			</ul>
		</div>
	</div>
</template>