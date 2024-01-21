<template>
    <slot></slot>
	<!-- <div class="min-h-screen flex flex-col">
		<header class="bg-base-200 text-base-content">
			<div class="max-w-screen-lg mx-auto px-4">
				<div class="navbar">
					<div class="navbar-start">
						<NuxtLink to="/" class="btn btn-ghost">
							<img
								src="/postr-proto-300-transparent.png"
								alt="Postr"
								class="h-8 object-contain dark:hidden"
							/>
							<img
								src="/postr-proto-300-white-transparent.png"
								alt=""
								class="h-8 object-contain hidden dark:block"
							/>
						</NuxtLink>
					</div>
					<div class="navbar-end flex-col xs:flex-row gap-2">
						<ThemeSelector />
						<NuxtLink class="btn" to="/">Log In</NuxtLink>
					</div>
				</div>
			</div>
		</header>
		<div>
			<div class="max-w-screen-lg mx-auto px-4">
				<slot></slot>
			</div>
		</div>
		<footer class="mt-auto bg-base-200 text-base-content">
			<div class="max-w-screen-lg mx-auto">
				<div class="footer p-10">
					<aside>
						<img src="/postr-proto-icon-200.png" class="h-14 -rotate-12" />
						<p>
							An algorithmic platform<br />connecting advertisers with
							influencers
						</p>
					</aside>
					<nav>
						<header class="footer-title">Advertisers</header>
						<a class="link link-hover">Onboarding</a>
						<a class="link link-hover">Testimonials</a>
						<a class="link link-hover">Referral Program</a>
						<a class="link link-hover">How Postr Works</a>
					</nav>
					<nav>
						<header class="footer-title">Influencers</header>
						<a class="link link-hover">Onboarding</a>
						<a class="link link-hover">Resources</a>
						<a class="link link-hover">Referral Program</a>
						<a class="link link-hover">Press Kit</a>
					</nav>
					<nav>
						<header class="footer-title">Legal</header>
						<a class="link link-hover">Terms of Use</a>
						<a class="link link-hover">Privacy Policy</a>
					</nav>
				</div>

				<p class="text-sm text-right my-4 px-4">
					&copy; 2023 Postr. All Rights Reserved.
				</p>
			</div>
		</footer>
	</div> -->
</template>

<script setup lang="ts">
</script>
