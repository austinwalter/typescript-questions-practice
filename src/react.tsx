import React, { useState } from 'react';

export const defaultList = ['one', 'two', 'three'];

enum SORT {
  NONE = 'None',
  ASC = 'Asc',
  DESC = 'Desc',
}
export const SORT_CYCLE = [SORT.NONE, SORT.ASC, SORT.DESC];

export const List = () => {
  const [list, setList] = useState<string[]>(defaultList);
  const [value, setValue] = useState('');
  const [currentSort, setCurrentSort] = useState<SORT>(SORT_CYCLE[0]);

  // TODO: complete the functionality of this component to accomplish the following:
  // (also covered by the unit tests)

  // 1. Typing into the input field then clicking the `Add` creates a new item on
  // the end of the list with the value as provided by the input field

  // 2. After clicking `Add` the input box is reset to empty

  // 3. Clicking an `<li>` removes that item from the list

  // 4. The `Sort` button cycles through the options in `SORT_CYCLE`. Must handle
  // for international characters, and `NONE` keeps the original ordering.

  // 5. See the skipped test for a bonus problem related to debouncing

  return (
    <div className="App">
      <input type="text" value={value} role="input" /> <button>Add</button>
      <button>Sort ({currentSort})</button>
      <hr />
      <ul data-testid="list">
        {list.length > 0 &&
          list.map((item) => {
            return <li key={item}>{item}</li>;
          })}
      </ul>
    </div>
  );
};
