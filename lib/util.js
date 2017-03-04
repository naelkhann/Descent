const GENERATOR = [];
for(let i = 1; i < 50000; i++){
  GENERATOR.push(i);
}

export const generateId = () => GENERATOR.shift();
