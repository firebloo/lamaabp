<template>
<!--  <amplify-authenticator>-->
<!--    <div v-if="authState === 'signedin' && user">-->
<!--      My App, {{ user.username }} !!!-->
<!--      <amplify-sign-out></amplify-sign-out>-->
<!--    </div>-->
<!--  </amplify-authenticator>-->

  <amplify-authenticator :federated="federatedIds">
    <div v-if="authState === 'signedin' && user">
      <div>Hello, {{user.username}}</div>
    </div>
    <amplify-sign-out></amplify-sign-out>
  </amplify-authenticator>
</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import awsconfig from './awsconfig';
import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify';
import '@aws-amplify/ui-vue';
Amplify.configure(awsconfig);
Auth.federatedSignIn({provider: 'SAML'});

export default {
  name: "CognitoLogin",
  created() {
    this.unsubscribeAuth = onAuthUIStateChange(
        (authState, authData) => { this.authState = authState; this.user = authData; })
  },
  mounted() {
    Auth.currentSession()
    .then(data => {
        let idToken = data.getIdToken();
        console.log("login")
        console.log(idToken);
        console.dir(idToken);
        let email = idToken.payload.email;
        console.log(email);
    })
    .catch(err => console.log(err));
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