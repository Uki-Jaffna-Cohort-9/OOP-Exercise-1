class Bank {
    constructor() {
        this._accounts = [];
    }

    addAccount(account) {
        this._accounts.push(account);
    }

    getTotal() {
        let total = 0;
        for (let account of this._accounts) {
            total += account.getBalance();
        }
        return total;
    }
}