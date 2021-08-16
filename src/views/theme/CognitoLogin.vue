<template>
  <amplify-authenticator>
    <div>
      My App
      <amplify-sign-out></amplify-sign-out>
    </div>
  </amplify-authenticator>
</template>

<script>
import { Auth } from 'aws-amplify';
import '@aws-amplify/ui-vue';
export default {
  name: "CognitoLogin",
  created () {           // 초기화 함수를 정의 한다.
    Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => console.log(user))
    .catch(err => console.log(err));
    console.log("aaaa");

    console.log(Auth.currentUserInfo())
  },
  mounted () {
   Auth.currentUserInfo()
      .then((res) => {
        console.log('Here are the current user info! =>', res);
      })
      .catch((err) => {
        console.log('Current user info failed to fetch', err);
      });
  }
}
</script>

<style scoped>

</style>