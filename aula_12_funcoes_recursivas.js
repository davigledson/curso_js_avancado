//recursiva - uma  função que se chama de volta
//o motor tem um limite para funções recursiva 
function recursiva(max){
    if (max >=10) return;
    max++;
    console.log(max);
    recursiva(max);

}

recursiva(-10);