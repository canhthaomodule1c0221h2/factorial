let num = +prompt("nhập số" );
if (num == 0) {
    document.write("1");
}
else if (num<0){
    document.write("xin mời nhập lại");
}
else {
    let factorial = 1
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    document.write(factorial)
}