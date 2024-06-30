<script>
  import "../app.css";
  import Intro from '../components/intro.svelte';
  import Footer from '../components/footer.svelte';
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{$page.url.pathname.replaceAll('-', ' ')}</title> 
</svelte:head>

<Intro />

<main in:fade>
  <slot />
</main>

<Footer />