const PORT = process.env.PORT || 5005;
const server = require("./app");



server.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
