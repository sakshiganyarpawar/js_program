const nums=[23,45,78,459,90]
console.log(`Array:${nums}`);
 let large_no=nums[0];
for(let i=0;i<=4;i++){
    if(nums[i]>=large_no){
         large_no=nums[i];
    }
}
console.log(`The largest number is ${large_no}`);