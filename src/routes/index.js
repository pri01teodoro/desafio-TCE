import pessoasRoutes from './pessoasRoutes.js';

const routes = (app) => {

  app.use(
    pessoasRoutes
  );
}

export default routes;