const defObj = {
    "columns": { '1': [3, 2, 1], '2': [], '3': [] }
};

export default class solver {
    constructor(obj = defObj) {
        this.n = obj.columns["1"].length;
        this.from_rod = '1';
        this.to_rod = '3';
        this.aux_rod = '2';
        this.obj = obj.columns;
    }
    solve() {
        return solve(this.n, this.from_rod, this.to_rod, this.aux_rod, this.obj);
    }
}
let moves = 0;
function solve(n, from_rod, to_rod, aux_rod, obj) {
    moves++;
    if (n == 0) {
        return obj;
    }
    solve(n - 1, from_rod, aux_rod, to_rod, obj);

    obj[from_rod].pop();
    obj[to_rod].push(n);

    solve(n - 1, aux_rod, to_rod, from_rod, obj);
    console.log(moves);
}
