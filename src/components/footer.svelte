<script>
  // You may need to import Font Awesome icons
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

  // Your email address
  const name = 'Jake Farrell';
  const emailAddress = 'jake_farrell@outlook.com';
</script>

<footer class="bg-gray-800 text-white py-4">
  <div class="container mx-auto flex justify-center items-center">
    <p class="text-xl font-semibold">{name}</p>
    <a href={`mailto:${emailAddress}`} class="ml-2 text-xl">
      <FontAwesomeIcon icon={faEnvelope} />
    </a>
  </div>
</footer>