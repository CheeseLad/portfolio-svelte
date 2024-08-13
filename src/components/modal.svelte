<script>
  import { onDestroy } from 'svelte';
  import { faTimes } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

  export let isOpen = false;
  export let imageSrc = '';
  export let title = '';
  export let onClose = () => {};

  function closeModal() {
    onClose();
  }

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  document.addEventListener('keydown', handleKeyDown);
  onDestroy(() => {
    document.removeEventListener('keydown', handleKeyDown);
  });
</script>

{#if isOpen}
  <div 
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    on:click={handleOutsideClick}
  >
    <div class="bg-white rounded-lg overflow-hidden max-w-lg w-full relative">
      <button
      on:click={closeModal}
      class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black text-white rounded-full transition-colors duration-105 hover:bg-gray-600"
    >
      <FontAwesomeIcon icon={faTimes} class="text-xl" />
    </button>
      <img src={imageSrc} alt={title} class="w-full h-auto" />
      <div class="p-4 flex justify-between items-center">
        <h3 class="text-2xl font-bold">{title}</h3>
        <a href={imageSrc} download={title} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Download
        </a>
      </div>
    </div>
  </div>
{/if}
