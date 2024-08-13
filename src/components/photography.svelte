<script>
  import skillsData from '../data/photography.json';
  import Modal from './modal.svelte';
  import Returnhome from './returnhome.svelte';

  let selectedSkill = null;
  let isModalOpen = false;

  function openModal(skill) {
    selectedSkill = skill;
    isModalOpen = true;
  }

  function closeModal() {
    selectedSkill = null;
    isModalOpen = false;
  }
</script>

<div class="container mx-auto py-8">
  <h2 class="text-3xl font-bold mb-10 text-center">Photography</h2>
  
  <div class="grid mx-8 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {#each skillsData as skill}
      <div
        key={skill.icons}
        class="relative m-2 overflow-hidden rounded-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer"
        on:click={() => openModal(skill)}
      >
        <img
          src={skill.icons}
          alt={skill.title}
          class="object-cover w-full h-full"
          style="z-index: 1;"
        />
        <div
          class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
          style="z-index: 2;"
        >
          <div class="flex justify-between">
            <h3 class="text-xl font-bold">{skill.title}</h3>
            <div></div>
            <a
              href={skill.icons}
              download={skill.icons}
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>

  {#if selectedSkill}
    <Modal
      isOpen={isModalOpen}
      imageSrc={selectedSkill.icons}
      title={selectedSkill.title}
      onClose={closeModal}
    />
  {/if}

  <Returnhome />
</div>
