let params = new URL('localhost:3000/auth/changepassword?id=612c3325eabec10f165743f5&usertype=talent');
params = params.searchParams;
console.log(params);
const id = params.get('id');
console.log(id);
const userType = params.get('usertype');
console.log(userType);