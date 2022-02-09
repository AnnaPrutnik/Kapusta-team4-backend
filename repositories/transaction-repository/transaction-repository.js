import Transaction from '../../models/transaction-model/transaction-model';

const getTransactionById = async (id) => {
  const result = await Transaction.findById(id)
  return result;
}

const addTransaction = async (body) => {
  const result = await Transaction.create(body)
  return result;
}

const removeTransaction = async (transactionId) => {
  const result = await Transaction.findOneAndRemove({_id: transactionId})
  return result
}

export default {getTransactionById, addTransaction, removeTransaction};