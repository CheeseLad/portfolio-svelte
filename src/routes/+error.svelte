<script>
  import { page } from '$app/stores';
  import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import Returnhome from '../components/returnhome.svelte';
</script>

<svelte:head>
  <title>{$page.status} {$page.error.message} | Jake Farrell</title>
	<meta name="description" content="Jake Farrell's Portfolio" />
  <script defer data-domain="jakefarrell.ie" src="https://plausible.jakefarrell.ie/js/script.js"></script> 
</svelte:head>


<div class="container mx-auto py-12">
  <h2 class="text-3xl font-bold text-center mb-8">{$page.status} {$page.error.message}</h2>
  <p class="text-center">Please check that the page you entered is correct</p>
  <p class="text-center">Here's a cat GIF while you're here:</p>
  <div class="relative m-2 overflow-hidden rounded-xl transition-transform duration-300 transform hover:scale-105">
    <img src="cat.gif" alt="Cat GIF" class="mx-auto my-4 object-cover rounded-xl overflow-hidden" />
  </div>
  <Returnhome />
</div>
