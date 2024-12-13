module.exports = (storeMetadata) => {
  return (req, res) => {
    const { paymentMetadataId } = req.params;
    const { updateToken } = req.query;

    if (!updateToken) {
      return res.status(400).send({ error: "Invalid update token" });
    }

    const deleted = storeMetadata.delete(paymentMetadataId);

    if (!deleted) {
      return res.status(404).send({ error: "Payment metadata not found" });
    }

    res.status(200).send({ message: "Payment metadata deleted successfully" });
  };
};