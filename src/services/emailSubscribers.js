require('dotenv').config();

const addEmail = (telephone, order) => {
  const url = process.env.BE_CONN;

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(order),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default {
  addEmail,
};
