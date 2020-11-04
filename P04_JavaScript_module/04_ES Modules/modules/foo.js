export const name = {name:"hhh"};
const age = 18;
export {
  age
}
const sex = "男"
export {
  sex as mSex
}

setTimeout(() => {
  console.log(name.name);
},1000)