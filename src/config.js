const dev = {
  STRIPE_KEY: "pk_test_wATkKtD0Gytrd3pdkv1tiEWR",
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1tbsr45bq90sa"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://7gapay7m9h.execute-api.eu-west-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_rMHFDoaxd",
    APP_CLIENT_ID: "1a7k7aiga5d7md8h5sq35gcu2v",
    IDENTITY_POOL_ID: "eu-west-1:6e314e5d-cc39-4a2d-88e0-530cff0a0b60"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_wATkKtD0Gytrd3pdkv1tiEWR",
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1o31diouqv8ph"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://99zznqbuqd.execute-api.eu-west-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_MkR20DXF0",
    APP_CLIENT_ID: "vifunq77ssmtpr4a4lhr9s9qa",
    IDENTITY_POOL_ID: "eu-west-1:8c60cb3b-57d9-4bec-9ff7-2155e0c81c06"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
