function prime(n) {
    if (n < 2) {
        console.log("not prime");
        return;
    }
    if (n === 2 || n === 3 || n === 5 || n === 7) {
        console.log("prime");
        return;
    }
    if (n % 2 === 0 || n % 3 === 0 || n % 5 === 0 || n % 7 === 0) {
        console.log("not prime");
        return;
    }
    for (let i = 11; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            console.log("not prime");
            return;
        }
    }
    console.log("prime");
}
prime(421376523487);
prime(34672135);
prime(762556462);
prime(11);