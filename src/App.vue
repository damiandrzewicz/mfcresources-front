<template>
  <v-app>

    <AppBar/>

    <v-main>
        <LoginModalDialog/>
        <router-view/>
    </v-main>

  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar'
import LoginModalDialog from '@/components/LoginModalDialog'

export default {
  name: 'App',
  components: { AppBar, LoginModalDialog },
  data: () => ({
    //
  }),
};
</script>
