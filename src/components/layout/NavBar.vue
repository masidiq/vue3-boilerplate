<template>
	<header class="p-3 mb-3 border-bottom">
		<div class="container">
			<div
				class="
					d-flex
					flex-wrap
					align-items-center
					justify-content-center justify-content-lg-start
				"
			>
				<a
					data-bs-toggle="offcanvas"
					href="#offcanvasExample"
					role="button"
					aria-controls="offcanvasExample"
					class="p-2 me-2 me-auto me-sm-0"
				>
					<fa-icon icon="bars" />
				</a>
				<a
					href="/"
					class="
						d-flex
						align-items-center
						mb-2 mb-lg-0
						me-auto
						text-dark text-decoration-none
					"
				>
					<img class="bi me-2" height="32" role="img" src="/opsigo-new.png" />
				</a>

				<ul
					class="nav col-auto mb-3 mb-lg-0 ms-lg-auto me-lg-3 d-none d-md-block"
				>
					<li>
						<a href="/Manage" class="nav-link px-2 link-dark">Manage Booking</a>
					</li>
				</ul>

				<div class="dropdown text-end">
					<a
						id="dropdownUser1"
						href="#"
						class="d-block link-dark text-decoration-none dropdown-toggle"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<img
							src="https://github.com/mdo.png"
							alt="mdo"
							width="32"
							height="32"
							class="rounded-circle"
						/>
					</a>
					<ul
						class="dropdown-menu dropdown-menu-end text-small"
						aria-labelledby="dropdownUser1"
					>
						<li><a class="dropdown-item" href="#">Profile</a></li>
						<li><hr class="dropdown-divider" /></li>
						<li><a class="dropdown-item" href="#">Sign out</a></li>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>