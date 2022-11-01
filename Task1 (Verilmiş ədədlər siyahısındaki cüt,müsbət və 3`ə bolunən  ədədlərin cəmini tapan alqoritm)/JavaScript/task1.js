let ededler = [-21, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 , 22, 24, 26, 28, 30] ;
let count=0 ;

for (let i=0; i<=ededler.Length; i++) 
{
   if (ededler[i] > 0 && ededler[i] % 6 == 0)
    {
        console.log(ededler[i]);
        count += ededler[i];
    }

}
console.log("Cem:", count)
