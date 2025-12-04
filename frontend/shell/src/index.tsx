import 'piral/polyfills';
import { renderInstance } from 'piral';
import { layout, errors } from './layout';

renderInstance({
  layout,
  errors,
  requestPilets() {
    return fetch('http://localhost:8080/pilets.json')
      .then((res) => res.json())
      .then((res) => res.items)
      .catch(() => []);
  },
});
