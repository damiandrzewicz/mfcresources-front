<template>

    <div>
        <v-dialog v-model="show" width="500">
            <v-card width="500" >
                <v-card-title>Subversion Login</v-card-title>
                <v-card-text>
                    Please provide credentials
                    <v-form ref="formRef" v-model="valid">
                        <v-text-field label="User" required v-model="user" :rules="userRules"></v-text-field>
                        <v-text-field label="Password" required type="password" v-model="password"></v-text-field>
                        <v-btn @click="onOk">Ok</v-btn>
                        <v-btn @click="onCancel">Cancel</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
    
</template>

<script>
import { ref } from '@vue/composition-api'
import store from '@/store/index'

export default {
    name: 'LoginModalDialog',
    props: [],
    setup(){
        console.log('steup')

        const user = ref(null)
        const password = ref(null)
        

        const valid = ref(true)

        const userRules = ref([
            (value) => !!value || "Required."
        ])


        const formRef = ref(null)

        const onOk = () => {
            if(!formRef.value.validate()){
                console.log('validation failed')
            }
        }

        const onCancel = () => {
            store.commit("auth/setShowAuthDialog", false)
        }

 
        return { 
            user, password, valid, userRules,
             formRef,
            onOk, onCancel
        }
    },
    computed: {
        show: {
            // getter
            get() {
                return store.getters['auth/getShowAuthDialog']
            },
            // setter
            set(val) {
                store.commit("auth/setShowAuthDialog", val)
            }
        }
    }

}
</script>

<style>

</style>