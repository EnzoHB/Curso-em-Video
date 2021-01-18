function getFatorial(x) {
    let fatorial = 1
    for (x; x > 1; x--) fatorial *= x
    return fatorial
}
console.log(getRecursiveFatorial(5))

function getRecursiveFatorial(n) {
    if (n == 1) return 1
    else return n * (getRecursiveFatorial(n-1))
}
/*
    fatorial = x - 1
    if (fatorial == 0) return x
    x *= getRecursiveFatorial(fatorial)
    return x
*/ 