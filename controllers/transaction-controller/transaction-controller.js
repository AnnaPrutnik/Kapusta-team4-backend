const getBalance = async (req, res, next) => {
  const { _id, balance } = req.user;


  res.status(200).json({
    status: 'success',
    code: 200,
    data: { balance }
  });
};

const createTransaction = async (req, res, next) => {
  const { _id } = req.user;
  const { transactionType, description, categoryId, transactionDate } = req.body;

  res.status(201).json({
    status: 'success',
    code: 201,
    data: newTransaction,
  });
}

const removeTransaction = async (req, res, next) => {
  const { _id } = req.params;

  res.status(200).json({
    status: 'success',
    code: 200,
    message: "transaction removed" 
  });
};

export default {
  getBalance,
  createTransaction,
  removeTransaction,

}


// class TransactionController {
//   async getBalance(req, res, next) {
//     const { _id, balance } = req.user;
//   }

//   async addTransaction(req, res, next) {

//   }

//   async deleteTransaction(req, res, next) {

//   }
// }

// export default TransactionController;
