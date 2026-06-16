import { initFederation } from '@angular-architects/native-federation';

initFederation({
  products: 'http://localhost:4201/remoteEntry.json',
  users: 'http://localhost:4202/remoteEntry.json',
})
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
