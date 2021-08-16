<template>
  <amplify-authenticator>
    <div v-if="authState === 'signedin' && user">
      My App, {{ user.username }} !!!
      <amplify-sign-out></amplify-sign-out>
    </div>
  </amplify-authenticator>
</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import awsconfig from './awsconfig';
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
Amplify.configure(awsconfig);

export default {
  name: "CognitoLogin",
  created() {
    this.unsubscribeAuth = onAuthUIStateChange(
        (authState, authData) => { this.authState = authState; this.user = authData; })
  },
  data() {
    return {
      user: undefined, authState: undefined, unsubscribeAuth: undefined
    }
  },
  beforeUnmount() {
    this.unsubscribeAuth();
  }
}
</script>

<style scoped>

</style>