<template>
    <div class="section container" >
        <div class="field">
          <div class="control">
            <input class="input" type="text" placeholder="First name" v-model="firstname">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input" type="text" placeholder="Last name" v-model="lastname">
          </div>
        </div>
        
        <div class="field">
          <div class="control">
            <button class="button" @click="sayHello" :disabled="! fullname.value" >Greet me!</button>
          </div>
          <p class="help" v-text="fullname.value ? fullname : 'Enter you name to greet yourself'" ></p>
        </div>
    </div>
</template>

<script>

    import { value, computed } from 'vue-function-api'

    export default {

        setup() {

            const firstname = value('')
            const lastname = value('')

            const fullname = computed(() => `${firstname.value} ${lastname.value}`)

            return {
                firstname,
                lastname,
                fullname,
                sayHello() {
                    alert(`Hello ${fullname.value}!`)
                }
            }
        }
    }
</script>