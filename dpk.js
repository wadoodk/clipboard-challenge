const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event) {
    if (event.partitionKey) {
      //check partitionKey if not typeof string. then convert to stringify. otherwise event.partitionKey
      candidate = typeof event.partitionKey !== 'string' ?
        JSON.stringify(event.partitionKey) :
        event.partitionKey;
    } else {
      //converting event object to JSON Stringify
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

  // check if partionKey length is greater then MAX_PARTITION_KEY_LENGTH
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }



  return candidate;
};