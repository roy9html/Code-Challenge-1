function estimateTransactionFee(amountToSend) {
    const percentFee = 0.015 * amountToSend;
    const fee = Math.min(Math.max(percentFee, 10), 70);
    const total = amountToSend + fee;

    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${total}\n`);
    console.log(`Send Money Securely!`);
}

const amountInput = prompt("Unatuma Ngapi? (KES):");
estimateTransactionFee(Number(amountInput));