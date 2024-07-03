<script>
  import { faPenToSquare, faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons';
  import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { base } from '$app/paths';
</script>


<div class="bg-gray-800 text-white py-12 text-center">
  <img src="jake.webp" alt="Jake Farrell" class="rounded-full w-48 h-48 mx-auto mb-4 transform hover:scale-110 transition duration-300">
  <h1 class="text-3xl font-bold mb-2">Jake Farrell</h1>
  <p class="text-lg mb-6">Student & Full-Stack Software Engineer</p>
  <div class="flex justify-center">
    <a href="https://github.com/CheeseLad" target="_blank" class="hover:text-gray-700 transform hover:scale-110 transition duration-300">
      <FontAwesomeIcon icon={faGithub} class="text-white text-3xl mr-4" />
    </a>
    <a href="https://www.linkedin.com/in/jake-farrell-2a4674239" target="_blank" class="hover:text-blue-700 transform hover:scale-110 transition duration-300">
      <FontAwesomeIcon icon={faLinkedin} class="text-white text-3xl mr-4" />
    </a>
    <a href="https://www.instagram.com/jakefarrell2003" target="_blank" class="hover:text-pink-500 transform hover:scale-110 transition duration-300">
      <FontAwesomeIcon icon={faInstagram} class="text-white text-3xl mr-4" />
    </a>
    <a href="mailto:jake_farrell@outlook.com" class="hover:text-blue-500 transform hover:scale-110 transition duration-300">
      <FontAwesomeIcon icon={faEnvelope} class="text-white text-3xl" />
    </a>
  </div>
  <div class="pt-6">
    <a href="{base}/Jake_Farrell_CV_2024.pdf" target="_blank" rel="noopener noreferrer" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 mt-4 mx-1">
      <FontAwesomeIcon icon={faEnvelope} />
      Contact Me
    </a>
    <!--<a href="{base}/Jake_Farrell_CV_2024.pdf" target="_blank" rel="noopener noreferrer" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 mt-4 mx-1">
      <FontAwesomeIcon icon={faFileLines} />
      Résumé / CV
    </a>-->
  <a href="https://docs.jakefarrell.ie" target="_blank" rel="noopener noreferrer" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 mt-4 mx-1">
    <FontAwesomeIcon icon={faPenToSquare} />
    Homelab Docs
  </a>
</div>
</div>

