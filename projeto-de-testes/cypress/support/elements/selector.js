export const withId = (id) => { return `[class^="${id}"]`}
export const placeholder = (id) => {return `[placeholder^="${id}"]`}
export const withIdAndSelector = (id, selector) => { return `[id^="${id}"] ${selector},[data-testid^="${id}"] ${selector},[data-cy="${id}"] ${selector}` }