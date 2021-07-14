<template>

    <div>
        <v-btn @click.stop="onToggleDialog">
            Add Project
        </v-btn>

        <v-dialog v-model="show" width="500">
            <v-card width="500" >
                <v-card-title>Subversion URL</v-card-title>
                <v-card-text>
                    Please enter URL for subversion project
                    <v-form ref="formRef" v-model="valid">
                        <v-text-field label="URL" required :rules="urlRules"></v-text-field>
                        <v-btn @click="onOk">Ok</v-btn>
                        <v-btn @click="onReset">Reset</v-btn>
                        <v-btn @click="onCancel">Cancel</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
    
</template>

<script>
import projectsApi from '@/api/ProjectsApi'
import { ref } from '@vue/composition-api'
import store from '@/store/index'
import Vue from 'vue'
import router from '@/router/index'

export default {
    name: 'AddProjectModalDialog',
    props: [],
    setup(){
        console.log('steup')
        
        // Visibility
        const show = ref(false)
        const onToggleDialog = () => {
            show.value = !show.value
            Vue.nextTick(() => onReset())
        }

        const valid = ref(true)

        const url = ref()

        const urlRules = ref([
            (value) => !!value || "Required.",
            (value) => isURL(value) || "URL is not valid",
        ])

        const isURL = (str) => {
            let url;

            try {
                url = new URL(str);
            } catch (_) {
                return false;
            }

            return url.protocol === "http:" || url.protocol === "https:";
        }

        const formRef = ref(null)

        let errored = ref(false);
        let loading = ref(true);

        const onOk = () => {
            if(!formRef.value.validate()){
                console.log('validation failed')
            }

            projectsApi.addProject({})
                .then(data => {
                    console.log(data);
                    if(data.response == 401){
                        store.commit('auth/setShowAuthDialog', true)
                    }
                    router.go();
                    onCancel();
                })
                .catch(error => {
                    console.log(error)
                    //errored.value = true
                })
                .finally(() => {
                    console.log('loading')
                    //loading.value = false}
                });

            
        }

        const onCancel = () => {
            show.value = false
        }

        const onReset = () => {
            formRef.value.reset()
            formRef.value.resetValidation()

            
        }

 
        return { 
            show, onToggleDialog, valid, errored, loading, router,
            url, urlRules, isURL, formRef,
            onOk, onCancel, onReset
        }
    }

}
</script>

<style>

</style>