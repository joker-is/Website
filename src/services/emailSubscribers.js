const addEmail = (doc) => {
  const url = process.env.REACT_APP_REST_API_LOCATION + process.env.REACT_APP_CREATE_EMAIL_SUBSCRIBER;
  console.log(url);
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
