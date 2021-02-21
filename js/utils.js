function getMyHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    let jwtString = `Bearer ${user.jwt}`;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("MyAuthorization", jwtString);

    return myHeaders;
}