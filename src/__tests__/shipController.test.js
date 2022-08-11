import { ShipFactory } from "../controllers/shipController"
import { createRoot } from 'react-dom/client';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(div);
});

it('can initialize a ship', () => {
  const ship = ShipFactory(1)
  expect(typeof(ship)).toBe("object")
})

it('doesnt initialize a ship', () => {
  let ship
  expect(typeof(ship)).toBe("undefined")
})

it('initializes a ship and does not destroy it', () => {
  const ship = ShipFactory(4)
  ship.hit(0)
  ship.hit(2)
  ship.hit(3)

  expect(ship.isDestroyed()).toBe(false)
})

it('initializes a ship and destroys it', () => {
  const ship = ShipFactory(4)
  ship.hit(0)
  ship.hit(1)
  ship.hit(2)
  ship.hit(3)

  expect(ship.isDestroyed()).toBe(true)
})

// checks double hit
it('initializes a ship and hits same area twice', () => {
  const ship = ShipFactory(4)
  ship.hit(1)

  expect(() => {
    ship.hit(1)
  }).toThrow()
})

// checks out of bounds
it('initializes a ship and hits out of bounds (negative)', () => {
  const ship = ShipFactory(4)

  expect(() => {
    ship.hit(-1)
  }).toThrow()
})

it('initializes a ship and hits out of bounds (positive)', () => {
  const ship = ShipFactory(4)

  expect(() => {
    ship.hit(4)
  }).toThrow()
})