import orderByProps from '../main';

test('test func', () => {
  expect(orderByProps).toBeInstanceOf(Function);
});

test('test func', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  expect(orderByProps(obj, ['name', 'defence']))
    .toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'defence', value: 40 },
      { key: 'attack', value: 80 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
    ]);
});
