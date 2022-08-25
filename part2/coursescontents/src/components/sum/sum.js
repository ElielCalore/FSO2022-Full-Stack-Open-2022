export function Sum({ sum }) {
  let numbers = 0;

  for (let i = 0; i < sum.parts.length; i++) {
    numbers = numbers + sum.parts[i].exercises;
  }

  /*
  const numeros = [10, 2, 30, 40, 50, 60, 70, 80, 90, 100];

  const suma = numeros.reduce((accumulator, currentValue) => {
    accumulator += currentValue;
    return accumulator;
  }, 0);
  console.log(suma);
*/
  return (
    <div>
      <li>
        <strong>total of {numbers} exercises</strong>
      </li>
    </div>
  );
}
