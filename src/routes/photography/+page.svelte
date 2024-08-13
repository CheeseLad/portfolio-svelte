<script>
  import Photography from "../../components/photography.svelte";
  let pageText = 'Photography';
</script>

<svelte:head>
  <title>{pageText} | Jake Farrell</title>
  <meta property="og:title" content="{pageText} | Jake Farrell">
  <meta name="twitter:title" content="{pageText} | Jake Farrell">
</svelte:head>

<div>
  <Photography />

</div>

