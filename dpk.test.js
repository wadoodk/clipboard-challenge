const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '10'  when event partition key is of value 10", () => {
    let event = {
      partitionKey: '10',
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("10");
  });

  it("Returns the literal of length 128 when event partition key is of length 260", () => {
    let event = {
      partitionKey: '6QT0hHYW0hAAaPEjlIn1MqwulEuq5z1dwlfvXEpQpsqe0iZD8RsTbHi0dfAiYvEWnnok4Wo0RMWywopeUExmcV8nr6z9lK3qhWrTxfcZpM6RBNvy3wU23KQsHtof80fB49S3TfNoyYtyqGKRAuFXhVvI99QbaJ32J7E4V4N2NJ1MS1asKUEWg5aGt5BwWE5hLunlMjD8YzO6kYUxR7KQAq3Jz4ciEvMpFIYvZ4ybZTzI1K3rDY85PErKkXd4scLYHqOp',
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey.length).toBe(128);
  });

  it("Returns the literal of length 128 when given no input", () => {
    let event = {
      id: '12',
      name: 'John doe',
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey.length).toBe(128);
  });
});
