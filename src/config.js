export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_wATkKtD0Gytrd3pdkv1tiEWR",
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-uploads-26b"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://fso6bljyf3.execute-api.eu-west-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_QMBvI6aZS",
    APP_CLIENT_ID: "3rlvqjffnqf6cu31j8i4qnar8p",
    IDENTITY_POOL_ID: "eu-west-1:0a136176-249a-45c8-ac25-e3460c385845"
  }
};