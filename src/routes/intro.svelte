<script>
  import { faTwitter, faGithub, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
</script>


<div class="bg-gray-800 text-white py-12 text-center">
  <img src="avatar.png" alt="Jake Farrell" class="rounded-full w-48 h-48 mx-auto mb-4 transform hover:scale-110 transition duration-300">
  <h1 class="text-3xl font-bold mb-2">Jake Farrell</h1>
  <p class="text-lg mb-6">Student & Full-Stack Software Engineer</p>
  <div class="flex justify-center">
    <a href="https://twitter.com/your-twitter-handle" target="_blank" class="hover:text-blue-500 transform hover:scale-110 transition duration-300">
      <FontAwesomeIcon icon={faTwitter} class="text-white text-2xl mr-4" />
    </a>
    <a href="https://github.com/your-github-username" target="_blank" class="hover:text-gray-700 transform hover:scale-110 transition duration-300">
      <FontAwesomeIcon icon={faGithub} class="text-white text-2xl mr-4" />
    </a>
    <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" class="hover:text-blue-700 transform hover:scale-110 transition duration-300">
      <FontAwesomeIcon icon={faLinkedin} class="text-white text-2xl mr-4" />
    </a>
    <a href="https://www.instagram.com/your-instagram-handle" target="_blank" class="hover:text-pink-500 transform hover:scale-110 transition duration-300">
      <FontAwesomeIcon icon={faInstagram} class="text-white text-2xl mr-4" />
    </a>
    <a href="https://www.facebook.com/your-facebook-profile" target="_blank" class="hover:text-blue-800 transform hover:scale-110 transition duration-300">
      <FontAwesomeIcon icon={faFacebook} class="text-white text-2xl" />
    </a>
  </div>
  <div class="pt-6">
  <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 mt-4">
    <FontAwesomeIcon icon={faPenToSquare} />
    Read My Blog
  </a>
</div>
</div>

