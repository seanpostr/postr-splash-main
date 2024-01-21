<template>
  <div>
    <NuxtLayout>
      <div>
        <NuxtLoadingIndicator
          color="repeating-linear-gradient(to right,#77bdff 0%,#007aff 100%)"
        />
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Postr',
	ogTitle: 'Postr',
	// description:
	// 	'An algorithmic platform connecting advertisers with influencers',
	// ogDescription:
	// 	'An algorithmic platform connecting advertisers with influencers',
	ogImage: 'https://www.postr.com/images/png/postr-proto-600.png',
	twitterCard: 'summary_large_image',
});
</script>