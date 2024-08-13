<script>
  import "../app.css";
  import Intro from '../components/intro.svelte';
  import Footer from '../components/footer.svelte';
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <meta name="description" content="Jake Farrell's Portfolio Website | DCU Computer Science Student & Full-Stack Software Engineer">
  <meta name="keywords" content="portfolio, web developer, software engineer, homelab, career, photography, designer, Jake Farrell, Jake, dcu, dublin city university, dcumps, redbrick, dcufotosoc">
  <meta property="og:description" content="Jake Farrell's Portfolio Website | DCU Computer Science Student & Full-Stack Software Engineer">
  <meta property="og:image" content="jake.webp">
  <meta property="og:url" content="https://jakefarrell.ie">
  <meta name="twitter:card" content="Jake Farrell">
  <meta name="twitter:description" content="Jake Farrell's Portfolio Website | DCU Computer Science Student & Full-Stack Software Engineer">
  <meta name="twitter:image" content="jake.webp">
  <script defer data-domain="jakefarrell.ie" src="https://plausible.jakefarrell.ie/js/script.js"></script> 
</svelte:head>

<Intro />

<main in:fade>
  <slot />
</main>

<Footer />