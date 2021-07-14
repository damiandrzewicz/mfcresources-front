<template>
    <v-container fluid fill-height>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="4">
                <v-card width="500" >
                    <v-card-title>Subversion Login</v-card-title>
                    <v-card-text>
                        <form>
                            <v-text-field
                                label="Username"
                                required
                            ></v-text-field>
                            <v-text-field
                                label="Password"
                                required
                                type='password'
                            ></v-text-field>
                            <v-btn
                            class="mr-4"
                            @click="submit"
                            >
                            submit
                            </v-btn>
                            <v-btn @click="clear">
                            clear
                            </v-btn>
                        </form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>


    </v-container>
<!-- <div class="d-flex justify-center align-center">
    <v-card width="500" >
        <v-card-title>Subversion Login</v-card-title>
        <v-card-text>
            <form>
                <v-text-field
                    label="Username"
                    required
                ></v-text-field>
                <v-text-field
                    label="Password"
                    required
                    type='password'
                ></v-text-field>
            </form>
        </v-card-text>
    </v-card>
</div> -->


</template>

<script>
export default {
    name: 'Login',
    setup(){

    }
}
</script>

<style>

</style>