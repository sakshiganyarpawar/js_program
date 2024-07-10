const nums=[23,44,3,15,36,51,7]
let sum=0;
console.log(`array:${nums}`)
for(let i=0;i<=6;i++){
    if(nums[i]%2==1){
        sum+=nums[i];
    }
}
console.log(`The sum of array is:${sum}`);