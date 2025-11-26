function status(request, response) {
  response.status(200).json({ chave: "Endpoint filé" });
}

export default status;
