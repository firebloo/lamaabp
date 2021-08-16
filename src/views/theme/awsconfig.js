export default {
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_8PmOLN8mA",
    userPoolWebClientId: "48q14q979ohgjg1kmt172uab2b",
    oauth: {
        "domain": "lamaabp.auth.us-east-1.amazoncognito.com/",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "https://master.d1o62audtbihat.amplifyapp.com/CognitoLogin",
        "redirectSignOut": "https://master.d1o62audtbihat.amplifyapp.com/CognitoLogin",
        "responseType": "code"
    },
  }
}