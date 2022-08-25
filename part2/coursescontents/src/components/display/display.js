import { Sum } from "../sum/sum";

export function Display({ description }) {
  return (
    <div>
      {description.map((currentElement, i) => {
        return (
          <div key={currentElement.id}>
            <ol>
              <h1>{currentElement.name}</h1>
            </ol>
            <ul>
              {currentElement.parts.map((currentParts) => {
                return (
                  <div key={currentParts.id}>
                    <li>
                      {currentParts.name}
                      {currentParts.exercises}
                    </li>
                  </div>
                );
              })}
            </ul>

            <Sum sum={currentElement} index={i} />
          </div>
        );
      })}
    </div>
  );
}
