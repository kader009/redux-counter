// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const Logger = (_state : any) => (next : any) => (action : any) => {
  next(action);
  
};

export default Logger;
