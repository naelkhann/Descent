const GENERATOR = [];
for(let i = 1; i < 500001; i++){
  GENERATOR.push(i);
}

export const generateId = () => GENERATOR.shift();
