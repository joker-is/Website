require('dotenv').config();

const addEmail = (doc) => {
  const url = 'https://joker-backend-staging.herokuapp.com/api/';

  fetch(process.env.REST_API_LOCATION + process.env.CREATE_EMAIL_SUBSCRIBER, {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default {
  addEmail,
};
