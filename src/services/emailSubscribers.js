require('dotenv').config();

const addEmail = (doc) => {
  const url = `${process.env.REST_API_LOCATION}emailSubscriber`;
  fetch(url, {
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
