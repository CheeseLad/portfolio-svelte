<script>
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
  import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<div class="container mx-auto py-8">
  <h2 class="text-3xl font-bold mb-4 text-center">Contact</h2>
  
  <div class="grid md:grid-cols-2 gap-8">
    <!-- Contact Info -->
    <div class="flex flex-col justify-center items-center mb-16">
      <div class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 mt-4 mx-1">
      <a href="mailto:jake_farrell@outlook.com" class="text-lg text-white">
        <FontAwesomeIcon icon={faEnvelope} class="text-2xl mr-2" />Email
      </a>
    </div>
    <div class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 mt-4 mx-1">
      <a href="https://www.linkedin.com/in/yourprofile" class="text-lg text-white" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} class="text-2xl mr-2" />LinkedIn
      </a>
    </div>
    <div class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 mt-4 mx-1">
      <a href="https://github.com/yourusername" class="text-lg text-white" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} class="text-2xl mr-2" />GitHub
      </a>
    </div>
    </div>
    
    <!-- Contact Form -->
    <div class="mx-8">
      <form action="https://formspree.io/your_form_id" method="POST" class="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="_replyto" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required>
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" rows="4" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required></textarea>
        </div>
        <button type="submit" class="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  </div>
</div>
