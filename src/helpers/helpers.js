export const generationNumber = () => {
    return Math.floor(Math.random() * 101);
  };


export const isEven = (n) =>{
    if(n % 2 === 0){
        return true;
    }

    return false;
}


