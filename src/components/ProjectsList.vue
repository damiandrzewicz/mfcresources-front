<template>
  <div>
    
    <v-data-table v-if="!loading" :headers="headers" :items="items"></v-data-table>
    
    <div v-else class="d-flex justify-center align-center flex-column">
      <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
      <div>Loading...</div>
    </div>
    <AddProjectModalDialog/>
  </div>

</template>

<script>
import { onMounted, ref } from '@vue/composition-api'
import AddProjectModalDialog from '@/components/AddProjectModalDialog'
import projectsApi from '@/api/ProjectsApi'

export default {
    name: 'ProjectsList',
    props: [],
    components: { AddProjectModalDialog },
    setup(){
      const headers = ref([
          { text: 'Name', aligm: 'start', sortable: false, value: 'name' },
          { text: 'Revision', sortable: false, value: 'revision' },
      ])

      const items = ref(null);
      let errored = ref(false);
      let loading = ref(true);

      onMounted(() => {
        projectsApi.getProjects()
          .then(data => {
            items.value = data;
          })
          .catch(error => {
            console.log(error)
            errored.value = true
          })
          .finally(() => {
            console.log('loading')
            loading.value = false}
          )
      });

      return { headers, items, errored, loading }
    }
}
</script>

<style>

</style>