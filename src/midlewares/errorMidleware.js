function errorMiddleware(err, req, res) {
  res.status(500);

  res.json({ error: 'Something went wrong.' });

  console.error(err);
}

module.exports = errorMiddleware;
