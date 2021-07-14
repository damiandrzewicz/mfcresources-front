<template>
  <v-container>
    <h2>Local Projects</h2>
    <ProjectsList/>
  </v-container>
</template>

<script>
// @ is an alias to /src
import ProjectsList from '@/components/ProjectsList'

export default {
  name: 'Projects',
  components: { ProjectsList }


}
</script>
